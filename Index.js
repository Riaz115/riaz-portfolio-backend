//requiring
const express = require("express");
const app = express();
const pagesRouter = require("./Routers/PagesRouters/PagesRouter");
const adminRouter = require("./Routers/AdminRouters/AdminRouters");
const DBConn = require("./DB/MongoConn");
const cors = require("cors");

//variables
const port = process.env.PORT || 5000;
const corsOptions = {
  origin: "http://localhost:3000",
  methods: "POST,GET,PUT ,DELETE,PATCH,HEAD,UPDATE",
  credentials: true,
};

//middlewares
app.use(cors(corsOptions));
app.use(express.json());
app.use(pagesRouter);
app.use(adminRouter);

//lisetening the app
DBConn()
  .then(() => {
    app.listen(port, (err) => {
      if (err) {
        console.log("there is error in port ", err);
      } else {
        console.log(`app is running on the port no ${port}`);
      }
    });
  })
  .catch((err) => {
    console.log("data not connected", err);
  });
