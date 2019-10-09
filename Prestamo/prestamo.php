<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>Prestamo</title>
	<link href="../bootstrap-4.3.1-dist/css/bootstrap.min.css" rel="stylesheet">
	<script type="../booststrap-4.3.1-dist/js/bootstrap.min.js"></script>
	<script src="../JQuery/jquery-3.4.1.min.js"></script>
  <script src="../JQuery/queryPrestamo.js"></script>
	<!--<link rel="stylesheet" href="fonts/css/all.css">
	<script src="fonts/js/all.js"></script>-->
	<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.2/css/all.css" integrity="sha384-oS3vJWv+0UjzBfQzYUhtDYW+Pj2yciDJxpsK1OYPAYjqT085Qq/1cq5FLXAZQ7Ay" crossorigin="anonymous">
</head>
<body>
	<!-- Barra de navegacion -->
		<nav class="navbar navbar-expand-lg navbar-dark" style="background-color: #ff5050;">
      			<figure>
   					<a class="nav-item nav-link active" href="../index.html"><img src="../images/image.png" alt="image1" width="150px" height="70px"></a>
          		</figure>
      			<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        		<span class="navbar-toggler-icon"></span>
      		</button>

      		<div class="collapse navbar-collapse" id="navbarSupportedContent">
        		<div class="navbar-nav">
      				<a class="nav-item nav-link" href="../Categoria/categoria.html"> Categoria <span class="sr-only">(current)</span></a>
      				<a class="nav-item nav-link" href="../Libros/libros.html">Libros</a>
     				<a class="nav-item nav-link" href="../Parametros/parametros.html" hidden="active">Parametros</a>
            		<a class="nav-item nav-link" href="../Semestres/semestres.php">Semestres</a>
            		<a class="nav-item nav-link" href="../Carreras/carreras.php">Carreras</a>
            		<a class="nav-item nav-link" href="../Roles/roles.php" hidden="active">Roles</a>
            		<a class="nav-item nav-link" href="../Usuario/usuario.php">Usuario</a>
            		<a class="nav-item nav-link active" href="#">Prestamos</a>		
    			</div>
        		<ul class="navbar-nav ml-auto">
          			<form class="form-inline my-2 my-lg-0">
            			<input name="search" id="search" class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
            			<button class="btn btn-success my-2 my-sm-0" style="background-color: #33ff33" type="submit">Buscar</button>
          			</form>
				</ul>
      		</div>
    	</nav>

    	<!-- Formulario libro-->
      	<!--<div class="container">-->
      		<div class="row p-4">

      			<div class="col-md-4">
          			<div class="card">
            			<div class="card-body">
              				<!-- Formulario clasificacion -->
              				<form id="form-prestamo">
              					<input type="hidden" id="idPrestam"><!--Valor id-->
                        <div class="form-group">
							<label>Usuario:</label>
                            <select id="idUsu" class="form-control">
							
							</select>
                        </div>
                        <div class="form-group">                          
                            <label>Libro:</label>
                            <select id="idLibro" class="form-control">
                              
                            </select>
                        </div>
                        <div class="form-group">
                            <label>Días de prestamo:</label>
							<select id="idParametro" class="form-control">
							
							</select>
                        </div>
                				<div class="form-group">
                             <label>Carrera:</label>
                            <select id="idCarrera" class="form-control">
                              
                            </select>
                				</div>
                				<div class="form-group">
                            <label>Semestre:</label>
                            <select id="idSemestre" class="form-control">
                              
                            </select>
                				</div>
                				<div class="form-group">
                            <input type="date" id="fechaInput" placeholder="Fecha Solicitud" class="form-control">
                				</div>
                        <div class="form-group">
                            <input type="date" id="fechaOutput" placeholder="Fecha Devolucion del libro" class="form-control">
                        </div>
                        <div class="form-group">
                            <textarea id="observaciones" cols="30" rows="5" class="form-control" placeholder="Observaciones"></textarea>
                        </div>
                				<button type="submit" class="btn btn-primary btn-block text-center">
                  				Guardar
                				</button>
              				</form>
            			</div>
          			</div>
        		</div>
           	
           		<!-- TABLA -->
        		<div class="col-md-8">
          			
            			<div class="card-body">
						<ul id="container"></ul>
						<table class="table table-bordered table-sm">
							<thead>
								<tr>
									<td> Usuario </td>
									<td> Libro </td>
									<td> Parametro </td>
									<td> Carrera </td>
									<td> Semestre </td>
									<td> Fecha Entrada </td>
									<td> Fecha Salida </td>
									<td> Observaciones </td>
								</tr>
							</thead>
            				<tbody id="prestamos"></tbody>
          				</table>   
            			</div>
          			
          		</div>
         	</div>
       <!-- </div>-->

</body>
</html>