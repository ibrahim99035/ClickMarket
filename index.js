const express =  require('express');
const dotenv = require('dotenv');

const usersRoute = require('./routes/user'); 
const authRoute = require('./routes/auth');
const productRoute = require('./routes/product');

const app = express();

dotenv.config();
const MongoConnection = require('./config/database')

app.use(express.json());
app.use('/api/users', usersRoute); 
app.use('/api/auth', authRoute);
app.use('/api/products', productRoute);

app.listen(process.env.PORT || 5000, ()=>{
    console.log(`The Server is running on port ${process.env.PORT}`);
});