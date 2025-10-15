# API Service

This directory contains the API service that wraps the generated client from `@app-client/`. The service provides a clean, type-safe interface for making API calls with proper error handling and helper functions.

## Structure

- `api.ts` - Main API service with all endpoint wrappers
- `api-examples.ts` - Usage examples and patterns
- `index.ts` - Export file for clean imports

## Features

- **Type Safety**: Full TypeScript support with generated types
- **Error Handling**: Consistent error handling with custom `ApiError` class
- **Helper Functions**: Common patterns and utility functions
- **Retry Logic**: Built-in retry mechanisms for reliability
- **Validation**: Input validation and response validation

## API Modules

### Call Logs API (`api.callLogs`)
- `getCallLogs(options?)` - Get paginated list of call logs with filtering
- `getCallLog(callLogId)` - Get detailed call log data
- `updateReadStatus(callLogId, readStatus)` - Update read/unread status
- `updateArchiveStatus(callLogId)` - Update archive status

### Assistants API (`api.assistants`)
- `getAssistants()` - List all assistants for the authenticated tenant
- `createAssistant(request)` - Create new assistant with initial configuration
- `deleteAssistant(assistantId)` - Delete assistant
- `getAssistant(assistantId)` - Get specific assistant
- `updateAssistant(assistantId, request)` - Update assistant (name only)

### Configurations API (`api.configurations`)
- `getConfigurations(assistantId)` - List all configurations for an assistant
- `deleteConfiguration(assistantId, configurationId)` - Delete draft configuration
- `getConfiguration(assistantId, configurationId)` - Get specific configuration
- `updateConfiguration(assistantId, configurationId, request)` - Update configuration
- `discardDraftChanges(assistantId)` - Discard draft changes
- `getDraftConfiguration(assistantId)` - Get draft configuration (creates if needed)
- `updateDraftConfiguration(assistantId, request)` - Update draft configuration
- `publishDraftConfiguration(assistantId)` - Publish draft configuration
- `revertToPreviousConfiguration(assistantId)` - Revert to previous configuration
- `getCurrentStatus(assistantId)` - Get current status (live + draft info)
- `getConfigurationHistory(assistantId)` - Get configuration history

### Places API (`api.places`)
- `searchPlaces(request)` - Search places by text
- `getPlaceDetails(placeId)` - Get place details

### Twilio API (`api.twilio`)
- `getAvailablePhoneNumbers()` - List available phone numbers
- `provisionPhoneNumber(numberSid)` - Provision and assign phone number

### Voice API (`api.voice`)
- `createCallLog(request)` - Create a new call log
- `updateCallLogStatus(callLogId, request)` - Update call log status

## Helper Functions

### `createAssistantWithConfiguration(assistantData, phoneNumberId?)`
Creates a complete assistant with initial configuration.

### `getAssistantWithRetry(assistantId, maxRetries?, delayMs?)`
Gets an assistant with retry logic for loading states.

### `publishConfigurationWithValidation(assistantId)`
Publishes a configuration with validation checks.

### `searchPlacesWithPagination(query, countryCode, pageSize?)`
Searches places with pagination support.

## Error Handling

The service uses a custom `ApiError` class for consistent error handling:

```typescript
import { api, ApiError } from '../services/api';

try {
  const result = await api.assistants.getAssistants();
} catch (error) {
  if (error instanceof ApiError) {
    console.error('API Error:', error.message, 'Status:', error.status);
  } else {
    console.error('Unexpected error:', error);
  }
}
```

## Usage Examples

### Basic Usage

```typescript
import { api } from '../services/api';

// Get call logs
const callLogs = await api.callLogs.getCallLogs({
  page: 1,
  per_page: 20,
  read_status: 'unread'
});

// Create an assistant
const assistant = await api.assistants.createAssistant({
  name: 'My Assistant',
  business_profile_id: 'profile-123',
  ai_model_config: { model: 'gpt-4' },
  call_handling_config: { greeting: 'Hello!' }
});
```

### React Integration

```typescript
import { useState, useEffect } from 'react';
import { api, ApiError } from '../services/api';

function CallLogsComponent() {
  const [callLogs, setCallLogs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCallLogs = async () => {
      setLoading(true);
      try {
        const logs = await api.callLogs.getCallLogs();
        setCallLogs(logs.data || []);
      } catch (err) {
        setError(err instanceof ApiError ? err.message : 'Unknown error');
      } finally {
        setLoading(false);
      }
    };
    fetchCallLogs();
  }, []);

  // Render component...
}
```

## Configuration

The API service is configured to use the base URL from the environment:

- Development: `http://localhost:8000`
- Production: Uses the current hostname with port 8000

## Authentication

All API calls include Bearer token authentication. Make sure to set up your authentication token before making requests.

## Type Safety

All API methods are fully typed using the generated types from `@app-client/`. This provides:

- IntelliSense support
- Compile-time type checking
- Auto-completion for request/response objects
- Type safety for path parameters and query strings

## Error Types

The service handles various error scenarios:

- **Network errors**: Connection issues, timeouts
- **HTTP errors**: 4xx and 5xx status codes
- **Validation errors**: Invalid request data
- **Authentication errors**: Missing or invalid tokens
- **Not found errors**: Resource doesn't exist

## Best Practices

1. **Always handle errors**: Use try-catch blocks or proper error boundaries
2. **Use TypeScript**: Take advantage of the generated types
3. **Implement loading states**: Show loading indicators during API calls
4. **Cache responses**: Consider caching for frequently accessed data
5. **Retry failed requests**: Use the built-in retry helpers for reliability
6. **Validate inputs**: Check data before sending to the API
7. **Handle offline scenarios**: Implement proper offline handling

## Development

To add new endpoints:

1. Update the generated client (run the OpenAPI generation)
2. Add the new endpoint to the appropriate API module
3. Add helper functions if needed
4. Update this documentation
5. Add usage examples

## Testing

The API service can be tested using:

- Unit tests for individual methods
- Integration tests with mock responses
- End-to-end tests with the actual API
- Error handling tests for various scenarios
