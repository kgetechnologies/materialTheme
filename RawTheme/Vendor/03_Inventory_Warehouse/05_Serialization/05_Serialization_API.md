# Serialization API Documentation

## Endpoints

### 1. Search Serial Numbers
**POST** `/api/v1/VendorClient/Serialization/{companyId}/search`

**Request:**
```json
{
  "serialNumber": "SN-2026-001234",
  "productPk": 1,
  "status": "Shipped",
  "pageNumber": 1,
  "pageSize": 20
}
```

**Response:**
```json
{
  "items": [
    {
      "serialNumberPk": 1,
      "serialNumber": "SN-2026-001234",
      "productPk": 1,
      "productName": "Laptop Model X",
      "orderLinePk": 45,
      "orderNumber": "ORD-2026-0045",
      "productionDate": "2026-02-10",
      "status": "Shipped"
    }
  ],
  "totalCount": 1
}
```

### 2. Generate Serial Numbers
**POST** `/api/v1/VendorClient/Serialization/{companyId}/generate`

### 3. Track Serial Number History
**POST** `/api/v1/VendorClient/Serialization/{companyId}/track`

## Business Rules
- Unique per product
- Full traceability required
- Cannot duplicate serial numbers

## Related Pages
- [Serialization List](05_Serialization_List.html)
