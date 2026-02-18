# Authentication API

## Base Endpoint
```
/api/v1/VendorClient/Auth
```

## Login
```http
POST /api/v1/VendorClient/Auth/login
```

### Request
```json
{"email":"user@company.com","password":"password123"}
```

### Response
```json
{"success":true,"data":{"token":"JWT_TOKEN","refreshToken":"REFRESH_TOKEN","user":{"id":"guid","email":"user@company.com","fullName":"John Doe","role":"Admin"},"expiresIn":3600},"message":"Login successful"}
```

## Logout
```http
POST /api/v1/VendorClient/Auth/logout
```

## Forgot Password
```http
POST /api/v1/VendorClient/Auth/forgot-password
```

### Request
```json
{"email":"user@company.com"}
```

## Reset Password
```http
POST /api/v1/VendorClient/Auth/reset-password
```

### Request
```json
{"token":"RESET_TOKEN","newPassword":"newPassword123"}
```

**Last Updated**: February 2026
