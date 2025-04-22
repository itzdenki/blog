# Blog

A simple, lightweight blog application built with Node.js, Express, and MongoDB. This project allows users to create, read, update, and delete blog posts, with a clean and minimalistic user interface.

## Features
- Create, edit, and delete blog posts
- View a list of all blog posts
- Responsive design for mobile and desktop
- MongoDB for persistent data storage
- Simple and intuitive UI

## Tech Stack
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Frontend**: EJS templating, CSS
- **Dependencies**: Mongoose, Body-parser, Method-override

## Prerequisites
Before running the project, ensure you have the following installed:
- Node.js (v14 or higher)
- MongoDB (local or cloud instance like MongoDB Atlas)
- Git

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/itzdenki/blog.git
   cd blog
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   - Create a `.env` file in the root directory.
   - Add your MongoDB connection string:
     ```env
     MONGODB_URI=your_mongodb_connection_string
     ```

4. Start the application:
   ```bash
   npm start
   ```

5. Open your browser and navigate to `http://localhost:3000`.

## Usage
- **Home Page**: View all blog posts.
- **Create Post**: Navigate to `/posts/new` to create a new post.
- **Edit/Delete Post**: Click on a post to view details and use the edit or delete options.
- **Responsive Design**: Access the blog from any device for a seamless experience.

## Project Structure
```plaintext
├── models/          # Mongoose schema for blog posts
├── public/          # Static files (CSS, images, etc.)
├── routes/          # Express routes for handling requests
├── views/           # EJS templates for rendering pages
├── .env             # Environment variables (not tracked)
├── app.js           # Main application file
├── package.json     # Project metadata and dependencies
└── README.md        # Project documentation
```

## Contributing
Contributions are welcome! To contribute:
1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes and commit (`git commit -m "Add feature"`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a pull request.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact
For questions or feedback, feel free to reach out:
- GitHub: [itzdenki](https://github.com/itzdenki)
- Email: itzdenki2007@gmail.com
