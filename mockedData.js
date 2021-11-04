const mockedResponse = {
  "header": {
    "estatus": true,
    "uid": "2dc54842ac12800136dbca36e9a96b6c",
    "mensajeFuncional": "Consulta correcta.",
    "tipo": 0
  },
  "lista": [{
    "claveUnica": "1000785054",
    "numeroCredito": "11507087",
    "tipo": 0
  }],
  "tipo": 0
};

const mockedOne = {
  "header":{
     "estatus":true,
     "uid":"bdab35faac16b0015c09a84a8ec2363c",
     "mensajeFuncional":"Consulta correcta.",
     "tipo":0
  },
  "lista":[
     {
        "alta":false,
        "descripcion":"BASIC.INTEREST",
        "paramName":"91MXN20210709",
        "paramValue":"INTEREST.RATE",
        "comment":".53",
        "loadDate":"20210820",
        "tipo":0
     }
  ],
  "tipo":0
}

const mockedCat = {
  "header":{
     "estatus":true,
     "uid":"bdaef54cac16b00137f4c5ee764edcd1",
     "mensajeFuncional":"Consulta correcta.",
     "tipo":0
  },
  "lista":[
     {
        "isAlta":false,
        "aplicacion":"BMV.PRODUCTOS.CAPTA",
        "idRegistro":"1011",
        "categoria":"1011",
        "descripcion":"MULTIVA INTEGRA",
        "shortName":"MULTIVA INTEGRA",
        "tipoProd":"",
        "nivelCta":"4",
        "modalidad":"22",
        "descripcionIPAB":"MULTIVA INTEGRA",
        "productoIPAB":"MULTIVA INTEGRA",
        "loadDate":"20210820",
        "tipo":0
     }
  ],
  "tipo":0
};

const mockedCalendar = {
  "header": {
    "estatus": true,
    "uid": "bdb0845eac16b0011ba73736ee3d19f5",
    "mensajeFuncional": "Consulta correcta.",
    "tipo": 0
  },
  "lista": [
    {
      "isAlta": false,
      "descripcion": "HOLIDAY",
      "paramName": "MX002020",
      "paramValue": "01",
      "comment": "HHHWWWWWHHWWWWWHHWWWWWHHWWWWWHH",
      "loadDate": "0",
      "tipo": 0
    },
    {
      "isAlta": false,
      "descripcion": "HOLIDAY",
      "paramName": "MX002021",
      "paramValue": "02",
      "comment": "HWWWWHHWWWWWHHWWWWWHHWWWWWHHXXX",
      "loadDate": "0",
      "tipo": 0
    },
    {
      "isAlta": false,
      "descripcion": "HOLIDAY",
      "paramName": "MX002022",
      "paramValue": "03",
      "comment": "WWWWWHHWWWWWHHHWWWWHHWWWWWHHWWW",
      "loadDate": "0",
      "tipo": 0
    },
    {
      "isAlta": false,
      "descripcion": "HOLIDAY",
      "paramName": "MX002023",
      "paramValue": "04",
      "comment": "HHHHWWWWWHHWWWWWHHWWWWWHHWWWWWX",
      "loadDate": "0",
      "tipo": 0
    },
    {
      "isAlta": false,
      "descripcion": "HOLIDAY",
      "paramName": "MX002024",
      "paramValue": "05",
      "comment": "HHWWWWWHHWWWWWHHWWWWWHHWWWWWHHW",
      "loadDate": "0",
      "tipo": 0
    },
    {
      "isAlta": false,
      "descripcion": "HOLIDAY",
      "paramName": "MX002025",
      "paramValue": "06",
      "comment": "WWWWHHWWWWWHHWWWWWHHWWWWWHHWWWX",
      "loadDate": "0",
      "tipo": 0
    },
    {
      "isAlta": false,
      "descripcion": "HOLIDAY",
      "paramName": "MX002026",
      "paramValue": "07",
      "comment": "WWHHWWWWWHHWWWWWHHWWWWWHHWWWWWH",
      "loadDate": "0",
      "tipo": 0
    },
    {
      "isAlta": false,
      "descripcion": "HOLIDAY",
      "paramName": "MX002027",
      "paramValue": "08",
      "comment": "HWWWWWHHWWWHWHHWWHHWHHWWWWWHHWW",
      "loadDate": "0",
      "tipo": 0
    },
    {
      "isAlta": false,
      "descripcion": "HOLIDAY",
      "paramName": "MX002028",
      "paramValue": "09",
      "comment": "WWWHHWWWWWHHWWWHWHHWWWWWHHWWWWX",
      "loadDate": "0",
      "tipo": 0
    },
    {
      "isAlta": false,
      "descripcion": "HOLIDAY",
      "paramName": "MX002029",
      "paramValue": "10",
      "comment": "WHHWWWWWHHWWWWWHHWWWWWHHWWWWWHH",
      "loadDate": "0",
      "tipo": 0
    },
    {
      "isAlta": false,
      "descripcion": "HOLIDAY",
      "paramName": "MX002030",
      "paramValue": "11",
      "comment": "WHWWWHAgustinHWWWWWHHWWX",
      "loadDate": "0",
      "tipo": 0
    },
    {
      "isAlta": false,
      "descripcion": "HOLIDAY",
      "paramName": "MX002031",
      "paramValue": "12",
      "comment": "WWWHHWWWWWHHWWWWWHHWWWWWHHWWWWW",
      "loadDate": "0",
      "tipo": 0
    }
  ],
  "tipo": 0
};

const catalogoClasificacion = {
  "header": {
    "estatus": true,
    "uid": "bdbcc2c2ac16b00132e368bd64538579",
    "mensajeFuncional": "Consulta correcta.",
    "tipo": 0
  },
  "catalogo": [
    {
      "clave": "5",
      "descripcion": "CEDE",
      "tipo": 0
    },
    {
      "clave": "3",
      "descripcion": "Cuenta de nómina",
      "tipo": 0
    },
    {
      "clave": "2",
      "descripcion": "Depósitos a la vista con intereses",
      "tipo": 0
    },
    {
      "clave": "1",
      "descripcion": "Depósitos a la vista sin intereses",
      "tipo": 0
    },
    {
      "clave": "6",
      "descripcion": "Otro",
      "tipo": 0
    },
    {
      "clave": "4",
      "descripcion": "PRLV",
      "tipo": 0
    }
  ],
  "tipo": 0
};

const catalogoNvlCta = {
  "header": {
    "estatus": true,
    "uid": "bdd0d5f8ac16b0011d5cafbf408d24b7",
    "mensajeFuncional": "Consulta correcta.",
    "tipo": 0
  },
  "catalogo": [
    {
      "clave": "1",
      "descripcion": "Nivel 1",
      "tipo": 0
    },
    {
      "clave": "2",
      "descripcion": "Nivel 2",
      "tipo": 0
    },
    {
      "clave": "3",
      "descripcion": "Nivel 3",
      "tipo": 0
    },
    {
      "clave": "4",
      "descripcion": "Nivel 4",
      "tipo": 0
    },
    {
      "clave": "0",
      "descripcion": "No Aplica",
      "tipo": 0
    }
  ],
  "tipo": 0
};

module.exports = {
  mockedResponse,
  mockedOne,
  mockedCat,
  mockedCalendar,
  catalogoClasificacion,
  catalogoNvlCta
};
