const express =  require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

const usersRoute = require('./routes/user');
const authRoute = require('./routes/auth');


const app = express();

dotenv.config();

mongoose.connect(
    process.env.MONGO_URL
).then(() => {console.log('MongoDB Connected')}).catch((err) => {console.log(err)});


app.use(express.json());
app.use('/api/users', usersRoute); 
app.use('/api/auth', authRoute);

app.listen(process.env.PORT || 5000, ()=>{
    console.log(`The Server is running on port ${process.env.PORT}`);
});