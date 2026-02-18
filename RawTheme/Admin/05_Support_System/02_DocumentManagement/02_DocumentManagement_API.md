# Document Management API

## Base URL
`/api/v1/AppOwner/{companyId}/DocumentManagement`

## Authentication
Requires `Admin` role

---

## Endpoints

### Get Storage Config
**GET** `/storage-config`

Get document storage configuration for vendor.

---

### Create/Update Storage Config
**POST** `/storage-config`

**Request:**
```json
{
  "storageProvider": "AWS_S3",
  "providerRegion": "us-east-1",
  "accessKey": "<access_key>",
  "secretKey": "<secret_key>",
  "bucketName": "manufacturing-docs",
  "baseUrl": "https://s3.amazonaws.com/manufacturing-docs",
  "maxFileSizeMb": 100,
  "allowedFileTypes": ".pdf,.docx,.xlsx,.jpg,.png",
  "enableVersioning": true,
  "enableEncryption": true,
  "enableCompression": false,
  "retentionDays": 365
}
```

---

### Test Storage Connection
**POST** `/storage-config/test`

Test document storage connection.

---

### Upload Document
**POST** `/upload`

Upload document.

**Request:**
```json
{
  "fileName": "certificate.pdf",
  "mimeType": "application/pdf",
  "fileContent": "<base64>",
  "documentType": "QualityDocument",
  "documentCategory": "Certificate",
  "classification": "Internal",
  "accessLevel": "CompanyWide",
  "orderLineId": "<guid>",
  "materialLotId": "<guid>"
}
```

**HTML Mockup:** [02_DocumentManagement_Create.html](02_DocumentManagement_Create.html)

---

### Get Document
**GET** `/documents/{id}`

Get document details.

**HTML Mockup:** [02_DocumentManagement_View.html](02_DocumentManagement_View.html)

---

### Get Order Line Documents
**GET** `/order-line/{orderLineId}/documents`

Get all documents for order line.

**HTML Mockup:** [02_DocumentManagement_List.html](02_DocumentManagement_List.html)

---

### Record Document Access
**POST** `/documents/{id}/access-log`

Log document access.

---

### Archive Document
**POST** `/documents/{id}/archive`

Archive document.

---

### Get Access Logs
**GET** `/documents/{id}/access-logs?days=30`

Get document access logs.
