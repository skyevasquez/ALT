import { TreePine, Phone, Mail, MapPin, Facebook, Twitter, Instagram } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-12 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-20 h-20 bg-green-500 rounded-full opacity-5 animate-float"></div>
        <div className="absolute bottom-20 right-20 w-16 h-16 bg-emerald-400 rounded-full opacity-10 animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/3 w-12 h-12 bg-green-600 rounded-full opacity-8 animate-float" style={{animationDelay: '1s'}}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2 animate-fade-in-left">
            <div className="flex items-center mb-4 hover-scale">
              <TreePine className="h-8 w-8 text-green-500 mr-2 animate-float" />
              <span className="text-xl font-bold bg-gradient-to-r from-white to-green-100 bg-clip-text text-transparent">
                Absolute Site Prep & Tree
              </span>
            </div>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Professional site preparation and tree services serving the community with quality and reliability. 
              Transform your outdoor space with our expert maintenance services.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-6 w-6 text-gray-400 hover:text-green-500 cursor-pointer transition-all duration-300 hover:scale-110 hover-glow" />
              <Twitter className="h-6 w-6 text-gray-400 hover:text-green-500 cursor-pointer transition-all duration-300 hover:scale-110 hover-glow" />
              <Instagram className="h-6 w-6 text-gray-400 hover:text-green-500 cursor-pointer transition-all duration-300 hover:scale-110 hover-glow" />
            </div>
          </div>

          {/* Services */}
          <div className="animate-fade-in-up stagger-1">
            <h3 className="text-lg font-semibold mb-4 text-green-400">Services</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-green-500 transition-all duration-300 hover:translate-x-2 block">Tree Trimming</a></li>
              <li><a href="#" className="hover:text-green-500 transition-all duration-300 hover:translate-x-2 block">Tree Removal</a></li>
              <li><a href="#" className="hover:text-green-500 transition-all duration-300 hover:translate-x-2 block">Land Clearing</a></li>
              <li><a href="#" className="hover:text-green-500 transition-all duration-300 hover:translate-x-2 block">Excavation</a></li>
               <li><a href="#" className="hover:text-green-500 transition-all duration-300 hover:translate-x-2 block">Site Grading</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="animate-fade-in-right stagger-2">
            <h3 className="text-lg font-semibold mb-4 text-green-400">Contact</h3>
            <div className="space-y-2 text-gray-300">
              <div className="flex items-center hover:text-green-400 transition-colors duration-300 hover-scale">
                <Phone className="h-4 w-4 mr-2 text-green-500 animate-pulse" />
                <span>(555) 123-4567</span>
              </div>
              <div className="flex items-center hover:text-green-400 transition-colors duration-300 hover-scale">
                <Mail className="h-4 w-4 mr-2 text-green-500 animate-pulse" style={{animationDelay: '0.5s'}} />
                <span>info@absolutesiteprep.com</span>
              </div>
              <div className="flex items-center hover:text-green-400 transition-colors duration-300 hover-scale">
                <MapPin className="h-4 w-4 mr-2 text-green-500 animate-pulse" style={{animationDelay: '1s'}} />
                <span>Your City, State 12345</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 animate-fade-in-up stagger-3">
          <p className="hover:text-green-400 transition-colors duration-300">
            &copy; 2024 Absolute Site Prep & Tree. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}