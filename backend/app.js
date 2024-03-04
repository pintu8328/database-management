const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./utils/database');
const tableRoutes = require('./routes/tableRoutes');
const tableRoute = require('./routes/table');

const app = express();
app.use(bodyParser.json());

app.use('/tables', tableRoutes);
app.use('/table', tableRoute);


sequelize.sync().then(() => {
    console.log('Database synchronized');
}).catch(err => {
    console.error('Error synchronizing database:', err);
});

app.listen(4000, () => {
    console.log('Server is running on port 4000');
});
