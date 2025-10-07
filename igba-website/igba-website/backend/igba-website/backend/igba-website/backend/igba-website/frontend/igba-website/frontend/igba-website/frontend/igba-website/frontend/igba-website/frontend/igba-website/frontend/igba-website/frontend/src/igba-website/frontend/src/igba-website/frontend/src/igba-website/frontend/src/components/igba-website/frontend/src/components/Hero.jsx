import React from 'react'

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-pink-50 to-white py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Эксклюзивные женские боди 
            <span className="text-pink-500"> IGBA</span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Натуральные ткани · Утягивающий эффект · Эксклюзивный дизайн
          </p>

          <div className="bg-yellow-100 border border-yellow-300 rounded-lg p-4 mb-8 inline-block">
            <p className="text-lg font-semibold text-yellow-800">
              🎉 При покупке от 100 штук - цена <strong>699 руб.</strong>!
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="#contact"
              className="btn-primary text-lg px-8 py-4"
            >
              Получить оптовый прайс
            </a>
            
            <a 
              href="#products"
              className="btn-secondary text-lg px-8 py-4"
            >
              Смотреть каталог
            </a>
          </div>

          {/* Преимущества */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
            {[
              { icon: '🌿', text: 'Натуральный хлопок 95%' },
              { icon: '✨', text: 'Утягивающий эффект' },
              { icon: '🎨', text: 'Эксклюзивный дизайн' },
              { icon: '🇹🇷', text: 'Турецкая ткань' }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl mb-2">{item.icon}</div>
                <p className="text-sm font-medium text-gray-700">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Header
