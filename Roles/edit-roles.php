<?php
	include('../conexionDB.php');
	$id = $_POST['id'];
    $nombreRol = $_POST['nombreRol'];
    $descripcion = $_POST['descripcion'];

	$query = "UPDATE roles SET nombre_Rol='$nombreRol', descripcion = '$descripcion' WHERE id_Rol = '$id'";
	$result = mysqli_query($connection, $query);
	if (!$result) {
		die('Ha ocurrido un error al modificar');
	}

	echo "Modificación Completa";
?>