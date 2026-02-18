# Material Rejection API Documentation

## Endpoints

### 1. Search Material Rejections
**POST** `/api/v1/VendorClient/MaterialRejection/{companyId}/search`

**Request:**
```json
{
  "materialPk": 1,
  "supplierPk": 5,
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
      "materialRejectionPk": 1,
      "rejectionDate": "2026-02-10",
      "materialPk": 1,
      "materialName": "Steel Sheet 304",
      "quantity": 25,
      "unit": "kg",
      "reason": "Surface defects",
      "supplierPk": 5,
      "supplierName": "ABC Steel Co.",
      "status": "Pending Return"
    }
  ],
  "totalCount": 1
}
```

### 2. Record Rejection
**POST** `/api/v1/VendorClient/MaterialRejection/{companyId}/create`

**Request (example):**
```json
{
  "rejectionDate": "2026-02-10",
  "materialPk": 1,
  "supplierPk": 5,
  "quantity": 25,
  "unit": "kg",
  "reason": "Surface defects",
  "notes": "Batch 2026-01"
}
```

**Response (success):**
```json
{
  "success": true,
  "data": {
    "materialRejectionPk": 2,
    "rejectionDate": "2026-02-10",
    "materialPk": 1,
    "quantity": 25,
    "unit": "kg",
    "reason": "Surface defects",
    "supplierPk": 5,
    "status": "Pending Return",
    "createdAt": "2026-02-16T12:20:00Z"
  },
  "message": "Material rejection recorded"
}
```

### 3. Process Return
**POST** `/api/v1/VendorClient/MaterialRejection/{companyId}/process-return`

## Business Rules
- Must link to supplier
- Affects inventory levels
- Triggers return process

## Related Pages
- [Material Rejection List](06_MaterialRejection_List.html)
