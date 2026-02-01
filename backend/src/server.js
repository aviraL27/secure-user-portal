const app = require("./app");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

// load env variables
dotenv.config();

// connect database
connectDB();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
