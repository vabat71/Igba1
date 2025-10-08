import React from 'react'

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Почему выбирают IGBA?
            </h2>
            <p className="text-xl text-gray-600">
              Качество, стиль и комфорт в каждом изделии
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: '🌿',
                title: 'Натуральные ткани',
                description: 'Хлопок 95% и эластан 5% - дышащие и комфортные материалы'
              },
              {
                icon: '✨',
                title: 'Утягивающий эффект',
                description: 'Идеально подчеркивает фигуру, создавая стройный силуэт'
              },
              {
                icon: '🎨',
                title: 'Эксклюзивный дизайн',
                description: 'Уникальные модели, которых нет у других поставщиков'
              },
              {
                icon: '🇹🇷',
                title: 'Турецкое качество',
                description: 'Ткань премиального качества из Турции'
              },
              {
                icon: '👗',
                title: 'Универсальность',
                description: 'Подходит для спорта, повседневной носки и особых случаев'
              },
              {
                icon: '💎',
                title: 'Долговечность',
                description: 'Качественные швы и стойкие цвета после множества стирок'
              }
            ].map((item, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-2xl hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>

          {/* Процесс работы */}
          <div className="bg-gradient-to-r from-pink-500 to-pink-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold text-center mb-8">Процесс работы</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { step: '1', title: 'Заявка', desc: 'Оставляете заявку на сайте' },
                { step: '2', title: 'Расчет', desc: 'Получаете коммерческое предложение' },
                { step: '3', title: 'Договор', desc: 'Заключаем договор поставки' },
                { step: '4', title: 'Отгрузка', desc: 'Отправляем ваш заказ' }
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-white text-pink-500 rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-3">
                    {item.step}
                  </div>
                  <h4 className="font-semibold mb-2">{item.title}</h4>
                  <p className="text-sm opacity-90">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
