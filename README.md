# Time Sheet Tracker

The Time Sheet Tracker is a web-based application designed to help users track their work hours and tasks on various projects efficiently.

## Table of Contents

- [Introduction](#introduction)
- [Key Features](#key-features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Introduction

The Time Sheet Tracker simplifies the process of logging and managing work hours by providing a user-friendly interface where users can record their daily tasks, work types, projects, and hours spent.

## Key Features

- **User Authentication**: Users can register and log in using their email IDs and passwords.
- **Dashboard**: Upon login, users are directed to a dashboard displaying menu options for easy navigation.
- **Time Sheet Management**: Users can access the Time Sheet menu to record their daily tasks and hours worked.
- **Task Entry**: Users can input details such as date, work type, project, and hours spent on each task.
- **Date Selection**: Users can select the date for which they are entering time sheet information.
- **Work Type and Project Selection**: Users can choose from predefined lists of work types and projects.
- **Hour Logging**: Users can enter the number of hours spent on each task with validation.

## Technologies Used

- **Frontend**: HTML, CSS, JavaScript (React)
- **Backend**: Node.js with Express.js
- **Database**: MongoDB
- **Authentication**: JWT (JSON Web Tokens)
- **Deployment**: Hosted on a cloud platform like AWS or Heroku

## Installation

1. **Clone the Repository:**
   - Clone the Time Sheet Tracker repository to your local machine using Git:
     ```bash
     git clone https://github.com/ragunanthan/timeSheetFrontend.git
     ```

2. **Navigate to the Project Directory:**
   - Use the `cd` command to move into the project directory:
     ```bash
     cd timeSheetFrontend
     ```

3. **Install Dependencies:**
   - Before running the application, you need to install its dependencies. Use npm, the Node.js package manager, to install the required packages:
     ```bash
     npm install
     ```

4. **Set Up Environment Variables:**
   - Create a `.env` file in the root of the project directory to store environment variables such as database connection URLs and secret keys.
   - Here's an example `.env` file with placeholders for your configuration:
     ```plaintext
     PORT=3000
     MONGODB_URI=mongodb://localhost:27017/time-sheet-db
     JWT_SECRET=your_jwt_secret_key
     ```

5. **Start the Development Server:**
   - Once the dependencies are installed and environment variables are set up, you can start the development server:
     ```bash
     npm start
     ```
   - This command will launch the application, and it will be accessible at [http://localhost:3000](http://localhost:3000).

6. **Database Setup (Optional):**
   - If you're using MongoDB as the database, ensure that MongoDB is installed and running on your local machine, or update the `MONGODB_URI` environment variable with the appropriate connection URL.

7. **Deployment (Optional):**
   - If you plan to deploy the application to a server or cloud platform, ensure that you configure the necessary deployment settings such as server configurations, domain setup, and deployment scripts.

8. **Additional Configuration (Optional):**
   - Depending on your specific requirements, you may need to configure additional settings such as email notifications, user roles, or third-party integrations. Refer to the project documentation or source code for guidance on customization.

By following these steps, you should have the Time Sheet Tracker project set up and running on your local machine, ready for usage or further development. If you encounter any issues during the installation process, refer to the project's documentation or seek assistance from the project's contributors.

## Usage

Provide instructions on how to use the Time Sheet Tracker once it's installed and running. Include information on how to register, log in, and record time sheet information.

## Contributing

Contributions are welcome! If you have any suggestions, enhancements, or bug fixes, please feel free to open an issue or submit a pull request.

## License

[MIT License](LICENSE)
