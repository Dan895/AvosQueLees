CREATE TABLE categoria(
id_Categoria INT AUTO_INCREMENT ,
nombre VARCHAR( 50 ) ,
PRIMARY KEY (id_Categoria)
) ENGINE = INNODB;

CREATE TABLE libros(
	id_Libro INT AUTO_INCREMENT,
    id_Categoria INT (10),
    titulo VARCHAR (150),
    edicion INT (10),
    autor VARCHAR (20),
   	editorial VARCHAR (5),
    PRIMARY KEY (id_Libro),
    FOREIGN KEY (id_Categoria) REFERENCES categoria (id_Categoria)
)ENGINE = INNODB;


CREATE TABLE roles (
	id_Rol INT AUTO_INCREMENT,
    nombre_Rol VARCHAR (20),
    descripcion VARCHAR (150),
    PRIMARY KEY (id_Rol)
)ENGINE = INNODB;

CREATE TABLE carreras (
	id_Carrera INT AUTO_INCREMENT,
    nombre_Carrera VARCHAR (50),
    PRIMARY KEY (id_Carrera)
)ENGINE = INNODB;

CREATE TABLE parametros (
	id_Parametro INT AUTO_INCREMENT,
    nombre VARCHAR (100),
    validacion INT (5),
    descripcion VARCHAR (50),
    PRIMARY KEY (id_Parametro)
)ENGINE = INNODB;

CREATE TABLE semestres(
	id_Semestre INT AUTO_INCREMENT,
    numero_Semestre INT (10),
    PRIMARY KEY (id_Semestre)
)ENGINE = INNODB;

CREATE TABLE usuarios (
	id_Usuario INT AUTO_INCREMENT,
    id_Rol INT (5),
    nombre VARCHAR (30),
    email VARCHAR (30),
    telefono INT (10),
    PRIMARY KEY (id_Usuario),
    FOREIGN KEY (id_Rol) REFERENCES roles (id_Rol)
)ENGINE = INNODB;

CREATE TABLE prestamos (
	id_Prestamo INT AUTO_INCREMENT,
    id_Usuario INT (10),
    id_Libro INT (10),
    id_Parametro INT (10),
    id_Carrera INT (10),
    id_Semestre INT (10),
    fecha_Entrada DATE NOT NULL,
    fecha_Salida DATE NOT NULL,
    observaciones VARCHAR (50),
    PRIMARY KEY (id_Prestamo),
    FOREIGN KEY (id_Usuario) REFERENCES usuarios (id_Usuario),
    FOREIGN KEY (id_Libro) REFERENCES libros (id_Libro),
    FOREIGN KEY (id_Parametro) REFERENCES parametros (id_Parametro),
    FOREIGN KEY (id_Carrera) REFERENCES carreras (id_Carrera),
    FOREIGN KEY (id_Semestre) REFERENCES semestres (id_Semestre)
)ENGINE = INNODB;