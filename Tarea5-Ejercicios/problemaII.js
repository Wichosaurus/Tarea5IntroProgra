let usuario = {
    nombre: 'Paola',
    apellido: 'Ortiz',
    email: 'paola@company.ru',
    direccion: {
        municipio: 'Jocotenango',
        calle: 'Calle 43',
        numero: 25,
    },
    estado: true,
    recuperarClave: function (){
        console.log('Recuperar clave para');
    },
};

let usuario1 = {
    nombre: 'Paolo',
    apellido: 'Ortega',
    email: 'paolo@company.ru',
    direccion: {
    municipio: 'Coban',
    calle: 'Calle 84',
    numero: 15,
    },
    estado: true,
    recuperarClave: function (){
        console.log('Recuperar clave para');
    },
};

let usuario2 = {
    nombre: 'Juan',
    apellido: 'Hernandez',
    email: 'juan@company.ru',
    direccion: {
    municipio: 'Gutemala',
    calle: 'Calle Marti',
    numero: 5,
    },
    estado: true,
    recuperarClave: function (){
        console.log('Recuperar clave para');
    },
};

let usuario3 = {
    nombre: 'Esteban',
    apellido: 'Cardona',
    email: 'esteban@company.ru',
    direccion: {
    municipio: 'San Miguel Petapa',
    calle: 'Calle 50',
    numero: 35,
    },
    estado: true,
    recuperarClave: function (){
        console.log('Recuperar clave para');
    },
};

let usuario4 = {
    nombre: 'Estuardo',
    apellido: 'Rangel',
    email: 'estuardo@company.ru',
    direccion: {
    municipio: 'Villa Canales',
    calle: 'Calle Principa;',
    numero: 45,
    },
    estado: true,
    recuperarClave: function (){
        console.log('Recuperar clave para');
    },
};

let usuario5 = {
    nombre: 'Pamela',
    apellido: 'Sanchez',
    email: 'pamela@company.ru',
    direccion: {
    municipio: 'Villa Nueva',
    calle: 'Calle 6ta',
    numero: 55,
    },
    estado: true,
    recuperarClave: function (){
        console.log('Recuperar clave para');
    },
};

let usuarios = [usuario, usuario1, usuario2, usuario3, usuario4, usuario5];
for (let i = 0; i < usuarios.length; i++) {
    let usuario = usuarios[i];
    console.log(`Usuario ${i + 1}:`);
    console.log(`Nombre: ${usuario.nombre}`);
    console.log(`Apellido: ${usuario.apellido}`);
    console.log(`Email: ${usuario.email}`);
    console.log(`Dirección: ${usuario.direccion.municipio}, ${usuario.direccion.calle}, ${usuario.direccion.numero}`);
    console.log(`Estado: ${usuario.estado}`);
    usuario.recuperarClave();
    console.log(usuario.nombre);
}