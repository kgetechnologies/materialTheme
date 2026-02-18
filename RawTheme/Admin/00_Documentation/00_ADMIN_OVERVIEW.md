# Platform Admin Overview

## Purpose
Platform Admin (AppOwner) area provides cross-tenant management capabilities for system administrators to manage all companies, users, features, and platform-wide operations.

## Key Differences from Vendor Area

| Aspect | Vendor (VendorClient) | Admin (AppOwner) |
|--------|----------------------|------------------|
| Scope | Single tenant | Cross-tenant |
| Route Pattern | `/api/v1/VendorClient/{controller}/{companyId}/...` | `/api/v1/AppOwner/{controller}/...` |
| Access | Company users | Platform admins only |
| Data Isolation | CompanyPk filtered | All companies visible |
| Role Required | Company_Admin, Manager, etc. | Admin (Super Admin) |

## Controllers (9 Total)

### 1. Company Management
- **CompaniesController** - Create, activate, deactivate companies; manage plans

### 2. User Management
- **UsersController** - Platform-wide user management

### 3. Platform Features
- **FeatureFlagsController** - Enable/disable features globally
- **VendorCacheConfigController** - Configure Redis cache per tenant
- **VendorDatabaseController** - Database provisioning and management

### 4. Monitoring & Analytics
- **MonitoringController** - Platform health, metrics, logs
- **StockDefectsController** - Cross-tenant defect analytics

### 5. Support System
- **SupportTicketsController** - Manage all support tickets
- **DocumentManagementController** - Platform-wide documents

## Authentication
All endpoints require `Admin` role (Super Admin).

## Base URL
`https://api.example.com/api/v1/AppOwner`
