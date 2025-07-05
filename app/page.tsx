'use client'

import { useState, useEffect } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { 
  TreePine, 
  Scissors, 
  Sprout, 
  Shield, 
  Clock, 
  Star,
  Phone,
  Mail,
  MapPin,
  CheckCircle
} from 'lucide-react'

const treeServices = [
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
    features: ["Disease diagnosis", "Pest treatment", "Fertilization", "Soil analysis"]
  }
]

const sitePrepServices = [
  {
    title: "Land Clearing",
    description: "Professional land clearing for construction and development projects",
    price: "Starting at $150/hour",
    features: ["Brush removal", "Tree clearing", "Debris cleanup", "Site leveling"]
  },
  {
    title: "Excavation Services",
    description: "Complete excavation and grading for site preparation",
    price: "Starting at $200/hour",
    features: ["Site grading", "Foundation prep", "Drainage solutions", "Soil compaction"]
  },
  {
    title: "Utility Installation Prep",
    description: "Site preparation for utility lines and infrastructure",
    price: "Starting at $100/hour",
    features: ["Trenching", "Access roads", "Staging areas", "Safety planning"]
  }
]

const testimonials = [
  {
    name: 'Sarah Johnson',
    rating: 5,
    text: 'Absolute Site Prep & Tree cleared our construction site perfectly. Their attention to detail is incredible!'
  },
  {
    name: 'Mike Chen',
    rating: 5,
    text: 'Professional, reliable, and affordable. They\'ve been handling our site preparation for 3 years now.'
  },
  {
    name: 'Emily Rodriguez',
    rating: 5,
    text: 'Emergency tree removal was handled quickly and safely. Highly recommend their services!'
  }
]

