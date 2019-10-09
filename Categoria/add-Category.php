<?php
	include('../conexionDB.php');

	if (isset($_POST['name'])) {
		$name = $_POST['name'];
		$query = "INSERT INTO categoria (nombre) VALUES ('$name')";
		$result = mysqli_query($connection, $query);
		if (!$result) {
			die('La consulta ha Fallado!!!');
		}
		echo "Categoria agregada!!!";
	}
?>