# 🛍️ Product API

A beginner-friendly RESTful API built with Node.js, Express, and MongoDB to manage products.

## 🚀 Features

- Create a new product
- Get all products or a product by ID
- Update a product by ID
- Delete a product by ID

## 🛠 Tech Stack

- Node.js
- Express.js
- MongoDB (with Mongoose)

## 📦 Getting Started

1. Clone the repository  
2. Run `npm install`  
3. Start the server with `node index.js` or `npm start`  
4. Server runs on: `http://localhost:3000`

## 📌 API Routes

All routes are under: `/api/products`

| Method | Endpoint        | Description            |
|--------|------------------|------------------------|
| GET    | `/`              | Get all products       |
| GET    | `/:id`           | Get a product by ID    |
| POST   | `/`              | Create a product       |
| PUT    | `/:id`           | Update a product       |
| DELETE | `/:id`           | Delete a product       |

## 🧪 Sample Product Schema

```js
{
  name: String,
  quantity: Number,
  image: String
}
```

---

