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
  
const uri = `mongodb+srv://${process.env.DB_ID}:${process.env.DB_PASS}@cluster0.c5ebkxr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;


const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    await client.connect();
    await client.db("admin").command({ ping: 1 });
    const volunteerCollection = client.db('volunteerDB').collection('volunteer');
    const takeVolunteerCollection = client.db('studymate').collection('takeVolunteer');

    app.get('/volunteer', async (req, res) => {
        const cursor = volunteerCollection.find();
        const result = await cursor.toArray();
        res.send(result);
    });


      
  
    app.post('/volunteer', async (req, res) => {
        const newVolunteer = req.body;
        console.log(newVolunteer);
        const result = await volunteerCollection.insertOne(newVolunteer);
        
        console.log(result);
        res.send(result);
    });

    app.get('/volunteer/:id', async (req, res) => {
      try {
          const result = await volunteerCollection.findOne({ _id: new ObjectId(req.params.id) });
          if (result) {
              res.send(result);
          } else {
              res.status(404).send("Volunteer not found");
          }
      } catch (error) {
          console.error(error);
          res.status(500).send("Internal Server Error");
      }
  });

    app.post('/takeVolunteer', async(req, res)=>{
        const takeVolunteer = req.body;
        const result = await takeVolunteerCollection.insertOne(takeVolunteer);
        res.send(result)
      })
      
      app.get('/takeVolunteer', async(req, res) =>{
        const cursor = takeVolunteerCollection.find();
        const result = await cursor.toArray();
        res.send(result)
      })
    app.get('/volunteer/search', async (req, res) => {
        const query = req.query.q;
        try {
            const cursor = volunteerCollection.find({ title: { $regex: query, $options: 'i' } });
            const result = await cursor.toArray();
            res.send(result);
        } catch (error) {
            console.error('', error);
            res.status(500).send('');
        }
    });

    app.delete('/volunteer/:id', async (req, res) => {
      try {
          const result = await volunteerCollection.deleteOne({_id: new ObjectId(req.params.id)});
          if (result.deletedCount === 1) {
              res.status(200).json({ message: 'Volunteer deleted successfully' });
          } else {
              res.status(404).json({ error: 'Volunteer not found' });
          }
      } catch (error) {
          console.error('Error deleting volunteer:', error);
          res.status(500).json({ error: 'Internal server error' });
      }
  });
  




    

 
    
 





    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);







  app.get('/', (req, res) => {
    res.send('Hello from A11 Server....')
  });

  app.listen(port, () => console.log(`Server running on port ${port}`))