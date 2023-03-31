# JB Full Stack Restaurant
<img src = 'public/img/pngburger.png' width='300' />

## This is a full stack restaurant where customers can choose an item, add to cart, make payment with the cash payment method or paypal, place their order, and track the status of their order.

# Directions to running this project

First, clone the repository into your system and run npm install to install the necessary dependencies needed to successfully run this application. 
Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Then replace the vercel urls in the await axios line of codes in the api folder, cart.jsx file, as well as Admin folder with [http://localhost:3000] and open [http://localhost:3000](http://localhost:3000) with your browser to view the application .


# Roles and Authentication
In the nav bar at the top of the page, there is an admin component created for the administrators of the store who are in charge of overviewing orders, adding and deleting items in the product list, and changing the status of customers' orders. Cookies and TOKEN were used to provide authentication to the admin login page to verify the identity of the user. Only admins are permitted to login to this page. In order to be able to make use of the login functionality, implement the instructions below.

## Instructions: (Include the following variables in your .env file in the root of your project)
MONGO_URL = mongodb+srv://restaurant:restaurant@fullstackrestaurant.1tyzr8x.mongodb.net/?retryWrites=true&w=majority
ADMIN_USERNAME = admin
ADMIN_PASSWORD = 123456
TOKEN = SWdw4CV||663Z{p3|ZXtP%0k6Ejj;F

Then, log in using the admin username and admin password. Also, the .env file is necessary for the proper functioning of this application.
