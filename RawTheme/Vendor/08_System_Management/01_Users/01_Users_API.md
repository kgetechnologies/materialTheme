# Users API

## Base Endpoint
```
/api/v1/VendorClient/Users/{companyId}
```

## Create User
```http
POST /api/v1/VendorClient/Users/{companyId}/create
```

### Request
```json
{"email":"john@company.com","firstName":"John","lastName":"Doe","roleId":1,"departmentId":5,"phone":"+1234567890","isActive":true,"allowToLogin":true}
```

### Response
```json
{"success":true,"data":{"id":"guid","email":"john@company.com","fullName":"John Doe","status":"Active","allowToLogin":true,"createdAt":"2026-02-11T10:00:00Z"}}
```

## Update User
```http
PUT /api/v1/VendorClient/Users/{companyId}/{userId}
```

### Request
```json
{"name":"John Doe","email":"john@company.com","allowToLogin":false}
```

### Response
```json
{"success":true,"data":{"id":"guid","email":"john@company.com","fullName":"John Doe","status":"Active","allowToLogin":false,"updatedAt":"2026-02-11T10:00:00Z"}}
```

## Search Users
```http
POST /api/v1/VendorClient/Users/{companyId}/search
```

### Request
```json
{"searchTerm":"John","roleId":1,"departmentId":5,"isActive":true,"allowToLogin":true,"pageNumber":1,"pageSize":20}
```

**Last Updated**: February 2026
