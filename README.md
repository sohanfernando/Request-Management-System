# Request Management System

## Project Overview
The Request Management System is a web-based application built using the **MERN** stack (MongoDB, Express, React, Node.js). The system allows users to create, view, and manage requests. The system supports full **CRUD operations** (Create, Read, Update, Delete) and also includes a form for adding new requests. Additionally, the system tracks the status and priority of each request, displaying them in a table and with visual status circles.

## Table of Contents
- [Technologies Used](#technologies-used)
- [Features](#features)
- [Setup Instructions](#setup-instructions)
- [API Endpoints](#api-endpoints)
- [Folder Structure](#folder-structure)

## Technologies Used
- **Frontend**: React (with TypeScript), Material-UI (MUI)
- **Backend**: Node.js, Express
- **Database**: MongoDB, Mongoose
- **Styling**: CSS with Material-UI components
- **HTTP Client**: Axios

## Features
- **Request Management**: Add, edit, delete, and update requests.
- **Real-time Status Display**: Requests are categorized by status (e.g., New, In Progress, On Hold).
- **Mobile Responsive**: Responsive UI for better user experience on mobile devices.
- **CRUD Operations**: Perform all CRUD operations on requests.
- **Data Persistence**: Data is persisted in MongoDB.

## Setup Instructions

### Prerequisites
To run this project, you need to have the following installed:
- Node.js (v14 or above)
- npm or yarn
- MongoDB (Local or MongoDB Atlas instance)

### Clone the Repository
```bash
git clone https://github.com/your-username/Request-Management-System.git
cd Request-Management-System
