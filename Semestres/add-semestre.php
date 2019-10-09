<?php
	include('../conexionDB.php');

	if (isset($_POST['semestre'])) {
		$id = $_POST['id'];
		$semestre = $_POST['semestre'];

		$query = "INSERT INTO semestres (numero_Semestre) VALUES ('$semestre')";
		$result = mysqli_query($connection, $query);
		if (!$result) {
			die('La consulta ha Fallado!!!');
		}
		echo "Semestre agregado!!!";
	}
?>