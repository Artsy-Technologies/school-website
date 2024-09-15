* * *

# 🏫 School Website

<div align="center">  <img src="https://readme-typing-svg.herokuapp.com?color=45ffaa&size=40&width=900&height=80&lines=Welcome+to+the+School+Website!"/></div>

<p align="center">  <a href="https://github.com/Artsy-Technologies/school-website"><img src="https://img.shields.io/github/stars/Artsy-Technologies/school-website" alt="GitHub stars"></a>  <a href="https://github.com/Artsy-Technologies/school-website"><img src="https://img.shields.io/github/forks/Artsy-Technologies/school-website" alt="GitHub forks"></a>  <a href="https://github.com/Artsy-Technologies/school-website"><img src="https://img.shields.io/github/issues/Artsy-Technologies/school-website" alt="GitHub issues"></a>  <a href="https://github.com/Artsy-Technologies/school-website"><img src="https://img.shields.io/github/license/Artsy-Technologies/school-website" alt="GitHub license"></a></p>

## Live Demo

Check out the [Live Demo](https://school-website-etuj.onrender.com/) of the project.

## Table of Contents

* [📖 Introduction](#-introduction)
* [✨ Features](#-features)
* [💻 Technologies Used](#-technologies-used)
* [⚙️ Installation](#%EF%B8%8F-installation)
  * [Frontend Installation](#frontend-installation)
  * [Backend Installation](#backend-installation)
* [🔄 Making a Pull Request](#-making-a-pull-request)
* [📜 License](#-license)
* [📞 Contact](#-contact)

## 📖 Introduction

The School Website project is a web application designed to provide students, teachers, and parents with easy access to school information, resources, and services. The website aims to enhance communication and engagement within the school community.

## ✨ Features

* 🏠 **Home Page**: Overview of the school with news and announcements.
* 📚 **About Us**: Information about the school's history, mission, and values.
* 📖 **Academics**: Details about the curriculum, subjects, and academic programs.
* 👥 **Student Life**: Gallery showcasing school events and student activities.
* 📧 **Contact Us**: Contact form and school contact information.
* ✨**Admin Dashboard**: A comprehensive control panel for school administrators to add, edit, or delete image Gallery, fee structure, testimonials and manage the Admission and contact forms.


## 💻 Technologies Used

* **Frontend**: React, Tailwind CSS
* **Backend**: Node.js, Express.js
* **Database**: MongoDB
* **Version Control**: Git
* **Deployment**: Render

## ⚙️ Installation For LocalHost Running

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
  
5. Run the frontend application: 
  
      ```
      npm run dev
      ```
  
8. You can view the website in localhost: `http://localhost:3000`
  

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
      MONGODB_URL = <your-mongodb-uri>
      JWT_SECRET = <jwt secret code>
      EMAIL_ADMIN = <email address for sending notifications>
      EMAIL_PASS = <password for the email account>
      ADMIN_TOKEN = <admin token required to signUp for admin>

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

## 📞 Contact

For any questions or suggestions, please contact:

* 📧 Email: theartsytechnology@gmail.com
* 🐙 GitHub: [Artsy-Technologies](https://github.com/Artsy-Technologies/school-website/tree/main)

* * *

<p align="center">Show some ❤️ by giving a ⭐️ to this repo!</p>

* * *
