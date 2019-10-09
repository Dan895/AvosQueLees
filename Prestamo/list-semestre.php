<?php 
	include('../conexionDB.php');

  	$query = "SELECT id_Semestre, numero_Semestre FROM semestres;";
  	$result = mysqli_query($connection, $query);
  	if(!$result) {
    	die('Consulta Fallida'. mysqli_error($connection));
	 }

  	$json = array();
  	while($row = mysqli_fetch_array($result)) {
    	$json[] = array(
      		'id' => $row['id_Semestre'],
      		'titulo' => $row['numero_Semestre']
   		);
  	}
  	$jsonStr = json_encode($json);
  	echo $jsonStr;
?>