# Urban Legends API

This project is a RESTful API for managing an index of urban legends. It supports full CRUD (Create, Read, Update, Delete) operations for urban legends.

## Features

- Create a new urban legend
- Retrieve a list of urban legends
- Retrieve a specific urban legend by ID
- Update an existing urban legend
- Delete an urban legend

## Technologies Used

- TypeScript
- Express.js
- Node.js

## Project Structure

```
urban-legends-api
├── src
│   ├── app.ts                # Entry point of the application
│   ├── controllers           # Contains the logic for handling requests
│   │   └── legendsController.ts
│   ├── routes                # Defines the API routes
│   │   └── legendsRoutes.ts
│   ├── models                # Contains the data models
│   │   └── legend.ts
│   └── types                 # Type definitions
│       └── index.ts
├── package.json              # NPM package configuration
├── tsconfig.json             # TypeScript configuration
└── README.md                 # Project documentation
```

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd urban-legends-api
   ```
3. Install the dependencies:
   ```
   npm install
   ```

## Usage

To start the server, run:
```
npm start
```

The API will be available at `http://localhost:3000`.

## API Endpoints

- `POST /legends` - Create a new legend
- `GET /legends` - Retrieve all legends
- `GET /legends/:id` - Retrieve a legend by ID
- `PUT /legends/:id` - Update a legend by ID
- `DELETE /legends/:id` - Delete a legend by ID

## Contributing

Feel free to submit issues or pull requests for improvements or bug fixes.