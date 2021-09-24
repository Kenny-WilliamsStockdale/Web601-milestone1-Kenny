 ![emile-perron-xrVDYZRGdw4-unsplash](https://user-images.githubusercontent.com/68571101/134500675-7f066ddd-01cc-4370-b559-11881edfee1e.jpg)

# WEB601 A1 Milestone 1</br>Technical Report

Kenneth-John Williams-Stockdale
NMIT Student ID: 13477293 
National Student Number: 133006701
</br>

- [WEB601 A1 Milestone 1</br>Technical Report](#web601-a1-milestone-1brtechnical-report)
- [Introduction](#introduction)
- [Web App Server-Side structure and functional modules](#web-app-server-side-structure-and-functional-modules)
- [Web App Server-Side Manual](#web-app-server-side-manual)
  - [Set up and environments](#set-up-and-environments)
    - [Packages](#packages)
    - [Installing the packages](#installing-the-packages)
    - [Package .JSON file](#package-json-file)
- [References](#references)
 
# Introduction
Many small and medium-sized enterprises (SME's) have struggled during Covid-19. Small Tech co is another SME business that has seen a rapid decline in business operations since level 4 lock-down affected the entire country. This meant that no purchases could be made in person in Small Tech co's store, therefor no sales or business could occur. Due to this unfortunate situation Small Tech co's owner and CEO swiftly decided that building an online platform is essential to resuming business operations and keeping a significant engaging presence amongst the community and clients.    

This online platform will be in the shape of a e-commerce web-store allowing common features and functionality as found in other similar and or competitors e-commerce platforms. Functionality and features will include:

* Customer login and registration
* Browse and search for products in online catalogue 
* Make online orders that can be added to a cart system for checkout and purchasable
* View order status 
* Administrative access for adding and editing new products along with fulfilling online orders.  

# Web App Server-Side structure and functional modules

Due to the nature of the requirements from the company Small Tech co. a full-stack web application has been approved for development. Recommended, are the latest popular technologies available a M.E.R.N stack which encompasses: 
* **MongoDB** - Database software
* **ExpressJS** - back end web application framework
* **ReactJS** - front end web application framework
* **NodeJS** - an open source JavaScript runtime environment running on the V8 engine   

Draw the hierarchy diagram to proper indicate and describe the web app server-side structure and all functional modules. You may have brief explanation on each module

 ***Ask what is meant by modules and overall standing of this question, possible a small example***
# Web App Server-Side Manual

***what is it meant by print screens here?***

This manual contains server side information that includes a brief summary of setup, environments, server and database connections, MVC model, routes, encryption and authentication. 

## Set up and environments
### Packages
* **Node** - back end environment for the application.
* **Express** - often used for middleware to handle     requests and routes.
* **Mongoose** - used for schemas which model the application data.
* **Bcrypt** - encryption for passwords for better security. 
* **dotenv** - for separating sensitive information from the source code.
* **Nodemon** - utility for monitoring any changes to the source code and automatically restart the server.

### Installing the packages
Upon cloning or editing the project and source code locally, it is recommended to use and install node package manager (npm) which helps manage the dependencies and configuration of the packages needed for the application. Node.js will also be needed to installed if not already. More information can be found here: https://nodejs.org/en/download/.

npm installation of packages is as follows:

npm latest:
```
npm i latest
```
For the other packages existing in this project, npm can also be used to install them.

```
npm i mongoose express dotenv bcrypt 
npm i --dev nodemon 
```

### Package .JSON file


# References 