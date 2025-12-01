// Definícia url routes

import { createBrowserRouter } from 'react-router-dom';
import ProtectedRoute from './utils/ProtectedRoute.jsx';
import GuestRoute from './utils/GuestRoute.jsx';

import RootPage from "./pages/RootPage/RootPage.jsx";
import LoginPage from './pages/LoginPage/LoginPage.jsx';
import UnauthorizedPage from './pages/UnauthorizedPage/UnauthorizedPage.jsx';
import StudentActivityPage from './pages/StudentActivityPage/StudentActivityPage.jsx';
import TeacherActivityPage from './pages/TeacherActivityPage/TeacherActivityPage.jsx';
import AdminPage from './pages/AdminPage/AdminPage.jsx';
import ChangePasswordPage from './pages/ChangePasswordPage/ChangePasswordPage.jsx';


export default function AppRouter() {
    return createBrowserRouter([


            // Root Route
            {
                path: "/",
                element: (
                    <GuestRoute element={<RootPage />}
                    />
                ),
            },


             // Guest Routes
            {
                path: "/login",
                element: (
                    <GuestRoute element={<LoginPage />}
                    />
                ),
            },


            // General Routes
            {
                path: "/unauthorized",
                element: (
                    <ProtectedRoute
                        allowedRoles={["student", "teacher", "admin"]}
                        element={<UnauthorizedPage />}
                    />
                ),
            },

            {
                path: "/change-password",
                element: (
                    <ProtectedRoute
                        allowedRoles={["student", "teacher", "admin"]}
                        element={<ChangePasswordPage />}
                    />
                ),
            },

            {
                path: "/change-password",
                element: (
                    <ProtectedRoute
                        allowedRoles={["student", "teacher", "admin"]}
                        element={<ChangePasswordPage />}
                    />
                ),
            },


            // STUDENT ROUTES
            {
                path: "/student/home",
                element: (
                    <ProtectedRoute
                        allowedRoles={["student", "admin"]}
                        element={<StudentActivityPage />}
                    />
                ),
            },


            // TEACHER ROUTES
            {
                path: "/teacher/home",
                element: (
                    <ProtectedRoute
                        allowedRoles={["teacher", "admin"]}
                        element={<TeacherActivityPage />}
                    />
                ),
            },


            // ADMIN ROUTES
            {
                path: "/admin/home",
                element: (
                    <ProtectedRoute
                        allowedRoles={["admin"]}
                        element={<AdminPage />}
                    />
                ),
            },


    ]);
}
