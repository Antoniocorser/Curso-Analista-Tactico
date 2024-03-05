function mostrarBienvenida() {
    // Obtener la fecha y hora actual
    var fechaHoraActual = new Date();

    // Formatear la fecha y hora
    var opcionesFechaHora = {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        hour12: false,
        timeZoneName: "short"
    };

    var fechaHoraFormateada = fechaHoraActual.toLocaleDateString("es-ES", opcionesFechaHora);

    // Mostrar la alerta de bienvenida con la fecha y hora
    alert("¡Bienvenido/a! Has ingresado a la página el " + fechaHoraFormateada);
}
window.onload = mostrarBienvenida;