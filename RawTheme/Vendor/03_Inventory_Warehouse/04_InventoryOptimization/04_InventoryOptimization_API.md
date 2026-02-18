# Inventory Optimization API Documentation

## Endpoints

### 1. Get ABC Analysis
**POST** `/api/v1/VendorClient/InventoryOptimization/{companyId}/abc-analysis`

**Response:**
```json
{
  "classA": { "count": 156, "percentage": 80, "value": 2500000 },
  "classB": { "count": 89, "percentage": 15, "value": 468750 },
  "classC": { "count": 234, "percentage": 5, "value": 156250 }
}
```

### 2. Search Optimized Inventory
**POST** `/api/v1/VendorClient/InventoryOptimization/{companyId}/search`

### 3. Update Reorder Points
**POST** `/api/v1/VendorClient/InventoryOptimization/{companyId}/update-reorder-points`

## Business Rules
- ABC Analysis: 80-15-5 Pareto principle
- Class A: High value, tight control
- Class B: Moderate control
- Class C: Simple controls

## Related Pages
- [Inventory Optimization](04_InventoryOptimization_List.html)
