# Roxiler-sBackendAssignment
 


## Table of Contents

- [Introduction](#introduction)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Configuration](#configuration)
- [API's for backend](#apis-for-backend)
- [Dependencies](#dependencies)


## Introduction

This fullstack application is designed to fullfill the task as mentioned in the Roxiler's backend assignment ( https://drive.google.com/file/d/1EWIwgu3PktuSixKcturVMF3Wi-T_j7ou/view).


## Getting Started

### Prerequisites

- Node.js and npm installed on your machine.
- MongoDB installed and running.

### Installation

1. Clone the repository:
   git clone https://github.com/Aizaz6198/Roxiler-sBackendAssignment.git

2. Navigate to the project directory:
    cd Roxiler'sBackendAssignment

3. Install the dependencies for frontend(i.e. client) and backend(i.e, server ) seprately by using command:
    npm install

    
## Usage
Start the server for backend:
    cd server
    npm start

Start the server for frontend:
    cd client
    npm run dev
   

## Configuration

Create a .env file in the "server" directory of project with the following content:

- PORT = 5000
- TRANSACTIONS_API = https://s3.amazonaws.com/roxiler.com/product_transaction.json
- MONGO_URI = mongodb://localhost:27017/products


Adjust the MONGO_URI and PORT as needed.

## API's for backend

- /initialize_database 
    (to initialize database)

- /product_transactions
    (to get all the transactions)

- /sales_by_month
    (to get sales by month)

- /search_transaction
    (to search transaction by product's name/title/description/price)

- /getStatistics
    (to get statistics of sales by selected month)

- /getBarchar
    (to get barchar of sales by selected month)

- /getPiechart
    (to get piechart of sales by selected month)

- /getCombineResponse
    (to get all the response in one)

## Dependencies  

Node.js
Express
Passport
MongoDB
and other dependencies (listed in package.json)
