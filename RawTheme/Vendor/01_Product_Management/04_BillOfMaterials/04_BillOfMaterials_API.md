# Bill of Materials (BOM) API Documentation

## Overview
BOM defines the complete list of materials, components, and sub-assemblies required to manufacture a product. Supports multi-level BOMs with cost tracking.

**Use Cases**: Product recipes, assembly instructions, cost estimation, material planning

## Common Headers
See [00_COMMON_HEADERS.md](../../../00_Documentation/00_COMMON_HEADERS.md)

## Base Endpoint
```
/api/v1/VendorClient/BillOfMaterials/{companyId}
```

---

## 1. Create BOM

### Endpoint
```http
POST /api/v1/VendorClient/BillOfMaterials/{companyId}/create
```

### Business Rules
- Product line must exist and be active
- Components must reference valid material lots
- Estimated cost auto-calculated from components
- Version format recommended: v1.0, v1.1, v2.0
- Status defaults to Active

### Request Body
```json
{
  "productLineId": 1,
  "version": "v1.0",
  "notes": "Initial BOM for Assembly Line A",
  "components": [
    {
      "sequence": 1,
      "materialLotId": 101,
      "quantityRequired": 2.5,
      "unitOfMeasure": "kg",
      "unitCost": 15.00,
      "componentType": "Raw",
      "isCritical": true,
      "subAssemblyBOMId": null,
      "notes": "Primary material"
    },
    {
      "sequence": 2,
      "materialLotId": 102,
      "quantityRequired": 1.0,
      "unitOfMeasure": "kg",
      "unitCost": 25.00,
      "componentType": "Raw",
      "isCritical": false,
      "subAssemblyBOMId": null,
      "notes": "Secondary material"
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
    "productLineId": 1,
    "version": "v1.0",
    "status": 1,
    "componentCount": 2,
    "estimatedCost": 62.50,
    "effectiveFrom": "2026-02-11T10:00:00Z",
    "effectiveTo": null,
    "notes": "Initial BOM for Assembly Line A",
    "createdAt": "2026-02-11T10:00:00Z",
    "components": [
      {
        "id": 5001,
        "sequence": 1,
        "materialLotId": 101,
        "quantityRequired": 2.5,
        "unitOfMeasure": "kg",
        "unitCost": 15.00,
        "lineCost": 37.50,
        "componentType": "Raw",
        "isCritical": true,
        "notes": "Primary material"
      },
      {
        "id": 5002,
        "sequence": 2,
        "materialLotId": 102,
        "quantityRequired": 1.0,
        "unitOfMeasure": "kg",
        "unitCost": 25.00,
        "lineCost": 25.00,
        "componentType": "Raw",
        "isCritical": false,
        "notes": "Secondary material"
      }
    ]
  },
  "message": "BOM created successfully"
}
```

### Component Types
- `Raw` - Raw material
- `SubAssembly` - Pre-assembled component
- `Packaging` - Packaging material
- `Consumable` - Consumable item (glue, tape, etc.)

---

## 2. Get BOM by ID

### Endpoint
```http
POST /api/v1/VendorClient/BillOfMaterials/{companyId}/get/{bomId}
```

### Response (Success)
```json
{
  "success": true,
  "data": {
    "id": 1001,
    "productLineId": 1,
    "version": "v1.0",
    "status": 1,
    "componentCount": 2,
    "estimatedCost": 62.50,
    "effectiveFrom": "2026-02-11T10:00:00Z",
    "effectiveTo": null,
    "notes": "Initial BOM for Assembly Line A",
    "createdAt": "2026-02-11T10:00:00Z",
    "components": [...]
  },
  "message": "BOM retrieved"
}
```

---

## 3. List BOMs

### Endpoint
```http
POST /api/v1/VendorClient/BillOfMaterials/{companyId}/list
```

### Business Rules
- Returns all BOMs for company
- Filter by product line or status
- Ordered by createdAt DESC

### Request Body
```json
{
  "productLineId": 1,
  "status": 1
}
```

### Response (Success)
```json
{
  "success": true,
  "data": [
    {
      "id": 1001,
      "productLineId": 1,
      "version": "v1.0",
      "status": 1,
      "componentCount": 2,
      "estimatedCost": 62.50,
      "effectiveFrom": "2026-02-11T10:00:00Z",
      "createdAt": "2026-02-11T10:00:00Z",
      "components": [...]
    }
  ],
  "message": "Retrieved 1 BOMs"
}
```

---

## Status Codes

| Value | Status | Description |
|-------|--------|-------------|
| 1 | Active | Currently in use |
| 2 | Inactive | Not in use |
| 3 | Draft | Under development |
| 4 | Archived | Historical record |

---

## Business Scenarios

### Scenario 1: Simple Product BOM
**Product**: Wooden Chair  
**Components**: 4 legs, 1 seat, 1 backrest, screws, glue  
**Use**: Direct material cost calculation

### Scenario 2: Multi-Level BOM
**Product**: Computer  
**Sub-Assembly 1**: Motherboard (with CPU, RAM)  
**Sub-Assembly 2**: Power Supply  
**Components**: Case, cables, screws  
**Use**: Complex assembly with sub-components

### Scenario 3: BOM Versioning
**v1.0**: Original design  
**v1.1**: Material substitution (cost reduction)  
**v2.0**: Major redesign  
**Use**: Track design changes and cost impact

---

## Error Codes

| Code | Description | Resolution |
|------|-------------|------------|
| `InvalidInput` | Product line not found | Verify productLineId |
| `MaterialLotNotFound` | Material lot invalid | Check materialLotId |

---

## Related Pages
- **04_BillOfMaterials_List.html**
- **04_BillOfMaterials_Create.html**
- **04_BillOfMaterials_View.html**

---

**Last Updated**: February 2026
