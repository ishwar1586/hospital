# Hospital ERP – completion handover

## Is release mein kiye gaye real code changes
- Shared pagination ko page-boundary handling aur configurable page sizes ke saath implement kiya.
- Layout configuration aur role constants/helpers ko actual values diye.
- Footer, loader, table loading/empty/error states ko usable components banaya.
- Common clinical API service layer banayi jo backend ke `{ data, pagination }` response ko normalize karti hai.
- Axios interceptor ko FormData upload, bearer token aur unauthorized event handling ke liye harden kiya.
- Supplier module ka null route component actual nested routes se replace kiya.
- Shared exports aur foundation CSS add ki.

## Important: abhi ise production-complete HMS na samjhein
Source archive mein 1,988 JS/JSX/TS source files the; automated scan mein 511 files short/stub candidates nikle. Is count mein chhote valid components bhi aa sakte hain, lekin kai files sach mein placeholder/no-op hain. Is archive mein generic clinical CRUD framework bhi hai; har module ka complete domain workflow, clinical validation, billing/accounting reconciliation, concurrency-safe inventory, blood-bank compatibility checks, reporting, permissions review aur end-to-end tests abhi independently verified nahi hain.

## Run
1. Frontend root: `npm install` then `npm run dev`
2. Backend: `cd backend`, copy `.env.example` to `.env`, set a unique JWT_SECRET (32+ chars), configure MongoDB, then `npm install` and `npm run dev`.
3. Admin seed: backend folder se `npm run seed:admin` (first-run credentials ko immediately change karein).

## Local uploads
Image upload backend ke configured local uploads folder mein save hota hai. Production deployment se pehle reverse-proxy/static access policy, backup, file-type validation aur retention policy review karein.

## Clinical safety
Real patient data use karne se pehle security review, backup/restore drill, role matrix verification, audit-log review, data migration test, clinical workflow sign-off aur hospital-specific regulatory review zaroor karein.
