const express = require('express');
const dotenv = require('dotenv');
const { sequelize } = require('./models');

dotenv.config();

const app = express();
app.use(express.json());

app.listen(process.env.PORT);

sequelize
   .sync({ force: false })
   .then(() => {
      console.log('db');
   })
   .catch((err) => {
      console.log(err);
   });

const letterRouter = require('./routes/letterRouter');

app.use('/api/letter', letterRouter);
