# Locations API Documentation

## Endpoints

### 1. Search Locations
**POST** `/api/v1/VendorClient/Location/{companyId}/search`

**Request (example):**
```json
{
  "searchTerm": "Main",
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
      "locationPk": 1,
      "name": "Main Plant",
      "code": "MAIN-PLANT",
      "isActive": true
    }
  ],
  "totalCount": 1
}
```

### 2. Create Location
**POST** `/api/v1/VendorClient/Location/{companyId}/create`

**Request (example):**
```json
{
  "name": "Main Plant",
  "code": "MAIN-PLANT",
  "isActive": true
}
```

**Response (success):**
```json
{
  "success": true,
  "data": {
    "locationPk": 2,
    "name": "Main Plant",
    "code": "MAIN-PLANT",
    "isActive": true,
    "createdAt": "2026-02-16T14:30:00Z"
  },
  "message": "Location created"
}
```

## Related Pages
- [Locations List](02_Locations_List.html)
