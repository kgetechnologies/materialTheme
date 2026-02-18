# Common API Headers & Configuration

## Base URL
```
https://localhost:7001/api/v1/VendorClient
```

## Required Headers (All Requests)

```http
Authorization: Bearer {JWT_TOKEN}
Content-Type: application/json
Accept: application/json
```

## Company Context
All endpoints require `{companyId}` in the URL path:
```
/api/v1/VendorClient/{ControllerName}/{companyId}/...
```

## Standard Response Envelope

### Success Response
```json
{
  "success": true,
  "data": { ... },
  "message": "Operation completed successfully",
  "timestamp": "2026-02-11T10:30:00Z"
}
```

### Error Response
```json
{
  "success": false,
  "error": {
    "code": "TenantMismatch",
    "message": "Company ID does not match authenticated tenant"
  },
  "timestamp": "2026-02-11T10:30:00Z"
}
```

## Pagination (PagedResult)

### Request
```json
{
  "page": 1,
  "limit": 20
}
```

### Response
```json
{
  "success": true,
  "data": {
    "items": [...],
    "total": 150,
    "page": 1,
    "limit": 20
  }
}
```

## Common Error Codes
- `TenantMismatch` - Company ID mismatch
- `InvalidInput` - Validation failed
- `NotFound` - Resource not found
- `Conflict` - Duplicate entry
- `EntityLimitExceeded` - Plan limit reached
- `FeatureNotAvailable` - Feature not in plan
