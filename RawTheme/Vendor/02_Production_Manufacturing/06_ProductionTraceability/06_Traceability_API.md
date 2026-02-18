# Production Traceability API

## Base Endpoint
```
/api/v1/VendorClient/ProductionTraceability/{companyId}
```

## Trace Product

### Endpoint
```http
POST /api/v1/VendorClient/ProductionTraceability/{companyId}/trace
```

### Business Rules
- Forward traceability: Raw material → Finished goods
- Backward traceability: Finished goods → Raw material
- Lot/serial/barcode search
- Full chain visibility

### Request
```json
{
  "searchValue": "LOT-2026-001",
  "searchType": "LotNumber"
}
```

### Response
```json
{
  "success": true,
  "data": {
    "searchValue": "LOT-2026-001",
    "traceabilityChain": [
      {
        "stage": "RawMaterial",
        "lotNumber": "LOT-2026-001",
        "materialType": "Steel Sheet",
        "supplier": "ABC Steel",
        "date": "2026-02-01T00:00:00Z"
      },
      {
        "stage": "Production",
        "jobCardNumber": "JC-2026-001",
        "productionLine": "Assembly A",
        "date": "2026-02-10T08:00:00Z"
      },
      {
        "stage": "QualityCheck",
        "inspector": "John Doe",
        "result": "Passed",
        "date": "2026-02-10T16:00:00Z"
      },
      {
        "stage": "FinishedGoods",
        "finishedLot": "FG-LOT-001",
        "warehouse": "Main Warehouse",
        "date": "2026-02-11T09:00:00Z"
      }
    ]
  },
  "message": "Traceability chain retrieved"
}
```

## Related Pages
- **06_Traceability.html**

**Last Updated**: February 2026
