# Digital Booking

## Requerimientos
1) Java 11
2) Maven
3) MySQL
4) Workbench

## Instalación 
Para la instalación de Java, Maven, MySQL y Workbench se recomienda la siguiente documentación:
- [Instalación Java 11](https://www.oracle.com/java/technologies/downloads/#java11) 
- [Instalación Maven](https://maven.apache.org/download.cgi).
- [Instalación MySQL](https://dev.mysql.com/doc/refman/8.0/en/general-installation-issues.html)
- [Instalación WORKBENCH](https://dev.mysql.com/downloads/workbench/)

## Previo a usarlo - MySQL && WORKBENCH
1) Bajar los archivos de la rama **main** corriendo los siguientes comandos en la terminal de tu computadora:
```
git init
git remote add origin git@gitlab.com:proyecto-integrador-0321/camada-3/grupo-3.git 
git pull origin main
```
2) La misma descargará una carpeta: Base de datos con dos scripts con extensión sql, donde:
- DigitalBooking_DataBase.sql --> Un script vacío que crea la base de datos y en el cuál levantaremos las entidades desde JAVA.
- Estructura_BaseDeDatos_DigitalBooking.sql --> Un script que contiene la estructura final de la base de datos. Con Reverse Engineer se obtiene el diagrama DER que se buscará crear posteriormente a través de Hibernate. 

3) Si todo salió bien, entrar al WORKBENCH y a su conexión por defecto (recordar el usuario y contraseña configurados al instalar MySQL). Abrir el script **DigitalBooking_DataBase.sql**. Correr los comandos: 
```
CREATE SCHEMA IF NOT EXISTS `DigitalBooking_DB1` DEFAULT CHARACTER SET utf8 ;
USE `DigitalBooking_DB1` ;
```

4) Actualizar la sección de **schemas**. Ahora debería verse en dicha sección la base de datos **DigitalBooking_DB1**, aunque sin ninguna tabla creada. 


## Primer uso - JAVA
1) Bajar esta rama del repositorio. Si estas trabajando en una carpeta nueva, correr los siguientes comandos en la teminal de tu computadora:
```
git init
git remote add origin git@gitlab.com:proyecto-integrador-0321/camada-3/grupo-3.git 
git pull origin main
```

2) Deberías tener esta estructura de carpetas
```
DigitalBookingBackEnd
│   README.md
│   mvnw
│   mvnw.cmd
│   pom.xml
└───src
```

3) En el archivo application.properties del path `/src/resources/application.properties` tener en cuenta de los siguientes campos: 

- spring.datasource.url --> hace referencia a la URL donde esta el servicio de tu mysql y el nombre de la base de datos. Tener en cuenta el puerto donde esta corriendo la base de datos en su conexión local y el nombre de la base de datos configurada en el archivo DigitalBooking_DataBase.sql, por ejemplo:
```
spring.datasource.url=jdbc:mysql://localhost:3306/DigitalBooking_DB1

```
- spring.datasource.username && spring.datasource.password --> hace referencia al usuario y contraseña mediante la cual se establece la conexión a la base de datos (recordar la contraseña configurada al instalar MySQL). 
```
spring.datasource.username=root
spring.datasource.password=root
```

4) Una vez configurado el application.properties, correr el proyecto ejecutando los siguientes comandos en la terminal (posicionándose en la carpeta del proyecto): 
```
cd DigitalBookingBackEnd
mvn clean package
```
5) Luego de correr el comando `mvn clean package` la estructura de carpetas debería ser:
```
DigitalBookingBackEnd
│   README.md
│   mvnw
│   mvnw.cmd
│   pom.xml
└───src
└───target
```
6) Ahora, mediante los siguientes comandos debería ya estar corriendosé el proyecto en el puerto configurado por defecto (el puerto 8086): 
```
cd target
java -jar DigitalBooking.jar
```
7) Si todo salió bien, entrar al WORKBENCH y a su conexión por defecto. Al actualizar la sección de **schemas**, la misma ahora debería contener las tablas correspondientes creadas en JAVA.


## Documentación 

Una vez corriendo el proyecto, se puede accederse a la url [http://localhost:8086/swagger-ui.html](http://localhost:8086/swagger-ui.html) y ver la documentación.
