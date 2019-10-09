<?php 
	include('../conexionDB.php');

  	$query = "SELECT id_Parametro, nombre, validacion FROM parametros";
  	$result = mysqli_query($connection, $query);
  	if(!$result) {
    	die('Consulta Fallida'. mysqli_error($connection));
	 }

  	$json = array();
  	while($row = mysqli_fetch_array($result)) {
    	$json[] = array(
      		'id' => $row['id_Parametro'],
			  'nombre' => $row['nombre'],
			  'validacion' => $row['validacion']
   		);
  	}
  	$jsonStr = json_encode($json);
  	echo $jsonStr;
?>