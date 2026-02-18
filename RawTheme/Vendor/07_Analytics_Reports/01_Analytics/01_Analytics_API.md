# Analytics API Documentation

## Endpoints

### 1. Get Analytics Dashboard
**GET** `/api/v1/VendorClient/Analytics/{companyId}/dashboard`

**Response:**
```json
{
  "kpiMetrics": [
    { "name": "OEE", "value": 87.5, "unit": "%" },
    { "name": "Defect Rate", "value": 1.2, "unit": "%" },
    { "name": "Production Output", "value": 1200, "unit": "units" }
  ],
  "lastUpdated": "2026-02-16T15:00:00Z"
}
```

## Related Pages
- [Analytics Dashboard](01_Analytics_Dashboard.html)
