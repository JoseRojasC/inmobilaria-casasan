const propiedades_alquiler = [
    {
        nombre: 'Casa típica en una película de Ghibli',
        src: 'assets/img/vs1.png',
        descripcion: 'Quizas viene Totoro',
        ubicacion: 'Ubicación 1',
        habitaciones: 2,
        costo: 50000,
        smoke: true,
        pets: false
    },
    {
        nombre: 'Casa típica de ciudad',
        src: 'assets/img/vs5.png',
        descripcion: 'Puedes encontrar arañas, pero no la que te engaña.',
        ubicacion: 'En las películas',
        habitaciones: 3,
        costo: 60000,
        smoke: false,
        pets: true
    },
    {
        nombre: 'Casa típica de un Spokon',
        src: 'assets/img/vs7.png',
        descripcion: 'Viviendo en esta casa te convertiras en el mejor deportista.',
        ubicacion: 'En las películas',
        habitaciones: 3,
        costo: 77000,
        smoke: false,
        pets: true
    },
    
    {
        nombre: 'Casa típica de un Shonen',
        src: 'assets/img/vs11.png',
        descripcion: 'Plus Ultra!!',
        ubicacion: 'En las películas',
        habitaciones: 3,
        costo: 87000,
        smoke: true,
        pets: false
    },

    {
        nombre: 'Casa típica de película romance',
        src: 'assets/img/vs12.png',
        descripcion: 'Puedes encontrar tu primer amor.',
        ubicacion: 'En las películas',
        habitaciones: 3,
        costo: 73000,
        smoke: false,
        pets: true
    },
];

const propiedades_venta = [
    {
        nombre: 'Casa Sakura',
        src: 'assets/img/vs4.png',
        descripcion: 'Preciosa casa en venta, ven con tu novia.',
        ubicacion: 'Dios sabe',
        habitaciones: 3,
        costo: 1500000,
        smoke: true,
        pets: true
    },
    {
        nombre: 'Casa Exceso de Plantas',
        src: 'assets/img/vs6.png',
        descripcion: 'Preciosa casa en venta, tiene mas plantas que habitaciones',
        ubicacion: 'Buda sabe',
        habitaciones: 3,
        costo: 1000000,
        smoke: false,
        pets: true
    },
    {
        nombre: 'Casa Japonesa',
        src: 'assets/img/vs8.png',
        descripcion: 'Linda casa que debes comprar si eres otaku',
        ubicacion: 'Kaiosama sabe',
        habitaciones: 4,
        costo: 2000000,
        smoke: true,
        pets: true
    },

    {
        nombre: 'Casa de un Finado',
        src: 'assets/img/vs9.png',
        descripcion: 'Es linda de día, de noche.. bueno ya sabes.',
        ubicacion: 'Nadie sabe',
        habitaciones: 2,
        costo: 1000000,
        smoke: true,
        pets: false
    },

    {
        nombre: 'Casa sin puerta',
        src: 'assets/img/vs10.png',
        descripcion: 'Viva la libertaad!!!',
        ubicacion: 'Junta de vecinos sabe',
        habitaciones: 3,
        costo: 1500000,
        smoke: true,
        pets: false
    },
   
];

function renderizarPropiedades(propiedades, contenedorId, limite = 3) {
    const contenedor = document.getElementById(contenedorId);
    contenedor.innerHTML = '';
    propiedades.slice(0, limite).forEach(propiedad => {
        const propiedadHtml = `
            <div class="propiedad">
                <img src="${propiedad.src}" alt="${propiedad.nombre}">
                <h2>${propiedad.nombre}</h2>
                <p>${propiedad.descripcion}</p>
                <p><i class="fas fa-map-marker-alt"></i> Ubicación: ${propiedad.ubicacion}</p>
                <p><i class="fas fa-bed"></i> Habitaciones: ${propiedad.habitaciones}</p>
                <p><i class="fas fa-dollar-sign"></i> Costo: $${propiedad.costo}</p>
                <p class="${propiedad.smoke ? 'permitido' : 'no-permitido'}">
                    <i class="fas ${propiedad.smoke ? 'fa-smoking' : 'fa-smoking-ban'}"></i> 
                    ${propiedad.smoke ? 'Se permite fumar' : 'No se permite fumar'}
                </p>
                <p class="${propiedad.pets ? 'permitido' : 'no-permitido'}">
                    <i class="fas ${propiedad.pets ? 'fa-paw' : 'fa-ban'}"></i> 
                    ${propiedad.pets ? 'Se permiten mascotas' : 'No se permiten mascotas'}
                </p>
            </div>
        `;
        contenedor.innerHTML += propiedadHtml;
    });
}

function verMas(tipo) {
    window.location.href = `propiedades_${tipo}.html`;
}

document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('propiedades-venta')) {
        renderizarPropiedades(propiedades_venta, 'propiedades-venta', 3);
    }
    if (document.getElementById('propiedades-alquiler')) {
        renderizarPropiedades(propiedades_alquiler, 'propiedades-alquiler', 3);
    }
});