<?php 
	include('../conexionDB.php');

  	$query = "SELECT * FROM roles";
  	$result = mysqli_query($connection, $query);
  	if(!$result) {
    	die('Consulta Fallida'. mysqli_error($connection));
	 }

  	$json = array();
  	while($row = mysqli_fetch_array($result)) {
    	$json[] = array(
      		'id' => $row['id_Rol'],
      		'nombreRol' => $row['nombre_Rol'],
          'descripcion' => $row['descripcion']
   		);
  	}
  	$jsonStr = json_encode($json);
  	echo $jsonStr;
?>