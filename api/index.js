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
const multer = require('multer')
const path = require("path");
const multipart = require('connect-multiparty');
const multipartMiddleware = multipart({uploadDir:'./images'});

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

app.use("/images", express.static(path.join(__dirname, "public/images")));

//middleWare:
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));
app.use(bodyparser.json());
app.use(cors());


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "public/images");
    },
    filename: (req, file, cb) => {
      cb(null, file.originalname);
    },
  });

const upload = multer({ storage: storage });
app.post("/api/upload", upload.single("file"), (req, res) => {
  try {
    return res.status(200).json("File uploded successfully");
  } catch (error) {
    console.error(error);
  }
});

app.post('/uploads', multipartMiddleware, function(req, resp) {
  console.log(req.body, req.files);
  // don't forget to delete all req.files when done
});

app.use("/api/user", userRouter)
app.use("/api/auth", authRouter)
app.use("/api/post", postRouter)

app.listen(process.env.PORT || 5000, () => {
    console.log('sever is running...');
})