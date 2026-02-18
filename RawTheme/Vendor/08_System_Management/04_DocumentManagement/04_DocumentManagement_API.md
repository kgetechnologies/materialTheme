# Document Management API Documentation

## Endpoints

### 1. Search Documents
**POST** `/api/v1/VendorClient/DocumentManagement/{companyId}/search`

**Response:**
```json
{
  "items": [
    {
      "documentPk": 1,
      "documentName": "BOM_Product_A.pdf",
      "documentType": "BOM",
      "fileSize": 2621440,
      "uploadedBy": "John Smith",
      "uploadDate": "2026-02-10",
      "fileUrl": "/documents/bom_product_a.pdf"
    }
  ]
}
```

### 2. Upload Document
**POST** `/api/v1/VendorClient/DocumentManagement/{companyId}/upload`

### 3. Download Document
**POST** `/api/v1/VendorClient/DocumentManagement/{companyId}/download`

## Related Pages
- [Document Management List](04_DocumentManagement_List.html)
