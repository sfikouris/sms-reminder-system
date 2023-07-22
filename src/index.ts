// src/index.ts
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import { vehicleRouter } from './routes/vehicles';

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

const mongoURL = process.env.MONGODB_URI || 'mongodb://localhost:27017/sms_reminder_db';

mongoose.connect(mongoURL);


const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB successfully');
});

app.use('/api', vehicleRouter);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });