# Demo


https://github.com/user-attachments/assets/8c2929dd-f16b-4a11-be67-1e7a597fe03a




# Home Unlocker App

## Overview
**Home Unlocker** is a React Native application built with Expo that allows users to view and unlock homes based on their current location. The app focuses on providing basic functionality with a straightforward UI, using `json-server` to simulate API responses.

## Features

### Basic UI/UX:
- Simple and functional interface.
- Emphasis on usability over complex design elements.

### Mock API:
- Utilizes `json-server` to provide mock API responses.
- Home data and unlock status are fetched and managed through JSON files.

### Home List:
- Displays a list of homes available for unlocking.
- Each home entry includes the address, image, and a description.
- Home data is fetched from the `json-server` API.

### Home Details and Unlock Feature:
- Users can select a home to view detailed information.
- An "Unlock" button appears if the user's current location is within 30 meters of the home.
- Simulates an API call to unlock the home and provides feedback (success or error messages).

### Login:
- Users must log in to access the Home Unlocker app.
- User credentials are fetched from a [GitHub repository](https://github.com/GittyAjay/Real-Estate-Unlock-App-Challenge.git), which contains mock user data for authentication.

## Installation

### 1. Clone the Repository

2. Navigate to the Project Directory:
cd Real-Estate-Unlock-App-Challenge
3. Install Dependencies:
Ensure you have Node.js and the Expo CLI installed, then run:

npm install
###  2. Setup json-server:
If you don't have json-server installed globally, run:

npm install -g json-server
### 3.  Start the json-server:
json-server --watch db.json --port 3000
This command starts json-server on port 3000, serving the data from src/mock/db.json.

### 4. Start the Expo Project:
expo start
This command will open the Expo DevTools in your browser. You can use the QR code to run the app on your physical device or emulator.

### 5. Logging In:
Use the credentials from [this GitHub repository to log in.](https://dummyjson.com/users)
### 6. Viewing Homes:
After logging in, users will see a list of homes available for unlocking.
Each home entry displays the address, image, and a brief description.
### 7. Viewing Home Details:
Tapping on a home will navigate to a detailed view with additional information.
### 8. Unlocking a Home:
The "Unlock" button is visible if the user’s current location is within 30 meters of the home.
Pressing "Unlock" simulates an API call.
The app displays a success or error message based on the simulated response.
