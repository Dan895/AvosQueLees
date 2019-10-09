<?php 
	include('../conexionDB.php');

	if (isset($_POST['id'])) {
		$id = $_POST['id'];

  		$query = "SELECT * FROM categoria WHERE id_Categoria = $id";
  		$result = mysqli_query($connection, $query);

  		if(!$result) {
    		die('Consulta Fallida'. mysqli_error($connection));
		}

		$json = array();
  		while($row = mysqli_fetch_array($result)) {
    		$json[] = array(
      			'id' => $row['id_Categoria'],//Los valores id y Nombre son valores dentro de el backend no de la DB
      			'Nombre' => $row['nombre'] 
   			);
  		}
  		$jsonStr = json_encode($json[0]);
  		echo $jsonStr;	
	}
?>