<?php
	include('../conexionDB.php');
	echo "add-book ingresa";
	if (isset($_POST['id'])) {
		$nombreRol = $_POST['nombreRol'];
		$descripcion = $_POST['descripcion'];

		$query = "INSERT INTO roles (nombre_Rol, descripcion) VALUES ('$nombreRol', '$descripcion')";
		$result = mysqli_query($connection, $query);
		if (!$result) {
			die('La consulta ha Fallado!!!');
		}
		echo "Libro agregado!!!";
	}
?>