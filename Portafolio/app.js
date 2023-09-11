const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const { check, validationResult } = require('express-validator');

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(bodyParser.json());

// Rutas
app.get('/', (req, res) => {
    res.render('index');
});

app.get('/sobre_mi', (req, res) => {
    res.render('sobre_mi');
});

app.get('/experiencia', (req, res) => {
    res.render('experiencia');
});

app.get('/educacion', (req, res) => {
    res.render('educacion');
});

app.get('/habilidades', (req, res) => {
    res.render('habilidades');
});

app.get('/proyectos', (req, res) => {
    res.render('proyectos');
});

app.get('/contactame', (req, res) => {
    res.render('contactame');
});

app.get('/confirmacion', (req, res) => {
    res.render('confirmacion');
});

app.post('/contacto', (req, res) => {
    const { nombre, email, mensaje } = req.body;
    res.redirect('/confirmacion');
  });


app.listen(3000, () => {
    console.log('Servidor en ejecución en el puerto 3000');
});
