const path = require('path');
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config({ path: './config/config.env' });


const app = express();

app.use(express.json());

app.use(cors());


// app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/v1/stores', require('./routes/stores'));

const PORT = process.env.PORT || 5000;


app.listen(PORT, () =>
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);