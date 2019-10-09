<?php
	include('../conexionDB.php');
	$id = $_POST['id'];
    $semestre = $_POST['semestre'];
  
	$query = "UPDATE semestres SET numero_Semestre = '$semestre' WHERE id_Semestre = $id";
	$result = mysqli_query($connection, $query);
	if (!$result) {
		die('Ha ocurrido un error al modificar');
	}

	echo "Modificación Completa!!!";
?>