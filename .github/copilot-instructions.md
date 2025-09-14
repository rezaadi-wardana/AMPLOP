# Copilot Instructions for AMPLOP Project

## Project Overview
- **Frameworks Used:** Laravel (PHP backend), React (frontend, Inertia.js for SPA), Vite (frontend build), Tailwind CSS (styling)
- **Architecture:**
  - Backend: Laravel app in `app/`, routes in `routes/`, migrations in `database/migrations/`, models in `app/Models/`, controllers in `app/Http/Controllers/`
  - Frontend: React pages in `resources/js/pages/`, shared UI components in `resources/js/components/ui/`, layouts in `resources/js/layouts/`
  - Inertia.js bridges Laravel and React for SPA experience
- **Database:** MySQL (default), migrations in `database/migrations/`, seeders in `database/seeders/`

## Key Patterns & Conventions
- **CRUD:**
  - Backend controllers follow Laravel resource conventions (e.g., `CategoryController`, `ProductController`)
  - Frontend forms use Inertia's `useForm` for state and submission
  - Flash messages sent via Laravel's `with('success', ...)` and accessed in React via `usePage().props.flash.success`
- **Validation:**
  - Backend uses `$request->validate([...])` in controllers
  - Frontend displays errors from `useForm`'s `errors` object
- **Relational Data:**
  - Eloquent models define relationships (e.g., `Product belongsTo Category`)
  - Foreign keys and constraints set in migrations
- **Frontend Routing:**
  - Use `route('name')` for backend route names in Inertia forms
  - Pages are organized by feature in `resources/js/pages/`
- **Styling:**
  - Tailwind CSS utility classes are used throughout React components

## Developer Workflows
- **Build/Dev:**
  - Start Laravel backend: `php artisan serve`
  - Start frontend (Vite): `npm run dev`
- **Database:**
  - Run migrations: `php artisan migrate`
  - Rollback: `php artisan migrate:rollback`
- **Testing:**
  - PHP tests in `tests/` (Pest, PHPUnit)
  - Run: `php artisan test` or `./vendor/bin/pest`
- **Debugging:**
  - Use `dd($request)` in controllers for request inspection
  - React errors shown in browser console

## Integration Points
- **Inertia.js:**
  - Data passed from Laravel controllers to React via `Inertia::render()`
  - Flash messages and errors are shared via Laravel's `HandleInertiaRequests` middleware
- **Assets:**
  - Public assets (images, icons) in `public/img/`, referenced in React as `/img/filename.png`

## Examples
- **Category Creation (Backend):**
  ```php
  public function store(Request $request) {
      $request->validate([...]);
      Category::create($request->all());
      return redirect()->route('category.index')->with('success', 'Category created successfully.');
  }
  ```
- **Category Creation (Frontend):**
  ```tsx
  const { data, setData, post, errors } = useForm({ ... });
  <form onSubmit={e => { e.preventDefault(); post(route('category.store')); }}>
      {/* ...fields... */}
      {flash.success && <Alert>{flash.success}</Alert>}
  </form>
  ```

## Credentials
- Default admin: `admin@gmail.com` / `admin123`

---
_If any conventions or workflows are unclear, please ask for clarification or provide feedback to improve these instructions._
