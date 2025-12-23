// Definícia url routes

import { createBrowserRouter } from 'react-router-dom';
import ProtectedRoute from './utils/ProtectedRoute.jsx';
import GuestRoute from './utils/GuestRoute.jsx';

import RootPage from "./pages/GeneralPages/RootPage/RootPage.jsx";
import LoginPage from './pages/GeneralPages/LoginPage/LoginPage.jsx';
import UnauthorizedPage from './pages/GeneralPages/UnauthorizedPage/UnauthorizedPage.jsx';
import StudentActivityPage from './pages/StudentPages/StudentActivityPage/StudentActivityPage.jsx';
import TeacherActivityPage from './pages/TeacherPages/TeacherActivityPage/TeacherActivityPage.jsx';
import AdminPage from './pages/AdminPages/AdminPage/AdminPage.jsx';
import ResetPasswordPage from './pages/GeneralPages/ResetPasswordPage/ResetPasswordPage.jsx';
import ResetPasswordConfirmPage from "./pages/GeneralPages/ResetPasswordConfirmPage/ResetPasswordConfirmPage.jsx";
import ChangePasswordPage from "./pages/GeneralPages/ChangePasswordpage/ChangePasswordPage.jsx";


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
                path: "/reset-password",
                element: <ResetPasswordPage />,
            },

            {
                path: "/reset-password-confirm",
                element: <ResetPasswordConfirmPage />,
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
