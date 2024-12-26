const express = require('express');
const app = express();
const employeeRoutes = require('./routes/employeeRoute');
const methodOverride = require('method-override');
const bodyParser = require('body-parser');



app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use('/employees', employeeRoutes);



app.get('/', (req, res) => {
    res.render('index');
});





const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});