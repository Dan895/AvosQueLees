<?php
	include('../conexionDB.php');
	
	if (isset($_POST['id'])) {
		$carrera = $_POST['carrera'];
		
		$query = "INSERT INTO carreras (nombre_Carrera) VALUES ('$carrera')";
		$result = mysqli_query($connection, $query);
		if (!$result) {
			die('La consulta ha Fallado!!!');
		}
		echo "Carrera agregada!!!";
	}
?>