import {
  Endpoints,
  GooglePlaces,
  Twilio,
  VoiceServerApi,
  type Options
} from '../app-client/sdk.gen';
import type {
  GetPaginatedListOfCallLogsWithFilteringData,
  GetDetailedCallLogDataData,
  UpdateReadunreadStatusOfACallLogData,
  UpdateArchiveStatusOfACallLogData,
  ListAllAssistantsForTheAuthenticatedTenantData,
  CreateNewAssistantWithInitialConfigurationData,
  DeleteAssistantData,
  ShowSpecificAssistantData,
  UpdateAssistantnameOnlyData,
  ListAllConfigurationsForAnAssistantWithHistoryData,
  DeleteDraftConfigurationData,
  ShowSpecificConfigurationData,
  UpdateSpecificConfigurationifItsADraftData,
  DiscardDraftChangesData,
  GetDraftConfigurationcreatesOneIfNeededData,
  UpdateDraftConfigurationData,
  PublishDraftConfigurationData,
  RevertToPreviousConfigurationData,
  GetCurrentStatusliveDraftInfoData,
  GetConfigurationHistoryData,
  SearchByTextData,
  ShowPlaceDetailsData,
  ListAvailablePhoneNumbersData,
  ProvisionAndAssignNumberData,
  CreateANewCallLogData,
  UpdateCallLogStatusData
} from '../app-client/types.gen';
import { createAuthenticatedClient, getStoredToken } from './auth';

// Error handling utility
export class ApiError extends Error {
  constructor(
    message: string,
    public status?: number,
    public response?: any
  ) {
    super(message);
    this.name = 'ApiError';
  }
}

// Helper function to handle API responses
async function handleApiCall<T>(apiCall: Promise<any>): Promise<T> {
  try {
    const result = await apiCall;

    if (result.error) {
      throw new ApiError(
        result.error.message || 'API request failed',
        result.error.status || result.status,
        result.error
      );
    }

    return result.data;
  } catch (error: any) {
    if (error instanceof ApiError) {
      throw error;
    }

    // Handle fetch errors
    if (error.response) {
      throw new ApiError(
        error.response.data?.message || error.message || 'API request failed',
        error.response.status,
        error.response.data
      );
    }

    // Handle network errors or other unexpected errors
    throw new ApiError(
      error instanceof Error ? error.message : 'Unknown error occurred',
      undefined,
      error
    );
  }
}

// Call Logs API
export const callLogsApi = {
  /**
   * Get paginated list of call logs with filtering
   */
  async getCallLogs(options?: {
    page?: number;
    per_page?: number;
    read_status?: string | null;
    search?: string | null;
  }): Promise<any> {
    return handleApiCall(
      Endpoints.getPaginatedListOfCallLogsWithFiltering({
        body: options || {}
      })
    );
  },

  /**
   * Get detailed call log data
   */
  async getCallLog(callLogId: number): Promise<any> {
    return handleApiCall(
      Endpoints.getDetailedCallLogData({
        path: { callLog_id: callLogId }
      })
    );
  },

  /**
   * Update read/unread status of a call log
   */
  async updateReadStatus(callLogId: number, readStatus: string): Promise<any> {
    return handleApiCall(
      Endpoints.updateReadunreadStatusOfACallLog({
        path: { callLog_id: callLogId },
        body: { read_status: readStatus }
      })
    );
  },

  /**
   * Update archive status of a call log
   */
  async updateArchiveStatus(callLogId: number): Promise<any> {
    return handleApiCall(
      Endpoints.updateArchiveStatusOfACallLog({
        path: { callLog_id: callLogId }
      })
    );
  }
};

// Assistants API
export const assistantsApi = {
  /**
   * List all assistants for the authenticated tenant
   */
  async getAssistants(): Promise<any> {
    return handleApiCall(
      Endpoints.listAllAssistantsForTheAuthenticatedTenant()
    );
  },

  /**
   * Create new assistant with initial configuration
   */
  async createAssistant(request: {
    name: string;
    phone_number_id?: string;
    business_profile_id: string;
    ai_model_config: Record<string, unknown>;
    call_handling_config: Record<string, unknown>;
  }): Promise<any> {
    return handleApiCall(
      Endpoints.createNewAssistantWithInitialConfiguration({
        body: request
      })
    );
  },

  /**
   * Delete assistant
   */
  async deleteAssistant(assistantId: number): Promise<any> {
    return handleApiCall(
      Endpoints.deleteAssistant({
        path: { id: assistantId }
      })
    );
  },

  /**
   * Get specific assistant
   */
  async getAssistant(assistantId: number): Promise<any> {
    return handleApiCall(
      Endpoints.showSpecificAssistant({
        path: { id: assistantId }
      })
    );
  },

  /**
   * Update assistant (name only)
   */
  async updateAssistant(assistantId: number, request: {
    name: string;
    is_active?: boolean;
  }): Promise<any> {
    return handleApiCall(
      Endpoints.updateAssistantnameOnly({
        path: { id: assistantId },
        body: request
      })
    );
  }
};

