// server.js ou app.js
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const compression = require('compression');
const myRouter = require('./routes/personnagesRoutes');


const app = express();

app.use(cors()); 
app.use(helmet()); 
app.use(compression()); 

app.use('/myRoute', myRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
