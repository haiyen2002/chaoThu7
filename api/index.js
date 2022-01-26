const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require("dotenv");
const helmet = require('helmet');
const morgan = require('morgan');
const bodyparser = require("body-parser")
const cors = require('cors')
const userRouter = require('./routes/userRouter')
const authRouter = require('./routes/auth')
const postRouter = require('./routes/postRouter')

dotenv.config();

mongoose
    .connect(process.env.MONGO_URL,
        { 
            useUnifiedTopology: true,
            useCreateIndex: true,
            useNewUrlParser: true 
        }
    )
    .then(()=>(console.log('DB Connection Successfull!')))
    .catch((err) => (
        console.log(err)
    ))

//middleWare:
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));
app.use(bodyparser.json());
app.use(cors());
app.use("/api/user", userRouter)
app.use("/api/auth", authRouter)
app.use("/api/post", postRouter)

app.listen(process.env.PORT || 5000, () => {
    console.log('sever is running...');
})