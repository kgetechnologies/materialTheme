# Users API (Platform Admin)

## Base URL
`/api/v1/AppOwner/Users`

## Authentication
Requires `Admin` role

---

## Endpoints

### Query Users
**POST** `/query`

Get paginated list of all users across all companies.

**Request Body:**
```json
{
  "page": 1,
  "limit": 20,
  "status": 1,
  "ascending": true
}
```

**Status Values:**
- 0 = Unknown
- 1 = Active
- 2 = Inactive
- 3 = Blocked
- 4 = Deleted

---

### Create User
**POST** `/{companyId}/create`

Create new user for specific company.

**Request Body:**
```json
{
  "email": "user@example.com",
  "name": "John Doe",
  "active": true,
  "auth0Sub": "auth0|123456"
}
```

---

### Update User
**POST** `/{companyId}/{userId}/update`

Update user details.

**Request Body:**
```json
{
  "email": "newemail@example.com",
  "name": "Updated Name",
  "active": false
}
```

**HTML Mockup:** [01_Users_Edit.html](01_Users_Edit.html)

---

### Activate User
**POST** `/{companyId}/{userId}/activate`

Activate user account.

---

### Deactivate User
**POST** `/{companyId}/{userId}/deactivate`

Deactivate user account.

---

### Block User
**POST** `/{companyId}/{userId}/block`

Block user from accessing system.

---

### Assign Roles
**POST** `/{companyId}/{userId}/assign-roles`

Assign roles to user.

**Request Body:**
```json
{
  "roleIds": [1, 2, 3]
}
```

---

### Delete User
**POST** `/{companyId}/{userId}/delete`

Soft delete user (sets status to Deleted).
