# Regional Address API Documentation

## Endpoints

### 1. Search Regional Addresses
**POST** `/api/v1/VendorClient/RegionalAddress/{companyId}/search`

**Response:**
```json
{
  "items": [
    {
      "regionalAddressPk": 1,
      "region": "North America HQ",
      "addressLine1": "123 Industrial Blvd",
      "city": "New York",
      "stateProvince": "NY",
      "country": "USA",
      "postalCode": "10001"
    }
  ]
}
```

### 2. Create Regional Address
**POST** `/api/v1/VendorClient/RegionalAddress/{companyId}/create`

**Request (example):**
```json
{
  "region": "EMEA Office",
  "addressLine1": "45 Industrial Way",
  "city": "London",
  "stateProvince": "",
  "country": "UK",
  "postalCode": "SW1A 1AA"
}
```

**Response (success):**
```json
{
  "success": true,
  "data": {
    "regionalAddressPk": 2,
    "region": "EMEA Office",
    "addressLine1": "45 Industrial Way",
    "city": "London",
    "country": "UK",
    "postalCode": "SW1A 1AA",
    "createdAt": "2026-02-16T13:10:00Z"
  },
  "message": "Regional address created"
}
```

## Related Pages
- [Regional Address List](08_RegionalAddress_List.html)