export default function Home() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeTestimonial, setActiveTestimonial] = useState(0)

  useEffect(() => {
    setIsVisible(true)
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-50 via-emerald-50 to-blue-50 py-20 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-20 left-10 w-32 h-32 bg-green-200 rounded-full opacity-20 animate-bounce"></div>
            <div className="absolute top-40 right-20 w-24 h-24 bg-emerald-300 rounded-full opacity-25 animate-bounce" style={{animationDelay: '1s'}}></div>
            <div className="absolute bottom-32 left-1/4 w-20 h-20 bg-green-400 rounded-full opacity-30 animate-bounce" style={{animationDelay: '2s'}}></div>
          </div>
          
          {/* Floating Icons */}
          <TreePine className="absolute top-20 left-10 h-8 w-8 text-green-500 animate-bounce opacity-60 z-10" />
          <Sprout className="absolute top-40 right-20 h-6 w-6 text-emerald-600 animate-bounce opacity-70 z-10" style={{animationDelay: '1s'}} />
          <Scissors className="absolute bottom-32 left-1/4 h-7 w-7 text-green-600 animate-bounce opacity-65 z-10" style={{animationDelay: '2s'}} />
          
          {/* Additional decorative elements */}
          <div className="absolute top-1/2 right-10 w-16 h-16 border-2 border-green-300 rounded-full animate-spin opacity-30" style={{animationDuration: '8s'}}></div>
          <div className="absolute bottom-20 right-1/3 w-12 h-12 border-2 border-emerald-400 rounded-full animate-spin opacity-40" style={{animationDelay: '3s', animationDuration: '6s'}}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className={`text-4xl md:text-6xl font-bold text-green-800 mb-6 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              Professional <span className="text-emerald-600 animate-pulse">Site Prep</span> & <span className="text-green-700 animate-pulse">Tree Services</span>
            </h1>
            <p className={`text-xl text-gray-600 mb-8 max-w-3xl mx-auto transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              Transform your outdoor space with our expert site preparation and tree care services. 
              Serving the community with quality and reliability.
            </p>
            <div className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 delay-500 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              <Button size="lg" className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-8 py-3 transition-all duration-300 hover:scale-105 hover:shadow-lg transform">
                <Phone className="mr-2 h-5 w-5" />
                Get Free Quote
              </Button>
              <Button size="lg" variant="outline" className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white px-8 py-3 transition-all duration-300 hover:scale-105 hover:shadow-lg transform">
                View Our Work
              </Button>
            </div>
            
            {/* Trust indicators */}
            <div className={`mt-12 flex flex-wrap justify-center items-center gap-8 text-sm text-gray-500 transition-all duration-1000 delay-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              <div className="flex items-center gap-2 hover:scale-105 transition-transform duration-200">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span>Licensed & Insured</span>
              </div>
              <div className="flex items-center gap-2 hover:scale-105 transition-transform duration-200">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
                <span>10+ Years Experience</span>
              </div>
              <div className="flex items-center gap-2 hover:scale-105 transition-transform duration-200">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
                <span>100% Satisfaction Guarantee</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 transform transition-all duration-700 hover:scale-105">Our Services</h2>
            <p className="text-lg text-gray-600">Choose from our comprehensive range of outdoor services</p>
          </div>

          <Tabs defaultValue="tree-services" className="w-full">
            <TabsList className="grid w-full grid-cols-2 h-14 p-1 bg-white rounded-xl shadow-sm border">
              <TabsTrigger 
                value="tree-services" 
                className="h-12 px-8 text-base font-medium data-[state=active]:bg-green-600 data-[state=active]:text-white data-[state=inactive]:text-gray-600 data-[state=inactive]:hover:text-gray-900 transition-all duration-200 rounded-lg"
              >
                <TreePine className="mr-2 h-5 w-5" />
                Tree Services
              </TabsTrigger>
              <TabsTrigger 
                value="site-prep" 
                className="h-12 px-8 text-base font-medium data-[state=active]:bg-green-600 data-[state=active]:text-white data-[state=inactive]:text-gray-600 data-[state=inactive]:hover:text-gray-900 transition-all duration-200 rounded-lg"
              >
                <Sprout className="mr-2 h-5 w-5" />
                Site Prep
              </TabsTrigger>
            </TabsList>

            <TabsContent value="tree-services" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {treeServices.map((service, index) => (
                  <Card key={index} className="hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <TreePine className="h-8 w-8 text-green-600 transition-transform duration-300 hover:rotate-12" />
                        <Badge variant="secondary" className="bg-green-100 text-green-700">
                          {service.price}
                        </Badge>
                      </div>
                      <CardTitle className="text-xl transition-colors duration-300 hover:text-green-600">{service.title}</CardTitle>
                      <CardDescription className="text-gray-600">
                        {service.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 mb-4">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-sm text-gray-600 transition-all duration-200 hover:text-green-600 hover:translate-x-2">
                            <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0 transition-transform duration-200 hover:scale-125" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <Button className="w-full bg-green-600 hover:bg-green-700 transition-all duration-200 transform hover:scale-105">
                        Request Quote
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="site-prep" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {sitePrepServices.map((service, index) => (
                  <Card key={index} className="hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <Sprout className="h-8 w-8 text-green-600 transition-transform duration-300 hover:rotate-12" />
                        <Badge variant="secondary" className="bg-green-100 text-green-700">
                          {service.price}
                        </Badge>
                      </div>
                      <CardTitle className="text-xl transition-colors duration-300 hover:text-green-600">{service.title}</CardTitle>
                      <CardDescription className="text-gray-600">
                        {service.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 mb-4">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-sm text-gray-600 transition-all duration-200 hover:text-green-600 hover:translate-x-2">
                            <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0 transition-transform duration-200 hover:scale-125" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <Button className="w-full bg-green-600 hover:bg-green-700 transition-all duration-200 transform hover:scale-105">
                        Request Quote
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-green-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
            What Our Customers Say
          </h2>
          <div className="relative h-48 overflow-hidden">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-all duration-500 transform ${
                  index === activeTestimonial
                    ? 'translate-x-0 opacity-100'
                    : index < activeTestimonial
                    ? '-translate-x-full opacity-0'
                    : 'translate-x-full opacity-0'
                }`}
              >
                <Card className="bg-white shadow-lg border-0">
                  <CardContent className="p-8">
                    <div className="flex justify-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-lg text-gray-600 mb-4 italic">
                      "{testimonial.text}"
                    </p>
                    <p className="font-semibold text-gray-900">
                      - {testimonial.name}
                    </p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === activeTestimonial
                    ? 'bg-green-600 scale-125'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 transform transition-all duration-700 hover:scale-105">
              Get Your Free Quote Today
            </h2>
            <p className="text-lg text-gray-600">
              Ready to transform your outdoor space? Contact us for a personalized consultation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-center group hover:bg-green-50 p-4 rounded-lg transition-all duration-300 hover:scale-105">
                <Phone className="h-6 w-6 text-green-600 mr-4 transition-transform duration-300 group-hover:rotate-12" />
                <div>
                  <h3 className="font-semibold text-gray-900 group-hover:text-green-600 transition-colors duration-300">Call Us</h3>
                  <p className="text-gray-600">(555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-center group hover:bg-green-50 p-4 rounded-lg transition-all duration-300 hover:scale-105">
                <Mail className="h-6 w-6 text-green-600 mr-4 transition-transform duration-300 group-hover:rotate-12" />
                <div>
                  <h3 className="font-semibold text-gray-900 group-hover:text-green-600 transition-colors duration-300">Email Us</h3>
                  <p className="text-gray-600">info@absolutesiteprep.com</p>
                </div>
              </div>
              
              <div className="flex items-center group hover:bg-green-50 p-4 rounded-lg transition-all duration-300 hover:scale-105">
                <MapPin className="h-6 w-6 text-green-600 mr-4 transition-transform duration-300 group-hover:rotate-12" />
                <div>
                  <h3 className="font-semibold text-gray-900 group-hover:text-green-600 transition-colors duration-300">Service Area</h3>
                  <p className="text-gray-600">Your City and Surrounding Areas</p>
                </div>
              </div>
            </div>
            
            <Card className="hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2">
              <CardHeader>
                <CardTitle className="transition-colors duration-300 hover:text-green-600">Request a Quote</CardTitle>
                <CardDescription>Fill out the form and we'll get back to you within 24 hours</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                    <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 transition-all duration-200 hover:border-green-400" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                    <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 transition-all duration-200 hover:border-green-400" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input type="email" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 transition-all duration-200 hover:border-green-400" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                  <input type="tel" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 transition-all duration-200 hover:border-green-400" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Service Needed</label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 transition-all duration-200 hover:border-green-400">
                    <option>Select a service</option>
                    <option>Tree Services</option>
                    <option>Site Preparation</option>
                    <option>Landscaping</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea rows={4} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 transition-all duration-200 hover:border-green-400" placeholder="Tell us about your project..."></textarea>
                </div>
                <Button className="w-full bg-green-600 hover:bg-green-700 transition-all duration-200 transform hover:scale-105 hover:shadow-lg">
                  Send Message
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Service Areas Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-green-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 transform transition-all duration-700 hover:scale-105">
              Service Areas
            </h2>
            <p className="text-lg text-gray-600">
              We proudly serve the following counties and cities in Central Florida
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Primary Service Counties */}
            <Card className="hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2">
              <CardHeader>
                <CardTitle className="text-xl text-green-700 flex items-center">
                  <MapPin className="h-6 w-6 mr-2" />
                  Primary Service Counties
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-700 hover:text-green-600 transition-colors duration-200">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                    Sumter County
                  </li>
                  <li className="flex items-center text-gray-700 hover:text-green-600 transition-colors duration-200">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                    Citrus County
                  </li>
                  <li className="flex items-center text-gray-700 hover:text-green-600 transition-colors duration-200">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                    Lake County
                  </li>
                  <li className="flex items-center text-gray-700 hover:text-green-600 transition-colors duration-200">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                    Marion County
                  </li>
                  <li className="flex items-center text-gray-700 hover:text-green-600 transition-colors duration-200">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                    Alachua County
                  </li>
                  <li className="flex items-center text-gray-700 hover:text-green-600 transition-colors duration-200">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                    Hernando County
                  </li>
                  <li className="flex items-center text-gray-700 hover:text-green-600 transition-colors duration-200">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                    Levy County
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Extended Service Areas */}
            <Card className="hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2">
              <CardHeader>
                <CardTitle className="text-xl text-green-700 flex items-center">
                  <MapPin className="h-6 w-6 mr-2" />
                  Extended Service Areas
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 bg-green-100 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-2">Surrounding Areas</h4>
                    <p className="text-sm text-green-700">
                      We consider projects in surrounding areas on a job-to-job basis. 
                      Contact us to discuss your specific location and project needs.
                    </p>
                  </div>
                  <div className="flex items-center justify-center p-4">
                    <Button className="bg-green-600 hover:bg-green-700 transition-all duration-200 transform hover:scale-105">
                      <Phone className="mr-2 h-4 w-4" />
                      Check Service Availability
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Service Commitment */}
            <Card className="hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2">
              <CardHeader>
                <CardTitle className="text-xl text-green-700 flex items-center">
                  <Shield className="h-6 w-6 mr-2" />
                  Our Commitment
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-700">
                    <Clock className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                    Prompt Response Times
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                    Licensed & Insured
                  </li>
                  <li className="flex items-center text-gray-700">
                    <Star className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                    Quality Workmanship
                  </li>
                  <li className="flex items-center text-gray-700">
                    <Shield className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                    Safety First Approach
                  </li>
                </ul>
                <div className="mt-4 p-3 bg-gray-50 rounded-lg">
                  <p className="text-sm text-gray-600 text-center">
                    Serving Central Florida with professional site preparation and tree services since 2010
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}