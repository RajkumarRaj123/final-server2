# final-server

🚀 Features
🧑‍💻 Authentication

User Register/Login

Password hashing (bcrypt)

JWT token creation

HTTP-Only Cookie / Authorization Header Token Support

🎨 Gigs Module

Create Gig

Get All Gigs

Filter by price / search / sorting

Delete Gig (Owner-only)

🛍️ Orders Module

Place Order

Get User Orders

Seller/Buyer access logic

Stripe integration (optional)

💬 Conversations & Messages

Create Conversation

Send Message

Get Messages

⭐ Reviews

Add Review

Prevent duplicate reviews

Calculate average star rating

📦 Other Features

MongoDB with Mongoose

Error handling middleware

Role-based access

Cloudinary upload support

Secure API structure

CORS enabled for frontend (React / Netlify)

🏗️ Tech Stack
Layer Technology
Backend Framework Node.js (Express.js)
Database MongoDB / Mongoose
Authentication JWT + bcrypt
File Upload Cloudinary
Payment (Optional) Stripe
API Testing Postman
Deployment Render / Railway
📁 Project Structure
backend/
├── controllers/
│ ├── authController.js
│ ├── gigController.js
│ ├── orderController.js
│ ├── messageController.js
│ ├── conversationController.js
│ └── reviewController.js
├── models/
│ ├── User.js
│ ├── Gig.js
│ ├── Order.js
│ ├── Review.js
│ ├── Conversation.js
│ └── Message.js
├── routes/
│ ├── authRoutes.js
│ ├── gigRoutes.js
│ ├── orderRoutes.js
│ ├── messageRoutes.js
│ ├── conversationRoutes.js
│ └── reviewRoutes.js
├── utils/
│ ├── verifyToken.js
│ └── createError.js
├── .env
├── server.js
└── package.json

⚙️ Installation
1️⃣ Clone the repository
git clone https://github.com/yourname/freelancer-backend.git
cd freelancer-backend

2️⃣ Install dependencies
npm install

3️⃣ Add .env file
MONGO_URL=your_mongodb_url
JWT_KEY=your_jwt_secret
CLOUDINARY_CLOUD=xxxx
CLOUDINARY_KEY=xxxx
CLOUDINARY_SECRET=xxxx
CLIENT_URL=https://your-frontend.netlify.app

4️⃣ Run server
npm start

🔐 Authentication Flow
Register

POST /api/auth/register

{
"username": "raj",
"email": "raj@gmail.com",
"password": "123456"
}

Login

POST /api/auth/login
Returns JWT token via:
✔ HTTP Cookie (Server)
✔ Authorization Header (Client)

🧪 API Testing with Postman
Add Token in Header
Authorization: Bearer <token>

OR
Browser automatically sends:

Cookie: accessToken=yourJwtToken

🌐 CORS Setup (Netlify + Render)
app.use(cors({
origin: process.env.CLIENT_URL,
credentials: true,
}));

📦 Build & Deploy
Backend – Render

Add build command: npm install

Add start command: npm start

Add environment variables

Enable CORS

Enable "Allow Credentials"

🧑‍💻 Author

Raj Kumar
Freelancer Marketplace MERN Project Backend Developer
