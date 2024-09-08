Home Unlocker App
Overview
Home Unlocker is a React Native application built with Expo that allows users to view and unlock homes based on their current location. The app focuses on functionality with a straightforward UI, utilizing json-server to simulate API responses.

Features
Basic UI/UX:
Simple, functional interface.
Emphasis on usability over complex design.
Mock API:
Uses json-server to provide mock API responses.
Fetches home data and manages unlock status through JSON files.
Home List:
Displays a list of homes available for unlocking.
Each home entry includes address, image, and description.
Data fetched from the json-server API.
Home Details and Unlock Feature:
Allows users to select a home and view detailed information.
Includes an "Unlock" button that appears only if the user's current location is within 30 meters of the home.
Simulates an API call to unlock the home, displaying success or error messages based on the response.
Login
To use the Home Unlocker app, users need to log in. User credentials are fetched from https://github.com/GittyAjay/Real-Estate-Unlock-App-Challenge.git. This endpoint provides a set of mock user data for authentication purposes.

Installation
Clone the Repository:
bash
Copy code
git clone https://github.com/yourusername/Real-Estate-Unlock-App-Challenge.git
Navigate to the Project Directory:
bash
Copy code
cd Real-Estate-Unlock-App-Challenge
Install Dependencies:
Make sure you have Node.js and Expo CLI installed. Then run:

bash
Copy code
npm install
Setup json-server:
Install json-server globally if you haven't already:

bash
Copy code
npm install -g json-server
Start json-server:

bash
Copy code
json-server --watch db.json --port 3000
This command starts json-server on port 3000, serving the data from src/mock/db.json.

Start the Expo Project:
bash
Copy code
expo start
This command will open the Expo DevTools in your browser. You can then use the QR code to run the app on your physical device or emulator.

Usage
Logging In:
Use the credentials from https://github.com/GittyAjay/Real-Estate-Unlock-App-Challenge.git to log in.
Viewing Homes:
After logging in, users will see a list of homes they can unlock.
Each item displays address, image, and description.
Viewing Home Details:
Tapping on a home item will navigate the user to the home details screen.
Displays additional information about the selected home.
Unlocking a Home:
The "Unlock" button is visible only if the user's current location is within 30 meters of the home.
Pressing the "Unlock" button simulates an API call.
Displays a success or error message based on the simulated response.
