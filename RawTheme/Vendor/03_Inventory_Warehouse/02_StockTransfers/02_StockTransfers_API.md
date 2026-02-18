# Stock Transfers API

## Base Endpoint
```
/api/v1/VendorClient/StockTransfer/{companyId}
```

## Create Transfer

### Endpoint
```http
POST /api/v1/VendorClient/StockTransfer/{companyId}/create
```

### Request
```json
{
  "materialLotId": 101,
  "quantity": 100,
  "fromLocationType": 1,


**LocationType Values:**
Unknown, Floor, Warehouse, Shelf, Bin, FinishedGoodsStore, Scrap, Quarantine, StorageRoom, DisplayArea, LoadingDock, ReturnArea, ReworkStation, QualityArea, PackagingArea
  "fromLocationId": 1,
  "toLocationType": 1,
  "toLocationId": 2,
  "remarks": "Stock replenishment"
}
```

### Response
```json
{
  "success": true,
  "data": {
    "id": 1,
    "materialLotId": 101,
    "quantity": 100,
    "status": "Active",
    "createdAt": "2026-02-11T10:00:00Z"
  }
}
```

## Related Pages
- **02_StockTransfers_List.html**

**Last Updated**: February 2026
