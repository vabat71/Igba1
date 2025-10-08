import React, { useState } from 'react'

const ProductCard = ({ product, imageIndex }) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedColor, setSelectedColor] = useState('бежевый')

  const colors = product.colors?.split(',') || ['бежевый']
  const features = product.features?.split(',') || []

  const colorImages = {
    'бежевый': '/images/beige.jpg',
    'белый': '/images/white.jpg', 
    'черный': '/images/black.jpg',
    'коричневый': '/images/brown.jpg'
  }

  const getImageUrl = (color) => {
    return colorImages[color] || `/images/product-${imageIndex + 1}.jpg`
  }

  const colorVariants = {
    'бежевый': 'bg-amber-200',
    'белый': 'bg-white border border-gray-300',
    'черный': 'bg-gray-900',
    'коричневый': 'bg-amber-800'
  }

  return (
    <>
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 card-hover">
        <div className="relative overflow-hidden">
          <img 
            src={getImageUrl(colors[0])}
            alt={product.name}
            className="w-full h-80 object-cover hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute top-4 left-4 bg-pink-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
            Хлопок 95%
          </div>
        </div>
        
        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-3">{product.name}</h3>
          <p className="text-gray-600 mb-4 line-clamp-2">{product.description}</p>
          
          {/* Цвета */}
          {colors.length > 1 && (
            <div className="mb-4">
              <p className="text-sm text-gray-500 mb-2">Цвета:</p>
              <div className="flex gap-2">
                {colors.map(color => (
                  <div
                    key={color}
                    className={`w-6 h-6 rounded-full ${colorVariants[color]} border border-gray-300`}
                    title={color}
                  />
                ))}
              </div>
            </div>
          )}
          
          <div className="flex justify-between items-center mb-4">
            <div>
              <div className="text-2xl font-bold text-pink-500">699 руб.</div>
              <div className="text-sm text-gray-500">от 100 шт.</div>
            </div>
          </div>
          
          <button 
            onClick={() => setIsModalOpen(true)}
            className="w-full btn-primary py-3"
          >
            Подробнее
          </button>
        </div>
      </div>

      {/* Модальное окно */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50 animate-fadeIn">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-8">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h2 className="text-3xl font-bold text-gray-800 mb-2">{product.name}</h2>
                  <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium inline-block">
                    Состав: Хлопок 95% / Эластан 5%
                  </div>
                </div>
                <button 
                  onClick={() => setIsModalOpen(false)}
                  className="text-gray-400 hover:text-gray-600 text-2xl transition-colors"
                >
                  ✕
                </button>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-6">
                <div>
                  <img 
                    src={getImageUrl(selectedColor)}
                    alt={product.name}
                    className="w-full h-96 object-cover rounded-xl shadow-md"
                  />
                  
                  {/* Выбор цвета */}
                  {colors.length > 1 && (
                    <div className="mt-4">
                      <h4 className="font-semibold mb-3">Выберите цвет:</h4>
                      <div className="flex gap-3">
                        {colors.map(color => (
                          <div 
                            key={color}
                            className={`flex flex-col items-center cursor-pointer ${
                              selectedColor === color ? 'ring-2 ring-pink-500 rounded-full p-1' : ''
                            }`}
                            onClick={() => setSelectedColor(color)}
                          >
                            <div className={`w-10 h-10 rounded-full ${colorVariants[color]} border border-gray-300`}></div>
                            <span className="text-xs mt-1 capitalize">{color}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
                
                <div>
                  <div className="bg-gray-50 rounded-xl p-6 mb-6">
                    <h3 className="text-xl font-semibold mb-4 text-gray-800">Описание</h3>
                    <p className="text-gray-700 leading-relaxed">
                      {product.description || "Погрузитесь в мир стиля и комфорта с этим великолепным женским боди. Выполненное из качественного хлопка, оно станет идеальным решением как для спортивных мероприятий, так и атмосферных вечеров."}
                    </p>
                  </div>
                  
                  {/* Особенности */}
                  <div className="space-y-3 mb-6">
                    <h4 className="font-semibold text-gray-800">Особенности:</h4>
                    {features.map((feature, index) => (
                      <div key={index} className="flex items-center text-green-700">
                        <span className="mr-3">✓</span>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Таблица размеров */}
                  <div className="bg-white border border-gray-200 rounded-xl p-6">
                    <h4 className="text-lg font-semibold mb-4 text-gray-800">Таблица размеров</h4>
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse border border-gray-300 text-sm">
                        <thead>
                          <tr className="bg-gray-100">
                            <th className="border border-gray-300 px-3 py-2">РАЗМЕР</th>
                            <th className="border border-gray-300 px-3 py-2">Грудь (см)</th>
                            <th className="border border-gray-300 px-3 py-2">Талия (см)</th>
                            <th className="border border-gray-300 px-3 py-2">Бедра (см)</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border border-gray-300 px-3 py-2 text-center font-semibold">S (42)</td>
                            <td className="border border-gray-300 px-3 py-2 text-center">82–86</td>
                            <td className="border border-gray-300 px-3 py-2 text-center">61–65</td>
                            <td className="border border-gray-300 px-3 py-2 text-center">91–95</td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-3 py-2 text-center font-semibold">M (44)</td>
                            <td className="border border-gray-300 px-3 py-2 text-center">86–90</td>
                            <td className="border border-gray-300 px-3 py-2 text-center">65–69</td>
                            <td className="border border-gray-300 px-3 py-2 text-center">95–99</td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-3 py-2 text-center font-semibold">L (46)</td>
                            <td className="border border-gray-300 px-3 py-2 text-center">90–94</td>
                            <td className="border border-gray-300 px-3 py-2 text-center">69–73</td>
                            <td className="border border-gray-300 px-3 py-2 text-center">99–103</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Цены */}
              <div className="bg-pink-50 rounded-xl p-6 mb-6">
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Оптовые цены</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-white rounded-lg shadow-sm border-2 border-pink-200">
                    <div className="text-2xl font-bold text-pink-500">699 ₽</div>
                    <div className="text-gray-600 text-sm">от 100 штук</div>
                  </div>
                  <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                    <div className="text-2xl font-bold text-gray-700">799 ₽</div>
                    <div className="text-gray-600 text-sm">50-99 штук</div>
                  </div>
                  <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                    <div className="text-2xl font-bold text-gray-700">899 ₽</div>
                    <div className="text-gray-600 text-sm">индивидуально</div>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="https://wa.me/79103489010?text=Здравствуйте!%20Интересует%20оптовый%20заказ%20боди%20IGBA"
                  className="flex-1 bg-green-500 hover:bg-green-600 text-white py-4 rounded-xl font-semibold text-lg text-center transition-colors shadow-md"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Заказать в WhatsApp
                </a>
                <button 
                  onClick={() => setIsModalOpen(false)}
                  className="px-6 border border-gray-300 text-gray-700 py-4 rounded-xl font-semibold hover:bg-gray-50 transition-colors"
                >
                  Закрыть
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default ProductCard
