# Departments API Documentation

## Endpoints

### 1. Search Departments
**POST** `/api/v1/VendorClient/Department/{companyId}/search`

**Request (example):**
```json
{
  "searchTerm": "Production",
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
      "departmentPk": 1,
      "name": "Production",
      "code": "PROD",
      "isActive": true
    }
  ],
  "totalCount": 1
}
```

### 2. Create Department
**POST** `/api/v1/VendorClient/Department/{companyId}/create`

**Request (example):**
```json
{
  "name": "Production",
  "code": "PROD",
  "isActive": true
}
```

**Response (success):**
```json
{
  "success": true,
  "data": {
    "departmentPk": 2,
    "name": "Production",
    "code": "PROD",
    "isActive": true,
    "createdAt": "2026-02-16T14:40:00Z"
  },
  "message": "Department created"
}
```

## Related Pages
- [Departments List](03_Departments_List.html)
