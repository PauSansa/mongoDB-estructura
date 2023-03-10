db.createCollection('ventas', {
    validator: {
        $jsonSchema: {
            bsonType: 'object',
            title: 'ventas',
            properties: {
                fecha_venta: {
                    bsonType: 'date'
                },
                empleado: {
                    bsonType: 'object',
                    title: 'object',
                    properties: {
                        nombre: {
                            bsonType: 'string'
                        },
                        apellido: {
                            bsonType: 'string'
                        }
                    }
                },
                gafas: {
                    bsonType: 'object',
                    title: 'object',
                    properties: {
                        proveedor: {
                            bsonType: 'object',
                            title: 'object',
                            properties: {
                                nombre: {
                                    bsonType: 'string'
                                },
                                direccion_postal: {
                                    bsonType: 'string'
                                },
                                telefono: {
                                    bsonType: 'timestamp'
                                },
                                email: {
                                    bsonType: 'timestamp'
                                }
                            }
                        },
                        marca: {
                            bsonType: 'string'
                        },
                        grad_left: {
                            bsonType: 'decimal'
                        },
                        grad_right: {
                            bsonType: 'decimal'
                        },
                        tipo_montura: {
                            enum: ["flotante", "pasta", "metalica"]
                        },
                        color_montura: {
                            bsonType: 'string'
                        },
                        color_left: {
                            bsonType: 'string'
                        },
                        color_right: {
                            bsonType: 'string'
                        },
                        precio: {
                            bsonType: 'decimal'
                        }
                    }
                },
                cliente: {
                    bsonType: 'object',
                    title: 'object',
                    properties: {
                        nombre: {
                            bsonType: 'string'
                        },
                        direccion_postal: {
                            bsonType: 'string'
                        },
                        telefono: {
                            bsonType: 'int'
                        },
                        email: {
                            bsonType: 'string'
                        },
                        fecha_registro: {
                            bsonType: 'date'
                        }
                    }
                }
            }
        }
    }
});