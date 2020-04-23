var socket = io();

// Escuchan sucesos
socket.on('connect', function() {
    console.log('Conectado con el servidor');

});

socket.on('disconnect', function() {
    console.log('Perdimos coneccion con el servidor');

});

// Enviar informacion
socket.emit('enviarMensaje', {
    usuario: 'Franco',
    mensaje: 'Hola mundo'
}, function(resp) {
    console.log('Respuesta Server: ', resp);
});

// Escuchar informacion
socket.on('enviarMensaje', function(mensaje) {
    console.log('Servicor: ', mensaje);

});