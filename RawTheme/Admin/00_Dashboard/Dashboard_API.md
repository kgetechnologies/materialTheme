# Platform Admin Dashboard API

## Overview
Aggregated metrics and statistics for platform administration.

---

## Endpoints

### Get Dashboard Metrics
**GET** `/api/v1/AppOwner/Dashboard/metrics`

Get key platform metrics.

**Response:**
```json
{
  "success": true,
  "data": {
    "totalCompanies": 47,
    "activeCompanies": 42,
    "totalUsers": 1247,
    "systemUptime": 98.7,
    "databaseHealth": "Healthy",
    "cacheHealth": "Healthy",
    "apiResponseTime": 45,
    "storageUsed": 45.2,
    "storageTotal": 67.5
  }
}
```

---

### Get System Health
**GET** `/api/v1/AppOwner/Dashboard/health`

Get system component health status.

**Response:**
```json
{
  "success": true,
  "data": {
    "database": { "status": "Healthy", "responseTime": 2 },
    "cache": { "status": "Healthy", "responseTime": 0.5 },
    "api": { "status": "Healthy", "responseTime": 45 },
    "storage": { "status": "Healthy", "responseTime": 120 }
  }
}
```

---

### Get Recent Activity
**GET** `/api/v1/AppOwner/Dashboard/recent-activity?days=7`

Get recent platform activity.

**Response:**
```json
{
  "success": true,
  "data": {
    "recentCompanies": [...],
    "recentUsers": [...],
    "recentTickets": [...]
  }
}
```

---

### Get Resource Usage
**GET** `/api/v1/AppOwner/Dashboard/resource-usage`

Get platform resource usage statistics.

**Response:**
```json
{
  "success": true,
  "data": {
    "databaseStorage": { "used": 45.2, "total": 67.5, "percentage": 67 },
    "cacheMemory": { "used": 6.5, "total": 8, "percentage": 82 },
    "documentStorage": { "used": 225, "total": 500, "percentage": 45 }
  }
}
```

---

## HTML Mockup
[Dashboard.html](Dashboard.html)

---

## Related Endpoints
- [Companies API](../01_Company_Management/01_Companies/01_Companies_API.md)
- [Users API](../02_User_Management/01_Users/01_Users_API.md)
- [Monitoring API](../04_Monitoring_Analytics/01_Monitoring/01_Monitoring_API.md)
