import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'

const app = express();
app.use(express.json({limit: "30mb", extended: true}))
app.use(express.urlencoded({limit: "30mb", extended: true}))
app.use(cors());

app.get('/', (req, res) => {
    res.send("This is the STACK API")
})

const PORT = process.env.PORT || 5000

const CONNECTION_URL = 'mongodb+srv://admin:admin@stack-overflow.j4ghqe8.mongodb.net/?retryWrites=true&w=majority'

mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(PORT, () => {console.log(`Server running on port: ${PORT}`)}))
    .catch((err) => console.log(err.message))