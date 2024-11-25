# Spotify Clone

## Description

This is a clone of the Spotify web app. It is built using React, Zustand, React Router, and Tailwind CSS. Authentication is handled using the Clerk library. Implemented a real-time chat system using WebSockets with socket.io.
Additionally, the app has a dashboard for admins to manage songs and albums.

Consuming a REST API using Axios and socket.io. The API is built using Express and Socket.io. And the database is MongoDB.

You can see the deployed version here: [https://spotify-clone-eric.vercel.app/](https://spotify-clone-frontend-tqsh.onrender.com/)

## Features

- Authentication
- Routing
- State management
- Playlists
- Play songs
- Change volume
- Chat functionality
- User activity
- Admin dashboard
- Uploading songs
- Uploading albums

## Technologies

- React
- Zustand
- React Router
- Tailwind CSS
- Clerk
- WebSockets
- Axios
- Socket.io
- Shadcn UI

## Screenshots

- Main page
  ![image](https://raw.githubusercontent.com/Erik5CA/spotify-clone-frontend/refs/heads/master/public/screenshots/home.jpeg)

- Albums
  ![image](https://raw.githubusercontent.com/Erik5CA/spotify-clone-frontend/refs/heads/master/public/screenshots/album.png)

- Chat
  ![image](https://raw.githubusercontent.com/Erik5CA/spotify-clone-frontend/refs/heads/master/public/screenshots/chat.png)

- Dashboard
  ![image](https://raw.githubusercontent.com/Erik5CA/spotify-clone-frontend/refs/heads/master/public/screenshots/dashboard.png)

## Installation

1. Clone the repository
2. Install dependencies using `npm install`
3. Run the app using `npm run dev`

You need define the environment variables in the `.env` file like this:

```
VITE_CLERK_PUBLISHABLE_KEY = clerk_key
VITE_API_URL = http://localhost:5000/api
VITE_SOCKET_URL = http://localhost:5000
```

## Usage

To use the app, you need to create an account using the a google account. After that, you can login using that account.

## Contributing

Contributions are welcome! If you find any bugs or have suggestions for improvements, please open an issue or submit a pull request.

## License

This project is licensed under the MIT License.
