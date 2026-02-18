# Roles API Documentation

## Endpoints

### 1. Search Roles
**POST** `/api/v1/VendorClient/Role/{companyId}/search`

**Request (example):**
```json
{
  "searchTerm": "Admin",
  "isActive": true,
  "pageNumber": 1,
  "pageSize": 20
}
```

**Response:**
```json
{
  "items": [
    {
      "rolePk": 1,
      "name": "Admin",
      "description": "Administrator role",
      "isActive": true
    }
  ],
  "totalCount": 1
}
```

### 2. Create Role
**POST** `/api/v1/VendorClient/Role/{companyId}/create`

**Request (example):**
```json
{
  "name": "Admin",
  "description": "Administrator role",
  "isActive": true
}
```

**Response (success):**
```json
{
  "success": true,
  "data": {
    "rolePk": 2,
    "name": "Admin",
    "description": "Administrator role",
    "isActive": true,
    "createdAt": "2026-02-16T15:10:00Z"
  },
  "message": "Role created"
}
```

## Related Pages
- [Roles List](02_Roles_List.html)
