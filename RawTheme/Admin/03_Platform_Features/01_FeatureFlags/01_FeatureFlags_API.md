# Feature Flags API

## Base URL
`/api/v1/AppOwner/FeatureFlags`

## Endpoints

### List All Feature Flags
**GET** `/`

Get all platform feature flags.

---

### List Company Feature Flags
**GET** `/{companyId}`

Get feature flags for specific company with enabled status.

---

### Create Feature Flag
**POST** `/create`

**Request:**
```json
{
  "key": "NewFeature_Create",
  "description": "New feature create operation",
  "enabledByDefault": true
}
```

---

### Seed Feature Flags
**POST** `/seed`

Seed all predefined feature flags.

---

### Toggle Company Feature
**POST** `/{companyId}/toggle`

Enable/disable feature for specific company.

**Request:**
```json
{
  "featureFlagId": 1,
  "enabled": true
}
```

## Feature Categories
- ProductionReporting (Create, Update, Delete)
- SupportTickets (Create, Update, Delete)
- Auth0Integration (Create, Update, Delete)
- ProductBOM (Create, Update, Delete)
- MaterialLotsTransfers (Create, Update, Delete)
- Quality (Create, Update, Delete)
- SchedulingOrderLines (Create, Update, Delete)
- RolesUsers (Create, Update, Delete)
- Warehouses (Create, Update, Delete)
- LocationsLayout (Create, Update, Delete)
- AuditHistory (Create, Update, Delete)
