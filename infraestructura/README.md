# Digital Booking

## Acceso a la WEB
[Digital Booking](http://digitalbooking.one/)

## Requerimientos
1) Diagramar infraestructura para AWS:
 - Red interna
 - Web/App servers
 - Almacenamiento externo
 - Base de datos
 - Security groups
 
 

## Acceso al diagrama de la estructura en "Diagrams.net"

- [Digital Booking AWS](https://drive.google.com/file/d/1AMd0BSfn7QhHJvGE4OY6gNTHNC76uaoh/view?usp=sharing) 


## Infraestructura explained 

1) Selección de la región **us-east-1**
2) Creación de una Red privada **VPC**
3) Creación de un **Internet Gateway** para que sea posible y controlado el acceso de internet dentro de la VPC
4) Selección de dos **Availability Zones** que son lo que simulan al Data Center.  
5) Desarrollo de **subredes** para la instancia de nuestros servicios con escope a nivel de Availability zones:
    - **Public subnet** - Load balancer que puede estar presente en mas de una AZ y distribuirá al tráfico ingresante en multiples maquinas EC2. 
                        - NAT: Para posibles traficos de salida.
    - **Private subnet** - En estos niveles ubicaremos al Web Server (para deploy del Front de nuestra aplicación), Application Server (para el deploy del back de nuestra aplicación). Estos servidores serán instancias de EC2 que permiten autoescalado. EBS es el servicio de AWS para los discos. 
                         - En el tercer nivel ubicamos a la BBDD relacionar, que en el caso de AWS es el servicio RDS.
6)  Utilización de un **External storage** que en este caso será la utilización de un Bucket S3.
7)  Utilización de **CloudFront** que es un servicio que proporciona una API que permite distribuir contenido con baja latencia y alta velocidad (CDN) en la transferencia de datos gracias a que entrega las solicitudes mediante una red de ubicaciones de borde internacional. Esto será utilizado para distribuir el contenido del S3. Aquí los **Edge Locations** actuarán cómo un caché. 
8) **Route53** es el servicio de **DNS** de AWS que mapeará nuestro dominio a la **dirección IP del balanceador**. 
9) Definición de **Route Table** a modo de ejemplo con principales accesos.
10) Diseño de 4 posibles **Security groups**:
11) Ubicación de Amazon **CloudWatch**, herramienta que nos permitirá monitorear nuestra infraestructura de manera gráfica.


## Documentos oficiales
Para más información:
- [Regiones y Availability zones](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-regions-availability-zones.html)
- [VPC](https://aws.amazon.com/es/vpc/faqs/)
- [Internet gateway](https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Internet_Gateway.html)
- [Interacción Web Server, Application Server y DDBB](https://stackoverflow.com/questions/936197/what-is-the-difference-between-application-server-and-web-server)
- [Load balancer](https://aws.amazon.com/es/elasticloadbalancing/faqs/?nc=sn&loc=5)
- [NAT](https://docs.aws.amazon.com/es_es/vpc/latest/userguide/vpc-nat-gateway.html)
- [S3](https://aws.amazon.com/es/s3/?nc1=h_ls)
- [Route53](https://aws.amazon.com/es/route53/faqs/http)
- [CloudFront](https://aws.amazon.com/es/cloudfront/faqs/#Caching)
- [Security groups en AWS](https://docs.aws.amazon.com/vpc/latest/userguide/VPC_SecurityGroups.html)
- [CloudWatch](https://aws.amazon.com/es/cloudwatch/)
- [Lambda](https://aws.amazon.com/es/lambda/)


### Imagen 
![Diagrama](/infraestructura/DigitalBooking_InfraAWS.drawio.png)




