'use client'

import { useState } from 'react'
import { useUser } from '@clerk/nextjs'
import { LoadingSpinner } from '@/components/ui/loading-spinner'
import { ErrorBoundary } from '@/components/ui/error-boundary'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Badge } from '@/components/ui/badge'
import { 
  Calendar, 
  DollarSign, 
  FileText, 
  MessageSquare,
  CheckCircle,
  Clock,
  AlertTriangle,
  User,
  Phone,
  Mail,
  MapPin
} from 'lucide-react'

// Mock data for customer portal
const mockServices = [
  { id: 1, service: 'Lawn Mowing', date: '2024-01-15', status: 'Completed', amount: 85, next: '2024-01-22' },
  { id: 2, service: 'Tree Trimming', date: '2024-01-10', status: 'Completed', amount: 250, next: '2024-04-10' },
  { id: 3, service: 'Fertilization', date: '2024-01-20', status: 'Scheduled', amount: 120, next: '2024-01-20' }
]

const mockInvoices = [
  { id: 1, date: '2024-01-15', service: 'Lawn Mowing', amount: 85, status: 'Paid' },
  { id: 2, date: '2024-01-10', service: 'Tree Trimming', amount: 250, status: 'Paid' },
  { id: 3, date: '2024-01-05', service: 'Lawn Mowing', amount: 85, status: 'Pending' }
]

export default function CustomerPortal() {
  const { user, isLoaded } = useUser()
  const [activeTab, setActiveTab] = useState('overview')

  if (!isLoaded) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <LoadingSpinner size="lg" />
      </div>
    )
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Completed':
      case 'Paid':
        return <CheckCircle className="h-4 w-4 text-green-500" />
      case 'Scheduled':
      case 'Pending':
        return <Clock className="h-4 w-4 text-yellow-500" />
      default:
        return <AlertTriangle className="h-4 w-4 text-red-500" />
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed':
      case 'Paid':
        return 'bg-green-100 text-green-700'
      case 'Scheduled':
      case 'Pending':
        return 'bg-yellow-100 text-yellow-700'
      default:
        return 'bg-red-100 text-red-700'
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Customer Portal</h1>
              <p className="text-gray-600">Welcome back, {user?.fullName || user?.primaryEmailAddress?.emailAddress}</p>
            </div>
            <Button className="bg-green-600 hover:bg-green-700">
              Request New Service
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="services">Services</TabsTrigger>
            <TabsTrigger value="invoices">Invoices</TabsTrigger>
            <TabsTrigger value="profile">Profile</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Next Service</p>
                      <p className="text-2xl font-bold text-gray-900">Jan 22</p>
                      <p className="text-sm text-gray-500">Lawn Mowing</p>
                    </div>
                    <Calendar className="h-8 w-8 text-green-600" />
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">This Month</p>
                      <p className="text-2xl font-bold text-gray-900">$205</p>
                      <p className="text-sm text-gray-500">2 services</p>
                    </div>
                    <DollarSign className="h-8 w-8 text-green-600" />
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Pending</p>
                      <p className="text-2xl font-bold text-gray-900">1</p>
                      <p className="text-sm text-gray-500">Invoice</p>
                    </div>
                    <FileText className="h-8 w-8 text-yellow-600" />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Recent Activity */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
                <CardDescription>Your latest services and updates</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {mockServices.slice(0, 3).map((service) => (
                    <div key={service.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center space-x-3">
                        {getStatusIcon(service.status)}
                        <div>
                          <p className="font-medium">{service.service}</p>
                          <p className="text-sm text-gray-500">{service.date}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <Badge className={getStatusColor(service.status)}>
                          {service.status}
                        </Badge>
                        <p className="text-sm text-gray-500 mt-1">${service.amount}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Services Tab */}
          <TabsContent value="services" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Service History</CardTitle>
                <CardDescription>All your past and upcoming services</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {mockServices.map((service) => (
                    <div key={service.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center space-x-3">
                        {getStatusIcon(service.status)}
                        <div>
                          <p className="font-medium">{service.service}</p>
                          <p className="text-sm text-gray-500">Service Date: {service.date}</p>
                          {service.next && (
                            <p className="text-sm text-green-600">Next: {service.next}</p>
                          )}
                        </div>
                      </div>
                      <div className="text-right">
                        <Badge className={getStatusColor(service.status)}>
                          {service.status}
                        </Badge>
                        <p className="text-sm text-gray-500 mt-1">${service.amount}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Invoices Tab */}
          <TabsContent value="invoices" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Invoices</CardTitle>
                <CardDescription>Your billing history and pending payments</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {mockInvoices.map((invoice) => (
                    <div key={invoice.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center space-x-3">
                        {getStatusIcon(invoice.status)}
                        <div>
                          <p className="font-medium">Invoice #{invoice.id}</p>
                          <p className="text-sm text-gray-500">{invoice.service} - {invoice.date}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <Badge className={getStatusColor(invoice.status)}>
                          {invoice.status}
                        </Badge>
                        <p className="text-sm text-gray-500 mt-1">${invoice.amount}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Profile Tab */}
          <TabsContent value="profile" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Profile Information</CardTitle>
                <CardDescription>Your account details and preferences</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <User className="h-5 w-5 text-gray-400" />
                  <div>
                    <p className="font-medium">Name</p>
                    <p className="text-gray-600">{user?.fullName || 'Not provided'}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-gray-400" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-gray-600">{user?.primaryEmailAddress?.emailAddress}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-gray-400" />
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-gray-600">{user?.primaryPhoneNumber?.phoneNumber || 'Not provided'}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-gray-400" />
                  <div>
                    <p className="font-medium">Service Address</p>
                    <p className="text-gray-600">123 Main St, Your City, ST 12345</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}