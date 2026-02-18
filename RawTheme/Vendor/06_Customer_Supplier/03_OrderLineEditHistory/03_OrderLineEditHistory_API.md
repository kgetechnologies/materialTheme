# Order Line Edit History API Documentation

## Endpoints

### 1. Search Edit History
**POST** `/api/v1/VendorClient/OrderLineEditHistory/{companyId}/search`

**Request:**
```json
{
  "orderLinePk": 45,
  "orderNumber": "ORD-2026-0045",
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
      "editHistoryPk": 1,
      "orderLinePk": 45,
      "orderNumber": "ORD-2026-0045",
      "fieldName": "Quantity",
      "oldValue": "100",
      "newValue": "150",
      "changedBy": "John Smith",
      "changedDate": "2026-02-11T10:30:00"
    }
  ],
  "totalCount": 1
}
```

### 2. Get Detailed History
**POST** `/api/v1/VendorClient/OrderLineEditHistory/{companyId}/details`

## Business Rules
- Tracks all order modifications
- Audit trail for compliance
- Cannot be deleted

## Related Pages
- [Order Line Edit History List](03_OrderLineEditHistory_List.html)
