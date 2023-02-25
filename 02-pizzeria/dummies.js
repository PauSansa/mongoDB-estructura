
use pizzeria;

var cliente = db.getCollection("cliente");
var producto = db.getCollection("producto");
var empleado = db.getCollection("empleado");
var tienda = db.getCollection("tienda");
var venta = db.getCollection("venta");




db.cliente.insertOne({
    _id: ObjectId(2001),
    nombre: "Juan",
    apellido: "Pérez",
    direccion: {
      direccion: "Calle Falsa 123",
      cp: 12345,
      localitat: "Barcelona",
      provincia: "Barcelona"
    },
    telefono: 123456789
  });
  
  
  db.producto.insertOne({
    _id: ObjectId(1001),
    descripcion: "Pizza Margarita",
    imagen: "https://example.com/pizza.jpg",
    precio: 10.50
  });

  db.empleado.insertOne({
    _id: ObjectId(0001),
    nombre: "Pedro",
    apellido: "García",
    nif: "12345678A",
    telefono: "987654321",
    tipo: "cocinero"
  });
  
  db.tienda.insertOne({
    _id:ObjectId(3001),
    direccion: "Calle Falsa 456",
    cp: 54321,
    localidad: "Madrid",
    provincia: "Madrid",
    empleado: ObjectId(0001)
  });

  db.venta.insertOne({
    tipus: "domicilio",
    n_pizzas: 2,
    n_hamburgesas: 0,
    n_beguda: 1,
    preu: 25.50,
    cliente: ObjectId(2001),
    producto: ObjectId(1001),
    tienda: ObjectId(3001)
  });
  
  
  
  