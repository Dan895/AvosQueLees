<?php 
	include('../conexionDB.php');

	if (isset($_POST['id'])) {
		$id = $_POST['id'];
  		$query = "SELECT * FROM libros WHERE id_Libro = $id";
  		$result = mysqli_query($connection, $query);

  		if(!$result) {
    		die('Consulta Fallida '.$id.' '.$query.' '. mysqli_error($connection));
		}
		//echo("aqui");
		$json = array();
  		while($row = mysqli_fetch_array($result)) {
    		$json[] = array(
      			'id' => $row['id_Libro'],
            'idCategoria' => $row['id_Categoria'],
            'titulo' => $row['titulo'],
            'edicion' => $row['edicion'],
            'autor' => $row['autor'],
            'editorial' => $row['editorial']
   			);
  		}
  		$jsonStr = json_encode($json[0]);
  		echo $jsonStr;	
	}
?>