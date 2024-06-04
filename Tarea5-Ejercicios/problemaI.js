function addUserMethods(user) {
    user.mostrarInformacion = function() {
        console.log(`Usuario: ${this.nombre} ${this.apellido}`);
        console.log(`Email: ${this.email}`);
        console.log('Direccion:', this.direccion);
    };
    user.enviarMensaje = function(mensaje) {
        console.log(`Usuario necesita cambio de contrasena ${this.email}: ${mensaje}`);
    };
}

let usuario = {
    nombre: 'Paola',
    apellido: 'Ortiz',
    email: 'paola@company.ru',
    direccion: {
        municipio: 'Jocotenango',
        calle: 'Calle ancha',
        numero: 25,
    }
};

let usuario1 = {
    nombre: 'Paolo',
    apellido: 'Ortega',
    email: 'paolo@company.ru',
    direccion: {
    municipio: 'Jocotenango',
    calle: 'Calle ancha',
    numero: 15,
    }
};

let usuario2 = {
    nombre: 'Juan',
    apellido: 'Hernandez',
    email: 'juan@company.ru',
    direccion: {
    municipio: 'Jocotenango',
    calle: 'Calle ancha',
    numero: 5,
    }
};

let usuario3 = {
    nombre: 'Esteban',
    apellido: 'Cardona',
    email: 'esteban@company.ru',
    direccion: {
    municipio: 'Jocotenango',
    calle: 'Calle ancha',
    numero: 35,
    }
};

let usuario4 = {
    nombre: 'Estuardo',
    apellido: 'Rangel',
    email: 'estuardo@company.ru',
    direccion: {
    municipio: 'Jocotenango',
    calle: 'Calle ancha',
    numero: 45,
    }
};

let usuario5 = {
    nombre: 'Pamela',
    apellido: 'Sanchez',
    email: 'pamela@company.ru',
    direccion: {
    municipio: 'Jocotenango',
    calle: 'Calle ancha',
    numero: 55,
    }
};

let usuarios = [usuario, usuario1, usuario2, usuario3, usuario4, usuario5];

usuarios.forEach(addUserMethods);

usuarios.forEach((usuario, index) => {
    console.log(`Usuario ${index + 1}:`);
    usuario.mostrarInformacion();
});

usuarios.forEach ((usuario, index) => {
    usuario.enviarMensaje(`Cambia tu contrasena hoy ${usuario.nombre}`);
});