//al cargar la pagina verifica si está autenticado
document.addEventListener('DOMContentLoaded', function () {
    if (!Autenticado()) {
        // Redirige al usuario a la página de inicio de sesión
        window.location.replace('./login.html');
    } else {
        // mostrarContenidoProtegido();
        // Continúa con el código para mostrar la página principal
    }
});

function Autenticado() {
    const token = localStorage.getItem('authenticate');
    // Comprueba si el token existe y no está vacío
    return (token && token !== '') 
}

function CerrarSesion() {
    localStorage.removeItem('authenticate');
    window.location.replace('./login.html');
}