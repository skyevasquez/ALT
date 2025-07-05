// Mock data for the application
import { Service, Customer, Job, TreeService, LawnService, AdminStats } from './types'

export const mockServices: Service[] = [
  { id: 1, service: 'Lawn Mowing', date: '2024-01-15', status: 'Completed', amount: 85, next: '2024-01-22' },
  { id: 2, service: 'Tree Trimming', date: '2024-01-10', status: 'Completed', amount: 250, next: '2024-04-10' },
  { id: 3, service: 'Fertilization', date: '2024-01-20', status: 'Scheduled', amount: 120, next: '2024-04-20' },
  { id: 4, service: 'Weed Control', date: '2024-01-05', status: 'Completed', amount: 95, next: '2024-02-05' }
]

export const mockCustomers: Customer[] = [
  { id: 1, name: 'John Smith', email: 'john@email.com', phone: '(555) 123-4567', address: '123 Main St', joinDate: '2023-03-15', totalSpent: 1250, status: 'Active' },
  { id: 2, name: 'Sarah Johnson', email: 'sarah@email.com', phone: '(555) 234-5678', address: '456 Oak Ave', joinDate: '2023-05-20', totalSpent: 890, status: 'Active' },
  { id: 3, name: 'Mike Wilson', email: 'mike@email.com', phone: '(555) 345-6789', address: '789 Pine Rd', joinDate: '2023-01-10', totalSpent: 2100, status: 'Inactive' }
]

export const mockJobs: Job[] = [
  { id: 1, customer: 'John Smith', service: 'Lawn Mowing', date: '2024-01-20', status: 'Scheduled', amount: 85 },
  { id: 2, customer: 'Sarah Johnson', service: 'Tree Trimming', date: '2024-01-18', status: 'In Progress', amount: 250 },
  { id: 3, customer: 'Mike Wilson', service: 'Fertilization', date: '2024-01-22', status: 'Scheduled', amount: 120 }
]

export const treeServices: TreeService[] = [
  {
    title: "Tree Trimming & Pruning",
    description: "Professional tree trimming to maintain health and appearance",
    price: "Starting at $150",
    features: ["Crown thinning", "Deadwood removal", "Shape correction", "Health assessment"]
  },
  {
    title: "Tree Removal",
    description: "Safe and complete tree removal with stump grinding",
    price: "Starting at $500",
    features: ["Safe removal", "Stump grinding", "Debris cleanup", "Emergency service"]
  },
  {
    title: "Tree Health Care",
    description: "Comprehensive tree health assessment and treatment",
    price: "Starting at $100",
    features: ["Disease diagnosis", "Pest treatment", "Soil analysis", "Fertilization"]
  }
]

export const lawnServices: LawnService[] = [
  {
    title: "Weekly Lawn Mowing",
    description: "Regular lawn maintenance to keep your grass healthy",
    price: "Starting at $45",
    features: ["Grass cutting", "Edge trimming", "Debris removal", "Pattern variation"]
  },
  {
    title: "Fertilization Program",
    description: "Seasonal fertilization for optimal lawn health",
    price: "Starting at $80",
    features: ["Soil testing", "Custom blend", "Seasonal application", "Growth monitoring"]
  },
  {
    title: "Weed & Pest Control",
    description: "Comprehensive weed and pest management",
    price: "Starting at $65",
    features: ["Weed identification", "Targeted treatment", "Pest prevention", "Follow-up service"]
  }
]

export const mockStats: AdminStats = {
  totalCustomers: 247,
  activeJobs: 18,
  monthlyRevenue: 45230,
  completedJobs: 156
}