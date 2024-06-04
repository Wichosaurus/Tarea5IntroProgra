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
    cambiarDireccion: function (){
        console.log('Actualiza tus datos');
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
    cambiarDireccion: function (){
        console.log('Actualiza tus datos');
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
    cambiarDireccion: function (){
        console.log('Actualiza tus datos');
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
    cambiarDireccion: function (){
        console.log('Actualiza tus datos');
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
    cambiarDireccion: function (){
        console.log('Actualiza tus datos');
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
    cambiarDireccion: function (){
        console.log('Actualiza tus datos');
    },
};

agregarIdentificacion = function () {
    usuario.DPI='8477099037186'
    usuario1.DPI='2908275070398'
    usuario2.DPI='2116579469040'
    usuario3.DPI='7212357620378'
    usuario4.DPI='7824927525199'
    usuario5.DPI='7059663695593'
}

cambiaDireccion = function(){
    usuario.direccion.municipio="Guatemala"
    usuario.direccion.calle="6ta Av"
    usuario.direccion.numero="24"
    usuario1.direccion.municipio="Quetzaltenango"
    usuario1.direccion.calle="1ra Calle"
    usuario1.direccion.numero="81"
    usuario2.direccion.municipio="Guatemala"
    usuario2.direccion.calle="2da Av"
    usuario2.direccion.numero="83"
    usuario3.direccion.municipio="Mixco"
    usuario3.direccion.calle="8va Calle"
    usuario3.direccion.numero="14"
    usuario4.direccion.municipio="Villa Nueva"
    usuario4.direccion.calle="9na Ave"
    usuario4.direccion.numero="32"
    usuario5.direccion.municipio="San Miguel Petpa"
    usuario5.direccion.calle="17 Ave"
    usuario5.direccion.numero="4"
}
let usuarios = [usuario, usuario1, usuario2, usuario3, usuario4, usuario5];

let mostrarLog = function(){
for (let i = 0; i < usuarios.length; i++) {
    let usuario = usuarios[i];
    console.log(`Usuario ${i + 1}:`);
    console.log(`Nombre: ${usuario.nombre}`);
    console.log(`Apellido: ${usuario.apellido}`);
    console.log(`DPI: ${usuario.DPI}`);
    console.log(`Email: ${usuario.email}`);
    console.log(`Dirección: ${usuario.direccion.municipio}, ${usuario.direccion.calle}, ${usuario.direccion.numero}`);
    console.log(`Estado: ${usuario.estado}`);
    usuario.cambiarDireccion
        console.log(usuario.nombre);
}}