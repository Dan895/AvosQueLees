<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>Usuario</title>
	<link href="../bootstrap-4.3.1-dist/css/bootstrap.min.css" rel="stylesheet">
	<script type="../booststrap-4.3.1-dist/js/bootstrap.min.js"></script>
	<script src="../JQuery/jquery-3.4.1.min.js"></script>
	<script src="../JQuery/queryUsuario.js"></script>
	<!--<link rel="stylesheet" href="fonts/css/all.css">
	<script src="fonts/js/all.js"></script>-->
	<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.2/css/all.css" integrity="sha384-oS3vJWv+0UjzBfQzYUhtDYW+Pj2yciDJxpsK1OYPAYjqT085Qq/1cq5FLXAZQ7Ay" crossorigin="anonymous">
</head>
<body>
	<!-- Barra de navegacion -->
		<nav class="navbar navbar-expand-lg navbar-dark" style="background-color: #ff5050;">
      			<figure>
   					<a class="nav-item nav-link active" href="../index.php"><img src="../images/image.png" alt="image1" width="150px" height="70px"></a>
          		</figure>
      			<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        		<span class="navbar-toggler-icon"></span>
      		</button>

      		<div class="collapse navbar-collapse" id="navbarSupportedContent">
        		<div class="navbar-nav">
      				<a class="nav-item nav-link" href="../Categoria/categoria.html"> Categoria <span class="sr-only">(current)</span></a>
      				<a class="nav-item nav-link" href="../Libros/libros.html">Libros</a>
     				<a class="nav-item nav-link" href="../Parametros/parametros.html" hidden="active">Parametros</a><!--oculto para v2-->
            		<a class="nav-item nav-link" href="../Semestres/semestres.php">Semestres</a>
            		<a class="nav-item nav-link" href="../Carreras/carreras.php">Carreras</a>
            		<a class="nav-item nav-link" href="../Roles/roles.php" hidden="active">Roles</a><!--oculto para v2-->
            		<a class="nav-item nav-link active" href="#">Usuario</a>
            		<a class="nav-item nav-link" href="../Prestamo/prestamo.php">Prestamos</a>		
    			</div>
        		<!--<ul class="navbar-nav ml-auto">
          			<form class="form-inline my-2 my-lg-0">
            			<input name="search" id="search" class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
            			<button class="btn btn-success my-2 my-sm-0" style="background-color: #33ff33" type="submit">Search</button>
          			</form>-->
      		</div>
    	</nav>

    	<!-- Formulario libro-->
      	<div class="container">
      		<div class="row p-4">

      			<div class="col-md-5">
          			<div class="card">
            			<div class="card-body">
              				<!-- Formulario clasificacion -->
              				<form id="form-usu">
              					<input type="hidden" id="idUsu"><!--Valor id-->
                				<div class="form-group">
                            <label class="list-group">Rol:</label>
                            <select id="idRol">
                              
                            </select>
                				</div>
                				<div class="form-group">
                  					<input type="text" id="name" placeholder="Nombre Usuario" class="form-control">
                				</div>
                				<div class="form-group">
                  					<input type="text" id="email" placeholder="Correo Electronico" class="form-control">
                				</div>
                				<div class="form-group">
                  					<input type="text" id="phone" maxlength="8" placeholder="Número de Teléfono" class="form-control">
                				</div>
                				<div class="form-group" hidden="active"><!--hidden oculta el contenido de este div esta para mejoras en el futuro-->
                  					<input type="password" id="password" placeholder="Escriba su contraseña" class="form-control">
                				</div>

                				<button type="submit" class="btn btn-primary btn-block text-center">
                  				Guardar
                				</button>
              				</form>
            			</div>
          			</div>
        		</div>
           	
           		<!-- TABLA -->
        		<div class="col-md-7">
          			<div class="card my-4" id="task-result">
            			<div class="card-body">
              				 <!--SEARCH -->
              				<ul id="container"></ul>
            			</div>
          			</div>

          			<table class="table table-bordered table-sm">
            			<thead>
              				<tr style="text-align: center">
                				<td hidden="active">Rol</td>
                				<!--<td>Rol</td>-->
                        <td>Usuario</td>
                        <td>Telefono</td>
                        <!--<td>Contraseña</td>-->
                        <td>e-mail</td>
              				</tr>
            			</thead>
            			<tbody id="usuarios"></tbody>
          			</table>        
          		</div>
         	</div>
        </div>

</body>
</html>