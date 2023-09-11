const express = require('express');
const bodyParser = require('body-parser');
const { check, validationResult } = require('express-validator');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index', { title: 'Formulario' });
});

app.post('/', [
  check('name').notEmpty().withMessage('El nombre es obligatorio'),
  check('email').isEmail().withMessage('El correo electrónico no es válido'),
  check('birthdate').isDate().withMessage('La fecha de nacimiento no es válida'),
  check('message').isLength({ max: 50 }).withMessage('El mensaje no puede tener más de 50 caracteres')
], (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.render('index', { title: 'Formulario', errors: errors.array() });
  }
  res.render('success', { title: 'Éxito', data: req.body });
});

app.listen(3000, () => {
  console.log('La aplicación se está ejecutando en http://localhost:3000');
});
