# Manufacturing CRM - Feature Categorization & UI Plan

## Feature Categories (Main Menu Structure)

### 1. **Product Management** (8 controllers)
- Products
- Product Variants
- Materials
- Bill of Materials (BOM)
- Product Lines
- Stage Definitions

### 2. **Production & Manufacturing** (7 controllers)
- Order Lines (Job Cards)
- Production Lines (OEE Tracking)
- Production Dashboard
- Small Scale Production (Batch, Recipes, Custom Jobs)
- Food Processing (HACCP, Allergen Control)
- Production Traceability

### 3. **Inventory & Warehouse** (6 controllers)
- Warehouses
- Stock Transfers
- Inventory Optimization (ABC Analysis, Reorder Points)
- Barcode/RFID Tracking
- Serialization
- Material Rejection

### 4. **Quality Control** (4 controllers)
- Defect Types
- Stock Defects
- Wastage Types
- Wastage Conversion
- Scrape Management

### 5. **Organization Setup** (8 controllers)
- Company Setup
- Locations
- Manufacturing Sites
- Departments
- Equipment
- Shifts
- Holidays
- Regional Address Management

### 6. **Customer & Supplier** (3 controllers)
- Customers
- Suppliers
- Order Line Edit History

### 7. **Analytics & Reports** (4 controllers)
- Analytics
- Reports
- Production Dashboard
- Environmental Compliance

### 8. **System Management** (6 controllers)
- Users
- Roles
- Organization Settings
- Document Management
- Email Notifications
- Support Tickets

### 9. **Authentication**
- Auth (Login/Logout)

---

## File Naming Convention

```
<CategoryNumber>_<SubCategory>_<PageType>.<Extension>

Examples:
01_Products_List.html
01_Products_Create.html
01_Products_Edit.html
01_Products_API.md

02_ProductVariants_List.html
02_ProductVariants_Create.html
02_ProductVariants_API.md
```

---

## Total Pages: ~189 HTML + 47 MD Files

**Status**: Awaiting Approval for 2 Sample Implementations
