# Shifts API Documentation

## Endpoints

### 1. Search Shifts
**POST** `/api/v1/VendorClient/Shift/{companyId}/search`

**Response:**
```json
{
  "items": [
    {
      "shiftPk": 1,
      "shiftName": "Morning Shift",
      "startTime": "06:00:00",
      "endTime": "14:00:00",
      "durationHours": 8,
      "isActive": true
    }
  ]
}
```

### 2. Create Shift
**POST** `/api/v1/VendorClient/Shift/{companyId}/create`

**Request (example):**
```json
{
  "shiftName": "Night Shift",
  "startTime": "22:00:00",
  "endTime": "06:00:00",
  "isActive": true
}
```

**Response (success):**
```json
{
  "success": true,
  "data": {
    "shiftPk": 2,
    "shiftName": "Night Shift",
    "startTime": "22:00:00",
    "endTime": "06:00:00",
    "durationHours": 8,
    "isActive": true,
    "createdAt": "2026-02-16T13:00:00Z"
  },
  "message": "Shift created"
}
```

## Related Pages
- [Shifts List](06_Shifts_List.html)
