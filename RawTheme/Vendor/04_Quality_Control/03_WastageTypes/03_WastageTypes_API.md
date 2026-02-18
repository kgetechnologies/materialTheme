# Wastage Types API Documentation

## Endpoints

### 1. Search Wastage Types
**POST** `/api/v1/VendorClient/WastageType/{companyId}/search`


**WastageType Values:**
Unknown, OffCut, Spillage, Breakage, Shrinkage, Trimming, Scrap, ProcessLoss, SetupWaste, TrialPieces, TestPieces, Calibration, DefectiveMaterial, FailedQC, Rework, Recycled, Evaporation, Oxidation, Contamination, StorageLoss, HandlingLoss, ExpiredMaterial, ObsoleteStock, SeasonalWaste, HazardousWaste, NonHazardousWaste, RecyclableWaste, CompostableWaste, PackagingMaterial, ProtectionMaterial, FillerMaterial, Miscellaneous

**Request (example):**
```json
{
  "searchTerm": "Scrap",
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
      "wastageTypePk": 1,
      "name": "Scrap",
      "description": "Production scrap",
      "isActive": true
    }
  ],
  "totalCount": 1
}
```

### 2. Create Wastage Type
**POST** `/api/v1/VendorClient/WastageType/{companyId}/create`

**Request (example):**
```json
{
  "name": "Scrap",
  "description": "Production scrap",
  "isActive": true
}
```

**Response (success):**
```json
{
  "success": true,
  "data": {
    "wastageTypePk": 2,
    "name": "Scrap",
    "description": "Production scrap",
    "isActive": true,
    "createdAt": "2026-02-16T14:10:00Z"
  },
  "message": "Wastage type created"
}
```

## Related Pages
- [Wastage Types List](03_WastageTypes_List.html)
