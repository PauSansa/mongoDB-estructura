
var ventas = db.getCollection("ventas");

const dummies = [
  {
    fecha_venta: new Date('2023-02-24'),
    empleado: {
      nombre: 'Juan',
      apellido: 'Pérez'
    },
    gafas: {
      proveedor: {
        nombre: 'Óptica ABC',
        direccion_postal: 'Av. Siempre Viva 123',
        telefono: 1234567890,
        email: 'info@opticaabc.com'
      },
      marca: 'Ray-Ban',
      grad_left: -1.5,
      grad_right: -2.0,
      tipo_montura: 'Completa',
      color_montura: 'Negro',
      color_left: 'Azul',
      color_right: 'Verde',
      precio: 150.0
    },
    client: {
      nombre: 'Ana',
      direccion_postal: 'Calle Falsa 123',
      telefono: 5551234567,
      email: 'ana@gmail.com',
      fecha_registro: new Date('2023-01-01')
    }
  },
  {
    fecha_venta: new Date('2023-02-23'),
    empleado: {
      nombre: 'María',
      apellido: 'García'
    },
    gafas: {
      proveedor: {
        nombre: 'Óptica XYZ',
        direccion_postal: 'Calle Falsa 456',
        telefono: 0987654321,
        email: 'info@opticaxyz.com'
      },
      marca: 'Oakley',
      grad_left: -2.5,
      grad_right: -2.0,
      tipo_montura: 'Semicompleta',
      color_montura: 'Gris',
      color_left: 'Amarillo',
      color_right: 'Naranja',
      precio: 200.0
    },
    client: {
      nombre: 'Pedro',
      direccion_postal: 'Av. Siempre Viva 456',
      telefono: 5559876543,
      email: 'pedro@gmail.com',
      fecha_registro: new Date('2023-02-01')
    }
  },
  {
    "fecha_venta": "2023-02-23T15:45:00Z",
    "empleado": {
      "nombre": "Ana",
      "apellido": "García"
    },
    "gafas": {
      "proveedor": {
        "nombre": "Óptica del Carmen",
        "direccion_postal": "Av. de la Constitución 34",
        "telefono": 1678452390,
        "email": "info@opticadelcarmen.com"
      },
      "marca": "Prada",
      "grad_left": -2.25,
      "grad_right": -2.5,
      "tipo_montura": "Semirrígida",
      "color_montura": "Azul",
      "color_left": "Gris",
      "color_right": "Gris",
      "precio": 289.99
    },
    "cliente": {
      "nombre": "Juan Martínez",
      "direccion_postal": "Calle de la Luna 789",
      "telefono": 632459780,
      "email": "juan.martinez@hotmail.com",
      "fecha_registro": "2023-02-20T10:00:00Z"
    }
  },
  {
    "fecha_venta": "2023-02-24T13:15:00Z",
    "empleado": {
      "nombre": "Luis",
      "apellido": "Fernández"
    },
    "gafas": {
      "proveedor": {
        "nombre": "Óptica de la Fuente",
        "direccion_postal": "Calle Mayor 345",
        "telefono": 1645938721,
        "email": "info@opticadelafuente.com"
      },
      "marca": "Tom Ford",
      "grad_left": -3.0,
      "grad_right": -2.75,
      "tipo_montura": "Al aire",
      "color_montura": "Marrón",
      "color_left": "Negro",
      "color_right": "Negro",
      "precio": 349.99
    },
    "cliente": {
      "nombre": "Carla González",
      "direccion_postal": "Calle del Sol 123",
      "telefono": 678345672,
      "email": "carla.gonzalez@gmail.com",
      "fecha_registro": "2022-12-01T09:30:00Z"
    }
  }
];

ventas.insertMany(dummies);

