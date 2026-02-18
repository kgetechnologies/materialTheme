# Product Lines API Documentation

## Endpoints

### 1. Search Product Lines
**POST** `/api/v1/VendorClient/ProductLine/{companyId}/search`

**Request:**
```json
{
  "searchTerm": "Electronics",
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
      "productLinePk": 1,
      "code": "PL-001",
      "name": "Electronics Assembly",
      "description": "Consumer electronics manufacturing",
      "isActive": true,
      "productCount": 24
    }
  ],
  "totalCount": 1
}
```

### 2. Create Product Line
**POST** `/api/v1/VendorClient/ProductLine/{companyId}/create`

**Request (example):**
```json
{
  "code": "PL-002",
  "name": "Mechanical Components",
  "description": "Mechanical parts production",
  "isActive": true
}
```

**Response (success):**
```json
{
  "success": true,
  "data": {
    "productLinePk": 2,
    "code": "PL-002",
    "name": "Mechanical Components",
    "description": "Mechanical parts production",
    "isActive": true,
    "createdAt": "2026-02-16T12:00:00Z"
  },
  "message": "Product line created"
}
```

### 3. Update Product Line
**POST** `/api/v1/VendorClient/ProductLine/{companyId}/update`

### 4. Delete Product Line
**POST** `/api/v1/VendorClient/ProductLine/{companyId}/delete`

## Business Rules
- Code must be unique per company
- Cannot delete if products assigned
- Active status controls visibility

## Related Pages
- [Product Lines List](05_ProductLines_List.html)
