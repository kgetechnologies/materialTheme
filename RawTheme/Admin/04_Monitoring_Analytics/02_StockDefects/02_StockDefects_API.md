# Stock Defects Analytics API

## Base URL
`/api/v1/AppOwner/StockDefects`

## Endpoints

### Get Cross-Tenant Defect Stats
**GET** `/analytics/summary`

Aggregate defect statistics across all companies.

---

### Get Top Defect Types
**GET** `/analytics/top-defects`

Most common defect types platform-wide.

---

### Get Company Comparison
**GET** `/analytics/compare`

Compare defect rates across companies.

---

### Get Trend Analysis
**POST** `/analytics/trends`

Defect trends over time.

**Request:**
```json
{
  "fromDate": "2025-01-01",
  "toDate": "2025-02-11",
  "groupBy": "Month"
}
```
