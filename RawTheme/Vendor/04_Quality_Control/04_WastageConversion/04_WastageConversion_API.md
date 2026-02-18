# Wastage Conversion API Documentation

## Endpoints

### 1. Search Wastage Conversions
**POST** `/api/v1/VendorClient/WastageConversion/{companyId}/search`

**Response:**
```json
{
  "items": [
    {
      "wastageConversionPk": 1,
      "conversionDate": "2026-02-10",
      "sourceMaterialPk": 5,
      "sourceMaterialName": "Steel Scrap",
      "wastageQuantity": 150,
      "convertedMaterialPk": 12,
      "convertedMaterialName": "Recycled Steel",
      "recoveredQuantity": 120,
      "recoveryPercentage": 80
    }
  ]
}
```

### 2. Record Conversion
**POST** `/api/v1/VendorClient/WastageConversion/{companyId}/create`

**Request (example):**
```json
{
  "conversionDate": "2026-02-10",
  "sourceMaterialPk": 5,
  "wastageQuantity": 150,
  "convertedMaterialPk": 12,
  "recoveredQuantity": 120,
  "notes": "Recovered batch 2026-02"
}
```

**Response (success):**
```json
{
  "success": true,
  "data": {
    "wastageConversionPk": 2,
    "conversionDate": "2026-02-10",
    "sourceMaterialPk": 5,
    "wastageQuantity": 150,
    "convertedMaterialPk": 12,
    "recoveredQuantity": 120,
    "recoveryPercentage": 80,
    "createdAt": "2026-02-16T12:45:00Z"
  },
  "message": "Wastage conversion recorded"
}
```

## Business Rules
- Tracks material recovery
- Calculates recovery percentage
- Updates inventory

## Related Pages
- [Wastage Conversion List](04_WastageConversion_List.html)
