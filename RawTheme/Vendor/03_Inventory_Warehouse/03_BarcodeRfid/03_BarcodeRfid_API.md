# Barcode/RFID API

## Base Endpoint
```
/api/v1/VendorClient/BarcodeRfid/{companyId}
```

## Generate Barcode

### Endpoint
```http
POST /api/v1/VendorClient/Products/{companyId}/barcode/generate
```

### Request
```json
{
  "productIds": [1001, 1002],
  "format": "EAN13",
  "page": 1,
  "limit": 10
}
```

### Response
```json
{
  "success": true,
  "data": {
    "items": [
      {
        "productId": 1001,
        "barcodeValue": "1234567890123",
        "format": "EAN13",
        "generatedAt": "2026-02-11T10:00:00Z"
      }
    ]
  }
}
```

## Scan Product

### Endpoint
```http
POST /api/v1/VendorClient/Products/{companyId}/scan
```

### Request
```json
{
  "scannedValue": "1234567890123",
  "scanType": "Barcode",
  "activity": "Receiving",
  "warehouseId": 1
}
```

## Related Pages
- **03_BarcodeRfid.html**

**Last Updated**: February 2026
