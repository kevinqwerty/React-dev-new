# Lost and Found App

## Overview
The Lost and Found App is a React TypeScript application that allows users to report and view lost and found items. It provides a user-friendly interface for managing item reports and utilizes Firebase for backend data storage.

## Features
- **Homepage**: Displays a list of lost and found items.
- **Item Reporting**: Users can report lost or found items through a form.
- **Item Details**: View detailed information about specific items.
- **Firebase Integration**: All item data is stored in a Firebase backend.
- **React Router**: Navigation between different pages of the application.
- **TypeScript Support**: Strong typing for items and users to enhance code quality.

## Project Structure
```
lost-and-found-app
├── src
│   ├── components
│   │   ├── ItemDetails.tsx
│   │   ├── ItemForm.tsx
│   │   └── ItemList.tsx
│   ├── pages
│   │   ├── HomePage.tsx
│   │   └── ItemPage.tsx
│   ├── types
│   │   ├── item.ts
│   │   └── user.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── firebase.ts
├── public
│   └── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## Getting Started

### Prerequisites
- Node.js (version 14 or later)
- npm (Node Package Manager)

### Installation
1. Clone the repository:
   ```
   git clone https://github.com/yourusername/lost-and-found-app.git
   ```
2. Navigate to the project directory:
   ```
   cd lost-and-found-app
   ```
3. Install the dependencies:
   ```
   npm install
   ```

### Running the Application
To start the development server, run:
```
npm run dev
```
Open your browser and navigate to `http://localhost:3000` to view the application.

### Firebase Setup
To connect the app to Firebase:
1. Create a Firebase project in the Firebase console.
2. Add your Firebase configuration in `src/firebase.ts`.
3. Ensure that the Firestore database is set up to store item data.

## Usage
- Users can navigate to the homepage to view all lost and found items.
- To report a lost or found item, users can fill out the form provided on the homepage.
- Clicking on an item will take users to the item details page for more information.

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License
This project is licensed under the MIT License.