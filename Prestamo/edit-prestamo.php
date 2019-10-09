<?php
	include('../conexionDB.php');
	$id = $_POST['id'];
    $fechaOut = $_POST['fechaOut'];
  

	$query = "UPDATE prestamos SET fechaSalida=$fechaOut WHERE id_Prestamo = $id";

	$result = mysqli_query($connection, $query);
	echo $result;
	if (!$result) {
		die('Ha ocurrido un error al modificar'.mysqli_error());
	}

	echo "Se ha actualizado la informacion del prestamos";
?>