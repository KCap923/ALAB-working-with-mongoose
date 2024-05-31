import express from 'express';
import dotenv from 'dotenv';
// Configuration to read our enviroment variables
dotenv.config();
import grades from './routes/grades.mjs';

const PORT = process.env.PORT || 3001;
const app = express();

//Connect to DB
// import './db/conn.mjs';

// JSON middleware
app.use(express.json());

// Grades Routes
app.use('/api/grades', grades);

app.get('/', (req, res) => {
  res.send('<h1>Welcome to the Grades API.</h1>');
});

//Global Error Handling Middlware
app.use((err, req, res, next) => {
  res.status(500).send('Seems like we messed up somewhere...');
});

// Start the Express Server
app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});

ATLAS_URI=mongodb+srv://KCap:Momorange523@cluster0.0pgzeh8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
PORT=3001