// Assistant Configurations API
export const configurationsApi = {
  /**
   * List all configurations for an assistant with history
   */
  async getConfigurations(assistantId: number): Promise<any> {
    return handleApiCall(
      Endpoints.listAllConfigurationsForAnAssistantWithHistory({
        path: { assistant_id: assistantId }
      })
    );
  },

  /**
   * Delete draft configuration
   */
  async deleteConfiguration(assistantId: number, configurationId: number): Promise<any> {
    return handleApiCall(
      Endpoints.deleteDraftConfiguration({
        path: {
          assistant_id: assistantId,
          id: configurationId
        }
      })
    );
  },

  /**
   * Get specific configuration
   */
  async getConfiguration(assistantId: number, configurationId: number): Promise<any> {
    return handleApiCall(
      Endpoints.showSpecificConfiguration({
        path: {
          assistant_id: assistantId,
          id: configurationId
        }
      })
    );
  },

  /**
   * Update specific configuration (if it's a draft)
   */
  async updateConfiguration(assistantId: number, configurationId: number, request: {
    is_active?: boolean;
    passthrough_number?: string | null;
    answering_mode?: 'all_calls' | 'unanswered_calls';
    ai_provider?: 'gemini' | 'openai';
    ai_model_config?: Record<string, unknown>;
    call_handling_config?: Record<string, unknown>;
    business_profile_id?: string;
  }): Promise<any> {
    return handleApiCall(
      Endpoints.updateSpecificConfigurationifItsADraft({
        path: {
          assistant_id: assistantId,
          id: configurationId
        },
        body: request
      })
    );
  },

  /**
   * Discard draft changes
   */
  async discardDraftChanges(assistantId: number): Promise<any> {
    return handleApiCall(
      Endpoints.discardDraftChanges({
        path: { assistant_id: assistantId }
      })
    );
  },

  /**
   * Get draft configuration (creates one if needed)
   */
  async getDraftConfiguration(assistantId: number): Promise<any> {
    return handleApiCall(
      Endpoints.getDraftConfigurationcreatesOneIfNeeded({
        path: { assistant_id: assistantId }
      })
    );
  },

  /**
   * Update draft configuration
   */
  async updateDraftConfiguration(assistantId: number, request: {
    is_active?: boolean;
    passthrough_number?: string | null;
    answering_mode?: 'all_calls' | 'unanswered_calls';
    ai_provider?: 'gemini' | 'openai';
    ai_model_config?: Record<string, unknown>;
    call_handling_config?: Record<string, unknown>;
    business_profile_id?: string;
  }): Promise<any> {
    return handleApiCall(
      Endpoints.updateDraftConfiguration({
        path: { assistant_id: assistantId },
        body: request
      })
    );
  },

  /**
   * Publish draft configuration
   */
  async publishDraftConfiguration(assistantId: number): Promise<any> {
    return handleApiCall(
      Endpoints.publishDraftConfiguration({
        path: { assistant_id: assistantId }
      })
    );
  },

  /**
   * Revert to previous configuration
   */
  async revertToPreviousConfiguration(assistantId: number): Promise<any> {
    return handleApiCall(
      Endpoints.revertToPreviousConfiguration({
        path: { assistant_id: assistantId }
      })
    );
  },

  /**
   * Get current status (live + draft info)
   */
  async getCurrentStatus(assistantId: number): Promise<any> {
    return handleApiCall(
      Endpoints.getCurrentStatusliveDraftInfo({
        path: { assistant_id: assistantId }
      })
    );
  },

  /**
   * Get configuration history
   */
  async getConfigurationHistory(assistantId: number): Promise<any> {
    return handleApiCall(
      Endpoints.getConfigurationHistory({
        path: { assistant_id: assistantId }
      })
    );
  }
};

