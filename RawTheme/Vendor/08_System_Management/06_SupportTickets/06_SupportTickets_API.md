# Support Tickets API Documentation

## Endpoints

### 1. Search Support Tickets
**POST** `/api/v1/VendorClient/SupportTicket/{companyId}/search`

**Response:**
```json
{
  "items": [
    {
      "ticketPk": 101,
      "subject": "Issue with order",
      "status": "Open",
      "priority": "High",
      "createdBy": "john@company.com",
      "createdAt": "2026-02-10T09:15:00Z"
    }
  ],
  "totalCount": 1
}
```

### 2. Create Support Ticket
**POST** `/api/v1/VendorClient/SupportTicket/{companyId}/create`

**Request (example):**
```json
{
  "subject": "Order processing error",
  "description": "Order #123 failed during processing",
  "priority": "High",
  "attachments": [],
  "category": "Orders"
}
```

**Response (success):**
```json
{
  "success": true,
  "data": {
    "ticketPk": 102,
    "subject": "Order processing error",
    "status": "Open",
    "priority": "High",
    "createdAt": "2026-02-16T13:35:00Z"
  },
  "message": "Support ticket created"
}
```

## Business Rules
- Attachments stored via file service and referenced by URL
- Ticket routing based on category and priority

## Related Pages
- [Support Tickets List](06_SupportTickets_List.html)
