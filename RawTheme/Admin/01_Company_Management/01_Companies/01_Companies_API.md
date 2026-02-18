# Companies API

## Base URL
`/api/v1/AppOwner/Companies`

## Authentication
Requires `Admin` role

---

## Endpoints

### Query Companies
**POST** `/query`

Get paginated list of all companies.

**Request Body:**
```json
{
  "page": 1,
  "limit": 20,
  "enabled": true,
  "ascending": true
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "items": [...],
    "total": 50,
    "page": 1,
    "limit": 20
  }
}
```

---

### Create Company
**POST** `/create`

Create new company with tenant provisioning.

**Request Body:**
```json
{
  "name": "Acme Manufacturing",
  "auth0Domain": "acme.auth0.com",
  "auth0Audience": "https://api.acme.com",
  "auth0ClientId": "client123",
  "logoUrl": "https://acme.com/logo.png",
  "contactEmail": "admin@acme.com",
  "contactPhone": "+1234567890",
  "address": "123 Main St"
}
```

---

### Update Company
**POST** `/{companyId}/update`

Update company details.

**Request Body:**
```json
{
  "name": "Updated Name",
  "auth0Domain": "updated.auth0.com",
  "auth0Audience": "https://api.updated.com",
  "auth0ClientId": "newclient123",
  "logoUrl": "https://updated.com/logo.png",
  "contactEmail": "contact@updated.com",
  "contactPhone": "+1987654321",
  "address": "456 New St"
}
```

**HTML Mockup:** [01_Companies_Edit.html](01_Companies_Edit.html)

---

### Activate Company
**POST** `/{companyId}/activate`

Enable company access.

---

### Deactivate Company
**POST** `/{companyId}/deactivate`

Disable company access.

---

### Change Plan
**POST** `/{companyId}/change-plan`

Change company subscription plan.

**Request Body:**
```json
{
  "newPlan": 1
}
```

**Plans:**
- 0 = Free
- 1 = Starter
- 2 = Professional
- 3 = Enterprise

---

### Get Usage Summary
**GET** `/{companyId}/usage-summary`

Get company resource usage vs plan limits.

---

### Get Feature Usage
**GET** `/{companyId}/feature-usage?period=Month`

Get feature usage statistics.

**Periods:** Hour, Day, Week, Month, Year
