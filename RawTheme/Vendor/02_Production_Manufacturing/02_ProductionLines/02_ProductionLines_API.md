# Production Lines API Documentation

## Overview
Production line management with OEE (Overall Equipment Effectiveness) tracking, downtime monitoring, and changeover management.

**OEE Formula**: Availability × Performance × Quality  
**Use Cases**: Manufacturing efficiency, downtime analysis, changeover optimization, real-time monitoring

## Common Headers
See [00_COMMON_HEADERS.md](../../../00_Documentation/00_COMMON_HEADERS.md)

## Base Endpoint
```
/api/v1/VendorClient/ProductionLine/{companyId}
```

---

## 1. Create Production Line

### Endpoint
```http
POST /api/v1/VendorClient/ProductionLine/{companyId}/create
```

### Business Rules
- Line code must be unique within company
- Theoretical capacity used for OEE calculations
- Status defaults to Idle
- OEE metrics initialized to 0

### Request Body
```json
{
  "lineName": "Assembly Line A",
  "lineCode": "LINE-A01",
  "lineType": "Assembly",
  "location": "Building 1, Floor 2",
  "theoreticalCapacity": 1000,
  "capacityUnit": "units/hour",
  "maxLineSpeed": 120,
  "speedUnit": "units/min",
  "estimatedChangeoverMinutes": 45,
  "description": "Main assembly line"
}
```

### Response (Success)
```json
{
  "success": true,
  "data": {
    "id": 1,
    "lineName": "Assembly Line A",
    "lineCode": "LINE-A01",
    "lineType": "Assembly",
    "theoreticalCapacity": 1000,
    "status": "Idle",
    "currentOEE": 0,
    "createdAt": "2026-02-11T10:00:00Z"
  },
  "message": "Production line created successfully"
}
```

---

## 2. Log Downtime

### Endpoint
```http
POST /api/v1/VendorClient/ProductionLine/{companyId}/downtime/log
```

### Business Rules
- Line status changes to Breakdown
- Downtime tracked for OEE availability calculation
- Planned downtime excluded from OEE
- **Availability** = (Operating Time - Downtime) / Operating Time × 100

### Request Body
```json
{
  "productionLineId": 1,
  "downtimeStart": "2026-02-11T14:30:00Z",
  "reasonCategory": "Mechanical",
  "reasonDescription": "Conveyor belt malfunction",
  "isPlanned": false,
  "notes": "Urgent repair needed"
}
```

### Response (Success)
```json
{
  "success": true,
  "data": {
    "id": 5001,
    "productionLineId": 1,
    "downtimeStart": "2026-02-11T14:30:00Z",
    "reasonCategory": "Mechanical",
    "isPlanned": false,
    "createdAt": "2026-02-11T14:30:00Z"
  },
  "message": "Downtime logged successfully"
}
```

### Reason Categories
- `Mechanical` - Equipment failure
- `Electrical` - Power/electrical issues
- `Material` - Material shortage
- `Quality` - Quality issues
- `Planned` - Scheduled maintenance
- `Changeover` - Product changeover
- `Other` - Other reasons

---

## 3. Complete Downtime

### Endpoint
```http
POST /api/v1/VendorClient/ProductionLine/{companyId}/downtime/{downtimeId}/complete
```

### Business Rules
- Line status returns to Idle
- Duration auto-calculated
- OEE availability recalculated

### Request Body
```json
{
  "downtimeEnd": "2026-02-11T16:00:00Z",
  "actionTaken": "Replaced conveyor belt, tested operation"
}
```

### Response (Success)
```json
{
  "success": true,
  "data": {
    "id": 5001,
    "downtimeStart": "2026-02-11T14:30:00Z",
    "downtimeEnd": "2026-02-11T16:00:00Z",
    "durationMinutes": 90,
    "actionTaken": "Replaced conveyor belt, tested operation"
  },
  "message": "Downtime completed successfully"
}
```

---

## 4. Start Changeover

### Endpoint
```http
POST /api/v1/VendorClient/ProductionLine/{companyId}/changeover/start
```

### Business Rules
- Line status changes to Changeover
- Allergen changeover requires CIP (Clean-In-Place)
- Estimated duration from line configuration
- **Performance** = (Actual Output / Theoretical Output) × 100

### Request Body
```json
{
  "productionLineId": 1,
  "changeoverStart": "2026-02-11T10:00:00Z",
  "changeoverType": "Product",
  "fromProductId": 100,
  "toProductId": 101,
  "requiresCleaning": true,
  "allergenChangeover": true,
  "cipRequired": true,
  "estimatedDuration": 45,
  "changeoverNotes": "Allergen changeover - full CIP required"
}
```

