<?php
	include('../conexionDB.php');

	if (isset($_POST['id'])) {//recibe el id de queryParametro.js
		$id = $_POST['id'];
		$query = "DELETE FROM parametros WHERE id_Parametro = $id";
		$result = mysqli_query($connection, $query);	
		if (!$result) {
			die('Consulta ha fallado'.mysql_error($result));
		}
		echo "Parametro eliminado Correctamente";
	}

	
?>