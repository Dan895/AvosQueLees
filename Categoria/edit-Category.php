<?php
	include('../conexionDB.php');
	$id = $_POST['id'];
	$name = $_POST['name'];

	$query = "UPDATE categoria SET nombre = '$name' WHERE id_Categoria = '$id'";
	$result = mysqli_query($connection, $query);
	if (!$result) {
		die('Ha ocurrido un error al modificar');
	}

	echo "Modificación Completa";
?>