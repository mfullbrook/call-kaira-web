/**
 * Example usage of the API service
 * This file demonstrates how to use the various API endpoints
 */

import { api, ApiError } from './api';

// Example: Using the Call Logs API
export async function exampleCallLogsUsage() {
  try {
    // Get paginated call logs with filtering
    const callLogs = await api.callLogs.getCallLogs({
      page: 1,
      per_page: 20,
      read_status: 'unread',
      search: 'important'
    });

    console.log('Call logs:', callLogs);

    // Get detailed call log
    if (callLogs.data && callLogs.data.length > 0) {
      const callLogId = callLogs.data[0].id;
      const detailedLog = await api.callLogs.getCallLog(callLogId);

      console.log('Detailed call log:', detailedLog);

      // Mark as read
      await api.callLogs.updateReadStatus(callLogId, 'read');
      console.log('Call log marked as read');
    }
  } catch (error) {
    if (error instanceof ApiError) {
      console.error('API Error:', error.message, 'Status:', error.status);
    } else {
      console.error('Unexpected error:', error);
    }
  }
}

// Example: Using the Assistants API
export async function exampleAssistantsUsage() {
  try {
    // Get all assistants
    const assistants = await api.assistants.getAssistants();
    console.log('Assistants:', assistants);

    // Create a new assistant
    const newAssistant = await api.assistants.createAssistant({
      name: 'My New Assistant',
      business_profile_id: 'profile-123',
      ai_model_config: {
        model: 'gpt-4',
        temperature: 0.7,
        max_tokens: 1000
      },
      call_handling_config: {
        greeting: 'Hello, how can I help you?',
        max_call_duration: 300
      }
    });

    console.log('Created assistant:', newAssistant);

    // Update assistant
    if (newAssistant.id) {
      await api.assistants.updateAssistant(newAssistant.id, {
        name: 'Updated Assistant Name',
        is_active: true
      });
      console.log('Assistant updated');
    }
  } catch (error) {
    console.error('Error with assistants:', error);
  }
}

// Example: Using the Configurations API
export async function exampleConfigurationsUsage(assistantId: number) {
  try {
    // Get draft configuration
    const draftConfig = await api.configurations.getDraftConfiguration(assistantId);
    console.log('Draft configuration:', draftConfig);

    // Update draft configuration
    await api.configurations.updateDraftConfiguration(assistantId, {
      answering_mode: 'all_calls',
      ai_provider: 'openai',
      ai_model_config: {
        model: 'gpt-4',
        temperature: 0.8
      },
      call_handling_config: {
        greeting: 'Welcome to our service!',
        max_call_duration: 600
      }
    });

    console.log('Draft configuration updated');

    // Publish the configuration
    await api.configurations.publishDraftConfiguration(assistantId);
    console.log('Configuration published');

    // Get current status
    const status = await api.configurations.getCurrentStatus(assistantId);
    console.log('Current status:', status);

  } catch (error) {
    console.error('Error with configurations:', error);
  }
}

// Example: Using the Places API
export async function examplePlacesUsage() {
  try {
    // Search for places
    const searchResults = await api.places.searchPlaces({
      query: 'coffee shop',
      countryCode: 'US',
      pageSize: 10,
      pageNumber: 0
    });

    console.log('Search results:', searchResults);

    // Get place details
    if (searchResults.places && searchResults.places.length > 0) {
      const placeId = searchResults.places[0].place_id;
      const placeDetails = await api.places.getPlaceDetails(placeId);
      console.log('Place details:', placeDetails);
    }
  } catch (error) {
    console.error('Error with places:', error);
  }
}

// Example: Using the Twilio API
export async function exampleTwilioUsage() {
  try {
    // Get available phone numbers
    const availableNumbers = await api.twilio.getAvailablePhoneNumbers();
    console.log('Available numbers:', availableNumbers);

    // Provision a phone number
    if (availableNumbers.numbers && availableNumbers.numbers.length > 0) {
      const numberSid = availableNumbers.numbers[0].sid;
      const provisionedNumber = await api.twilio.provisionPhoneNumber(numberSid);
      console.log('Provisioned number:', provisionedNumber);
    }
  } catch (error) {
    console.error('Error with Twilio:', error);
  }
}

// Example: Using the Voice API
export async function exampleVoiceUsage() {
  try {
    // Create a new call log
    const callLog = await api.voice.createCallLog({
      twilio_account_sid: 'AC1234567890',
      twilio_call_sid: 'CA1234567890',
      direction: 'inbound',
      from_number: '+1234567890',
      to_number: '+0987654321',
      status: 'in-progress',
      started_at: new Date().toISOString()
    });

    console.log('Created call log:', callLog);

    // Update call log status
    if (callLog.id) {
      await api.voice.updateCallLogStatus(callLog.id, {
        status: 'completed',
        ended_at: new Date().toISOString()
      });
      console.log('Call log status updated');
    }
  } catch (error) {
    console.error('Error with voice:', error);
  }
}

// Example: Using helper functions
export async function exampleHelperFunctions() {
  try {
    // Create assistant with configuration
    const assistant = await api.createAssistantWithConfiguration({
      name: 'Helper Assistant',
      business_profile_id: 'profile-456',
      ai_model_config: {
        model: 'gpt-3.5-turbo',
        temperature: 0.5
      },
      call_handling_config: {
        greeting: 'Hello from helper!'
      }
    });

    console.log('Created assistant with helper:', assistant);

    // Get assistant with retry
    if (assistant.id) {
      const retriedAssistant = await api.getAssistantWithRetry(assistant.id, 3, 1000);
      console.log('Retried assistant:', retriedAssistant);
    }

    // Publish configuration with validation
    if (assistant.id) {
      await api.publishConfigurationWithValidation(assistant.id);
      console.log('Configuration published with validation');
    }

    // Search places with pagination
    const paginatedPlaces = await api.searchPlacesWithPagination(
      'restaurant',
      'US',
      5
    );
    console.log('Paginated places:', paginatedPlaces);

  } catch (error) {
    console.error('Error with helper functions:', error);
  }
}

// Example: Error handling patterns
export async function exampleErrorHandling() {
  try {
    // This will likely fail if the assistant doesn't exist
    await api.assistants.getAssistant(99999);
  } catch (error) {
    if (error instanceof ApiError) {
      switch (error.status) {
        case 404:
          console.log('Assistant not found');
          break;
        case 401:
          console.log('Unauthorized - check authentication');
          break;
        case 500:
          console.log('Server error - try again later');
          break;
        default:
          console.log('API error:', error.message);
      }
    } else {
      console.log('Unexpected error:', error);
    }
  }
}

// Example: Using the API in a React component (pseudo-code)
export const exampleReactUsage = `
// In a React component
import { api, ApiError } from '../services/api';
import { useState, useEffect } from 'react';

function CallLogsComponent() {
  const [callLogs, setCallLogs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCallLogs = async () => {
      setLoading(true);
      setError(null);

      try {
        const logs = await api.callLogs.getCallLogs({
          page: 1,
          per_page: 20
        });
        setCallLogs(logs.data || []);
      } catch (err) {
        if (err instanceof ApiError) {
          setError(\`API Error: \${err.message}\`);
        } else {
          setError('An unexpected error occurred');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchCallLogs();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      {callLogs.map(log => (
        <div key={log.id}>
          <h3>{log.from_number} → {log.to_number}</h3>
          <p>Status: {log.status}</p>
          <p>Started: {log.started_at}</p>
        </div>
      ))}
    </div>
  );
}
`;
