# Warehouses API

## Base Endpoint
```
/api/v1/VendorClient/Warehouses/{companyId}
```

## 1. Create Warehouse

### Endpoint
```http
POST /api/v1/VendorClient/Warehouses/{companyId}/create
```

### Request
```json
{
  "warehouseCode": "WH-001",
  "warehouseName": "Main Warehouse",
  "warehouseType": "General",
  "location": "Building 1",
  "capacity": 10000,
  "capacityUnit": "m²",
  "temperatureControlled": false,
  "hazmatCertified": false
}
```

### Response
```json
{
  "success": true,
  "data": {
    "id": 1,
    "warehouseCode": "WH-001",
    "warehouseName": "Main Warehouse",
    "status": "Active",
    "createdAt": "2026-02-11T10:00:00Z"
  }
}
```

## 2. Search Warehouses

### Endpoint
```http
POST /api/v1/VendorClient/Warehouses/{companyId}/search
```

### Request
```json
{
  "searchTerm": "Main",
  "warehouseType": "General",
  "status": "Active",
  "pageNumber": 1,
  "pageSize": 20
}
```

## Related Pages
- **01_Warehouses_List.html**
- **01_Warehouses_Create.html**

**Last Updated**: February 2026
