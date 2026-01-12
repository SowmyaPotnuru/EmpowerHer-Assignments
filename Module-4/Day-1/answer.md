Q1. Explain the role of Frontend (FE) in a web application. Include points related to:
User interface
User interaction
Communication with backend

A. Role of Frontend (FE) in a Web Application

User Interface (UI):
The frontend designs and displays everything the user sees – layout, buttons, forms, colors, and fonts.

User Interaction:
It handles user actions like clicks, typing, scrolling, and shows instant feedback (alerts, validations, loaders).

Communication with Backend:
The frontend sends requests to the backend (via APIs) and displays the data received, such as user info, products, or messages.


Q2. Role of Backend (BE)
Explain the role of Backend (BE) in a web application. Include points related to:

Server-side processing
Database handling
Security and authentication

A. Role of Backend (BE) in a Web Application

Server-side Processing:
The backend handles business logic, processes user requests, and decides what data to send back.

Database Handling:
It stores, retrieves, updates, and deletes data from the database (like user details, orders, etc.).

Security & Authentication:
The backend manages login, signup, permissions, and protects data using authentication and authorization.


Q3. Business Logic
What is Business Logic? Explain in detail and give at least 3 real-world examples where business logic is applied in a web application.

A. Business logic is the set of rules and decisions that control how an application works. It defines what should happen when a user performs an action.

-> It is the brain of the application that applies company rules, validations, and calculations.

Business Logic is used in:
1. E-commerce Website

If cart value > ₹1000 → apply 10% discount

If product is out of stock → block order
-> These rules are business logic.

2. Banking Application

User cannot withdraw more than account balance

Daily withdrawal limit = ₹20,000
-> These checks are business logic.

3. Login System

If password is wrong → show error

If user is inactive → block login
-> These conditions are business logic.

4. Food Delivery App

Show only nearby restaurants

Add delivery charge if distance > 5 km
-> Again, business logic.


Q4. Client–Server Model
What is the Client–Server Model? Explain:

Who is the client
Who is the server
How communication happens between them

A. The Client–Server Model is a way of designing web applications where one side requests and the other side responds.

Who is the Client?
-> The client is the user’s side.
-> Examples: Web browser, mobile app.
-> It sends requests (login, fetch data, submit form).

Who is the Server?
-> The server is the backend system.
-> It processes requests, applies business logic, talks to database, and sends responses.

How Communication Happens?
1. Client sends a request (via HTTP/HTTPS)
2. Server processes it
3. Server sends back response (data / success / error)
4. Client displays the result

Diagram:
[ Client (Browser/App) ]
          |
      Request (API)
          |
          v
[   Server (Backend)   ]
          |
      Response (Data)
          |
          v
[ Client shows result ]


Q5. Three-Tier Architecture
What is 3-Tier Architecture in web applications? Explain each layer:

Presentation Layer
Application (Business) Layer
Data Layer
Also mention why this architecture is used

A.The 3-Tier Architecture divides a web application into three separate layers to keep it clean, organized, and easy to manage.

1. Presentation Layer (UI Layer)
-> This is the frontend.
-> What the user sees and interacts with (buttons, forms, pages).
-> Example: React, HTML, CSS.

2. Application / Business Layer
-> This is the logic layer.
-> Handles business rules, validations, calculations.
-> Example: Node.js, Java, .NET.

3. Data Layer
-> This is the database layer.
-> Stores and retrieves data.
-> Example: MySQL, MongoDB.

Diagram: 
Presentation Layer -> Business Layer -> Data Layer

Why is 3-Tier Architecture used?
-> Better organization
-> Easy to maintain and update
-> Improves security
-> Makes application scalable 


Q6. JavaScript as a Backend Language
Why is JavaScript used as a backend language? Explain with points such as:

Performance
Ecosystem
Popular backend frameworks

A. JavaScript is not only for frontend, it is also widely used on the backend using Node.js.

JavaScript is used as Backend, due to its:
1. Performance
JavaScript is fast because of its non-blocking, event-driven nature.
It can handle many users at the same time efficiently.

2. Ecosystem
JavaScript has a huge library support through npm (Node Package Manager).
Ready-made packages are available for almost everything (auth, DB, APIs).

3. Popular Backend Frameworks
Express.js – lightweight and fast
NestJS – structured and scalable
Koa.js – modern and clean