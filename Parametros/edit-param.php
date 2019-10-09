<?php
	include('../conexionDB.php');
	$id = $_POST['id'];
    $nombre = $_POST['nombre'];
    $validacion = $_POST['validacion'];
    $descripcion = $_POST['descripcion'];

	$query = "UPDATE parametros SET nombre='$nombre', validacion =$validacion, descripcion = '$descripcion' WHERE id_Parametro = $id";
	$result = mysqli_query($connection, $query);
	if (!$result) {
		die('Ha ocurrido un error al modificar');
	}

	echo "Modificación Completa";
?>