import React from 'react'

const Header = () => {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Логотип */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-pink-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">IG</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">IGBA</h1>
              <p className="text-xs text-gray-500">OFFICIAL</p>
            </div>
          </div>

          {/* Навигация */}
          <nav className="hidden md:flex space-x-8">
            <a href="#products" className="text-gray-700 hover:text-pink-500 font-medium transition-colors">
              Каталог
            </a>
            <a href="#about" className="text-gray-700 hover:text-pink-500 font-medium transition-colors">
              О нас
            </a>
            <a href="#contact" className="text-gray-700 hover:text-pink-500 font-medium transition-colors">
              Контакты
            </a>
          </nav>

          {/* Контакты */}
          <div className="flex items-center space-x-4">
            <a 
              href="tel:+79937277766"
              className="hidden sm:block text-gray-700 hover:text-pink-500 font-medium transition-colors"
            >
              +7 (993) 727-77-66
            </a>
            <a 
              href="https://wa.me/79103489010"
              className="btn-primary text-sm py-2 px-4"
              target="_blank"
              rel="noopener noreferrer"
            >
              Заказать
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
