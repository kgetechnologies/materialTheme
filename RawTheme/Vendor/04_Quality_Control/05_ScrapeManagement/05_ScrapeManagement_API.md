# Scrape Management API Documentation

## Endpoints

### 1. Search Scrape Records
**POST** `/api/v1/VendorClient/ScrapeManagement/{companyId}/search`

**Response:**
```json
{
  "items": [
    {
      "scrapePk": 1,
      "scrapeDate": "2026-02-10",
      "materialPk": 8,
      "materialName": "Contaminated Resin",
      "quantity": 50,
      "unit": "L",
      "reason": "Chemical contamination",
      "disposalMethod": "Hazardous Waste Disposal",
      "disposalCost": 450
    }
  ]
}
```

### 2. Record Scrape
**POST** `/api/v1/VendorClient/ScrapeManagement/{companyId}/create`

**Request (example):**
```json
{
  "scrapeDate": "2026-02-10",
  "materialPk": 8,
  "quantity": 50,
  "unit": "L",
  "reason": "Chemical contamination",
  "disposalMethod": "Hazardous Waste Disposal",
  "disposalCost": 450,
  "notes": "Inventory write-off"
}
```

**Response (success):**
```json
{
  "success": true,
  "data": {
    "scrapePk": 2,
    "scrapeDate": "2026-02-10",
    "materialPk": 8,
    "quantity": 50,
    "unit": "L",
    "disposalMethod": "Hazardous Waste Disposal",
    "disposalCost": 450,
    "createdAt": "2026-02-16T12:50:00Z"
  },
  "message": "Scrape recorded"
}
```

## Business Rules
- Tracks disposal costs
- Environmental compliance
- Hazardous material handling

## Related Pages
- [Scrape Management List](05_ScrapeManagement_List.html)
