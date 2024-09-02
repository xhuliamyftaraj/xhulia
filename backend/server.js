let express = require('express');
const cors = require('cors')
const mongoose = require('mongoose')
const session = require('express-session')

const app = express()

app.use(cors(
    {
        credentials: true,
        origin: "http://localhost:3000",
        exposedHeaders: ["set-cookie"],
    }
))
app.use(session({
    secret: "This will be secret", resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 1000 * 60 * 60 * 24 }
}));
app.use(express.json({ limit: "1000mb", extended: true }));


mongoose.connect('mongodb+srv://git:git@cluster0.h9uun.mongodb.net/MERN?retryWrites=true&w=majority&appName=Cluster0')
.then((res)=>console.log("DB Connected"))
.catch((err)=>console.log("Something is wrong "+err))
// Test
app.use('/', (req, res) => {
    res.send("Hello World!")
})

app.listen(5000, () => console.log("Server started!"))