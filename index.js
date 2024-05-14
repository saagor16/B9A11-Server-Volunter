const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv').config()
const { MongoClient, ServerApiVersion } = require('mongodb');
const port = process.env.PORT || 9000;
const { ObjectId } = require('mongodb');

const corsOptions = {
    origin: [
      'http://localhost:5173',
      'http://localhost:5174',
      '',
    ],
    credentials: true,
    optionSuccessStatus: 200,
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE']
  }
  
  app.use(cors(corsOptions));
  app.use(express.json());

console.log(process.env.DB_ID)
  

run().catch(console.dir);







  app.get('/', (req, res) => {
    res.send('Hello from A11 Server....')
  });

  app.listen(port, () => console.log(`Server running on port ${port}`))