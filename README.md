## E-commerce App with React
This is a simple e-commerce app built with React that allows users to view products in different categories and apply filters to narrow down the search. The app includes the following categories: men, women, jewelry, and electronics.

## Installation
To use the app, follow these steps:

Clone the repository to your local machine.
Install the dependencies by running the command npm install in the project directory.
Start the development server by running the command npm start.
Open your browser and go to http://localhost:3000 to view the app.
Usage
The app allows you to browse products in different categories by clicking on the corresponding button in the navigation bar. To apply filters to the products, use the filter buttons located below the navigation bar. Each filter button corresponds to a different category, such as men or women. Clicking on a filter button will fetch data from an API and display only the products in the selected category.

## API
The app uses an external API to fetch product data. The API endpoint for each category is as follows:

Men: https://api.example.com/men
Women: https://api.example.com/women
Jewelry: https://api.example.com/jewelry
Electronics: https://api.example.com/electronics
To display products in a specific category, the app sends a GET request to the corresponding API endpoint.

## Technologies Used
The app is built with React and uses the following libraries:

react-router-dom: For client-side routing
bootstrap: For styling the app
