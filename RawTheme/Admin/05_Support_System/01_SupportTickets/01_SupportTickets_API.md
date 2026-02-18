# Support Tickets API

## Base URL
`/api/v1/AppOwner/SupportTickets`

## Endpoints

### Query All Tickets
**POST** `/query`

Get all support tickets across companies.

**Request:**
```json
{
  "status": "Open",
  "priority": "High",
  "companyId": "guid",
  "page": 1,
  "limit": 20
}
```

---

### Get Ticket Details
**GET** `/{ticketId}`

Get ticket with full history.

---

### Assign Ticket
**POST** `/{ticketId}/assign`

**Request:**
```json
{
  "assignedTo": "admin-user-id"
}
```

---

### Resolve Ticket
**POST** `/{ticketId}/resolve`

**Request:**
```json
{
  "resolution": "Issue resolved by...",
  "resolutionNotes": "Additional details"
}
```

---

### Add Comment
**POST** `/{ticketId}/comment`

**Request:**
```json
{
  "comment": "Comment text"
}
```
