


// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = "mongodb+srv://jokester341:BYflSfBdKntmcR8d@cluster0.pdywwf6.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });

// async function run() {
//   try {
//     // Connect the client to the server	(optional starting in v4.7)
//     await client.connect();
//     // Send a ping to confirm a successful connection
//     await client.db("admin").command({ ping: 1 });

//     const stuff = client.db("sample_mflix").listCollections().toArray(function(err, collInfos) {
//       return collInfos
//     })

//     console.log(await stuff)
    
//     console.log("Pinged your deployment. You successfully connected to MongoDB!");
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// run().catch(console.dir);
