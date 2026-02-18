# Small Scale Production API Documentation

## Overview
Simplified production for small/medium businesses: batch production, recipes, custom jobs, quality checks.

**Industries**: Coffee roasting, spice processing, candle making, soap, embroidery, screen printing, pottery, leather goods

## Base Endpoint
```
/api/v1/VendorClient/SmallScaleProduction/{companyId}
```

---

## 1. Create Batch

### Endpoint
```http
POST /api/v1/VendorClient/SmallScaleProduction/{companyId}/batch/create
```

### Request Body
```json
{
  "productId": 100,
  "batchNumber": "BATCH-001",
  "productionDate": "2026-02-11T08:00:00Z",
  "plannedQuantity": 100,
  "unit": "kg",
  "processType": "Roasting",
  "roastLevel": "Medium",
  "grindSize": "Coarse",
  "processTemperature": 220,
  "processDurationMinutes": 15,
  "operatorName": "John Doe",
  "notes": "Medium roast for espresso"
}
```

### Response
```json
{
  "success": true,
  "data": {
    "id": 1,
    "batchNumber": "BATCH-001",
    "productionDate": "2026-02-11T08:00:00Z",
    "plannedQuantity": 100,
    "status": "Planned",
    "createdAt": "2026-02-11T08:00:00Z"
  },
  "message": "Batch created successfully"
}
```

---

## 2. Complete Batch

### Endpoint
```http
POST /api/v1/VendorClient/SmallScaleProduction/{companyId}/batch/{batchId}/complete
```

### Request Body
```json
{
  "completionDate": "2026-02-11T08:30:00Z",
  "actualQuantity": 95,
  "qualityCheckPassed": true,
  "qualityNotes": "Good aroma, consistent color"
}
```

---

## 3. Create Recipe

### Endpoint
```http
POST /api/v1/VendorClient/SmallScaleProduction/{companyId}/recipe/create
```

### Request Body
```json
{
  "recipeName": "Espresso Blend",
  "recipeCode": "RCP-001",
  "productId": 100,
  "description": "Premium espresso blend",
  "yieldQuantity": 10,
  "yieldUnit": "kg",
  "instructions": "1. Mix beans\n2. Roast at 220°C\n3. Cool",
  "ingredients": [
    {"ingredientName": "Colombian Beans", "quantity": 6, "unit": "kg", "costPerUnit": 15, "sortOrder": 1},
    {"ingredientName": "Brazilian Beans", "quantity": 4, "unit": "kg", "costPerUnit": 12, "sortOrder": 2}
  ]
}
```

---

## 4. Create Custom Job

### Endpoint
```http
POST /api/v1/VendorClient/SmallScaleProduction/{companyId}/custom-job/create
```

### Business Rules
- Custom orders with artwork approval
- Job types: Embroidery, ScreenPrinting, Engraving, Pottery, LeatherWork
- Artwork status workflow: PendingSubmission → UnderReview → Approved → Rejected

### Request Body
```json
{
  "jobNumber": "JOB-001",
  "customerId": 500,
  "customerName": "ABC Corp",
  "jobType": "Embroidery",
  "decorationType": "Logo",
  "orderDate": "2026-02-10T00:00:00Z",
  "dueDate": "2026-02-15T00:00:00Z",
  "priority": "High",
  "productDescription": "Company logo on 50 polo shirts",
  "quantity": 50,
  "unit": "pieces",
  "artworkFileUrl": "https://storage/artwork/logo.png",
  "quotedPrice": 500,
  "setupTimeMinutes": 30,
  "jobNotes": "Use navy blue thread",
  "customerNotes": "Rush order"
}
```

---

## 5. Create Quality Check

### Endpoint
```http
POST /api/v1/VendorClient/SmallScaleProduction/{companyId}/quality-check/create
```

### Request Body
```json
{
  "simpleBatchProductionId": 1,
  "customJobId": null,
  "inspectionDate": "2026-02-11T09:00:00Z",
  "inspectorName": "Jane Smith",
  "visualInspectionPassed": true,
  "dimensionalCheckPassed": true,
  "functionalTestPassed": true,
  "packagingCheckPassed": true,
  "defectCount": 2,
  "defectDescription": "Minor color variation",
  "actionTaken": "Segregated defects",
  "notes": "Overall good quality"
}
```

---

## Business Scenarios

### Scenario 1: Coffee Roasting
**Batch**: 100 kg green beans  
**Process**: Roast at 220°C for 15 min  
**Yield**: 95 kg (5% moisture loss)  
**Quality**: Aroma, color, taste test

### Scenario 2: Custom Embroidery
**Job**: 50 polo shirts with logo  
**Artwork**: Customer approval required  
**Setup**: 30 min digitizing  
**Production**: 5 min per shirt  
**Quality**: Stitch count, alignment

### Scenario 3: Candle Making
**Recipe**: Soy wax + fragrance + wick  
**Batch**: 100 candles  
**Process**: Melt, pour, cool, trim  
**Quality**: Burn test, scent throw

---

## Related Pages
- **04_SmallScale_List.html**
- **04_SmallScale_BatchCreate.html**
- **04_SmallScale_RecipeCreate.html**
- **04_SmallScale_CustomJobCreate.html**

---

**Last Updated**: February 2026
