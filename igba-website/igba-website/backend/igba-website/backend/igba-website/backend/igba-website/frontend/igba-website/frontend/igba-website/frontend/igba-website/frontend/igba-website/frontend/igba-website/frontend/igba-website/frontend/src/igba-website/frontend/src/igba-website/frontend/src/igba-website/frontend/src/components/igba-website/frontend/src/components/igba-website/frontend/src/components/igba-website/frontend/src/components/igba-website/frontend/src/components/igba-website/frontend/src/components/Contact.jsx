import React, { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: 'Интересует опт по боди. Прошу выслать прайс-лист и условия.'
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      const response = await fetch('/api/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      })
      
      const result = await response.json()
      
      if (result.success) {
        setSubmitStatus('success')
        setFormData({
          name: '',
          phone: '',
          email: '',
          message: 'Интересует опт по боди. Прошу выслать прайс-лист и условия.'
        })
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Готовы к сотрудничеству?
            </h2>
            <p className="text-xl text-gray-600">
              Оставьте заявку и получите оптовый прайс-лист в течение 15 минут
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Форма */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                Оставьте заявку на оптовый заказ
              </h3>
              
              {submitStatus === 'success' && (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg mb-6">
                  ✅ Заявка успешно отправлена! Мы свяжемся с вами в ближайшее время.
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg mb-6">
                  ❌ Ошибка при отправке. Пожалуйста, свяжитесь с нами по телефону.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Ваше имя *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-colors"
                    placeholder="Иван Иванов"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Телефон *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-colors"
                    placeholder="+7 (999) 999-99-99"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-colors"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Сообщение
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-colors"
                    placeholder="Интересует опт по боди. Прошу выслать прайс-лист и условия."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary py-4 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Отправляем...' : 'Получить прайс-лист'}
                </button>
              </form>
            </div>

            {/* Контакты */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Контакты</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center mr-4">
                      📞
                    </div>
                    <div>
                      <p className="font-semibold">Телефон</p>
                      <a href="tel:+79937277766" className="text-gray-600 hover:text-pink-500 transition-colors">
                        +7 (993) 727-77-66
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center mr-4">
                      ✉️
                    </div>
                    <div>
                      <p className="font-semibold">Email</p>
                      <a href="mailto:vabat@mail.ru" className="text-gray-600 hover:text-pink-500 transition-colors">
                        vabat@mail.ru
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center mr-4">
                      💼
                    </div>
                    <div>
                      <p className="font-semibold">Для оптовых заказов</p>
                      <p className="text-gray-600">WhatsApp/Telegram: +7 (910) 348-90-10</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Быстрые ссылки */}
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h4 className="font-semibold text-lg mb-4">Свяжитесь мгновенно</h4>
                <div className="space-y-3">
                  <a 
                    href="https://wa.me/79103489010?text=Здравствуйте!%20Интересует%20оптовый%20заказ%20боди%20IGBA"
                    className="w-full bg-green-500 hover:bg-green-600 text-white py-3 px-4 rounded-lg font-semibold flex items-center justify-center gap-2 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    💬 Написать в WhatsApp
                  </a>
                  
                  <a 
                    href="https://t.me/79103489010"
                    className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 px-4 rounded-lg font-semibold flex items-center justify-center gap-2 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    📱 Написать в Telegram
                  </a>
                </div>
              </div>

              {/* Реквизиты */}
              <div className="bg-gray-100 rounded-2xl p-6">
                <h4 className="font-semibold text-lg mb-3">Реквизиты</h4>
                <p className="text-sm text-gray-600">
                  <strong>ИП Игнатов Е.Н.</strong><br/>
                  Для заключения договора поставки
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
