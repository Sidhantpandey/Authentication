# User Authentication System

This project is a robust user authentication system developed using Node.js. It includes essential features such as user login, logout, and password reset via OTP sent to the registered email address, among other functionalities.

## Features

- **User Registration**: New users can create accounts securely.
- **Login**: Users can log in using their credentials.
- **Logout**: Users can securely log out of their accounts.
- **Password Reset**: Users can reset their passwords by verifying an OTP sent to their registered email.
- **Session Management**: Ensures that user sessions are securely maintained.
- **Error Handling**: Provides meaningful error messages for common issues.
- **Scalability**: Built with a modular approach to allow for future enhancements.

## Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Email Service**: Nodemailer
- **Authentication**: JSON Web Tokens (JWT)

## Installation

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd <project-directory>
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up environment variables**:
   Create a `.env` file in the root directory and add the following variables:
   ```env
   PORT=3000
   MONGO_URI=<your-mongodb-connection-string>
   JWT_SECRET=<your-jwt-secret>
   EMAIL_SERVICE=<your-email-service>
   EMAIL_USER=<your-email-address>
   EMAIL_PASSWORD=<your-email-password>
   ```

4. **Run the application**:
   ```bash
   npm start
   ```

   The application will be accessible at `http://localhost:3000`.

## API Endpoints

### Auth Routes

- **POST /register**
  - Registers a new user.
  - Request body: `{ "name": "", "email": "", "password": "" }`

- **POST /login**
  - Authenticates a user.
  - Request body: `{ "email": "", "password": "" }`

- **POST /logout**
  - Logs out the user.

- **POST /reset-password/request-otp**
  - Sends an OTP to the user's email for password reset.
  - Request body: `{ "email": "" }`

- **POST /reset-password/verify-otp**
  - Verifies the OTP and allows the user to reset their password.
  - Request body: `{ "email": "", "otp": "", "newPassword": "" }`

## Project Structure

```
|-- src
|   |-- controllers
|   |-- models
|   |-- routes
|   |-- services
|   |-- utils
|-- .env
|-- package.json
|-- README.md
```

## Future Enhancements

- Two-factor authentication (2FA).
- Social media login integration (e.g., Google, Facebook).
- Role-based access control.
- Enhanced email templates and notifications.

## Contributing

Contributions are welcome! Please follow these steps:
1. Fork the repository.
2. Create a new branch for your feature or bugfix.
3. Commit your changes and push to your fork.
4. Submit a pull request.

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

---

Feel free to explore, enhance, and contribute to this project!

