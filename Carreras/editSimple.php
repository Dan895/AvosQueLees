<?php 
	include('../conexionDB.php');

	if (isset($_POST['id'])) {
		$id = $_POST['id'];
  		$query = "SELECT * FROM carreras WHERE id_Carrera = $id";
  		$result = mysqli_query($connection, $query);

  		if(!$result) {
    		die('Consulta Fallida'. mysqli_error($connection));
		}

		$json = array();
  		while($row = mysqli_fetch_array($result)) {
    		$json[] = array(
      			'id' => $row['id_Carrera'],
            'carrera' => $row['nombre_Carrera']
   			);
  		}
  		$jsonStr = json_encode($json[0]);
  		echo $jsonStr;	
	}
?>