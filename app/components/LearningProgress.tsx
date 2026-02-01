import { useEffect, useState } from 'react';
import { Check, Loader, AlertCircle } from 'lucide-react';
import { useWebsiteCrawlSSE, type CrawlStageUpdate } from '../hooks/useWebsiteCrawlSSE';

interface ProgressItem {
  id: string;
  label: string;
  completed: boolean;
  stage?: string; // Map to SSE stage names
}

interface LearningProgressProps {
  items: ProgressItem[];
  onItemComplete: (itemId: string) => void;
  onAllComplete?: () => void;
  onError?: (error: string) => void;
  startFromIndex?: number;
  message?: string;
  websiteCrawlId?: number; // Optional - if provided, will use SSE
  mockMode?: boolean; // Fallback to old behavior for testing
}

// Map SSE stages to progress item stages
const STAGE_MAPPING: Record<string, string> = {
  'started': 'fetching',
  'fetching_sitemap': 'fetching',
  'sitemap_fetched': 'scraping',
  'scraping_pages': 'scraping',
  'extracting_data': 'extracting',
  'configuring_assistant': 'configuring',
  'finalizing_profile': 'finalizing',
  'completed': 'completed',
  'failed': 'failed'
};

const LearningProgress: React.FC<LearningProgressProps> = ({
  items,
  onItemComplete,
  onAllComplete,
  onError,
  startFromIndex = 0,
  message = "Kaira is learning about your business",
  websiteCrawlId,
  mockMode = false
}) => {
  const [currentMessage, setCurrentMessage] = useState(message);
  const [hasError, setHasError] = useState(false);

  // SSE connection for real-time updates
  const { error: sseError } = useWebsiteCrawlSSE({
    websiteCrawlId: websiteCrawlId || 0,
    enabled: !mockMode && !!websiteCrawlId,
    onStageUpdate: (data: CrawlStageUpdate) => {
      setCurrentMessage(data.message);

      // Map SSE stage to our progress items
      const mappedStage = STAGE_MAPPING[data.stage];
      if (mappedStage) {
        // Find the item that corresponds to this stage
        const item = items.find(item => item.stage === mappedStage || item.id === mappedStage);
        if (item && !item.completed) {
          onItemComplete(item.id);
        }
      }

      // Check if crawl is completed
      if (data.stage === 'completed' && onAllComplete) {
        setTimeout(() => {
          onAllComplete();
        }, 500);
      }
    },
    onError: () => {
      setHasError(true);
      const errorMessage = 'Connection error occurred. Falling back to mock mode.';
      setCurrentMessage(errorMessage);
      if (onError) {
        onError(errorMessage);
      }
    },
    onClosed: (data) => {
      if (data.reason.includes('timeout') || data.reason.includes('error')) {
        setHasError(true);
        const errorMessage = `Connection closed: ${data.reason}`;
        setCurrentMessage(errorMessage);
        if (onError) {
          onError(errorMessage);
        }
      }
    }
  });

  // Fallback to mock behavior when no SSE or in mock mode
  useEffect(() => {
    if (mockMode || !websiteCrawlId || hasError || sseError) {
      const incompleteItems = items.slice(startFromIndex).filter(item => !item.completed);

      if (incompleteItems.length === 0) {
        if (onAllComplete) {
          setTimeout(() => {
            onAllComplete();
          }, 500);
        }
        return;
      }

      // Complete items sequentially starting from startFromIndex
      incompleteItems.forEach((item, index) => {
        setTimeout(() => {
          onItemComplete(item.id);

          // Check if this was the last item
          if (index === incompleteItems.length - 1 && onAllComplete) {
            setTimeout(() => {
              onAllComplete();
            }, 500);
          }
        }, (index + 1) * 1000);
      });
    }
  }, [items, onItemComplete, onAllComplete, startFromIndex, mockMode, websiteCrawlId, hasError, sseError]);

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h3 className="font-semibold text-xl text-gray-900 mb-8">
          {currentMessage}
        </h3>
        {hasError && (
          <div className="flex items-center justify-center space-x-2 text-yellow-600 mb-4">
            <AlertCircle className="h-4 w-4" />
            <span className="text-sm">Using fallback mode</span>
          </div>
        )}
      </div>

      <div className="space-y-4">
        {items.map((item) => (
          <div key={item.id} className="flex items-center space-x-4">
            <div className="flex-shrink-0">
              {item.completed ? (
                <div className="w-6 h-6 bg-valencia-500 rounded-full flex items-center justify-center">
                  <Check className="h-4 w-4 text-white" />
                </div>
              ) : (
                <div className="w-6 h-6 border-2 border-valencia-500 rounded-full flex items-center justify-center">
                  <Loader className="h-4 w-4 text-valencia-500 animate-spin" />
                </div>
              )}
            </div>
            <span className={`text-lg transition-colors duration-300 ${
              item.completed ? 'text-gray-900' : 'text-gray-400'
            }`}>
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LearningProgress;
