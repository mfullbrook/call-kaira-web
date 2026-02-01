import { client } from '../app-client';

/**
 * Configure the API client with the appropriate base URL for the current environment
 * This should be called early in the application lifecycle (e.g., in root loader)
 */
export function configureApiClient(apiBaseUrl: string): void {
  client.setConfig({
    baseUrl: apiBaseUrl
  });
}

/**
 * Get the current API base URL configuration
 */
export function getApiBaseUrl(): string {
  const config = client.getConfig();
  return config.baseUrl || '';
}
