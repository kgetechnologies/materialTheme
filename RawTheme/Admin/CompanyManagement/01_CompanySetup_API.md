# Company Setup API (Admin)

This API allows platform administrators to manage company status, billing, bank accounts, and documents for any company.

## Endpoints

- POST `/api/v1/AppOwner/Companies/{companyId}/status/activate`
- POST `/api/v1/AppOwner/Companies/{companyId}/status/deactivate`
- POST `/api/v1/AppOwner/Companies/{companyId}/status/suspend`
- POST `/api/v1/AppOwner/Companies/{companyId}/status/schedule-maintenance`
- GET `/api/v1/AppOwner/Companies/{companyId}/status/current`
- POST `/api/v1/AppOwner/Companies/{companyId}/billing/setup`
- GET `/api/v1/AppOwner/Companies/{companyId}/billing`
- PUT `/api/v1/AppOwner/Companies/{companyId}/billing/{id}`
- POST `/api/v1/AppOwner/Companies/{companyId}/bank-accounts`
- GET `/api/v1/AppOwner/Companies/{companyId}/bank-accounts`
- POST `/api/v1/AppOwner/Companies/{companyId}/bank-accounts/{id}/verify`
- POST `/api/v1/AppOwner/Companies/{companyId}/documents`
- GET `/api/v1/AppOwner/Companies/{companyId}/documents`
- POST `/api/v1/AppOwner/Companies/{companyId}/documents/{id}/verify`

See the original API docs for request/response samples.

---

**Note:** These endpoints are for admin use and are not tenant-scoped.
