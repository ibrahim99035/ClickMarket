const express =  require('express');
const dotenv = require('dotenv');

const usersRoute = require('./routes/user'); 
const authRoute = require('./routes/auth');
const productRoute = require('./routes/product');
const cartRoute = require('./routes/cart');
const orderRoute = require('./routes/order');

const app = express();

dotenv.config();
require('./config/database')

app.use(express.json());

app.use('/api/users', usersRoute); 
app.use('/api/auth', authRoute);
app.use('/api/products', productRoute);
app.use('/api/cart', cartRoute);
app.use('/api/orders', orderRoute);

app.listen(process.env.PORT || 5000, ()=>{
    console.log(`The Server is running on port ${process.env.PORT}`);
});