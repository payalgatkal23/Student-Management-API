# 🎓 Student Management System API

A RESTful API built using Node.js, Express, and MongoDB that allows managing student data with full CRUD operations. The project follows the MVC architecture for better scalability and clean code organization.

---

## 🚀 Features

* Create a new student
* Fetch all students
* Update student details
* Delete a student
* Input validation for request data
* Centralized error handling
* Structured using MVC pattern

---

## 🛠️ Tech Stack

* Node.js
* Express.js
* MongoDB
* Mongoose

---

## 📁 Project Structure (MVC)

```
project/
│
├── models/        # Schema definitions
├── controllers/   # Business logic
├── routes/        # API routes
├── config/        # Database connection
└── server.js      # Entry point
```

---

## 🔗 API Endpoints

| Method | Endpoint   | Description        |
| ------ | ---------- | ------------------ |
| POST   | /users     | Create new student |
| GET    | /users     | Get all students   |
| PUT    | /users/:id | Update student     |
| DELETE | /users/:id | Delete student     |

---

## ⚙️ How to Run Locally

```bash
npm install
node server.js
```

Make sure MongoDB is running locally.

---

## 📌 Key Concepts Used

* REST API design
* MVC architecture
* CRUD operations
* Middleware usage
* Error handling
* MongoDB data modeling

---

## 📷 Sample Request (POST /users)

```json
{
  "name": "payal Gatkal",
  "email": "payalGatkal@example.com"
}
```
---

## 🚧 Future Improvements

- Add authentication using JWT
- Implement pagination for handling large datasets
- Improve API responses with proper HTTP status codes
- Deploy the API on cloud platforms such as Render or AWS

---

## 👩‍💻 Author

**Payal Gatkal**
GitHub: https://github.com/payalgatkal23