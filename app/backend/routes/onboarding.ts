/**
 * Onboarding API routes configuration
 * This module provides URL builders for onboarding-related API endpoints
 */

import { getApiBaseUrl } from '../../services/api-config';

/**
 * Website crawl Server-Sent Events endpoint
 */
export const websiteCrawlEvents = {
  /**
   * Get the SSE endpoint URL for a specific website crawl
   * @param crawlId - The website crawl ID
   * @returns Full URL to the SSE endpoint
   */
  url: (crawlId: number): string => {
    const baseUrl = getApiBaseUrl();
    return `${baseUrl}/api/onboarding/website-crawl/${crawlId}/events`;
  }
};
