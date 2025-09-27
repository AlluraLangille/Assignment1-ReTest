
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { setLegendsRoutes } from './routes/legendsRoutes';

import swaggerUi from 'swagger-ui-express';
import swaggerJsdoc from 'swagger-jsdoc';
import path from 'path';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

const swaggerSpec = require(path.join(__dirname, '../swagger.json'));
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

setLegendsRoutes(app);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    console.log(`Swagger docs available at http://localhost:${PORT}/api-docs`);
});
