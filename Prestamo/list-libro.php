<?php 
	include('../conexionDB.php');

  	$query = "SELECT id_Libro, titulo FROM libros";
  	$result = mysqli_query($connection, $query);
  	if(!$result) {
    	die('Consulta Fallida'. mysqli_error($connection));
	 }

  	$json = array();
  	while($row = mysqli_fetch_array($result)) {
    	$json[] = array(
      		'id' => $row['id_Libro'],
      		'titulo' => $row['titulo']
   		);
  	}
  	$jsonStr = json_encode($json);
  	echo $jsonStr;
?>