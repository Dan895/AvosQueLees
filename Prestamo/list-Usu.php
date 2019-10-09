<?php 
	include('../conexionDB.php');

  	$query = "SELECT id_Usuario, nombre FROM usuarios";
  	$result = mysqli_query($connection, $query);
  	if(!$result) {
    	die('Consulta Fallida'. mysqli_error($connection));
	 }

  	$json = array();
  	while($row = mysqli_fetch_array($result)) {
    	$json[] = array(
      		'id' => $row['id_Usuario'],
      		'nombre' => $row['nombre']
   		);
  	}
  	$jsonStr = json_encode($json);
  	echo $jsonStr;
?>