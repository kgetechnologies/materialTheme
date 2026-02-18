# Product Variants API Documentation

## Overview
Product Variants enable multi-dimensional product configurations (size, color, capacity, etc.) with independent SKU, pricing, and inventory management.

**Use Cases**: Apparel (sizes/colors), Electronics (storage/color), Food & Beverage (package sizes), Consumer Goods (variants)

## Common Headers
See [00_COMMON_HEADERS.md](../../../00_Documentation/00_COMMON_HEADERS.md)

## Base Endpoint
```
/api/v1/VendorClient/ProductVariant/{companyId}
```

---

## 1. Create Product Variant

### Endpoint
```http
POST /api/v1/VendorClient/ProductVariant/{companyId}/create
```

### Business Rules
- SKU must be unique within company
- Product must exist and be active
- Variant inherits base product properties
- Initial stock is 0 (update separately)
- Status defaults to Active

### Request Body
```json
{
  "productId": 12345,
  "variantName": "Red T-Shirt - Large",
  "sku": "TSHIRT-RED-L",
  "barcode": "1234567890123",
  "description": "Premium cotton t-shirt in red, size large",
  "variantAttributes": "{\"color\":\"Red\",\"size\":\"L\",\"material\":\"Cotton\"}",
  "basePrice": 29.99,
  "wholesalePrice": 24.99,
  "retailPrice": 39.99,
  "costPrice": 15.00,
  "minimumStock": 50,
  "maximumStock": 500,
  "reorderPoint": 20,
  "weight": 0.25,
  "weightUnit": "kg",
  "length": 30,
  "width": 25,
  "height": 2,
  "dimensionUnit": "cm",
  "isDefault": false,
  "notes": "Popular size"
}
```

### Response (Success)
```json
{
  "success": true,
  "data": {
    "id": 5001,
    "productId": 12345,
    "variantName": "Red T-Shirt - Large",
    "sku": "TSHIRT-RED-L",
    "barcode": "1234567890123",
    "basePrice": 29.99,
    "retailPrice": 39.99,
    "currentStock": 0,
    "minimumStock": 50,
    "status": 1,
    "isDefault": false,
    "createdAt": "2026-02-11T10:00:00Z"
  },
  "message": "Product variant created successfully"
}
```

### Error Scenarios
- **Conflict (409)**: SKU already exists
- **NotFound (404)**: Product not found
- **ValidationError (400)**: Invalid price (negative), invalid dimensions

---

## 2. Update Product Variant

### Endpoint
```http
POST /api/v1/VendorClient/ProductVariant/{companyId}/{variantId}/update
```

### Business Rules
- Partial updates supported (only send changed fields)
- SKU change validates uniqueness
- Stock updates trigger reorder alerts if below reorderPoint
- Price changes don't affect existing orders

### Request Body (Partial Update)
```json
{
  "retailPrice": 44.99,
  "currentStock": 150,
  "notes": "Price increased due to material cost"
}
```

### Response (Success)
```json
{
  "success": true,
  "data": {
    "id": 5001,
    "variantName": "Red T-Shirt - Large",
    "retailPrice": 44.99,
    "currentStock": 150,
    "updatedAt": "2026-02-11T11:30:00Z"
  },
  "message": "Product variant updated successfully"
}
```

---

## 3. Get Variant Details

### Endpoint
```http
GET /api/v1/VendorClient/ProductVariant/{companyId}/{variantId}
```

### Response (Success)
```json
{
  "success": true,
  "data": {
    "id": 5001,
    "productId": 12345,
    "variantName": "Red T-Shirt - Large",
    "sku": "TSHIRT-RED-L",
    "barcode": "1234567890123",
    "description": "Premium cotton t-shirt in red, size large",
    "variantAttributes": "{\"color\":\"Red\",\"size\":\"L\"}",
    "basePrice": 29.99,
    "wholesalePrice": 24.99,
    "retailPrice": 44.99,
    "costPrice": 15.00,
    "currentStock": 150,
    "minimumStock": 50,
    "maximumStock": 500,
    "reorderPoint": 20,
    "weight": 0.25,
    "weightUnit": "kg",
    "length": 30,
    "width": 25,
    "height": 2,
    "dimensionUnit": "cm",
    "status": 1,
    "isDefault": false,
    "notes": "Price increased due to material cost",
    "createdAt": "2026-02-11T10:00:00Z",
    "updatedAt": "2026-02-11T11:30:00Z"
  },
  "message": "Product variant retrieved successfully"
}
```

---

## 4. Search Product Variants

### Endpoint
```http
POST /api/v1/VendorClient/ProductVariant/{companyId}/search
```

### Business Rules
- Returns paginated results
- Low stock filter: currentStock <= reorderPoint
- Search matches SKU or variantName (case-insensitive)
- Results ordered by createdAt DESC

### Request Body
```json
{
  "productId": 12345,
  "sku": "TSHIRT",
  "searchTerm": "Red",
  "status": 1,
  "isLowStock": true,
  "pageNumber": 1,
  "pageSize": 20
}
```

