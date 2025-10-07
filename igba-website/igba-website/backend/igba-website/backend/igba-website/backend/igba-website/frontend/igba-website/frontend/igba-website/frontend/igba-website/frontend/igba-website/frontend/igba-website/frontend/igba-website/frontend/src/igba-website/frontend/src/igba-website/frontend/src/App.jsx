import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Products from './components/Products'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchProducts()
  }, [])

  const fetchProducts = async () => {
    try {
      const response = await fetch('/api/products')
      const data = await response.json()
      setProducts(data.products)
    } catch (error) {
      console.error('Error fetching products:', error)
      // Fallback данные
      setProducts([
        {
          id: 1,
          name: "Боди с коротким рукавом",
          description: "Универсальное боди для повседневной носки",
          colors: "бежевый,белый,черный",
          features: "Короткий рукав,Универсальное,Повседневное"
        },
        {
          id: 2,
          name: "Боди с длинным рукавом через палец",
          description: "Элегантное боди с удлиненным рукавом",
          colors: "бежевый,белый,коричневый,черный", 
          features: "Длинный рукав,Через палец,Элегантное"
        },
        {
          id: 3,
          name: "Боди с длинным рукавом: классика",
          description: "Классическое боди для любого случая",
          colors: "бежевый,белый,коричневый,черный",
          features: "Длинный рукав,Классическое,Универсальное"
        },
        {
          id: 4,
          name: "Боди с длинным рукавом и V-образным вырезом",
          description: "Стильное боди с V-образным вырезом",
          colors: "бежевый,черный",
          features: "Длинный рукав,V-образный вырез,Стильное"
        },
        {
          id: 5, 
          name: "Боди-майка",
          description: "Легкое боди-майка для теплой погоды",
          colors: "черный",
          features: "Майка,Легкое,Летнее"
        }
      ])
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <About />
      <Products products={products} loading={loading} />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
