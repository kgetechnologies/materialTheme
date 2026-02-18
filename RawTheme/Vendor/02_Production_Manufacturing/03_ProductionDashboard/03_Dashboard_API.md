# Production Dashboard API

## Base Endpoint
```
/api/v1/VendorClient/ProductionDashboard/{companyId}
```

## Get Dashboard Metrics

### Endpoint
```http
POST /api/v1/VendorClient/ProductionDashboard/{companyId}/metrics
```

### Request
```json
{
  "startDate": "2026-02-01T00:00:00Z",
  "endDate": "2026-02-11T23:59:59Z"
}
```

### Response
```json
{
  "success": true,
  "data": {
    "activeJobs": 24,
    "completedToday": 8,
    "averageOEE": 78.5,
    "onTimeDelivery": 92.0,
    "productionByLine": [
      {"lineName": "Line A", "unitsProduced": 5000},
      {"lineName": "Line B", "unitsProduced": 3500}
    ],
    "oeeTrend": [
      {"date": "2026-02-10", "oee": 76.2},
      {"date": "2026-02-11", "oee": 78.5}
    ]
  }
}
```

## Related Pages
- **03_Dashboard.html**

**Last Updated**: February 2026
