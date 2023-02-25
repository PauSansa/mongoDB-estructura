db.createCollection('cliente', {
    validator: {
        $jsonSchema: {
            bsonType: 'object',
            title: 'cliente',
            required: ['nombre'],
            properties: {
                nombre: {
                    bsonType: 'string'
                },
                apellido: {
                    bsonType: 'string'
                },
                direccion: {
                    bsonType: 'object',
                    title: 'object',
                    properties: {
                        direccion: {
                            bsonType: 'string'
                        },
                        cp: {
                            bsonType: 'int'
                        },
                        localitat: {
                            bsonType: 'string'
                        },
                        privincia: {
                            bsonType: 'string'
                        }
                    }
                },
                telefono: {
                    bsonType: 'int'
                }
            }
        }
    }
});
db.createCollection('venta', {
    validator: {
        $jsonSchema: {
            bsonType: 'object',
            title: 'venta',
            required: ['tipus', 'cliente', 'producto', 'tienda'],
            properties: {
                tipus: {
                    enum: ["domicilio", "tienda"]
                },
                n_pizzas: {
                    bsonType: 'int'
                },
                n_hamburgesas: {
                    bsonType: 'int'
                },
                n_beguda: {
                    bsonType: 'int'
                },
                preu: {
                    bsonType: 'decimal'
                },
                cliente: {
                    bsonType: 'objectId'
                },
                producto: {
                    bsonType: 'objectId'
                },
                tienda: {
                    bsonType: 'objectId'
                }
            }
        }
    }
});
db.createCollection('producto', {
    validator: {
        $jsonSchema: {
            bsonType: 'object',
            title: 'producto',
            properties: {
                descripcion: {
                    bsonType: 'string'
                },
                imagen: {
                    bsonType: 'string'
                },
                precio: {
                    bsonType: 'decimal'
                }
            }
        }
    }
});
db.createCollection('tienda', {
    validator: {
        $jsonSchema: {
            bsonType: 'object',
            title: 'tienda',
            required: ['direccion', 'cp', 'localidad', 'provincia', 'empleado'],
            properties: {
                direccion: {
                    bsonType: 'string'
                },
                cp: {
                    bsonType: 'int'
                },
                localidad: {
                    bsonType: 'string'
                },
                provincia: {
                    bsonType: 'string'
                },
                empleado: {
                    bsonType: 'objectId'
                }
            }
        }
    }
});
db.createCollection('empleado', {
    validator: {
        $jsonSchema: {
            bsonType: 'object',
            title: 'empleado',
            properties: {
                nombre: {
                    bsonType: 'string'
                },
                apellido: {
                    bsonType: 'string'
                },
                nif: {
                    bsonType: 'string'
                },
                telefono: {
                    bsonType: 'string'
                },
                tipo: {
                    enum: ["cocinero", "repartidor"]
                }
            }
        }
    }
});