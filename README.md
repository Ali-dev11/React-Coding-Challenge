# React Coding Challenge

This application displays random users fetched from the Random User API. Each user has their own profile page, which includes detailed user information. The application features functionality for searching users by name and filtering users based on gender. Additionally, pagination is implemented to efficiently navigate through the list of users.

## API
The application consumes data from the Random User API (`https://randomuser.me/api/`). This API provides random user data in a structured format.

## Installation

Clone the repository to your local machine:

```bash
git clonehttps://github.com/Ali-dev11/React-Coding-Challenge.git
cd React-Coding-Challenge
```
## Getting Started

First, install all the required dependencies:

```bash
npm install or yarn install
```

Create a `.env` file in the project root and define your environment variables:

```bash
REACT_APP_GOOGLE_MAPS_API_KEY=your-google-maps-api-key
REACT_APP_RANDOM_API=https://randomuser.me/
```

Run the application: `npm start` or `yarn start`.

Open `http://localhost:3000` to view it in the browser

## Structure
- src/Components/Home: Contains Home page
- src/Components/Card: Contains the user card display
- src/Components/Filters: Contains Gender filter
- src/Components/Pagination: Contains pagination of data
- src/Components/Search: Contains Search bar component
- src/Components/User: Contains user profile, nationality-flag and location using google maps components
- src/utils: Contains utility functions