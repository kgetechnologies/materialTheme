# Stage Definitions API Documentation

## Endpoints

### 1. Search Stage Definitions
**POST** `/api/v1/VendorClient/StageDefinition/{companyId}/search`

**Request:**
```json
{
  "productLinePk": 1,
  "searchTerm": "Assembly",
  "pageNumber": 1,
  "pageSize": 20
}
```

**Response:**
```json
{
  "items": [
    {
      "stageDefinitionPk": 1,
      "stageName": "PCB Assembly",
      "productLinePk": 1,
      "productLineName": "Electronics Assembly",
      "stageOrder": 2,
      "estimatedDurationHours": 4.5,
      "isActive": true
    }
  ],
  "totalCount": 1
}
```

### 2. Create Stage Definition
**POST** `/api/v1/VendorClient/StageDefinition/{companyId}/create`

**Request (example):**
```json
{
  "productLinePk": 1,
  "stageName": "Final Assembly",
  "stageOrder": 5,
  "estimatedDurationHours": 3.0,
  "isActive": true
}
```

**Response (success):**
```json
{
  "success": true,
  "data": {
    "stageDefinitionPk": 2,
    "stageName": "Final Assembly",
    "productLinePk": 1,
    "stageOrder": 5,
    "estimatedDurationHours": 3.0,
    "isActive": true,
    "createdAt": "2026-02-16T12:10:00Z"
  },
  "message": "Stage definition created"
}
```

### 3. Update Stage Order
**POST** `/api/v1/VendorClient/StageDefinition/{companyId}/reorder`

### 4. Delete Stage Definition
**POST** `/api/v1/VendorClient/StageDefinition/{companyId}/delete`

## Business Rules
- Stage order must be sequential
- Cannot delete if orders in progress
- Duration used for scheduling

## Related Pages
- [Stage Definitions List](06_StageDefinitions_List.html)
