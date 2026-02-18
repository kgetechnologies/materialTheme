# Vendor Database API

## Base URL
`/api/v1/AppOwner/VendorDatabase`

## Authentication
Requires `Admin` role

---

## Endpoints

### Get Database Config
**GET** `/{companyPk}`

Get database configuration for specific company.

**HTML Mockup:** [03_VendorDatabase_View.html](03_VendorDatabase_View.html)

---

### Create Database Config
**POST** `/create`

**Request:**
```json
{
  "companyPk": 12345,
  "server": "sql-server.database.windows.net",
  "database": "ManufacturingCRM",
  "connectionString": "Server=...;Database=...;",
  "autoProvision": true,
  "enableBackups": true,
  "backupRetentionDays": 30
}
```

**HTML Mockup:** [03_VendorDatabase_Create.html](03_VendorDatabase_Create.html)

---

### Update Database Config
**POST** `/{companyPk}/update`

**Request:**
```json
{
  "server": "sql-server.database.windows.net",
  "database": "ManufacturingCRM",
  "connectionString": "Server=...;Database=...;",
  "enableBackups": true,
  "backupRetentionDays": 30
}
```

**HTML Mockup:** [03_VendorDatabase_Edit.html](03_VendorDatabase_Edit.html)

---

### Provision Tenant Tables
**POST** `/{companyPk}/provision`

Provision tenant-specific database tables.

**HTML Mockup:** [03_VendorDatabase_Config.html](03_VendorDatabase_Config.html)

---

### Run Migrations
**POST** `/{companyPk}/migrate`

Run database migrations for tenant.

---

### Create Backup
**POST** `/{companyPk}/backup`

Create immediate database backup.

---

### Test Connection
**POST** `/{companyPk}/test-connection`

Test database connection.

---

### Get Table Stats
**GET** `/{companyPk}/table-stats`

Get table row counts and sizes.
