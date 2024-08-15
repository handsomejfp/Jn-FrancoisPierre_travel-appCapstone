const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const travelRoutes = require('./routes/travelRoutes');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 6000;

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));


app.use('/api/travel', travelRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
