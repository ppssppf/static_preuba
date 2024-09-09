import React, { useState, useEffect } from 'react'
import { Button } from './button'
import { Input } from './input'
import { Textarea } from './textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./select"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "./dialog"
import { MapPin, Truck, Calendar, Sun, Moon, Facebook, Instagram, Phone, Mail, MapPin as Location } from 'lucide-react'

export default function LandingPage() {
  const [activeSection, setActiveSection] = useState('home')
  const [darkMode, setDarkMode] = useState(false)
  const [formData, setFormData] = useState({
    fullName: '',
    idNumber: '',
    eventType: ''
  })
  const [formError, setFormError] = useState(false)

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }))
  }

  const handleSelectChange = (value) => {
    setFormData(prevData => ({
      ...prevData,
      eventType: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (formData.fullName && formData.idNumber && formData.eventType) {
      console.log('Form submitted:', formData)
      // Here you would typically send the data to a server
      setFormError(false)
    } else {
      setFormError(true)
      setTimeout(() => setFormError(false), 500) // Reset shake effect after 500ms
    }
  }

  const galleryImages = [
    { src: "/placeholder.svg?height=300&width=400", alt: "Evento corporativo" },
    { src: "/placeholder.svg?height=300&width=400", alt: "Conferencia internacional" },
    { src: "/placeholder.svg?height=300&width=400", alt: "Boda elegante" },
    { src: "/placeholder.svg?height=300&width=400", alt: "Festival al aire libre" },
    { src: "/placeholder.svg?height=300&width=400", alt: "Lanzamiento de producto" },
    { src: "/placeholder.svg?height=300&width=400", alt: "Gala benéfica" },
  ]

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'dark bg-gray-900' : 'bg-orange-50'}`}>
      <nav className={`${darkMode ? 'bg-green-900' : 'bg-green-800'} text-white p-4 transition-colors duration-300`}>
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">LogiEventos</h1>
          <div className="space-x-4 flex items-center">
            <Button variant="ghost" onClick={() => setActiveSection('about')}>Quienes Somos</Button>
            <Button variant="ghost" onClick={() => setActiveSection('services')}>Servicios</Button>
            <Button variant="ghost" onClick={() => setActiveSection('gallery')}>Galería</Button>
            <Button variant="ghost" onClick={() => setActiveSection('contact')}>Contáctenos</Button>
            <Button variant="outline" size="icon" onClick={toggleDarkMode}>
              {darkMode ? <Sun className="h-[1.2rem] w-[1.2rem]" /> : <Moon className="h-[1.2rem] w-[1.2rem]" />}
              <span className="sr-only">Toggle dark mode</span>
            </Button>
          </div>
        </div>
      </nav>

      <main className={`container mx-auto mt-8 p-4 ${darkMode ? 'text-white' : 'text-gray-900'} transition-colors duration-300`}>
        {activeSection === 'home' && (
          <div className="text-center">
            <h2 className={`text-4xl font-bold mb-4 ${darkMode ? 'text-green-400' : 'text-green-800'} transition-colors duration-300`}>Bienvenidos a LogiEventos</h2>
            <p className={`text-xl mb-8 ${darkMode ? 'text-orange-300' : 'text-orange-700'} transition-colors duration-300`}>Su socio confiable en logística de eventos</p>
            <img src="https://picsum.photos/300/200" alt="Evento logístico" className="mx-auto rounded-lg shadow-lg" />
          </div>
        )}

        {activeSection === 'about' && (
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <h2 className={`text-3xl font-bold mb-4 ${darkMode ? 'text-green-400' : 'text-green-800'} transition-colors duration-300`}>Quienes Somos</h2>
                <p className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-700'} transition-colors duration-300`}>
                  LogiEventos es una empresa líder en la planificación y ejecución de eventos logísticos. Con años de experiencia en el mercado, nos hemos consolidado como un socio confiable para empresas y organizaciones que buscan realizar eventos de alta calidad y eficiencia.
                </p>
              </div>
              <div>
                <h3 className={`text-2xl font-bold mb-2 ${darkMode ? 'text-green-400' : 'text-green-800'} transition-colors duration-300`}>Misión</h3>
                <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'} transition-colors duration-300`}>
                  Nuestra misión es proporcionar soluciones logísticas innovadoras y eficientes para eventos de todo tipo, garantizando el éxito y la satisfacción de nuestros clientes en cada proyecto que emprendemos.
                </p>
              </div>
              <div>
                <h3 className={`text-2xl font-bold mb-2 ${darkMode ? 'text-green-400' : 'text-green-800'} transition-colors duration-300`}>Visión</h3>
                <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'} transition-colors duration-300`}>
                  Aspiramos a ser reconocidos como la empresa líder en logística de eventos a nivel nacional, destacando por nuestra excelencia operativa, innovación constante y compromiso con la sostenibilidad en la industria de eventos.
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <img src="https://picsum.photos/300/200" alt="Nuestro equipo" className="rounded-lg shadow-lg w-full" />
              <div>
                <h3 className={`text-2xl font-bold mb-4 ${darkMode ? 'text-green-400' : 'text-green-800'} transition-colors duration-300`}>Contáctanos</h3>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <Phone className="mr-2" />
                    <p>+1 234 567 890</p>
                  </div>
                  <div className="flex items-center">
                    <Mail className="mr-2" />
                    <p>info@logieventos.com</p>
                  </div>
                  <div className="flex items-center">
                    <Location className="mr-2" />
                    <p>123 Calle Principal, Ciudad, País</p>
                  </div>
                </div>
              </div>
              <div>
                <h3 className={`text-2xl font-bold mb-4 ${darkMode ? 'text-green-400' : 'text-green-800'} transition-colors duration-300`}>Síguenos</h3>
                <div className="flex space-x-4">
                  <Button variant="outline" size="icon">
                    <Facebook className="h-4 w-4" />
                    <span className="sr-only">Facebook</span>
                  </Button>
                  <Button variant="outline" size="icon">
                    <Instagram className="h-4 w-4" />
                    <span className="sr-only">Instagram</span>
                  </Button>
                  <Button variant="outline" size="icon">
                    <Phone className="h-4 w-4" />
                    <span className="sr-only">WhatsApp</span>
                  </Button>
                </div>
              </div>
              <div className={`border-t ${darkMode ? 'border-gray-700' : 'border-gray-200'} pt-4`}>
                <p className="text-sm">&copy; 2023 LogiEventos. Todos los derechos reservados.</p>
              </div>
            </div>
          </div>
        )}

        {activeSection === 'services' && (
          <div>
            <h2 className={`text-3xl font-bold mb-4 ${darkMode ? 'text-green-400' : 'text-green-800'} transition-colors duration-300`}>Nuestros Servicios</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className={`p-6 rounded-lg shadow-md ${darkMode ? 'bg-gray-800' : 'bg-white'} transition-colors duration-300`}>
                <MapPin className={`h-12 w-12 mb-4 ${darkMode ? 'text-orange-300' : 'text-orange-500'} transition-colors duration-300`} />
                <h3 className="text-xl font-semibold mb-2">Planificación de Ubicación</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris.</p>
              </div>
              <div className={`p-6 rounded-lg shadow-md ${darkMode ? 'bg-gray-800' : 'bg-white'} transition-colors duration-300`}>
                <Truck className={`h-12 w-12 mb-4 ${darkMode ? 'text-orange-300' : 'text-orange-500'} transition-colors duration-300`} />
                <h3 className="text-xl font-semibold mb-2">Transporte y Logística</h3>
                <p>Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor.</p>
              </div>
              <div className={`p-6 rounded-lg shadow-md ${darkMode ? 'bg-gray-800' : 'bg-white'} transition-colors duration-300`}>
                <Calendar className={`h-12 w-12 mb-4 ${darkMode ? 'text-orange-300' : 'text-orange-500'} transition-colors duration-300`} />
                <h3 className="text-xl font-semibold mb-2">Coordinación de Eventos</h3>
                <p>Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor.</p>
              </div>
            </div>
            <div className="text-center">
              <Dialog>
                <DialogTrigger asChild>
                  <Button className={`${darkMode ? 'bg-orange-600 hover:bg-orange-700' : 'bg-orange-500 hover:bg-orange-600'} transition-colors duration-300`}>
                    Solicitar Evento
                  </Button>
                </DialogTrigger>
                <DialogContent className={`${darkMode ? 'bg-gray-800 text-white' : 'bg-white'} transition-colors duration-300`}>
                  <DialogHeader>
                    <DialogTitle className={`text-2xl font-bold ${darkMode ? 'text-green-400' : 'text-green-800'}`}>Solicitar Evento</DialogTitle>
                  </DialogHeader>
                  <form onSubmit={handleSubmit} className={`space-y-4 ${formError ? 'animate-shake' : ''}`}>
                    <div>
                      <label htmlFor="fullName" className="block text-sm font-medium mb-1">Nombres y Apellidos Completos</label>
                      <Input
                        type="text"
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        className={darkMode ? 'bg-gray-700 text-white' : ''}
                      />
                    </div>
                    <div>
                      <label htmlFor="idNumber" className="block text-sm font-medium mb-1">Número de Identificación</label>
                      <Input
                        type="text"
                        id="idNumber"
                        name="idNumber"
                        value={formData.idNumber}
                        onChange={handleInputChange}
                        className={darkMode ? 'bg-gray-700 text-white' : ''}
                      />
                    </div>
                    <div>
                      <label htmlFor="eventType" className="block text-sm font-medium mb-1">Tipo de Evento</label>
                      <Select name="eventType" onValueChange={handleSelectChange}>
                        <SelectTrigger className={darkMode ? 'bg-gray-700 text-white' : ''}>
                          <SelectValue placeholder="Seleccione el tipo de evento" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="cumpleaños">Cumpleaños</SelectItem>
                          <SelectItem value="boda">Boda</SelectItem>
                          <SelectItem value="fiesta">Fiesta Regular</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    {formError && <p className="text-red-500">Todos los campos son requer</p>}
                    <Button type="submit" className={`w-full ${darkMode ? 'bg-orange-600 hover:bg-orange-700' : 'bg-orange-500 hover:bg-orange-600'} transition-colors duration-300`}>
                      Enviar Solicitud
                    </Button>
                  </form>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        )}

        {activeSection === 'gallery' && (
          <div>
            <h2 className={`text-3xl font-bold mb-4 ${darkMode ? 'text-green-400' : 'text-green-800'} transition-colors duration-300`}>Galería de Eventos</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {galleryImages.map((image, index) => (
                <div key={index} className={`relative group overflow-hidden rounded-lg shadow-md ${darkMode ? 'bg-gray-800' : 'bg-white'} transition-colors duration-300`}>
                  <img src={image.src} alt={image.alt} className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-white text-center p-2">{image.alt}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeSection === 'contact' && (
          <div>
            <h2 className={`text-3xl font-bold mb-4 ${darkMode ? 'text-green-400' : 'text-green-800'} transition-colors duration-300`}>Contáctenos</h2>
            <form className="max-w-md mx-auto">
              <div className="mb-4">
                <Input type="text" placeholder="Nombre" className={darkMode ? 'bg-gray-700 text-white' : ''} />
              </div>
              <div className="mb-4">
                <Input type="email" placeholder="Correo Electrónico" className={darkMode ? 'bg-gray-700 text-white' : ''} />
              </div>
              <div className="mb-4">
                <Textarea placeholder="Mensaje" className={darkMode ? 'bg-gray-700 text-white' : ''} />
              </div>
              <Button className={`w-full ${darkMode ? 'bg-orange-600 hover:bg-orange-700' : 'bg-orange-500 hover:bg-orange-600'} transition-colors duration-300`}>Enviar Mensaje</Button>
            </form>
          </div>
        )}
      </main>

      <footer className={`${darkMode ? 'bg-green-900' : 'bg-green-800'} text-white p-4 mt-8 transition-colors duration-300`}>
        <div className="container mx-auto text-center">
          <p>LogiEventos - Su socio confiable en logística de eventos</p>
        </div>
      </footer>
    </div>
  )
}