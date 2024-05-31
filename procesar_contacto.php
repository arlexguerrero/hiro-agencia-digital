<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Capturar los datos del formulario
    $nombre = htmlspecialchars($_POST["nombre"]);
    $email = htmlspecialchars($_POST["email"]);
    $telefono = htmlspecialchars($_POST["telefono"]);
    $mensaje = htmlspecialchars($_POST["mensaje"]);
    $suscribirse = isset($_POST["suscribirse"]) ? 1 : 0;

    // Validar los datos (ejemplo básico)
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "Correo electrónico no válido.";
        exit;
    }

    // Aquí puedes agregar tu lógica para procesar los datos
    // Por ejemplo, guardar en una base de datos o enviar un correo electrónico

    // Enviar correo electrónico (ejemplo básico)
    $to = "tu_correo@ejemplo.com";
    $subject = "Nuevo mensaje de contacto de $nombre";
    $body = "Nombre: $nombre\nCorreo Electrónico: $email\nTeléfono: $telefono\nMensaje:\n$mensaje\n\nSuscripción a noticias: " . ($suscribirse ? "Sí" : "No");
    $headers = "From: $email";

    if (mail($to, $subject, $body, $headers)) {
        echo "Mensaje enviado con éxito.";
    } else {
        echo "Error al enviar el mensaje.";
    }

    // Redirigir al usuario a una página de éxito o mostrar un mensaje
    // header("Location: exito.php");
    // exit;
} else {
    // Redirigir a la página principal si se accede directamente a este script
    header("Location: index.php");
    exit;
}
?>
