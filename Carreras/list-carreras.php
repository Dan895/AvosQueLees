<?php 
	include('../conexionDB.php');

  	$query = "SELECT * FROM carreras";
  	$result = mysqli_query($connection, $query);
  	if(!$result) {
    	die('Consulta Fallida'. mysqli_error($connection));
	 }

  	$json = array();
  	while($row = mysqli_fetch_array($result)) {
    	$json[] = array(
      		'id' => $row['id_Carrera'],
      		'carrera' => $row['nombre_Carrera'],
   		);
  	}
  	$jsonStr = json_encode($json);
  	echo $jsonStr;
?>