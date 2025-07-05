// Type definitions for the application

export interface Service {
  id: number
  service: string
  date: string
  status: 'Completed' | 'Scheduled' | 'In Progress' | 'Cancelled'
  amount: number
  next?: string
}

export interface Customer {
  id: number
  name: string
  email: string
  phone: string
  address: string
  joinDate: string
  totalSpent: number
  status: 'Active' | 'Inactive'
}

export interface Job {
  id: number
  customer: string
  service: string
  date: string
  status: 'Scheduled' | 'In Progress' | 'Completed' | 'Cancelled'
  amount: number
  notes?: string
}

export interface TreeService {
  title: string
  description: string
  price: string
  features: string[]
}

export interface LawnService {
  title: string
  description: string
  price: string
  features: string[]
}

export interface AdminStats {
  totalCustomers: number
  activeJobs: number
  monthlyRevenue: number
  completedJobs: number
}

export interface UserProfile {
  name: string
  email: string
  phone: string
  address: string
  memberSince: string
}