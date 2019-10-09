<?php
	include('../conexionDB.php');

	if (isset($_POST['nombre'])) {
		$rol = $_POST['rol'];
		$nombre = $_POST['nombre'];
		$email = $_POST['email'];
		$phone = $_POST['phone'];
		//$pass = md5($_POST['password']);
		
		$query = "INSERT INTO usuarios (id_Rol, nombre, telefono, email) VALUES ('$rol', '$nombre', '$phone', '$email')";

		$result = mysqli_query($connection, $query);
		
		if (!$result) {
			die('La consulta ha Fallado!!!').mysql_error();
		}
		echo "Usuario agregado!!!";
	}
?>