### Response (Success)
```json
{
  "success": true,
  "data": {
    "items": [
      {
        "id": 5001,
        "productId": 12345,
        "variantName": "Red T-Shirt - Large",
        "sku": "TSHIRT-RED-L",
        "barcode": "1234567890123",
        "basePrice": 29.99,
        "retailPrice": 44.99,
        "currentStock": 15,
        "minimumStock": 50,
        "status": 1,
        "isDefault": false,
        "createdAt": "2026-02-11T10:00:00Z"
      }
    ],
    "total": 1,
    "page": 1,
    "limit": 20
  },
  "message": "Found 1 product variant(s)"
}
```

---

## 5. Create Package Configuration

### Endpoint
```http
POST /api/v1/VendorClient/ProductVariant/{companyId}/package/create
```

### Business Rules
- Defines packaging hierarchy: Units → Packages → Cases → Pallets
- Essential for food products (allergen tracking)
- Used for wholesale/retail pricing tiers
- Package code must be unique

### Request Body
```json
{
  "productId": 12345,
  "configurationName": "12-Pack Case",
  "packageCode": "PKG-TSHIRT-12",
  "packageType": 2,
  "packageMaterial": "Cardboard",
  "netContent": 12,
  "contentUnit": "units",
  "unitsPerPackage": 12,
  "packagesPerCase": 6,
  "casesPerPallet": 48,
  "retailPrice": 450.00,
  "wholesalePrice": 360.00,
  "allergenInfo": "None",
  "notes": "Standard retail packaging"
}
```

### Response (Success)
```json
{
  "success": true,
  "data": {
    "id": 3001,
    "productId": 12345,
    "configurationName": "12-Pack Case",
    "packageCode": "PKG-TSHIRT-12",
    "packageType": 2,
    "unitsPerPackage": 12,
    "status": 1,
    "createdAt": "2026-02-11T12:00:00Z"
  },
  "message": "Package configuration created successfully"
}
```

### Package Types (Enum)
- `1` = Individual
- `2` = Box
- `3` = Case
- `4` = Pallet
- `5` = Bulk

---

## 6. Search Package Configurations

### Endpoint
```http
POST /api/v1/VendorClient/ProductVariant/{companyId}/package/search
```

### Request Body
```json
{
  "productId": 12345,
  "packageType": 2
}
```

### Response (Success)
```json
{
  "success": true,
  "data": [
    {
      "id": 3001,
      "productId": 12345,
      "configurationName": "12-Pack Case",
      "packageCode": "PKG-TSHIRT-12",
      "packageType": 2,
      "packageMaterial": "Cardboard",
      "netContent": 12,
      "contentUnit": "units",
      "unitsPerPackage": 12,
      "status": 1,
      "createdAt": "2026-02-11T12:00:00Z"
    }
  ],
  "message": "Found 1 package configuration(s)"
}
```

---

## 7. Create Shelf Life Configuration

### Endpoint
```http
POST /api/v1/VendorClient/ProductVariant/{companyId}/shelf-life/create
```

### Business Rules
- Essential for perishable goods
- Enables FEFO (First Expired, First Out) inventory
- Temperature monitoring triggers alerts
- Warning threshold for near-expiry items

### Request Body
```json
{
  "productId": 12345,
  "shelfLifeDays": 180,
  "warningThresholdDays": 30,
  "storageCondition": "Refrigerated",
  "minTemperature": 2,
  "maxTemperature": 8,
  "temperatureUnit": "C",
  "expiryMethod": "FEFO",
  "storageInstructions": "Keep refrigerated at 2-8°C. Do not freeze.",
  "requiresTemperatureMonitoring": true
}
```

### Response (Success)
```json
{
  "success": true,
  "data": {
    "id": 4001,
    "productId": 12345,
    "shelfLifeDays": 180,
    "warningThresholdDays": 30,
    "storageCondition": "Refrigerated",
    "expiryMethod": "FEFO",
    "requiresTemperatureMonitoring": true,
    "createdAt": "2026-02-11T13:00:00Z"
  },
  "message": "Shelf life configuration created successfully"
}
```

### Storage Conditions
- `Ambient` - Room temperature
- `Refrigerated` - 2-8°C
- `Frozen` - Below 0°C
- `Controlled` - Specific conditions

### Expiry Methods
- `FIFO` - First In, First Out
- `FEFO` - First Expired, First Out
- `LIFO` - Last In, First Out

---

## 8. Get Shelf Life by Product

### Endpoint
```http
GET /api/v1/VendorClient/ProductVariant/{companyId}/shelf-life/product/{productId}
```

### Response (Success)
```json
{
  "success": true,
  "data": {
    "id": 4001,
    "productId": 12345,
    "shelfLifeDays": 180,
    "warningThresholdDays": 30,
    "storageCondition": "Refrigerated",
    "expiryMethod": "FEFO",
    "requiresTemperatureMonitoring": true,
    "createdAt": "2026-02-11T13:00:00Z"
  },
  "message": "Shelf life configuration retrieved successfully"
}
```

---

## Status Codes

| Value | Status | Description |
|-------|--------|-------------|
| 0 | Inactive | Not available for sale |
| 1 | Active | Available for sale |
| 2 | Discontinued | No longer produced |

---

## Error Codes

| Code | Description | Resolution |
|------|-------------|------------|
| `Conflict` | SKU already exists | Use different SKU |
| `InvalidInput` | Product not found | Verify productId |
| `ValidationError` | Negative price/dimensions | Provide valid values |

---

## Related Pages
- **02_ProductVariants_List.html**
- **02_ProductVariants_Create.html**

---

**Last Updated**: February 2026
