$(document).ready(function() {
    // Datos de usuario para la autenticación
    let usuarioValido = {
      correo: 'boris@gmail.com',
      contraseña: '12345'
    };
  
    $('#loginForm').submit(function(event) {
      event.preventDefault();
  
      // Obtener los valores de correo y contraseña del formulario
      let correo = $('#email').val();
      let contraseña = $('#password').val();
  
      // Verificar las credenciales
      if (correo === usuarioValido.correo && contraseña === usuarioValido.contraseña) {
        // Credenciales válidas, redirigir a la página menú principal
        window.location.href = './pages/menup.html';
      } else {
        // Credenciales inválidas, mostrar mensaje de error
        alert('Usuario o contraseña incorrectos. Inténtalo de nuevo.');
      }
    });
  });
  