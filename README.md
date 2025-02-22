# Backend для системи управління курсами підвищення кваліфікації

REST API сервер для автоматизації процесу управління курсами підвищення кваліфікації, включаючи керування групами, викладачами, студентами та навчальним навантаженням.

## Технології

- **Node.js** - середовище виконання JavaScript
- **Express.js** - веб-фреймворк для Node.js
- **MongoDB** - NoSQL база даних
- **Mongoose** - ODM для MongoDB
- **JWT** - автентифікація та авторизація
- **bcrypt** - хешування паролів
- **cors** - Cross-Origin Resource Sharing
- **dotenv** - управління змінними середовища

## Початок роботи

### Передумови

- Node.js (версія 20.18.0)
- Express (версія 4.21.2)
- MongoDB (версія 8.0.1)
- npm (версія 11.1.0)

## Структура проекту

```
src/
├── config/             # Конфігурації (база даних, jwt)
├── controllers/        # Контролери для обробки запитів
├── middleware/         # Проміжне ПЗ (auth, error handling)
├── models/            # Mongoose моделі
├── routes/            # Маршрути API
├── services/          # Бізнес-логіка
└── app.js             # Головний файл додатку
```

## API Endpoints

### Аутентифікація
- `POST /api/auth/register` - Реєстрація нового користувача
- `POST /api/auth/login` - Вхід в систему

### Групи
- `GET /api/groups` - Отримати всі групи
- `GET /api/groups/:id` - Отримати групу за ID
- `POST /api/groups` - Створити нову групу
- `PUT /api/groups/:id` - Оновити групу
- `DELETE /api/groups/:id` - Видалити групу

### Викладачі
- `GET /api/teachers` - Отримати всіх викладачів
- `GET /api/teachers/:id` - Отримати викладача за ID
- `POST /api/teachers` - Додати нового викладача
- `PUT /api/teachers/:id` - Оновити дані викладача
- `DELETE /api/teachers/:id` - Видалити викладача

### Навантаження
- `GET /api/loads` - Отримати все навантаження
- `GET /api/loads/:id` - Отримати навантаження за ID
- `POST /api/loads` - Створити нове навантаження
- `PUT /api/loads/:id` - Оновити навантаження
- `DELETE /api/loads/:id` - Видалити навантаження

### Студенти
- `GET /api/students` - Отримати всіх студентів
- `GET /api/students/:id` - Отримати студента за ID
- `POST /api/students` - Додати нового студента
- `PUT /api/students/:id` - Оновити дані студента
- `DELETE /api/students/:id` - Видалити студента

### Платежі
- `GET /api/payments` - Отримати всі платежі
- `GET /api/payments/:id` - Отримати платіж за ID
- `POST /api/payments` - Створити новий платіж
- `PUT /api/payments/:id` - Оновити платіж
- `DELETE /api/payments/:id` - Видалити платіж

## Моделі даних

### User
```javascript
{
  username: String,
  email: String,
  password: String,
  role: String,
}
```

### Group
```javascript
{
  specialty: String,
  department: String,
  numberOfStudents: Number,
  startDate: Date,
  endDate: Date
}
```

### Teacher
```javascript
{
  firstname: String,
  lastname: String,
  patronymic: String,
  email: String,
  phone: String,
  experience: Number,
}
```

### Load
```javascript
{
  teacher: ObjectId,
  group: ObjectId,
  subject: String,
  hours: Number,
  typeOfClass: String,
  paymentPerHour: Number,
}
```

### Student
```javascript
{
  firstname: String,
  lastname: String,
  patronymic: String,
  email: String,
  phone: String,
  group: ObjectId,
  status: String
}
```

### Payment
```javascript
{
  teacher: ObjectId,
  amount: Number,
  date: Date,
  paymenrStatus: String,
  paymentMethod: String,
  notes: String
}
```

## Аутентифікація

Система використовує JWT токени для аутентифікації. Кожен захищений endpoint потребує валідний Bearer токен у заголовку:

```
Authorization: Bearer <token>
```