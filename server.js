const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');

var mocks = require('./mockedData');

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const host = 'localhost';
const port = 4200;

app.get('/IPABESB/rest', function(req, res, next) {
  var fecha = req.query.fecha;
  var cliente = req.query.cliente;
  console.log(fecha, cliente);
  res.status(200).json(mocks.mockedResponse);
});

app.get('/IPABESB/rest/param/parametros', function(req, res, next) {
  var tipoParametro = req.query.tipoParametro;
  var idParametro = req.query.idParametro;
  console.log(tipoParametro, idParametro);
  res.status(200).json(mocks.mockedOne);
});

app.get('/IPABESB/rest/param/categorias', function(req, res, next) {
  var categoria = req.query.categoria;
  console.log(categoria);
  res.status(200).json(mocks.mockedCat);
});

app.get('/IPABESB/rest/param/calendario', function(req, res, next) {
  var anio = req.query.anio;
  console.log(anio);
  res.status(200).json(mocks.mockedCalendar);
});

app.get('/IPABESB/rest/catalogo/CLASIFICACION', function(req, res, next) {
  res.status(200).json(mocks.catalogoClasificacion);
});

app.get('/IPABESB/rest/catalogo/NIVEL_CUENTA', function(req, res, next) {
  res.status(200).json(mocks.catalogoNvlCta);
});

app.listen(port, () => {
  console.log(`Server is running on http://${host}:${port}`);
});
