const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

// Configurar body-parser para recibir datos de formularios
app.use(bodyParser.urlencoded({ extended: true }));

// Servir archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Ruta para la página de registro
app.get('/registro', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'registro.html'));
});

// Ruta para manejar el registro
app.post('/register', (req, res) => {
    const { nombre, email, contrasena } = req.body;
    // Aquí puedes añadir lógica para guardar el usuario en una base de datos
    console.log(`Nuevo usuario registrado: ${nombre}, ${email}`);
    res.send('¡Registro exitoso!'); // Mensaje simple de éxito
});

// Ruta para la página de login
app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'login.html'));
});

// Ruta para manejar el login
app.post('/login', (req, res) => {
    const { email, password } = req.body;
    // Aquí podrías validar el usuario contra una base de datos
    console.log(`Usuario intenta iniciar sesión: ${email}`);
    res.send('Inicio de sesión exitoso'); // Mensaje simple de éxito
});

// Iniciar el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
