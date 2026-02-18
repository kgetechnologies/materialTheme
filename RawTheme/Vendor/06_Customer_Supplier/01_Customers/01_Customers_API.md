# Customers API

## Base Endpoint
```
/api/v1/VendorClient/Customers/{companyId}
```

## Create Customer
```http
POST /api/v1/VendorClient/Customers/{companyId}/create
```

### Request
```json
{"customerCode":"CUST-001","customerName":"ABC Corp","customerType":"Wholesale","contactPerson":"John Doe","email":"john@abc.com","phone":"+1234567890","address":"123 Main St","city":"New York","country":"USA"}
```

### Response
```json
{"success":true,"data":{"id":1,"customerCode":"CUST-001","customerName":"ABC Corp","status":"Active","createdAt":"2026-02-11T10:00:00Z"}}
```

## Search Customers
```http
POST /api/v1/VendorClient/Customers/{companyId}/search
```

### Request
```json
{"searchTerm":"ABC","customerType":"Wholesale","status":"Active","pageNumber":1,"pageSize":20}
```

**Last Updated**: February 2026
