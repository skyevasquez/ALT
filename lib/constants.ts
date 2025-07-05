// Application constants

export const ADMIN_EMAIL = process.env.NEXT_PUBLIC_ADMIN_EMAIL || 'admin@absolutelawntree.com'

export const COMPANY_INFO = {
  name: 'Absolute Lawn & Tree',
  phone: '(555) 123-4567',
  email: 'info@absolutelawntree.com',
  address: 'Your City, State 12345',
} as const

export const SERVICE_STATUS = {
  COMPLETED: 'Completed',
  SCHEDULED: 'Scheduled',
  IN_PROGRESS: 'In Progress',
  CANCELLED: 'Cancelled',
} as const

export const CUSTOMER_STATUS = {
  ACTIVE: 'Active',
  INACTIVE: 'Inactive',
} as const

export const ROUTES = {
  HOME: '/',
  PORTAL: '/portal',
  ADMIN: '/portal/admin',
  SIGN_IN: '/sign-in',
  SIGN_UP: '/sign-up',
} as const