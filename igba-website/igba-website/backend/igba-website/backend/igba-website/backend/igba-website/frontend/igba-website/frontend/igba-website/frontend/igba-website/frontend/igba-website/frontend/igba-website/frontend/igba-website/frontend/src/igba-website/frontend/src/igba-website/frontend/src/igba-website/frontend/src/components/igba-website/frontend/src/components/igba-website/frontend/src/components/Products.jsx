import React from 'react'
import ProductCard from './ProductCard'

const Products = ({ products, loading }) => {
  if (loading) {
    return (
      <section id="products" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-pink-500 mx-auto"></div>
            <p className="mt-4 text-gray-600">Загружаем каталог...</p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="products" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Наша коллекция
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            5 эксклюзивных моделей боди из высококачественной турецкой ткани
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <ProductCard 
              key={product.id} 
              product={product}
              imageIndex={index}
            />
          ))}
        </div>

        {/* Оптовые условия */}
        <div className="mt-16 bg-white rounded-2xl shadow-lg p-8 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-8">Оптовые условия</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold text-lg mb-4">Условия заказа:</h4>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-pink-500 rounded-full mr-3"></span>
                  Минимальная сумма заказа: <strong className="ml-2">50 000 руб.</strong>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-pink-500 rounded-full mr-3"></span>
                  Минимальный размер: <strong className="ml-2">50 шт. одного размера</strong>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-pink-500 rounded-full mr-3"></span>
                  От 100 шт.: <strong className="ml-2 text-pink-500">699 руб./шт.</strong>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-4">Что вы получаете:</h4>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center">
                  <span className="text-green-500 mr-3">✓</span>
                  Качественную турецкую ткань
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-3">✓</span>
                  Эксклюзивные дизайны
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-3">✓</span>
                  Индивидуальный подход
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-3">✓</span>
                  Быструю доставку
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Products
