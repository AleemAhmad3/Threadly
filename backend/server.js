const dotenv = require("dotenv");

dotenv.config();

const app = require("./src/app.js");

const connectDB = require("./src/config/db.js");

const port = process.env.PORT;

const startServer = async () => {
  await connectDB();
  try {
    app.listen(port, () => {
      console.log(`server is running on port ${port}`);
    });
  } catch (error) {
    console.log("error while running server", error);
    process.exit(1);
  }
};
startServer();
