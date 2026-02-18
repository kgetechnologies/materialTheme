# Environmental Compliance API Documentation

## Endpoints

### 1. Get Compliance Metrics
**POST** `/api/v1/VendorClient/EnvironmentalCompliance/{companyId}/metrics`

**Response:**
```json
{
  "carbonFootprint": 1250,
  "carbonFootprintUnit": "tons CO2",
  "wasteRecycledPercentage": 78,
  "energyConsumption": 45000,
  "energyConsumptionUnit": "kWh",
  "complianceReports": [
    {
      "reportType": "Emissions Report",
      "period": "Q1 2026",
      "status": "Submitted",
      "dueDate": "2026-04-15"
    }
  ]
}
```

### 2. Generate Compliance Report
**POST** `/api/v1/VendorClient/EnvironmentalCompliance/{companyId}/generate-report`

## Business Rules
- Tracks environmental metrics
- Regulatory compliance
- Sustainability reporting

## Related Pages
- [Environmental Compliance](04_EnvironmentalCompliance_View.html)
