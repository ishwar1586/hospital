# Hospital ERP — local development setup

## Backend
1. Open a terminal in `backend/` and run `npm install`.
2. Copy `.env.example` to `.env`.
3. Set `MONGODB_URI`, a unique random `JWT_SECRET` of at least 32 characters, `CORS_ORIGIN`, and `PORT`.
4. Start MongoDB, then run `npm run dev`.
5. Open the frontend. The first administrator can be created through `POST /api/auth/setup` (password minimum 12 characters), then sign in at `/api/auth/login`.

## Frontend
1. In the project root run `npm install`.
2. Copy `.env.example` to `.env` and set `VITE_API_URL=http://localhost:5000/api`.
3. Run `npm run dev`.
4. Run `npm run build` for the production bundle after dependencies are installed.

## Local image storage
Authenticated image upload: `POST /api/uploads/image`, multipart field `image`. Supported JPG/JPEG/PNG/WEBP/GIF, maximum 5 MB. Files are saved under `backend/uploads/images/`. MongoDB should store only the returned relative path, not the image bytes. Back up this folder with the database.

## Implemented backend foundation
- Separate MVC/service architecture: models, controllers, routes, services, middleware, validators, constants, config and utils.
- JWT authentication, role guards, audit logging, rate limiting and dashboard aggregates.
- Explicit MongoDB models for patients, doctors, departments, appointments, encounters, beds, admissions, nursing notes, lab/radiology orders, prescriptions, medicines, stock batches, invoices, payments, blood units/transactions, surgeries, staff, attendance, payroll, purchase orders, inventory transactions, insurance claims, refunds, emergency cases, ICU observations and discharge summaries.
- Clinical resource CRUD API at `/api/clinical/:type`, explicit status transitions for selected workflows, admission bed allocation/release, and invoice payment balance updates.
- Shared frontend API client and service adapters; previously empty page modules now have API-backed generic list pages or reusable component foundations.

## Not production-certified
This is an integration foundation, not a validated hospital information system. Some legacy screens/services still need screen-by-screen mapping to the domain API and their field contracts. Dedicated workflows still require completion and validation, including atomic bed transfers, pharmacy dispensing/stock deduction/returns, purchase GRN posting, refunds, insurance settlement, blood compatibility/cross-match, lab reference-range/critical-value handling, radiology/PACS/DICOM, consent, clinical signing, and accounting reconciliation. Configure institutional policies and obtain clinical, privacy, security and legal review before real patient data is entered.
