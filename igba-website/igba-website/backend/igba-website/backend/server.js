import express from 'express';
import cors from 'cors';
import sqlite3 from 'sqlite3';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import nodemailer from 'nodemailer';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(join(__dirname, 'public')));

// Инициализация БД
const db = new sqlite3.Database(':memory:');

// Создание таблиц
db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS products (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    description TEXT,
    colors TEXT,
    features TEXT
  )`);

  db.run(`CREATE TABLE IF NOT EXISTS orders (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    phone TEXT NOT NULL,
    email TEXT,
    message TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  )`);

  // Добавляем тестовые товары
  const products = [
    {
      name: "Боди с коротким рукавом",
      description: "Универсальное боди для повседневной носки",
      colors: "бежевый,белый,черный",
      features: "Короткий рукав,Универсальное,Повседневное"
    },
    {
      name: "Боди с длинным рукавом через палец", 
      description: "Элегантное боди с удлиненным рукавом",
      colors: "бежевый,белый,коричневый,черный",
      features: "Длинный рукав,Через палец,Элегантное"
    }
  ];

  const stmt = db.prepare("INSERT INTO products (name, description, colors, features) VALUES (?, ?, ?, ?)");
  products.forEach(product => {
    stmt.run([product.name, product.description, product.colors, product.features]);
  });
  stmt.finalize();
});

// API Routes
app.get('/api/products', (req, res) => {
  db.all("SELECT * FROM products", (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json({ products: rows });
  });
});

app.post('/api/orders', (req, res) => {
  const { name, phone, email, message } = req.body;
  
  const sql = `INSERT INTO orders (name, phone, email, message) VALUES (?, ?, ?, ?)`;
  
  db.run(sql, [name, phone, email, message || 'Интересует опт по боди'], function(err) {
    if (err) {
      console.error('Database error:', err);
      return res.status(500).json({ 
        success: false, 
        message: 'Ошибка при сохранении заявки' 
      });
    }
    
    res.json({ 
      success: true, 
      message: 'Заявка успешно отправлена! Мы свяжемся с вами в ближайшее время.',
      orderId: this.lastID 
    });
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Сервер запущен на порту ${PORT}`);
  console.log(`📧 API доступен по http://localhost:${PORT}/api`);
});
