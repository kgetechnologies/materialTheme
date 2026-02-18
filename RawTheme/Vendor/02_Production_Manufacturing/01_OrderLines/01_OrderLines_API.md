# Order Lines (Job Cards) API Documentation

## Common Headers
See [00_COMMON_HEADERS.md](../../../00_Documentation/00_COMMON_HEADERS.md) for standard headers.

## Base Endpoint
```
/api/v1/VendorClient/OrderLines/{companyId}
```

---

## 1. Create Order Line (Job Card)

### Endpoint
```http
POST /api/v1/VendorClient/OrderLines/{companyId}/create
```

### Request Body
```json
{
  "jobCardNumber": "JC-2026-001",
  "productLineId": 1,
  "initialQuantity": 1000,
  "materials": [
    {
      "lotId": 101,
      "qty": 500
    },
    {
      "lotId": 102,
      "qty": 300
    }
  ]
}
```

### Response (Success)
```json
{
  "success": true,
  "data": {
    "id": 1001,
    "jobCardNumber": "JC-2026-001",
    "productLineId": 1,
    "currentStageDefinitionId": 10,
    "status": 1,
    "initialQuantity": 1000,
    "createdAt": "2026-02-11T10:00:00Z"
  },
  "message": "Order line created"
}
```

### Business Rules
- Materials are allocated and deducted from available stock
- Job starts at first stage of product line
- Stage history is automatically created
- Status is set to Active (1)

### Page Usage
- **01_OrderLines_Create.html** - Main create form

---

## 2. Move to Next Stage

### Endpoint
```http
POST /api/v1/VendorClient/OrderLines/{companyId}/{orderLineId}/move-to-next-stage
```

### Request Body
```json
{
  "nextStageDefinitionId": 201,
  "passedQuantity": 950,
  "transferMaterials": true,
  "additionalMaterials": [
    {
      "lotId": 104,
      "qty": 100
    }
  ]
}
```

### Response (Success)
```json
{
  "success": true,
  "data": {
    "orderLineId": 1001,
    "currentStageDefinitionId": 201
  },
  "message": "Moved to next stage"
}
```

### Business Rules
- Only allowed stage transitions are permitted
- Current stage is marked complete with passed quantity
- New stage history record is created
- Materials auto-transfer if stages on different floors
- Additional materials allocated if provided

### Page Usage
- **01_OrderLines_MoveStage.html** - Stage transition form
- **01_OrderLines_List.html** - Move button in table

---

## 3. Add Materials to Current Stage

### Endpoint
```http
POST /api/v1/VendorClient/OrderLines/{companyId}/{orderLineId}/add-materials
```

### Request Body
```json
{
  "materials": [
    {
      "lotId": 105,
      "qty": 50
    }
  ]
}
```

### Response (Success)
```json
{
  "success": true,
  "data": {
    "orderLineId": 1001,
    "materialsAdded": 1
  },
  "message": "Materials added to current stage"
}
```

### Page Usage
- **01_OrderLines_List.html** - Materials button in table

---

## 4. Update Stage Quantity

### Endpoint
```http
POST /api/v1/VendorClient/OrderLines/{companyId}/{orderLineId}/update-stage-quantity
```

### Request Body
```json
{
  "stageHistoryId": 5001,
  "passedQuantity": 920
}
```

### Response (Success)
```json
{
  "success": true,
  "data": {
    "stageHistoryId": 5001,
    "updatedStages": 3
  },
  "message": "Stage quantities updated"
}
```

### Business Rules
- Updates passed quantity for specified stage
- Cascades to subsequent stages
- Adjusts input quantities for downstream stages

---

## 5. Log Wastage

### Endpoint
```http
POST /api/v1/VendorClient/OrderLines/{companyId}/{orderLineId}/log-wastage
```

### Request Body
```json
{
  "wastages": [
    {
      "wastageTypeId": 10,
      "stageDefinitionId": 201,
      "quantity": 30,
      "remarks": "Material defect"
    }
  ]
}
```

### Response (Success)
```json
{
  "success": true,
  "data": {
    "orderLineId": 1001,
    "wastagesLogged": 1
  },
  "message": "Wastages logged"
}
```

### Page Usage
- **01_OrderLines_List.html** - Wastage button in table

---

## 6. Log Defects

### Endpoint
```http
POST /api/v1/VendorClient/OrderLines/{companyId}/{orderLineId}/log-defect
```

### Request Body
```json
{
  "defects": [
    {
      "defectTypeId": 5,
      "stageDefinitionId": 201,
      "quantity": 20,
      "remarks": "Surface scratches"
    }
  ]
}
```

