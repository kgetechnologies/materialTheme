# Materials API Documentation

## Overview
Material Lots track raw materials with dimensions, quantities, and inventory optimization features including ABC analysis and reorder point management.

**Use Cases**: Raw material tracking, inventory optimization, lot traceability, reorder automation

## Common Headers
See [00_COMMON_HEADERS.md](../../../00_Documentation/00_COMMON_HEADERS.md)

## Base Endpoint
```
/api/v1/VendorClient/Materials/{companyId}
```

---

## 1. Add Material Lot

### Endpoint
```http
POST /api/v1/VendorClient/Materials/{companyId}/add
```

### Business Rules
- Lot number must be unique
- Available quantity equals initial quantity
- Dimensions optional but recommended for cutting operations
- Quantity must be positive

### Request Body
```json
{
  "lotNumber": "LOT-2026-001",
  "batchNumber": "BATCH-001",
  "materialType": "Steel Sheet",
  "length": 2000,
  "width": 1000,
  "thickness": 5,
  "quantity": 500
}
```

### Response (Success)
```json
{
  "success": true,
  "data": {
    "id": 101,
    "lotNumber": "LOT-2026-001",
    "materialType": "Steel Sheet",
    "quantity": 500,
    "availableQuantity": 500,
    "createdAt": "2026-02-11T10:00:00Z"
  },
  "message": "Material lot created"
}
```

---

## 2. ABC Analysis

### Endpoint
```http
POST /api/v1/VendorClient/Materials/{companyId}/abc-analysis
```

### Business Rules
- **A-items**: Top 80% of value (high priority)
- **B-items**: Next 15% of value (medium priority)
- **C-items**: Last 5% of value (low priority)
- Based on Pareto principle (80-15-5 rule)
- Calculated from annual consumption value

### Request Body
```json
{
  "page": 1,
  "limit": 50,
  "ascending": false
}
```

### Response (Success)
```json
{
  "success": true,
  "data": {
    "items": [
      {
        "materialLotId": 101,
        "materialName": "Steel Sheet",
        "classification": "A",
        "annualValue": 125000.00,
        "percentageOfTotal": 45.5,
        "transactionCount": 156,
        "averageMonthlyUsage": 450
      }
    ],
    "total": 50,
    "page": 1,
    "limit": 50
  },
  "message": "ABC analysis complete: 15 A-items, 20 B-items, 15 C-items"
}
```

### Classification Enum
- `A` = High value (top 80%)
- `B` = Medium value (next 15%)
- `C` = Low value (last 5%)

---

## 3. Inventory Optimization

### Endpoint
```http
POST /api/v1/VendorClient/Materials/{companyId}/inventory-optimization
```

### Business Rules
- Returns reorder points and safety stock levels
- Based on lead time and average daily usage
- Filters by ABC classification for prioritization

### Request Body
```json
{
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
    "items": [
      {
        "id": 1001,
        "materialLotId": "guid",
        "minimumStockLevel": 100,
        "reorderPoint": 150,
        "reorderQuantity": 500,
        "maximumStockLevel": 1000,
        "safetyStockLevel": 50,
        "averageDailyUsage": 25,
        "leadTimeDays": 7
      }
    ],
    "total": 20,
    "page": 1,
    "limit": 20
  },
  "message": "Retrieved 20 optimization settings"
}
```

---

## 4. Configure Optimization

### Endpoint
```http
POST /api/v1/VendorClient/Materials/{companyId}/optimization/configure
```

### Business Rules
- Reorder point = (Average daily usage × Lead time) + Safety stock
- Maximum stock prevents over-ordering
- Auto-reorder triggers when stock ≤ reorder point

### Request Body
```json
{
  "materialLotId": 101,
  "minStockLevel": 100,
  "reorderPoint": 150,
  "reorderQuantity": 500,
  "maxStockLevel": 1000,
  "safetyStockLevel": 50,
  "averageDailyUsage": 25,
  "leadTimeDays": 7
}
```

### Response (Success)
```json
{
  "success": true,
  "data": {
    "id": 1001,
    "materialLotId": "guid",
    "reorderPoint": 150,
    "reorderQuantity": 500,
    "updatedAt": "2026-02-11T11:00:00Z"
  },
  "message": "Inventory optimization configured successfully"
}
```

---

## 5. Low Stock Alerts

### Endpoint
```http
POST /api/v1/VendorClient/Materials/{companyId}/low-stock-alerts
```

### Business Rules
- Alert when currentStock ≤ reorderPoint
- Urgency levels based on days until stockout
- **Critical**: < 7 days
- **Warning**: 7-14 days
- **Info**: > 14 days

### Request Body
```json
{
  "urgencyLevel": 1,
  "page": 1,
  "limit": 20,
  "ascending": true
}
```

### Response (Success)
```json
{
  "success": true,
  "data": {
    "items": [
      {
        "materialLotId": 101,
        "materialName": "Steel Sheet",
        "currentStock": 120,
        "reorderPoint": 150,
        "averageDailyUsage": 25,
        "daysUntilStockout": 4,
        "urgencyLevel": 1,
        "warehouseId": 5,
        "warehouseName": "Main Warehouse"
      }
    ],
    "total": 5,
    "page": 1,
    "limit": 20
  },
  "message": "Found 5 low stock alerts: 3 critical, 2 warnings"
}
```

### Urgency Levels
- `1` = Critical (< 7 days)
- `2` = Warning (7-14 days)
- `3` = Info (> 14 days)

---

## Error Codes

| Code | Description | Resolution |
|------|-------------|------------|
| `InvalidInput` | Material lot not found | Verify materialLotId |
| `EntityLimitExceeded` | Plan limit reached | Upgrade plan |

---

## Related Pages
- **03_Materials_List.html**
- **03_Materials_Create.html**
- **03_Materials_ABCAnalysis.html**

---

**Last Updated**: February 2026
