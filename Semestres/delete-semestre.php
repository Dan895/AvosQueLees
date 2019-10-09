<?php
	include('../conexionDB.php');

	if (isset($_POST['id'])) {//recibe el id de queryCategoria.js
		$id = $_POST['id'];
		$query = "DELETE FROM semestres WHERE id_Semestre = $id";
		$result = mysqli_query($connection, $query);	
		if (!$result) {
			die('Consulta ha fallado'.mysql_error($result));
		}
		echo "Libro eliminado Correctamente";
	}

	
?>