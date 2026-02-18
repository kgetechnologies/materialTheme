# Suppliers API Documentation

## Endpoints

### 1. Search Suppliers
**POST** `/api/v1/VendorClient/Supplier/{companyId}/search`

**Request (example):**
```json
{
  "searchTerm": "Steel",
  "isActive": true,
  "pageNumber": 1,
  "pageSize": 20
}
```

**Response:**
```json
{
  "items": [
    {
      "supplierPk": 1,
      "name": "ABC Steel Co.",
      "code": "SUP-001",
      "isActive": true
    }
  ],
  "totalCount": 1
}
```

### 2. Create Supplier
**POST** `/api/v1/VendorClient/Supplier/{companyId}/create`

**Request (example):**
```json
{
  "name": "ABC Steel Co.",
  "code": "SUP-001",
  "isActive": true
}
```

**Response (success):**
```json
{
  "success": true,
  "data": {
    "supplierPk": 2,
    "name": "ABC Steel Co.",
    "code": "SUP-001",
    "isActive": true,
    "createdAt": "2026-02-16T14:50:00Z"
  },
  "message": "Supplier created"
}
```

## Related Pages
- [Suppliers List](02_Suppliers_List.html)
