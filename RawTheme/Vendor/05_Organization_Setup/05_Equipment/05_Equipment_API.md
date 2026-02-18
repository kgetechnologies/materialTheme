# Equipment API Documentation

## Endpoints

### 1. Search Equipment
**POST** `/api/v1/VendorClient/Equipment/{companyId}/search`

**Response:**
```json
{
  "items": [
    {
      "equipmentPk": 1,
      "equipmentCode": "EQ-001",
      "name": "CNC Machine A",
      "locationPk": 1,
      "locationName": "Production Floor 1",
      "lastMaintenanceDate": "2026-01-15",
      "nextMaintenanceDate": "2026-04-15",
      "status": "Operational"
    }
  ]
}
```

### 2. Schedule Maintenance
**POST** `/api/v1/VendorClient/Equipment/{companyId}/schedule-maintenance`

## Related Pages
- [Equipment List](05_Equipment_List.html)
