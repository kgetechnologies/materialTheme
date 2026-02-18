# Holidays API Documentation

## Endpoints

### 1. Search Holidays
**POST** `/api/v1/VendorClient/Holiday/{companyId}/search`

**Response:**
```json
{
  "items": [
    {
      "holidayPk": 1,
      "holidayDate": "2026-07-04",
      "holidayName": "Independence Day",
      "holidayType": "National",
      "applicableLocations": "All US Locations"
    }
  ]
}
```

### 2. Create Holiday
**POST** `/api/v1/VendorClient/Holiday/{companyId}/create`

**Request (example):**
```json
{
  "holidayDate": "2026-12-25",
  "holidayName": "Christmas",
  "holidayType": "National",
  "applicableLocations": "All"
}
```

**Response (success):**
```json
{
  "success": true,
  "data": {
    "holidayPk": 2,
    "holidayDate": "2026-12-25",
    "holidayName": "Christmas",
    "holidayType": "National",
    "applicableLocations": "All",
    "createdAt": "2026-02-16T13:05:00Z"
  },
  "message": "Holiday created"
}
```

## Related Pages
- [Holidays List](07_Holidays_List.html)
