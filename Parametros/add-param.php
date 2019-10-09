<?php
	include('../conexionDB.php');
	if (isset($_POST['nombre'])) {
		$id = $_POST['id'];
		$nombre = $_POST['nombre'];
		$validacion = $_POST['validacion'];
		$desc = $_POST['descripcion'];
		
		$query = "INSERT INTO parametros (nombre, validacion, descripcion) VALUES ('$nombre', '$validacion', '$desc')";
		$result = mysqli_query($connection, $query);
		if (!$result) {
			die('La consulta ha Fallado!!!');
		}
		echo "Parametro agregado!!!";
	}
?>