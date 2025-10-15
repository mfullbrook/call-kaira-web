# API Service Implementation Summary

This document provides a comprehensive overview of the API service implementation that wraps the generated client from `@app-client/`.

## 📁 File Structure

```
src/services/
├── api.ts                 # Main API service with all endpoint wrappers
├── auth.ts                # Authentication utilities and token management
├── index.ts               # Export file for clean imports
├── README.md              # Detailed documentation
├── api-examples.ts        # Usage examples and patterns
└── API_SERVICE_SUMMARY.md # This summary document

src/hooks/
└── useApi.ts              # React hooks for API integration

src/components/
└── ApiExample.tsx         # Example React components
```

## 🚀 Key Features

### 1. **Type Safety**
- Full TypeScript support with generated types from `@app-client/`
- IntelliSense support for all API methods
- Compile-time type checking for requests and responses

### 2. **Error Handling**
- Custom `ApiError` class for consistent error handling
- Automatic error parsing and status code handling
- Network error detection and handling

### 3. **Authentication**
- Token-based authentication with Bearer tokens
- Automatic token storage in localStorage
- Token validation and refresh capabilities
- Authentication status checking

### 4. **React Integration**
- Custom hooks for all API endpoints
- Loading states and error handling
- Automatic refetching and caching
- Optimistic updates support

### 5. **Helper Functions**
- Common patterns like retry logic
- Validation helpers
- Pagination support
- Batch operations

## 📋 API Modules

### Call Logs API (`api.callLogs`)
```typescript
// Get paginated call logs with filtering
const callLogs = await api.callLogs.getCallLogs({
  page: 1,
  per_page: 20,
  read_status: 'unread',
  search: 'important'
});

// Get detailed call log
const callLog = await api.callLogs.getCallLog(123);

// Update read status
await api.callLogs.updateReadStatus(123, 'read');
```

### Assistants API (`api.assistants`)
```typescript
// Get all assistants
const assistants = await api.assistants.getAssistants();

// Create new assistant
const assistant = await api.assistants.createAssistant({
  name: 'My Assistant',
  business_profile_id: 'profile-123',
  ai_model_config: { model: 'gpt-4' },
  call_handling_config: { greeting: 'Hello!' }
});

// Update assistant
await api.assistants.updateAssistant(123, {
  name: 'Updated Name',
  is_active: true
});
```

### Configurations API (`api.configurations`)
```typescript
// Get configurations
const configs = await api.configurations.getConfigurations(123);

// Get draft configuration
const draft = await api.configurations.getDraftConfiguration(123);

// Update draft configuration
await api.configurations.updateDraftConfiguration(123, {
  answering_mode: 'all_calls',
  ai_provider: 'openai',
  ai_model_config: { model: 'gpt-4' }
});

// Publish configuration
await api.configurations.publishDraftConfiguration(123);
```

### Places API (`api.places`)
```typescript
// Search places
const places = await api.places.searchPlaces({
  query: 'coffee shop',
  countryCode: 'US',
  pageSize: 10
});

// Get place details
const details = await api.places.getPlaceDetails('place-123');
```

### Twilio API (`api.twilio`)
```typescript
// Get available phone numbers
const numbers = await api.twilio.getAvailablePhoneNumbers();

// Provision phone number
await api.twilio.provisionPhoneNumber('number-sid-123');
```

### Voice API (`api.voice`)
```typescript
// Create call log
const callLog = await api.voice.createCallLog({
  twilio_account_sid: 'AC123',
  twilio_call_sid: 'CA123',
  direction: 'inbound',
  from_number: '+1234567890',
  to_number: '+0987654321',
  status: 'in-progress',
  started_at: new Date().toISOString()
});

// Update call status
await api.voice.updateCallLogStatus(123, {
  status: 'completed',
  ended_at: new Date().toISOString()
});
```

## 🎣 React Hooks

### Basic Hooks
```typescript
// Generic API call hook
const { data, loading, error, refetch } = useApiCall(
  () => api.assistants.getAssistants()
);

// Specific endpoint hooks
const { data: callLogs } = useCallLogs({ page: 1, per_page: 20 });
const { data: assistant } = useAssistant(123);
const { data: configurations } = useConfigurations(123);
```

### Action Hooks
```typescript
// Create assistant
const { createAssistant, loading, error } = useCreateAssistant();
await createAssistant(assistantData);

// Update call log status
const { updateStatus, loading } = useUpdateCallLogStatus();
await updateStatus(123, 'read');

// Publish configuration
const { publish, loading } = usePublishConfiguration();
await publish(123);
```

## 🔐 Authentication

### Token Management
```typescript
import { setAuthToken, getStoredToken, clearAuthToken } from '../services/auth';

// Set authentication token
setAuthToken('your-jwt-token');

// Get stored token
const token = getStoredToken();

// Clear token (logout)
clearAuthToken();
```

### Authenticated API Instance
```typescript
import { createAuthenticatedApi } from '../services/api';

// Create authenticated API instance
const authenticatedApi = createAuthenticatedApi('your-token');
```

### Authentication Status
```typescript
import { useAuthStatus } from '../hooks/useApi';

function MyComponent() {
  const { isAuthenticated, token, loading } = useAuthStatus();

  if (loading) return <div>Checking auth...</div>;
  if (!isAuthenticated) return <div>Please log in</div>;

  return <div>Welcome!</div>;
}
```

## 🛠️ Helper Functions

