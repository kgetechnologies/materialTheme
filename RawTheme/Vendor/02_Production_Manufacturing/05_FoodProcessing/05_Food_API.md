# Food Processing API Documentation

## Overview
Food processing with HACCP compliance, allergen control, cold storage monitoring, and full traceability.

**Industries**: Spice processing, coffee roasting, tea blending, flour milling, frozen food, snack food, dairy

## Base Endpoint
```
/api/v1/VendorClient/FoodProcessing/{companyId}
```

---

## 1. Create Food Processing Batch

### Endpoint
```http
POST /api/v1/VendorClient/FoodProcessing/{companyId}/batch/create
```

### Business Rules
- Lot code for traceability (FEFO - First Expired, First Out)
- Thermal process types: Pasteurization, Sterilization, Blanching, Roasting, Freezing
- Expiry date mandatory for perishables
- Yield tracking (raw → finished weight)

### Request Body
```json
{
  "productId": 200,
  "batchNumber": "FP-001",
  "lotCode": "LOT-2026-001",
  "productionDate": "2026-02-11T08:00:00Z",
  "plannedQuantity": 500,
  "unit": "kg",
  "processingType": 2,
  "expiryDate": "2026-08-11T00:00:00Z",
  "operatorName": "John Doe",
  "notes": "Spice blend batch"
}
```

### Response
```json
{
  "success": true,
  "data": {
    "id": 1,
    "batchNumber": "FP-001",
    "lotCode": "LOT-2026-001",
    "processingDate": "2026-02-11T08:00:00Z",
    "expiryDate": "2026-08-11T00:00:00Z",
    "status": "Processing",
    "createdAt": "2026-02-11T08:00:00Z"
  },
  "message": "Food processing batch created successfully"
}
```

---

## 2. Log HACCP Control Point

### Endpoint
```http
POST /api/v1/VendorClient/FoodProcessing/{companyId}/haccp/log
```

### Business Rules
- **HACCP**: Hazard Analysis Critical Control Points
- Control points: Receiving, Storage, Preparation, Cooking, Cooling, Packaging
- Out-of-spec triggers corrective action
- Compliance documentation for audits

### Request Body
```json
{
  "foodProcessingBatchId": 1,
  "checkTime": "2026-02-11T09:00:00Z",
  "controlPoint": "Cooking",
  "parameterName": "Core Temperature",
  "measuredValue": 75,
  "unit": "°C",
  "targetValue": 75,
  "toleranceMinus": 2,
  "tolerancePlus": 5,
  "isWithinSpec": true,
  "correctiveAction": null,
  "inspectorName": "Jane Smith",
  "notes": "Temperature within range"
}
```

### Response
```json
{
  "success": true,
  "data": {
    "id": 1001,
    "controlPoint": "Cooking",
    "parameterName": "Core Temperature",
    "measuredValue": 75,
    "isWithinSpec": true,
    "createdAt": "2026-02-11T09:00:00Z"
  },
  "message": "HACCP log recorded successfully"
}
```

### HACCP Control Points
- `Receiving` - Raw material inspection
- `Storage` - Temperature/humidity
- `Preparation` - Cross-contamination prevention
- `Cooking` - Kill step verification
- `Cooling` - Rapid cooling
- `Packaging` - Seal integrity
- `Distribution` - Cold chain

---

## 3. Log Allergen Control

### Endpoint
```http
POST /api/v1/VendorClient/FoodProcessing/{companyId}/allergen/log
```

### Business Rules
- Major allergens: Milk, Eggs, Fish, Shellfish, Tree nuts, Peanuts, Wheat, Soybeans
- Changeover cleaning verification
- Cross-contact prevention
- Labeling compliance

### Request Body
```json
{
  "foodProcessingBatchId": 1,
  "logTime": "2026-02-11T10:00:00Z",
  "allergenType": "Peanuts",
  "presence": "None",
  "controlMeasure": "Full line cleaning + ATP test",
  "verificationPassed": true,
  "inspectorName": "Jane Smith",
  "notes": "ATP test negative, line clear"
}
```

### Response
```json
{
  "success": true,
  "data": {
    "id": 2001,
    "allergenType": "Peanuts",
    "presence": "None",
    "verificationPassed": true,
    "createdAt": "2026-02-11T10:00:00Z"
  },
  "message": "Allergen control log recorded successfully"
}
```

### Allergen Presence
- `None` - Not detected
- `Present` - Allergen present
- `Trace` - Trace amounts
- `CrossContact` - Cross-contamination risk

---

## 4. Log Cold Storage Monitoring

### Endpoint
```http
POST /api/v1/VendorClient/FoodProcessing/{companyId}/cold-storage/log
```

### Business Rules
- Refrigerated: 2-8°C
- Frozen: -18°C or below
- Out-of-range triggers alert
- Continuous monitoring for compliance

### Request Body
```json
{
  "foodProcessingBatchId": 1,
  "logTime": "2026-02-11T11:00:00Z",
  "storageUnit": "Cold Room 1",
  "temperature": 4,
  "temperatureUnit": "C",
  "humidity": 65,
  "minTemperature": 2,
  "maxTemperature": 8,
  "isWithinRange": true,
  "alertAction": null,
  "recordedBy": "System Auto-Log"
}
```

### Response
```json
{
  "success": true,
  "data": {
    "id": 3001,
    "storageUnit": "Cold Room 1",
    "temperature": 4,
    "isWithinRange": true,
    "createdAt": "2026-02-11T11:00:00Z"
  },
  "message": "Cold storage log recorded successfully"
}
```

---

## 5. Create Blending Batch

### Endpoint
```http
POST /api/v1/VendorClient/FoodProcessing/{companyId}/blend/create
```

### Request Body
```json
{
  "foodProcessingBatchId": 1,
  "blendName": "Curry Powder Blend",
  "blendDate": "2026-02-11T08:00:00Z",
  "targetQuantity": 100,
  "unit": "kg",
  "components": [
    {"componentName": "Turmeric", "percentage": 40, "actualQuantity": 40, "unit": "kg", "sortOrder": 1},
    {"componentName": "Coriander", "percentage": 30, "actualQuantity": 30, "unit": "kg", "sortOrder": 2},
    {"componentName": "Cumin", "percentage": 20, "actualQuantity": 20, "unit": "kg", "sortOrder": 3},
    {"componentName": "Chili", "percentage": 10, "actualQuantity": 10, "unit": "kg", "sortOrder": 4}
  ]
}
```

---

## Business Scenarios

### Scenario 1: Spice Processing
**Process**: Cleaning → Grinding → Blending → Packaging  
**HACCP**: Metal detection, moisture control  
**Allergen**: Mustard cross-contact prevention  
**Traceability**: Lot code to source farms

### Scenario 2: Frozen Food
**Process**: Preparation → Blanching → Freezing → Packaging  
**HACCP**: Cooking temp, freezing rate  
**Cold Storage**: -18°C continuous monitoring  
**Shelf Life**: 12 months from production

### Scenario 3: Dairy Processing
**Process**: Pasteurization → Cooling → Packaging  
**HACCP**: Pasteurization temp/time  
**Allergen**: Milk (major allergen)  
**Cold Chain**: 2-8°C throughout

---

## Related Pages
- **05_Food_List.html**
- **05_Food_BatchCreate.html**
- **05_Food_HACCP.html**
- **05_Food_Allergen.html**
- **05_Food_ColdStorage.html**

---

**Last Updated**: February 2026