### Response (Success)
```json
{
  "success": true,
  "data": {
    "id": 6001,
    "productionLineId": 1,
    "changeoverStart": "2026-02-11T10:00:00Z",
    "changeoverType": "Product",
    "fromProductName": "Product A",
    "toProductName": "Product B",
    "estimatedDuration": 45,
    "createdAt": "2026-02-11T10:00:00Z"
  },
  "message": "Changeover started successfully"
}
```

### Changeover Types
- `Product` - Different product
- `Format` - Same product, different format
- `Material` - Material change
- `Maintenance` - Maintenance changeover

---

## 5. Complete Changeover

### Endpoint
```http
POST /api/v1/VendorClient/ProductionLine/{companyId}/changeover/{changeoverId}/complete
```

### Business Rules
- Line status returns to Idle
- Current product updated
- Actual duration vs estimated tracked for optimization

### Request Body
```json
{
  "changeoverEnd": "2026-02-11T10:50:00Z"
}
```

### Response (Success)
```json
{
  "success": true,
  "data": {
    "id": 6001,
    "changeoverStart": "2026-02-11T10:00:00Z",
    "changeoverEnd": "2026-02-11T10:50:00Z",
    "actualDuration": 50,
    "estimatedDuration": 45,
    "variance": 5
  },
  "message": "Changeover completed successfully"
}
```

---

## 6. Log Performance

### Endpoint
```http
POST /api/v1/VendorClient/ProductionLine/{companyId}/performance/log
```

### Business Rules
- **OEE** = Availability × Performance × Quality / 10000
- **Quality** = (Good Units / Total Units) × 100
- Logged hourly or per shift
- Triggers alerts if OEE < threshold

### Request Body
```json
{
  "productionLineId": 1,
  "logTime": "2026-02-11T15:00:00Z",
  "unitsProduced": 950,
  "lineSpeed": 110,
  "defectCount": 15,
  "rejectCount": 5
}
```

### Response (Success)
```json
{
  "success": true,
  "data": {
    "id": 7001,
    "productionLineId": 1,
    "logTime": "2026-02-11T15:00:00Z",
    "unitsProduced": 950,
    "efficiency": 95.0,
    "qualityRate": 97.9,
    "availability": 92.0,
    "performance": 95.0,
    "quality": 97.9,
    "oee": 85.5
  },
  "message": "Performance logged successfully"
}
```

---

## 7. Search Production Lines

### Endpoint
```http
POST /api/v1/VendorClient/ProductionLine/{companyId}/search
```

### Request Body
```json
{
  "searchTerm": "Assembly",
  "lineType": "Assembly",
  "status": "Running",
  "location": "Building 1",
  "pageNumber": 1,
  "pageSize": 20
}
```

### Response (Success)
```json
{
  "success": true,
  "data": {
    "items": [
      {
        "id": 1,
        "lineName": "Assembly Line A",
        "lineCode": "LINE-A01",
        "lineType": "Assembly",
        "status": "Running",
        "currentOEE": 85.5,
        "availability": 92.0,
        "performance": 95.0,
        "quality": 97.9,
        "createdAt": "2026-02-11T10:00:00Z"
      }
    ],
    "total": 1,
    "page": 1,
    "limit": 20
  },
  "message": "Found 1 production lines"
}
```

---

## Status Codes

| Status | Description |
|--------|-------------|
| `Idle` | Not running |
| `Running` | Active production |
| `Changeover` | Product changeover |
| `Breakdown` | Equipment failure |
| `Maintenance` | Scheduled maintenance |

---

## OEE Benchmarks

| OEE % | Rating | Action |
|-------|--------|--------|
| 85-100 | World Class | Maintain |
| 60-85 | Good | Optimize |
| 40-60 | Fair | Improve |
| < 40 | Poor | Urgent action |

---

## Business Scenarios

### Scenario 1: Unplanned Downtime
**Event**: Conveyor belt breaks at 2:30 PM  
**Action**: Log downtime, repair, complete at 4:00 PM  
**Impact**: Availability drops from 95% to 88%  
**OEE**: Recalculated from 85% to 79%

### Scenario 2: Allergen Changeover
**Event**: Switch from peanut to nut-free product  
**Action**: Full CIP cleaning required (60 min)  
**Tracking**: Changeover time, cleaning verification  
**Compliance**: HACCP documentation

### Scenario 3: Performance Optimization
**Target OEE**: 85%  
**Current**: 78% (Availability 92%, Performance 88%, Quality 96%)  
**Bottleneck**: Performance (line speed)  
**Action**: Increase line speed, reduce micro-stops

---

## Error Codes

| Code | Description | Resolution |
|------|-------------|------------|
| `Conflict` | Line code exists | Use unique code |
| `NotFound` | Line not found | Verify lineId |

---

## Related Pages
- **02_ProductionLines_List.html**
- **02_ProductionLines_Create.html**
- **02_ProductionLines_Downtime.html**
- **02_ProductionLines_Changeover.html**

---

**Last Updated**: February 2026