### Common Patterns
```typescript
// Create assistant with configuration
const assistant = await createAssistantWithConfiguration({
  name: 'My Assistant',
  business_profile_id: 'profile-123',
  ai_model_config: { model: 'gpt-4' },
  call_handling_config: { greeting: 'Hello!' }
});

// Get assistant with retry
const assistant = await getAssistantWithRetry(123, 3, 1000);

// Publish configuration with validation
await publishConfigurationWithValidation(123);

// Search places with pagination
const { places, hasMore, nextPage } = await searchPlacesWithPagination(
  'restaurant', 'US', 10
);
```

## 🎨 React Component Examples

### Call Logs Component
```typescript
function CallLogsComponent() {
  const { data: callLogs, loading, error, refetch } = useCallLogs({
    page: 1,
    per_page: 20,
    read_status: 'unread'
  });

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      {callLogs?.data?.map(log => (
        <div key={log.id}>
          <h3>{log.from_number} → {log.to_number}</h3>
          <p>Status: {log.status}</p>
        </div>
      ))}
    </div>
  );
}
```

### Assistants Component
```typescript
function AssistantsComponent() {
  const { data: assistants, loading, error } = useAssistants();
  const { createAssistant, loading: creating } = useCreateAssistant();

  const handleCreate = async (data) => {
    try {
      await createAssistant(data);
      // Success handling
    } catch (error) {
      // Error handling
    }
  };

  return (
    <div>
      {/* Render assistants and create form */}
    </div>
  );
}
```

## 🔧 Configuration

### Base URL Configuration
The API service automatically configures the base URL:
- Development: `http://localhost:8000`
- Production: Uses current hostname with port 8000

### Custom Client Configuration
```typescript
import { createClient } from '../app-client/client';

const customClient = createClient({
  baseUrl: 'https://api.example.com',
  headers: {
    'X-Custom-Header': 'value'
  }
});
```

## 🚨 Error Handling

### Error Types
- **ApiError**: Custom error class with status codes
- **Network errors**: Connection issues, timeouts
- **HTTP errors**: 4xx and 5xx status codes
- **Validation errors**: Invalid request data
- **Authentication errors**: Missing or invalid tokens

### Error Handling Patterns
```typescript
try {
  const result = await api.assistants.getAssistants();
} catch (error) {
  if (error instanceof ApiError) {
    switch (error.status) {
      case 401:
        // Handle authentication error
        break;
      case 404:
        // Handle not found error
        break;
      case 500:
        // Handle server error
        break;
      default:
        // Handle other errors
    }
  } else {
    // Handle unexpected errors
  }
}
```

## 📊 Best Practices

### 1. **Always Handle Errors**
```typescript
const { data, loading, error } = useCallLogs();
if (error) return <div>Error: {error.message}</div>;
```

### 2. **Use Loading States**
```typescript
const { data, loading } = useAssistants();
if (loading) return <div>Loading...</div>;
```

### 3. **Implement Retry Logic**
```typescript
const assistant = await getAssistantWithRetry(123, 3, 1000);
```

### 4. **Cache Responses**
```typescript
// The hooks automatically handle caching and refetching
const { data, refetch } = useCallLogs();
```

### 5. **Validate Inputs**
```typescript
if (!assistantId) {
  throw new Error('Assistant ID is required');
}
```

## 🧪 Testing

### Unit Testing
```typescript
import { api } from '../services/api';

// Mock the API calls
jest.mock('../services/api');
const mockApi = api as jest.Mocked<typeof api>;

test('should fetch call logs', async () => {
  mockApi.callLogs.getCallLogs.mockResolvedValue({ data: [] });

  const result = await api.callLogs.getCallLogs();
  expect(result).toEqual({ data: [] });
});
```

### Integration Testing
```typescript
// Test with actual API endpoints
const result = await api.assistants.getAssistants();
expect(result).toBeDefined();
```

## 🔄 Migration Guide

### From Direct Client Usage
```typescript
// Before
import { Endpoints } from '../app-client/sdk.gen';
const result = await Endpoints.getPaginatedListOfCallLogsWithFiltering({...});

// After
import { api } from '../services/api';
const result = await api.callLogs.getCallLogs({...});
```

### From Axios/Fetch
```typescript
// Before
const response = await fetch('/api/call-logs');
const data = await response.json();

// After
const data = await api.callLogs.getCallLogs();
```

## 📈 Performance Considerations

### 1. **Lazy Loading**
```typescript
// Only load data when needed
const { data } = useCallLogs({ page: 1, per_page: 10 });
```

### 2. **Debouncing**
```typescript
// Debounce search queries
const [searchQuery, setSearchQuery] = useState('');
const debouncedQuery = useDebounce(searchQuery, 300);
const { data } = useCallLogs({ search: debouncedQuery });
```

### 3. **Caching**
```typescript
// Use React Query or SWR for advanced caching
const { data } = useQuery('assistants', () => api.assistants.getAssistants());
```

## 🎯 Future Enhancements

### Planned Features
- [ ] Request/response interceptors
- [ ] Automatic retry with exponential backoff
- [ ] Request deduplication
- [ ] Offline support
- [ ] Real-time updates with WebSockets
- [ ] Advanced caching strategies
- [ ] Request/response transformation
- [ ] API versioning support

### Contributing
To add new endpoints or features:
1. Update the generated client
2. Add new methods to the appropriate API module
3. Create corresponding React hooks
4. Add usage examples
5. Update documentation

## 📚 Additional Resources

- [API Service README](./README.md)
- [Usage Examples](./api-examples.ts)
- [React Hooks](./useApi.ts)
- [Example Components](../components/ApiExample.tsx)
- [Generated Client Documentation](../app-client/)

---

This API service provides a robust, type-safe, and developer-friendly interface for interacting with your backend API. It handles common patterns, error scenarios, and provides excellent developer experience with TypeScript support and React integration.
