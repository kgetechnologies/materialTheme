# Manufacturing Sites API Documentation

## Endpoints

### 1. Search Manufacturing Sites
**POST** `/api/v1/VendorClient/ManufacturingSite/{companyId}/search`

**Response:**
```json
{
  "items": [
    {
      "manufacturingSitePk": 1,
      "siteCode": "SITE-001",
      "name": "Main Production Facility",
      "locationPk": 1,
      "locationName": "New York, USA",
      "capacity": 5000,
      "capacityUnit": "units/day",
      "isActive": true
    }
  ]
}
```

### 2. Create Manufacturing Site
**POST** `/api/v1/VendorClient/ManufacturingSite/{companyId}/create`

**Request (example):**
```json
{
  "siteCode": "SITE-002",
  "name": "Regional Plant",
  "locationPk": 2,
  "capacity": 2500,
  "capacityUnit": "units/day",
  "isActive": true
}
```

**Response (success):**
```json
{
  "success": true,
  "data": {
    "manufacturingSitePk": 2,
    "siteCode": "SITE-002",
    "name": "Regional Plant",
    "locationPk": 2,
    "capacity": 2500,
    "capacityUnit": "units/day",
    "isActive": true,
    "createdAt": "2026-02-16T12:55:00Z"
  },
  "message": "Manufacturing site created"
}
```

## Related Pages
- [Manufacturing Sites List](04_ManufacturingSites_List.html)
