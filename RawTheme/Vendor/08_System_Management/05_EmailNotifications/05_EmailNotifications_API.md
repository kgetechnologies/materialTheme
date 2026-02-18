# Email Notifications API Documentation

## Endpoints

### 1. Search Email Notifications
**POST** `/api/v1/VendorClient/EmailNotification/{companyId}/search`

**Response:**
```json
{
  "items": [
    {
      "notificationPk": 1,
      "templateId": 10,
      "name": "Order Shipped",
      "subject": "Your order has shipped",
      "isActive": true,
      "createdAt": "2026-02-01T10:00:00Z"
    }
  ],
  "totalCount": 1
}
```

### 2. Create Email Notification
**POST** `/api/v1/VendorClient/EmailNotification/{companyId}/create`

**Request (example):**
```json
{
  "templateId": 10,
  "name": "Order Shipped",
  "subject": "Your order {{orderNumber}} has shipped",
  "body": "Hello {{customerName}},\nYour order {{orderNumber}} was shipped on {{shipDate}}.",
  "recipients": ["orders@company.com","{{customerEmail}}"],
  "isActive": true,
  "schedule": null
}
```

**Response (success):**
```json
{
  "success": true,
  "data": {
    "notificationPk": 11,
    "templateId": 10,
    "name": "Order Shipped",
    "subject": "Your order {{orderNumber}} has shipped",
    "isActive": true,
    "createdAt": "2026-02-16T13:30:00Z"
  },
  "message": "Email notification created"
}
```

## Business Rules
- Templates may contain tokens ({{token}}) replaced at send time
- Validate recipients are valid email addresses
- Scheduling uses ISO 8601 or CRON syntax depending on implementation

## Related Pages
- [Email Notifications List](05_EmailNotifications_List.html)
