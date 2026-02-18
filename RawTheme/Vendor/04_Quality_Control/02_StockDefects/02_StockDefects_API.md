# Stock Defects API Documentation

## Endpoints

### 1. Search Stock Defects
**POST** `/api/v1/VendorClient/StockDefect/{companyId}/search`

**Request (example):**
```json
{
  "defectTypePk": 1,
  "materialPk": 5,
  "fromDate": "2026-02-01",
  "toDate": "2026-02-28",
  "pageNumber": 1,
  "pageSize": 20
}
```

**Response:**
```json
{
  "items": [
    {
      "stockDefectPk": 1,
      "defectTypePk": 1,
      "materialPk": 5,
      "quantity": 10,
      "unit": "kg",
      "reportedDate": "2026-02-10",
      "status": "Open"
    }
  ],
  "totalCount": 1
}
```

### 2. Record Stock Defect
**POST** `/api/v1/VendorClient/StockDefect/{companyId}/create`

**Request (example):**
```json
{
  "defectTypePk": 1,
  "materialPk": 5,
  "quantity": 10,
  "unit": "kg",
  "reportedDate": "2026-02-10",
  "notes": "Damaged during transport"
}
```

**Response (success):**
```json
{
  "success": true,
  "data": {
    "stockDefectPk": 2,
    "defectTypePk": 1,
    "materialPk": 5,
    "quantity": 10,
    "unit": "kg",
    "reportedDate": "2026-02-10",
    "status": "Open",
    "createdAt": "2026-02-16T14:00:00Z"
  },
  "message": "Stock defect recorded"
}
```

## Related Pages
- [Stock Defects List](02_StockDefects_List.html)
