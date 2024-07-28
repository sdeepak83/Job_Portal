

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import HomePage from './components/HomePage'
import LogIn from './components/auth/Login'
import SignUp from './components/auth/Signup'
import Jobs from './components/Jobs'
import Browse from './components/Browse'
import Profile from './components/Profile'
import JobDescription from './components/JobDescription'
import Companies from './components/admin/Companies'
import CompanyCreate from './components/admin/CompanyCreate'
import CompanySetup from './components/admin/CompanySetup'
import AdminJobs from './components/admin/AdminJobs'
import PostJob from './components/admin/PostJob'
import Applicants from './components/admin/Applicants'
import ProtectedRoute from './components/admin/ProtectedRoute'



function App() {
  const appRouter = createBrowserRouter([
    {
      path: '/',
      element: <HomePage />

    },
    {
      path: "/login",
      element: <LogIn />

    },
    {
      path: '/signup',
      element: <SignUp />
    },
    {
      path: '/jobs',
      element: <Jobs />
    },
    {
      path: '/jobs/description/:id',
      element: <JobDescription />
    },
    {
      path: '/browse',
      element: <Browse />
    },
    {
      path: '/profile',
      element: <Profile />
    },
    //  admin


    {
      path: '/admin/companies',
      element: <ProtectedRoute><Companies /></ProtectedRoute>
    },
    {
      path: '/admin/companies/create',
      element: <ProtectedRoute><CompanyCreate /></ProtectedRoute>
    },
    {
      path: '/admin/companies/:id',
      element: <ProtectedRoute><CompanySetup /></ProtectedRoute>
    },
    {
      path: '/admin/jobs',
      element: <ProtectedRoute>< AdminJobs /> </ProtectedRoute>
    },
    {
      path: '/admin/jobs/create',
      element: <ProtectedRoute><PostJob /></ProtectedRoute>
    },
    {
      path: '/admin/jobs/:id/applicants',
      element: <ProtectedRoute><Applicants /> </ProtectedRoute>
    },

  ])

  return (
    <RouterProvider router={appRouter}>

    </RouterProvider>
  )
}

export default App
