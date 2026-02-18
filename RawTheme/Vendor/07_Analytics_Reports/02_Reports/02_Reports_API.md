# Reports API Documentation

## Endpoints

### 1. Get Reports List
**GET** `/api/v1/VendorClient/Reports/{companyId}/list`

**Response:**
```json
{
  "reports": [
    { "reportPk": 1, "name": "Production Summary", "createdAt": "2026-02-01T10:00:00Z" },
    { "reportPk": 2, "name": "Defect Analysis", "createdAt": "2026-02-10T10:00:00Z" }
  ]
}
```

## Related Pages
- [Reports List](02_Reports_List.html)
