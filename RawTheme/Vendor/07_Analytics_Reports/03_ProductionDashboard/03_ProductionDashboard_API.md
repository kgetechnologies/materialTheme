# Production Dashboard API Documentation

## Endpoints

### 1. Get Dashboard Metrics
**POST** `/api/v1/VendorClient/ProductionDashboard/{companyId}/metrics`

**Response:**
```json
{
  "oeeScore": 85,
  "availability": 92,
  "performance": 88,
  "quality": 96,
  "productionLines": [
    {
      "productionLinePk": 1,
      "name": "Line A",
      "status": "Running",
      "currentOrderNumber": "ORD-2026-0045",
      "progress": 75,
      "oee": 85
    }
  ]
}
```

### 2. Get Real-Time Status
**POST** `/api/v1/VendorClient/ProductionDashboard/{companyId}/realtime`

## Related Pages
- [Production Dashboard](03_ProductionDashboard_View.html)
