# Urban Legends Index API - Project Requirements

## Overview
A backend RESTful API for managing an index of urban legend monsters. Supports full CRUD operations and is structured for future frontend integration.

## Data Model
### Legend
- `id`: string (UUID)
- `name`: string
- `origin`: string
- `description`: string
- `firstSighted`: string (year or date)
- `imageUrl`: string (optional)

## API Endpoints
### Legends
- `GET /api/legends` - List all legends
- `GET /api/legends/:id` - Get a legend by ID
- `POST /api/legends` - Create a new legend
- `PUT /api/legends/:id` - Update a legend
- `DELETE /api/legends/:id` - Delete a legend

## Expected Behaviours
- All endpoints return JSON
- Validation for required fields on create/update
- Proper error handling (404, 400, 500)
- Ready for frontend integration
- Includes Swagger API documentation
- Deployed to Render (or similar)
