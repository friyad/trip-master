const express = require('express')
const { MongoClient } = require('mongodb');
const ObjectId = require('mongodb').ObjectId
const cors = require('cors')
require('dotenv').config()
const app = express()
const port = process.env.PORT || 4000

// Medl
app.use(cors())
app.use(express.json())


const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.ce1yc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function run() {
    try {
        await client.connect();
        const database = client.db("tripMaster");
        const allToursCollection = database.collection("allTours");
        const cityBreaksCollection = database.collection("cityBreaks");
        const desExCollection = database.collection("destinationsExperience");
        const bookingCollection = database.collection("orders");


        // --------------------City Breacks--------------------
        // Get All City Breaks Data
        app.get("/cityBreaks", async (req, res) => {
            const cursor = cityBreaksCollection.find({})
            const result = await cursor.toArray()
            res.json(result)
        })



        // --------------Destinations Experience--------------
        // Get all Destinations Experience
        app.get("/desEx", async (req, res) => {
            const cursor = desExCollection.find({})
            const result = await cursor.toArray()
            res.json(result)
        })



        // -------------------All Tours-------------------
        // Get 3/4 tours from all tours for show on the Tranding offers
        app.get("/allTours/offers", async (req, res) => {
            const cursor = allToursCollection.find({})
            const result = await cursor.limit(3).toArray()
            res.json(result)
        })
        // Get all Tours for Tour Packages
        app.get("/allTours", async (req, res) => {
            const cursor = allToursCollection.find({})
            const result = await cursor.toArray()
            res.json(result)
        })
        // Get a (1) Tour for Tour Details
        app.get("/tourDetails/:tourId", async (req, res) => {
            const id = req.params.tourId
            const query = { _id: ObjectId(id) }
            const result = await allToursCollection.findOne(query)
            res.json(result)
        })
        // Post a Tour from Add New Tour Package
        app.post("/addNewTourPackage", async (req, res) => {
            const tourPackage = req.body;
            const result = await allToursCollection.insertOne(tourPackage)
            res.json(result)
        })



        // -------------------------Orders-------------------------
        // Post a single Order
        app.post("/bookings", async (req, res) => {
            const order = req.body
            const result = await bookingCollection.insertOne(order)
            res.json(result)
        })
        // Get all bookings to display in manage bookings
        app.get("/bookings", async (req, res) => {
            const cursor = bookingCollection.find({})
            const result = await cursor.toArray()
            res.json(result)
        })

        // Get User all Personal Bookings by URI
        app.get("/bookings/:uid", async (req, res) => {
            const userId = req.params.uid
            const query = { uid: userId }
            const cursor = bookingCollection.find(query)
            const result = await cursor.toArray()
            res.json(result)
        })
        // Delete a Personal Bookings
        app.delete("/bookings/:ID", async (req, res) => {
            const id = req.params.ID
            const query = { _id: ObjectId(id) }
            const result = await bookingCollection.deleteOne(query)
            res.json(result)
        })
        // Get a (1) Booking to display in See details----
        app.get("/bookingDetails/:bookingID", async (req, res) => {
            const id = req.params.bookingID
            const query = { _id: ObjectId(id) }
            const result = await bookingCollection.findOne(query)
            res.json(result)
        })
        // Update Pending to Approved by Click on the approve btn
        app.put("/updateBookingStatus/:bookingUpID", async (req, res) => {
            const id = req.params.bookingUpID
            const updatedInfo = req.body;
            const filter = { _id: ObjectId(id) }
            const options = { upsert: true };
            const updateBooking = {
                $set: {
                    info: updatedInfo
                },
            }
            const result = await bookingCollection.updateOne(filter, updateBooking, options)
            res.json(result)
        })

    }
    finally {
        // await client.close();
    }
}
run().catch(console.dir);






app.get('/', (req, res) => {
    res.send('Hello World! This is Trip Master here')
})

app.listen(port, () => {
    console.log('Your Port is', port)
})