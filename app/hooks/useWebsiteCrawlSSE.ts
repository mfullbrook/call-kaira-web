import { useEffect, useRef, useCallback } from 'react';
import { websiteCrawlEvents } from '../backend/routes/onboarding';

export interface CrawlStageUpdate {
  crawl_id: number;
  stage: string;
  progress: number;
  message: string;
  data?: Record<string, any>;
  timestamp: string;
}

export interface CrawlProgressUpdate {
  crawl_id: number;
  progress: number;
  message?: string;
  timestamp: string;
}

export interface CrawlConnectionData {
  crawl_id: number;
  message: string;
}

export interface CrawlCloseData {
  crawl_id: number;
  reason: string;
}

interface UseWebsiteCrawlSSEOptions {
  websiteCrawlId: number;
  onStageUpdate?: (data: CrawlStageUpdate) => void;
  onProgressUpdate?: (data: CrawlProgressUpdate) => void;
  onConnected?: (data: CrawlConnectionData) => void;
  onClosed?: (data: CrawlCloseData) => void;
  onError?: (error: Event) => void;
  enabled?: boolean;
}

interface UseWebsiteCrawlSSEReturn {
  isConnected: boolean;
  error: string | null;
  reconnect: () => void;
  disconnect: () => void;
}

export const useWebsiteCrawlSSE = ({
  websiteCrawlId,
  onStageUpdate,
  onProgressUpdate,
  onConnected,
  onClosed,
  onError,
  enabled = true,
}: UseWebsiteCrawlSSEOptions): UseWebsiteCrawlSSEReturn => {
  const eventSourceRef = useRef<EventSource | null>(null);
  const isConnectedRef = useRef(false);
  const errorRef = useRef<string | null>(null);

  const disconnect = useCallback(() => {
    if (eventSourceRef.current) {
      eventSourceRef.current.close();
      eventSourceRef.current = null;
      isConnectedRef.current = false;
    }
  }, []);

  const connect = useCallback(() => {
    if (!enabled || !websiteCrawlId) {
      return;
    }

    // Close existing connection
    disconnect();

    try {
      const url = websiteCrawlEvents.url(websiteCrawlId);
      const eventSource = new EventSource(url);
      eventSourceRef.current = eventSource;
      errorRef.current = null;

      // Handle connection established
      eventSource.addEventListener('connected', (event) => {
        isConnectedRef.current = true;
        if (onConnected) {
          try {
            const data: CrawlConnectionData = JSON.parse(event.data);
            onConnected(data);
          } catch (e) {
            console.error('Failed to parse connected event data:', e);
          }
        }
      });

      // Handle stage updates
      eventSource.addEventListener('stage-updated', (event) => {
        if (onStageUpdate) {
          try {
            const data: CrawlStageUpdate = JSON.parse(event.data);
            onStageUpdate(data);
          } catch (e) {
            console.error('Failed to parse stage-updated event data:', e);
          }
        }
      });

      // Handle progress updates
      eventSource.addEventListener('progress-updated', (event) => {
        if (onProgressUpdate) {
          try {
            const data: CrawlProgressUpdate = JSON.parse(event.data);
            onProgressUpdate(data);
          } catch (e) {
            console.error('Failed to parse progress-updated event data:', e);
          }
        }
      });

      // Handle connection close
      eventSource.addEventListener('close', (event) => {
        isConnectedRef.current = false;
        if (onClosed) {
          try {
            const data: CrawlCloseData = JSON.parse(event.data);
            onClosed(data);
          } catch (e) {
            console.error('Failed to parse close event data:', e);
          }
        }
        disconnect();
      });

      // Handle connection errors
      eventSource.onerror = (event) => {
        isConnectedRef.current = false;
        errorRef.current = 'Connection error occurred';
        if (onError) {
          onError(event);
        }
        console.error('SSE connection error:', event);
      };

    } catch (error) {
      errorRef.current = error instanceof Error ? error.message : 'Failed to establish connection';
      console.error('Failed to create SSE connection:', error);
    }
  }, [websiteCrawlId, enabled, onStageUpdate, onProgressUpdate, onConnected, onClosed, onError, disconnect]);

  const reconnect = useCallback(() => {
    connect();
  }, [connect]);

  useEffect(() => {
    if (enabled && websiteCrawlId) {
      connect();
    }

    return () => {
      disconnect();
    };
  }, [enabled, websiteCrawlId, connect, disconnect]);

  return {
    isConnected: isConnectedRef.current,
    error: errorRef.current,
    reconnect,
    disconnect,
  };
};