// Google Places API
export const placesApi = {
  /**
   * Search places by text
   */
  async searchPlaces(request: {
    query: string;
    countryCode: string;
    pageSize?: number;
    pageNumber?: number;
  }): Promise<any> {
    return handleApiCall(
      GooglePlaces.searchByText({
        body: request
      })
    );
  },

  /**
   * Get place details
   */
  async getPlaceDetails(placeId: string): Promise<any> {
    return handleApiCall(
      GooglePlaces.showPlaceDetails({
        path: { id: placeId }
      })
    );
  }
};

// Twilio API
export const twilioApi = {
  /**
   * List available phone numbers
   */
  async getAvailablePhoneNumbers(): Promise<any> {
    return handleApiCall(
      Twilio.listAvailablePhoneNumbers()
    );
  },

  /**
   * Provision and assign phone number
   */
  async provisionPhoneNumber(numberSid: string): Promise<any> {
    return handleApiCall(
      Twilio.provisionAndAssignNumber({
        body: { number_sid: numberSid }
      })
    );
  }
};

// Voice Server API
export const voiceApi = {
  /**
   * Create a new call log
   */
  async createCallLog(request: {
    twilio_account_sid: string;
    twilio_call_sid: string;
    direction: string;
    from_number: string;
    to_number: string;
    status: string;
    started_at: string;
  }): Promise<any> {
    return handleApiCall(
      VoiceServerApi.createANewCallLog({
        body: request
      })
    );
  },

  /**
   * Update call log status
   */
  async updateCallLogStatus(callLogId: number, request: {
    status: string;
    ended_at: string;
  }): Promise<any> {
    return handleApiCall(
      VoiceServerApi.updateCallLogStatus({
        path: {
          callLog_id: callLogId,
          callLog: callLogId
        },
        body: request
      })
    );
  }
};

// Combined API service with all endpoints
export const api = {
  callLogs: callLogsApi,
  assistants: assistantsApi,
  configurations: configurationsApi,
  places: placesApi,
  twilio: twilioApi,
  voice: voiceApi
};

// Create an authenticated API instance
export function createAuthenticatedApi(token?: string) {
  const authToken = token || getStoredToken();

  if (!authToken) {
    throw new ApiError('No authentication token available. Please log in first.');
  }

  // Create a client with authentication
  const client = createAuthenticatedClient(authToken);

  // Return the API with the authenticated client
  return {
    callLogs: {
      ...callLogsApi,
      // Override methods to use authenticated client
    },
    assistants: {
      ...assistantsApi,
    },
    configurations: {
      ...configurationsApi,
    },
    places: {
      ...placesApi,
    },
    twilio: {
      ...twilioApi,
    },
    voice: {
      ...voiceApi,
    }
  };
}

// Helper functions for common patterns

/**
 * Create a complete assistant with initial configuration
 */
export async function createAssistantWithConfiguration(
  assistantData: {
    name: string;
    business_profile_id: string;
    ai_model_config: Record<string, unknown>;
    call_handling_config: Record<string, unknown>;
  },
  phoneNumberId?: string
): Promise<any> {
  const assistant = await assistantsApi.createAssistant({
    ...assistantData,
    phone_number_id: phoneNumberId
  });

  if (!assistant.id) {
    throw new ApiError('Assistant created but no ID returned');
  }

  return assistant;
}

/**
 * Get assistant with retry logic for loading states
 */
export async function getAssistantWithRetry(
  assistantId: number,
  maxRetries: number = 3,
  delayMs: number = 1000
): Promise<any> {
  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      return await assistantsApi.getAssistant(assistantId);
    } catch (error) {
      if (attempt === maxRetries) {
        throw error;
      }

      // Wait before retrying
      await new Promise(resolve => setTimeout(resolve, delayMs * attempt));
    }
  }

  throw new ApiError('Max retries exceeded');
}

/**
 * Publish configuration with validation
 */
export async function publishConfigurationWithValidation(
  assistantId: number
): Promise<any> {
  // First get the current status to validate
  const status = await configurationsApi.getCurrentStatus(assistantId);

  if (!status.draft) {
    throw new ApiError('No draft configuration to publish');
  }

  return await configurationsApi.publishDraftConfiguration(assistantId);
}

/**
 * Search places with pagination
 */
export async function searchPlacesWithPagination(
  query: string,
  countryCode: string,
  pageSize: number = 10
): Promise<{
  places: any[];
  hasMore: boolean;
  nextPage?: number;
}> {
  const result = await placesApi.searchPlaces({
    query,
    countryCode,
    pageSize
  });

  return {
    places: result.places || [],
    hasMore: result.hasMore || false,
    nextPage: result.nextPage
  };
}

// Export error class for use in components
export { ApiError };

// Default export
export default api;
