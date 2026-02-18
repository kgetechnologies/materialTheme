# Products API Documentation

## Common Headers
See [00_COMMON_HEADERS.md](../../../00_Documentation/00_COMMON_HEADERS.md) for standard headers.

## Base Endpoint
```
/api/v1/VendorClient/Products/{companyId}
```

---

## 1. Create Product

### Endpoint
```http
POST /api/v1/VendorClient/Products/{companyId}/create
```

### Request Body
```json
{
  "sku": "PROD-001",
  "name": "Widget A"
}
```

### Response (Success)
```json
{
  "success": true,
  "data": {
    "id": 1001,
    "name": "Widget A",
    "sku": "PROD-001",
    "status": 0,
    "createdAt": "2026-02-11T10:30:00Z"
  },
  "message": "Product created"
}
```

### Page Usage
- **01_Products_Create.html** - Main create form

---

## 2. Update Product

### Endpoint
```http
POST /api/v1/VendorClient/Products/{companyId}/{productId}/update
```

### Request Body
```json
{
  "sku": "PROD-001-UPDATED",
  "name": "Widget A - Updated"
}
```

### Response (Success)
```json
{
  "success": true,
  "data": {
    "id": 1001,
    "name": "Widget A - Updated",
    "sku": "PROD-001-UPDATED",
    "status": 0,
    "updatedAt": "2026-02-11T11:00:00Z"
  },
  "message": "Product updated"
}
```

### Page Usage
- **01_Products_Edit.html** - Edit form

---

## 3. Approve Product

### Endpoint
```http
POST /api/v1/VendorClient/Products/{companyId}/{productId}/approve
```

### Request Body
```json
{}
```

### Response (Success)
```json
{
  "success": true,
  "data": {
    "productId": 1001,
    "status": 1
  },
  "message": "Product approved"
}
```

### Page Usage
- **01_Products_List.html** - Approve button in table

---

## 4. Delete Product

### Endpoint
```http
POST /api/v1/VendorClient/Products/{companyId}/{productId}/delete
```

### Request Body
```json
{}
```

### Response (Success)
```json
{
  "success": true,
  "data": {
    "productId": 1001,
    "status": 2
  },
  "message": "Product deleted"
}
```

### Page Usage
- **01_Products_List.html** - Delete button in table

---

## 5. Query Products (Search/List)

### Endpoint
```http
POST /api/v1/VendorClient/Products/{companyId}/query
```

### Request Body
```json
{
  "page": 1,
  "limit": 20,
  "status": 1,
  "search": "Widget",
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
        "id": 1001,
        "name": "Widget A",
        "sku": "PROD-001",
        "status": 1,
        "barcode": "123456789012",
        "rfidTag": "RFID-001",
        "createdAt": "2026-02-01T10:00:00Z"
      }
    ],
    "total": 150,
    "page": 1,
    "limit": 20
  },
  "message": "Products retrieved"
}
```

### Page Usage
- **01_Products_List.html** - Main listing and search

---

## 6. Generate Barcode

### Endpoint
```http
POST /api/v1/VendorClient/Products/{companyId}/barcode/generate
```

### Request Body
```json
{
  "productIds": [1001, 1002, 1003],
  "format": "EAN13",
  "page": 1,
  "limit": 10
}
```

### Response (Success)
```json
{
  "success": true,
  "data": {
    "items": [
      {
        "productId": 1001,
        "productName": "Widget A",
        "barcodeValue": "1234567890123",
        "format": "EAN13",
        "generatedAt": "2026-02-11T10:30:00Z"
      }
    ],
    "total": 3,
    "page": 1,
    "limit": 10
  },
  "message": "Generated 3 barcodes"
}
```

### Page Usage
- **01_Products_List.html** - Barcode button in table

---

## 7. Generate QR Code

### Endpoint
```http
POST /api/v1/VendorClient/Products/{companyId}/qrcode/generate
```

### Request Body
```json
{
  "productIds": [1001],
  "additionalData": "Batch: 2026-02",
  "page": 1,
  "limit": 10
}
```

### Response (Success)
```json
{
  "success": true,
  "data": {
    "items": [
      {
        "productId": 1001,
        "productName": "Widget A",
        "qrCodeData": "QR_DATA_BASE64_STRING",
        "generatedAt": "2026-02-11T10:30:00Z"
      }
    ],
    "total": 1,
    "page": 1,
    "limit": 10
  },
  "message": "Generated 1 QR codes"
}
```

---

## 8. Register RFID

### Endpoint
```http
POST /api/v1/VendorClient/Products/{companyId}/rfid/register
```

### Request Body
```json
{
  "productIds": [1001, 1002],
  "rfidTags": ["RFID-001", "RFID-002"],
  "standard": "EPC Gen2",
  "page": 1,
  "limit": 10
}
```

### Response (Success)
```json
{
  "success": true,
  "data": {
    "items": [
      {
        "productId": 1001,
        "productName": "Widget A",
        "rfidTag": "RFID-001",
        "standard": "EPC Gen2",
        "registeredAt": "2026-02-11T10:30:00Z"
      }
    ],
    "total": 2,
    "page": 1,
    "limit": 10
  },
  "message": "Registered 2 RFID tags"
}
```

---

## 9. Track Product Movement

### Endpoint
```http
POST /api/v1/VendorClient/Products/{companyId}/movement/track
```

### Request Body
```json
{
  "productId": 1001,
  "lotNumber": "LOT-2026-001",
  "serialNumber": "SN-12345",
  "movementType": "Transfer",
  "quantity": 100,
  "fromWarehouseId": 5,
  "toWarehouseId": 8,
  "reason": "Stock replenishment",
  "notes": "Urgent transfer"
}
```

### Response (Success)
```json
{
  "success": true,
  "data": {
    "id": 5001,
    "productId": 1001,
    "movementType": "Transfer",
    "quantity": 100,
    "fromWarehouseId": 5,
    "toWarehouseId": 8,
    "movementDate": "2026-02-11T10:30:00Z"
  },
  "message": "Movement tracked successfully"
}
```

---

## 10. Get Movement History

### Endpoint
```http
POST /api/v1/VendorClient/Products/{companyId}/movement/history
```

### Request Body
```json
{
  "productId": 1001,
  "startDate": "2026-02-01T00:00:00Z",
  "endDate": "2026-02-11T23:59:59Z",
  "page": 1,
  "limit": 20
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
        "productId": 1001,
        "movementType": "Transfer",
        "quantity": 100,
        "fromWarehouseId": 5,
        "toWarehouseId": 8,
        "movementDate": "2026-02-11T10:30:00Z",
        "reason": "Stock replenishment"
      }
    ],
    "total": 45,
    "page": 1,
    "limit": 20
  },
  "message": "Retrieved 45 movement records"
}
```

---

## Error Codes

| Code | Description | HTTP Status |
|------|-------------|-------------|
| `TenantMismatch` | Company ID mismatch | 403 |
| `InvalidInput` | Validation failed | 400 |
| `EntityLimitExceeded` | Plan limit reached | 403 |
| `FeatureNotAvailable` | Feature not in plan | 403 |

---

## Related Pages

- **01_Products_List.html** - Product listing and search
- **01_Products_Create.html** - Create new product
- **01_Products_Edit.html** - Edit existing product

---

**Last Updated**: February 2026
