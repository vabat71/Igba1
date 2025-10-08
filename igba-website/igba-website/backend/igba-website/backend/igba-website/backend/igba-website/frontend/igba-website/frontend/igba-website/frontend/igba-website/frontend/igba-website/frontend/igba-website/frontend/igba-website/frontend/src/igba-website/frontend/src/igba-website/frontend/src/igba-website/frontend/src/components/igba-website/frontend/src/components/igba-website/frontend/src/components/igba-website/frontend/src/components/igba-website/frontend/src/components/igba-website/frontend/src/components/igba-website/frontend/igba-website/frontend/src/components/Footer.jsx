import React from 'react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Лого и описание */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-pink-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">IG</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">IGBA OFFICIAL</h3>
                <p className="text-gray-400 text-sm">СДЕЛАНО В РОССИИ</p>
              </div>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              Оптовые поставки качественных женских боди из натуральной турецкой ткани. 
              Эксклюзивные дизайны, утягивающий эффект и комфорт в каждом изделии.
            </p>
            <div className="flex space-x-4">
              {/* Места для соцсетей - можно добавить позже */}
              <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400">
                📸
              </div>
              <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400">
                ▶️
              </div>
              <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400">
                💬
              </div>
            </div>
          </div>

          {/* Быстрые ссылки */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Навигация</h4>
            <ul className="space-y-2">
              <li>
                <a href="#products" className="text-gray-400 hover:text-white transition-colors">
                  Каталог
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-white transition-colors">
                  О нас
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white transition-colors">
                  Контакты
                </a>
              </li>
            </ul>
          </div>

          {/* Контакты в футере */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Контакты</h4>
            <div className="space-y-2 text-gray-400">
              <p>
                <a href="tel:+79937277766" className="hover:text-white transition-colors">
                  +7 (993) 727-77-66
                </a>
              </p>
              <p>
                <a href="mailto:vabat@mail.ru" className="hover:text-white transition-colors">
                  vabat@mail.ru
                </a>
              </p>
              <p>Оптовые заказы:</p>
              <p>
                <a href="https://wa.me/79103489010" className="hover:text-white transition-colors">
                  WhatsApp/Telegram
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Нижняя часть */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            © {currentYear} IGBA OFFICIAL. Все права защищены.
          </div>
          <div className="text-gray-400 text-sm">
            ИП Игнатов Е.Н. | СДЕЛАНО В РОССИИ
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
