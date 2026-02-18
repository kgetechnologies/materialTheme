# Defect Types API

## Base Endpoint
```
/api/v1/VendorClient/DefectTypes/{companyId}
```

## Create Defect Type
```http
POST /api/v1/VendorClient/DefectTypes/{companyId}/create
```

### Request
```json
{"code":"DEF-001","name":"Surface Scratch","category":"Visual","severity":"Minor","description":"Minor surface defects"}
```

### Response
```json
{"success":true,"data":{"id":1,"code":"DEF-001","name":"Surface Scratch","status":"Active"}}
```

## Search Defect Types
```http
POST /api/v1/VendorClient/DefectTypes/{companyId}/search
```

**Last Updated**: February 2026
