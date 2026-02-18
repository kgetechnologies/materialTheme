# Vendor Cache Config API

## Base URL
`/api/v1/AppOwner/VendorCacheConfig`

## Authentication
Requires `Admin` role

---

## Endpoints

### Get All Configs
**GET** `/`

Get all vendor cache configurations.

**HTML Mockup:** [02_VendorCache_View.html](02_VendorCache_View.html)

---

### Get Cache Config
**GET** `/{companyPk}`

Get Redis cache configuration for specific company.

---

### Enable/Disable Caching
**POST** `/{companyPk}/enable-caching`

**Request:**
```json
{
  "enabled": true
}
```

**HTML Mockup:** [02_VendorCache_Create.html](02_VendorCache_Create.html) | [02_VendorCache_Edit.html](02_VendorCache_Edit.html)

---

### Set Redis Connection
**POST** `/{companyPk}/set-redis-connection`

**Request:**
```json
{
  "redisConnectionString": "localhost:6379,password=secret"
}
```

---

### Remove Redis Connection
**POST** `/{companyPk}/remove-redis-connection`

Revert to shared Redis instance.

---

### Set Isolation Level
**POST** `/{companyPk}/set-isolation-level`

**Request:**
```json
{
  "isolationLevel": 1
}
```

**Isolation Levels:**
- 0 = Disabled
- 1 = Shared
- 2 = Dedicated

---

### Set Cache TTL
**POST** `/{companyPk}/set-cache-ttl`

**Request:**
```json
{
  "ttlMinutes": 60
}
```

---

### Validate Redis Connection
**POST** `/validate-redis`

**Request:**
```json
{
  "redisConnectionString": "localhost:6379"
}
```

---

### Clear Cache
**POST** `/{companyPk}/clear`

Clear all cached data for company.

**HTML Mockup:** [02_VendorCache_Config.html](02_VendorCache_Config.html)
