/**
 * Authentication utilities for the API service
 */

import { createClient } from '../app-client/client';

// Token storage key
const TOKEN_KEY = 'api_auth_token';

// Create a client instance with authentication
export function createAuthenticatedClient(token?: string) {
  const authToken = token || getStoredToken();

  if (!authToken) {
    throw new Error('No authentication token available');
  }

  return createClient({
    baseUrl: typeof window !== 'undefined'
      ? `${window.location.protocol}//${window.location.hostname}:8000`
      : 'http://localhost:8000',
    auth: authToken
  });
}

// Token management
export function setAuthToken(token: string): void {
  if (typeof window !== 'undefined') {
    localStorage.setItem(TOKEN_KEY, token);
  }
}

export function getStoredToken(): string | null {
  if (typeof window !== 'undefined') {
    return localStorage.getItem(TOKEN_KEY);
  }
  return null;
}

export function clearAuthToken(): void {
  if (typeof window !== 'undefined') {
    localStorage.removeItem(TOKEN_KEY);
  }
}

export function isAuthenticated(): boolean {
  return getStoredToken() !== null;
}

// Authentication interceptor for automatic token refresh
export function createAuthInterceptor() {
  return {
    request: async (request: Request, options: any) => {
      const token = getStoredToken();
      if (token) {
        request.headers.set('Authorization', `Bearer ${token}`);
      }
      return request;
    },
    response: async (response: Response, request: Request, options: any) => {
      // Handle 401 responses by clearing the token
      if (response.status === 401) {
        clearAuthToken();
        // Optionally redirect to login page
        if (typeof window !== 'undefined') {
          window.location.href = '/login';
        }
      }
      return response;
    },
    error: async (error: any, response: Response, request: Request, options: any) => {
      // Handle authentication errors
      if (response?.status === 401) {
        clearAuthToken();
        throw new Error('Authentication failed. Please log in again.');
      }
      return error;
    }
  };
}

// Login helper
export async function loginWithToken(token: string): Promise<boolean> {
  try {
    // Test the token by making a simple API call
    const client = createAuthenticatedClient(token);
    const response = await client.get({
      url: '/app/assistants',
      security: [{ scheme: 'bearer', type: 'http' }]
    });

    if (response.error) {
      return false;
    }

    // Token is valid, store it
    setAuthToken(token);
    return true;
  } catch (error) {
    console.error('Login failed:', error);
    return false;
  }
}

// Logout helper
export function logout(): void {
  clearAuthToken();
  // Optionally redirect to login page
  if (typeof window !== 'undefined') {
    window.location.href = '/login';
  }
}

// Token refresh helper (if your API supports it)
export async function refreshToken(): Promise<string | null> {
  try {
    // This would depend on your API's refresh token endpoint
    // For now, we'll just return the stored token
    return getStoredToken();
  } catch (error) {
    console.error('Token refresh failed:', error);
    return null;
  }
}

// Authentication status checker
export async function checkAuthStatus(): Promise<{
  isAuthenticated: boolean;
  token: string | null;
  isValid: boolean;
}> {
  const token = getStoredToken();
  const isAuthenticated = token !== null;

  if (!isAuthenticated) {
    return { isAuthenticated: false, token: null, isValid: false };
  }

  try {
    // Test the token
    const client = createAuthenticatedClient(token);
    const response = await client.get({
      url: '/app/assistants',
      security: [{ scheme: 'bearer', type: 'http' }]
    });

    return {
      isAuthenticated: true,
      token,
      isValid: !response.error
    };
  } catch (error) {
    return {
      isAuthenticated: true,
      token,
      isValid: false
    };
  }
}
