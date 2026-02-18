# Monitoring API

## Base URL
`/api/v1/AppOwner/Monitoring`

## Endpoints

### Get Platform Health
**GET** `/health`

Overall platform health status.

---

### Get System Metrics
**GET** `/metrics`

CPU, memory, disk usage across all tenants.

---

### Get Active Sessions
**GET** `/sessions`

Active user sessions across platform.

---

### Get Error Logs
**POST** `/errors/query`

Query error logs with filters.

**Request:**
```json
{
  "companyId": "guid",
  "severity": "Error",
  "fromDate": "2025-02-01",
  "toDate": "2025-02-11",
  "page": 1,
  "limit": 50
}
```

---

### Get Performance Stats
**GET** `/performance`

API response times, throughput statistics.
