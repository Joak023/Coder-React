const partidos = ['Boca', 'River', 'Gimnsia'];
const ubicaciones = ['Popular', 'Platea', 'Palco'];
let sinEntradas = true;

function comprarEntradas(){
    do {
        // Mostrar opciones de partidos
        const partidosIndex = prompt(`
            ¿Entradas para el partido de?
            1 - Boca
            2 - River
            3 - Gimnasia
        `);
            
        // Validar el partido
        const partido = partidos [partidosIndex - 1];
        if (!partido) {
            alert("Opción inválida. Intente de nuevo.");
            continue; // Volver a empezar
        }

        // Mostrar opciones de ubicación
        const ubicacionIndex = prompt(`
            ¿Qué ubicación querés?
            1 - Popular
            2 - Platea
            3 - Palco
        `);

        // Validar la ubicación
        const ubicacion = ubicaciones[ubicacionIndex - 1];
        if (!ubicacion) {
            alert("Opción inválida. Intente de nuevo.");
            continue;
        }

        // Confirmar compra
        const confirmaEntrada = confirm(`¿Confirma que va a comprar una entrada para el partido de ${partido} y la ubicación ${ubicacion}?`);
        if (confirmaEntrada) {
            alert("Compra realizada con éxito");
            sinEntradas = false;
        } else {
            alert("Compra cancelada");
        }

    } while (sinEntradas);
}

comprarEntradas();
