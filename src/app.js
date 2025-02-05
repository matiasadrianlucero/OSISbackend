import express from 'express'
import cors from 'cors'
import routes from './routes/router.js'
import {PrismaClient} from '@prisma/client'

import { check } from 'express-validator'


const prisma = new PrismaClient();
const app = express();
   
const corsOptions = {
  origin: 'https://react-frontend-production-1e4a.up.railway.app', 
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE'],

  exposedHeaders: 'Authorization',
};
app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); 
app.use('/', routes);
app.use(express.static('public'));

app.listen(5432, () => {
  console.log('Server is running on port 5174');
});
