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

### 1. Clone the Repository:
```bash
git clone https://github.com/yourusername/Real-Estate-Unlock-App-Challenge.git