### Response (Success)
```json
{
  "success": true,
  "data": {
    "orderLineId": 1001,
    "defectsLogged": 1
  },
  "message": "Defects logged"
}
```

---

## 7. Complete Job

### Endpoint
```http
POST /api/v1/VendorClient/OrderLines/{companyId}/{orderLineId}/complete
```

### Request Body
```json
{
  "outputQuantity": 920,
  "transferToFinishedGoods": true
}
```

### Response (Success)
```json
{
  "success": true,
  "data": {
    "orderLineId": 1001,
    "status": 2,
    "completedAt": "2026-02-11T15:30:00Z",
    "outputQuantity": 920,
    "transferredToFinishedGoods": true
  },
  "message": "Job completed successfully"
}
```

### Business Rules
- Job must be at final stage (no next stage options)
- Status changed to Completed (2)
- Finished goods lot created if transferToFinishedGoods = true
- Stock transfer record created

### Page Usage
- **01_OrderLines_List.html** - Complete button in table

---

## 8. Log Environmental Waste

### Endpoint
```http
POST /api/v1/VendorClient/OrderLines/{companyId}/environmental/waste
```

### Request Body
```json
{
  "orderLineId": 1001,
  "productId": 12345,
  "wasteType": "Solid",
  "wasteCategory": "Recyclable",
  "quantity": 50,
  "unit": "kg",
  "disposalMethod": "Recycling",
  "disposalProvider": "EcoWaste Ltd",
  "disposalDate": "2026-02-11T10:00:00Z",
  "carbonEmissions": 5.5,
  "waterUsed": 100,
  "energyUsed": 25,
  "certificateNumber": "CERT-2026-001",
  "notes": "Plastic waste from packaging"
}
```

### Response (Success)
```json
{
  "success": true,
  "data": {
    "id": 8001,
    "orderLineId": 1001,
    "wasteType": "Solid",
    "quantity": 50,
    "unit": "kg",
    "disposalMethod": "Recycling",
    "createdAt": "2026-02-11T10:00:00Z"
  },
  "message": "Environmental waste logged: 50 kg of Solid"
}
```

---

## 9. Get Environmental Summary

### Endpoint
```http
POST /api/v1/VendorClient/OrderLines/{companyId}/environmental/summary
```

### Request Body
```json
{
  "orderLineId": 1001,
  "wasteType": "Solid",
  "disposalMethod": "Recycling",
  "startDate": "2026-02-01T00:00:00Z",
  "endDate": "2026-02-11T23:59:59Z",
  "page": 1,
  "limit": 20,
  "ascending": false
}
```

### Response (Success)
```json
{
  "success": true,
  "data": {
    "totalWaste": 250.5,
    "totalCarbonEmissions": 35.2,
    "totalWaterUsed": 1500,
    "totalEnergyUsed": 450,
    "wasteByType": {
      "Solid": 200,
      "Liquid": 50.5
    },
    "wasteByDisposal": {
      "Recycling": 180,
      "Landfill": 70.5
    },
    "details": [
      {
        "id": 8001,
        "orderLineId": 1001,
        "productId": 12345,
        "productName": "Widget A",
        "wasteType": "Solid",
        "quantity": 50,
        "unit": "kg",
        "disposalMethod": "Recycling",
        "disposalDate": "2026-02-11T10:00:00Z",
        "carbonEmissions": 5.5
      }
    ]
  },
  "message": "Environmental summary: 250.50 total waste, 35.20 kg CO2"
}
```

---

## Status Codes

| Value | Status | Description |
|-------|--------|-------------|
| 1 | Active | Job in progress |
| 2 | Completed | Job finished |
| 3 | OnHold | Temporarily paused |
| 4 | Cancelled | Job cancelled |

---

## Error Codes

| Code | Description | HTTP Status |
|------|-------------|-------------|
| `TenantMismatch` | Company ID mismatch | 403 |
| `OrderLineNotFound` | Job card not found | 404 |
| `ProductLineNotFound` | Product line not found | 404 |
| `ProductLineNotActive` | Product line inactive | 400 |
| `OrderLineNoStages` | No stages defined | 400 |
| `InsufficientMaterial` | Not enough material stock | 400 |
| `InvalidStageTransition` | Stage transition not allowed | 400 |
| `NotAtFinalStage` | Cannot complete, not at final stage | 400 |
| `NoMaterialsProvided` | Materials array empty | 400 |

---

## Related Pages

- **01_OrderLines_List.html** - Job card listing and search
- **01_OrderLines_Create.html** - Create new job card
- **01_OrderLines_MoveStage.html** - Move job to next stage

---

**Last Updated**: February 2026
