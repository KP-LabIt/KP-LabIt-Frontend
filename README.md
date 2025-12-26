# KP-LabIt-Frontend

Frontend part for the KP LabIt Application. Built with React and Vite.

## Overview
KP-LabIt-Frontend is a web application designed to manage lab activities. It includes separate interfaces for Students, Teachers, and Admins.

## Tech Stack
- **Framework:** [React 19](https://react.dev/)
- **Build Tool:** [Vite 7](https://vitejs.dev/)
- **Routing:** [React Router 7](https://reactrouter.com/)
- **Icons:** [React Icons](https://react-icons.github.io/react-icons/)
- **Linting:** [ESLint](https://eslint.org/)
- **Package Manager:** [npm](https://www.npmjs.com/)

## Requirements
- [Node.js](https://nodejs.org/) (Latest LTS recommended)
- [npm](https://www.npmjs.com/)

## Setup & Installation
1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd KP-LabIt-Frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Configure environment variables (see [Environment Variables](#environment-variables)).

## Running the Application
### Development Mode
To start the development server with Hot Module Replacement (HMR):
```bash
npm run dev
```
The application will be available at `http://localhost:5173/` (by default).

## Environment Variables
Create a `.env` file in the root directory.

- `VITE_BACKEND_URL`: The base URL of the backend API. (get from discord)

## Project Structure
```text
src/
├── assets/             # Static assets (images, logos)
├── components/         # Reusable UI components
│   ├── Navbar/         # Navigation component
│   └── ...             # Feature-specific popups and cards
├── pages/              # Page-level components
│   ├── AdminPages/     # Admin-only pages
│   ├── StudentPages/   # Student-only pages
│   ├── TeacherPages/   # Teacher-only pages
│   └── GeneralPages/   # Shared pages (Login, Reset Password, etc.)
├── services/           # API and external service integrations
│   └── api.jsx         # Axios/Fetch configuration
├── styles/             # Global CSS styles
├── utils/              # Helper functions and route guards
│   ├── ProtectedRoute.jsx
│   └── ...
├── App.jsx             # Main Application component
├── main.jsx            # Entry point
└── routes.jsx          # Route definitions
```

## Development Guidelines

This section explains how the KP-LabIt-Frontend is structured and how to maintain the existing logic and workflow when adding new features.

### Architecture & Structure

The project follows a standard React structure with a clear separation of concerns:

- **`src/pages/`**: Page-level components that represent full views. They are organized by user role (`AdminPages`, `StudentPages`, `TeacherPages`) and `GeneralPages`.
- **`src/components/`**: Reusable UI components. Each component should have its own folder containing the `.jsx` and `.css` files.
- **`src/services/`**: Centralized API communication logic.
- **`src/utils/`**: Helper functions, route guards, and shared logic.
- **`src/styles/`**: Global styles.

### Communication Pattern (API)

All communication with the backend MUST go through `src/services/api.jsx`.

#### Guidelines:
1. **Centralization**: Do not use `fetch` or `axios` directly inside components. Add a new fetch function to `api.jsx`.
2. **Error Handling**: Use the `ErrorHandler` function in `api.jsx` to process responses and extract error details consistently.
3. **Consistency**: Follow the pattern of passing state setters (like `setError`) to fetch functions to handle UI feedback.

Example of adding a new API call:
```javascript
const MyNewFeatureFetch = async (data, setError) => {
    const url = BASE_URL + "api/my-feature/";
    try {
        const res = await fetch(url, { ... });
        const { detail, rawBody } = await ErrorHandler(res);
        if (res.ok) {
            // Success logic
        } else {
            setError(detail || "An error occurred");
        }
    } catch (err) {
        setError(err.message);
    }
};
```

### Routing & Security

Routing is defined in `src/routes.jsx` using React Router 7.

#### Role-Based Access Control (RBAC):
- Use `ProtectedRoute` to restrict access to specific roles.
- Use `GuestRoute` for pages that should only be accessible when NOT logged in (e.g., Login).

Example of a protected route:
```javascript
return createBrowserRouter([
    {
        path: "/admin/dashboard",
        element: (
            <ProtectedRoute
                allowedRoles={["admin"]}
                element={<AdminDashboard />}
            />
        ),
    },
]);
```

### State Management

1. **Local State**: Use `useState` for UI-specific state within components.
2. **Persistence**: Use `localStorage` for authentication tokens and user information (role, name, email).
3. **Global State**: Currently, the project relies on `localStorage` and prop drilling. If complexity increases, consider adding a Context API or a state management library.

### Workflow for New Features

1. **New Page**: Create a folder in `src/pages/[Role]Pages/MyNewPage/`.
2. **New Component**: Create a folder in `src/components/MyNewComponent/`.
3. **API Integration**: Add the necessary calls to `src/services/api.jsx`.
4. **Register Route**: Add the new route to `src/routes.jsx` with appropriate protections.
5. **Consistency**: Maintain the naming convention `PascalCase` for components and files. Use the existing CSS variable system if available.

### Coding Standards

- **Naming**: Use descriptive names for variables and functions.
- **Comments**: Keep the existing style of comments (mostly in Slovak, but new documentation is in English for broader reach).
- **Cleanup**: Always handle loading and error states in UI components when performing async operations.

## Testing
- [ ] TODO: Implement unit and integration tests.

## License
- [ ] TODO: Specify license (e.g., MIT, Private).