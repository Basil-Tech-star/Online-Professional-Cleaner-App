## Professional Cleaners App (Frontend)

This is the frontend for the Professional Cleaners App, a web application where users can sign up, log in, view available cleaners, and book services. It interacts with a backend to handle authentication and booking functionality.
Features

    User Authentication: Users can sign up and log in using their phone number and password.
    Cleaner Listing: Displays a list of available cleaners with their information such as name, service type, location, and rating.
    Booking Feature: Users can book a cleaner, although the booking functionality is currently under development.
    Responsive Navigation: The app includes a navigation bar for easy access to pages such as home, login, signup, and cleaner listings.

## Technologies Used

    React: Frontend framework for building the user interface.
    React Router: For client-side routing and navigation.
    Axios: For making HTTP requests to the backend API.
    CSS: For styling the components and pages.

File Structure

/src
  /components
    AuthForm.jsx         // Handles user signup and login
    BookingForm.jsx      // Form to book a cleaner
    CleanerCard.jsx      // Displays information for each cleaner
    Navbar.jsx           // Navigation bar for easy access to app's pages
  /screens
    HomePage.jsx         // Homepage with app introduction and services offered
    SignupPage.jsx       // Page for user signup
    LoginPage.jsx        // Page for user login
    CleanersPage.jsx     // Page displaying a list of available cleaners
    BookCleanerPage.jsx  // Page to handle cleaner booking
  /api.jsx              // API service to communicate with backend
  App.jsx               // Main app component with routing setup
  index.js              // Entry point for the application

## Setup and Installation

    Clone the repository:

git clone https://github.com/Basil-Tech-star/Online-Professional-Cleaner-App
cd cleaners-app-frontend

## Install the dependencies:

npm install

Run the development server:

    npm start

    Open the app in your browser at http://localhost:3000.

## How It Works
1. Authentication

The AuthForm.jsx component handles both the signup and login functionality based on the type prop. When users sign up, they need to enter their name, phone number, location, and password. Upon login, they only need to provide their phone number and password. Both forms make requests to the backend API to authenticate users.

    Signup Endpoint: POST /signup
    Login Endpoint: POST /login

The login response contains an authentication token, which is saved in localStorage and used for subsequent API requests.
2. Cleaners Listing

The CleanersPage.jsx component fetches the list of available cleaners from the backend using the GET /cleaners endpoint. The CleanerCard.jsx component displays each cleaner's information such as name, service, location, and rating.
3. Booking Form

The BookingForm.jsx component allows users to book a cleaner. The form sends a request to the backend to confirm the booking, passing the cleaner's ID and the authentication token stored in localStorage. The booking feature is currently being developed and shows a "coming soon" message on the UI.
4. Navigation

The Navbar.jsx component provides links to key pages in the app:

    Home
    Sign Up
    Login
    View Cleaners

The navigation links are managed using React Router to allow for client-side routing.
5. API Integration

The app uses the api.jsx module to handle HTTP requests to the backend. Axios is used to make the requests, and the base URL is configured to interact with the backend endpoint.

export const api = axios.create({
  baseURL: 'https://cleaner-app-back-end.onrender.com', // Backend API URL
});

6. UI Flow

    The homepage welcomes users and lists the services provided by the cleaners.
    Users can sign up or log in via dedicated pages.
    After login, users are redirected to the cleaners' page where they can see available cleaners.
    Users can try to book a cleaner (feature coming soon!).

## Future Enhancements

    Complete the Booking Flow: Implement the actual booking logic to complete the booking process.
    Cleaner Ratings: Allow users to rate cleaners after their service.
    Profile Management: Add user profile page for users to view and edit their personal information.

## License

This project is open-source and available under the Basil Wabuke MIT License.