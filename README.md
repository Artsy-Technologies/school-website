* * *

# 🏫 School Website

<div align="center">  <img src="https://readme-typing-svg.herokuapp.com?color=45ffaa&size=40&width=900&height=80&lines=Welcome+to+the+School+Website!"/></div>

<p align="center">  <a href="https://github.com/Artsy-Technologies/school-website"><img src="https://img.shields.io/github/stars/Artsy-Technologies/school-website" alt="GitHub stars"></a>  <a href="https://github.com/Artsy-Technologies/school-website"><img src="https://img.shields.io/github/forks/Artsy-Technologies/school-website" alt="GitHub forks"></a>  <a href="https://github.com/Artsy-Technologies/school-website"><img src="https://img.shields.io/github/issues/Artsy-Technologies/school-website" alt="GitHub issues"></a>  <a href="https://github.com/Artsy-Technologies/school-website"><img src="https://img.shields.io/github/license/Artsy-Technologies/school-website" alt="GitHub license"></a></p>

## Table of Contents

* [📖 Introduction](#-introduction)
* [✨ Features](#-features)
* [💻 Technologies Used](#-technologies-used)
* [⚙️ Installation](#%EF%B8%8F-installation)
  * [Frontend Installation](#frontend-installation)
  * [Backend Installation](#backend-installation)
* [🔄 Making a Pull Request](#-making-a-pull-request)
* [🚀 Usage](#-usage)
* [📜 License](#-license)
* [📞 Contact](#-contact)
* [📂 Project Structure](#-project-structure)

## 📖 Introduction

The School Website project is a web application designed to provide students, teachers, and parents with easy access to school information, resources, and services. The website aims to enhance communication and engagement within the school community.

## ✨ Features

* 🏠 **Home Page**: Overview of the school with news and announcements.
* 📚 **About Us**: Information about the school's history, mission, and values.
* 📖 **Academics**: Details about the curriculum, subjects, and academic programs.
* 👥 **Student Life**: Gallery showcasing school events and student activities.
* 📧 **Contact Us**: Contact form and school contact information.

## 💻 Technologies Used

* **Frontend**: React, Tailwind CSS
* **Backend**: Node.js, Express.js
* **Database**: MongoDB
* **Version Control**: Git
* **Deployment**: Heroku

## ⚙️ Installation

### Frontend Installation

1. Clone the repository:
```bash
      git clone https://github.com/<your-github-username>/school-website.git
```
  
2. Navigate to the `client` directory:
  
     ```
      cd school-website/client
     ```
  
4. Install dependencies:
  
     ```
      npm install
     ```
  
6. Set up environment variables: Create a `.env` file in the `client` directory and add the following:
  
      ```
      REACT_APP_API_URL=http://localhost:5000
      ```
  
7. Run the frontend application:
  
      ```
      npm run dev
      ```
  
8. Access the frontend: Open your browser and go to `http://localhost:3000`
  

### Backend Installation

1. Navigate to the `server` directory:
  
      ```
      cd school-website/server
      ```
  
2. Install dependencies:
  
      ```
      npm install
      ```
  
3. Set up environment variables: Create a `.env` file in the `server` directory and add the following:
  
      ```
      MONGODB_URI=your-mongodb-uri
      PORT=5000
      ```
  
4. Run the backend application:
  
      ```
      npm start
      ```
  

## 🔄 Making a Pull Request

1. Fork the repository by clicking on the fork symbol at the top right corner.
  
2. Clone your forked repository:
  
     ```
     git clone https://github.com/<your-github-username>/school-website.git
     ```
  
3. Navigate to the project directory:
  
      ```
      cd school-website
      ```
  
4. Set the upstream remote:
  
     ```
      git remote add upstream https://github.com/Artsy-Technologies/school-website
     ```
  
6. Create a new branch:
  
      ```
      git checkout -b YourBranchName
      ```
  
  or
  
      git branch YourBranchName
      git switch YourBranchName
  
6. Sync your fork with the upstream repository:
  
     ```
      git fetch upstream
      git merge upstream/main
     ```
  
7. Make your changes to the source code.
  
8. Stage your changes and commit:
  
      ```
      git add file/folder
      git commit -m "<your_commit_message>"
      ```
  
9. Push your changes to your forked repository:
  
      ```
      git push origin YourBranchName
      ```
  
10. Create a pull request on GitHub.
  

**Congratulations on your contribution! 🙌🏼**

## 🚀 Usage

* 🔐 **Admin Panel**: Admins can log in to manage website content, such as updating news, events, and faculty profiles.
* 🖥️ **User Interaction**: Students and parents can browse the website to get information, view the gallery, and contact the school.

## 📞 Contact

For any questions or suggestions, please contact:

* 📧 Email: theartsytechnology@gmail.com
* 🐙 GitHub: [Artsy-Technologies](https://github.com/Artsy-Technologies/school-website/tree/main)

## 📂 Project Structure

    school-website/
    ├── client/
    │   ├── public/
    │   ├── src/
    │   │   ├── assets/
    │   │   │   └── react.svg
    │   │   ├── components/
    │   │   │   ├── Carousel/
    │   │   │   │   ├── Carousel.jsx
    │   │   │   │   └── Data.js
    │   │   │   ├── Layout/
    │   │   │   │   └── MainLayout.jsx
    │   │   │   ├── faq/
    │   │   │   │   ├── Faq.jsx
    │   │   │   │   └── FaqSection.jsx
    │   │   │   ├── footer/
    │   │   │   │   └── Footer.jsx
    │   │   │   ├── header/
    │   │   │   │   └── Navbar.jsx
    │   │   │   ├── table/
    │   │   │   │   └── Table.jsx
    │   │   ├── pages/
    │   │   │   ├── AboutPage.jsx
    │   │   │   ├── AcademicsPage.jsx
    │   │   │   ├── AdmissionPage.jsx
    │   │   │   ├── ContactPage.jsx
    │   │   │   ├── HomePage.jsx
    │   │   │   └── StudentPage.jsx
    │   ├── .eslintc.cjs
    │   ├── .gitignore
    │   ├── README.md
    │   ├── index.html
    │   ├── package-lock.json
    │   ├── package.json
    │   ├── postcss.config.js
    │   ├── tailwind.config.js
    │   └── vite.config.js
    └── server/
        ├── controllers/
        │   └── adminController.js
        ├── libs/
        │   └── databaseConnection.js
        ├── routes/
        │   └── adminRouter.js
        ├── .env
        ├── .gitignore
        ├── index.js
        ├── package-lock.json
        ├── package.json
    LICENSE
    README.md

* * *

<p align="center">Show some ❤️ by giving a ⭐️ to this repo!</p>

* * *
