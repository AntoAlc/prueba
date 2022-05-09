-- MySQL dump 10.13  Distrib 8.0.23, for Win64 (x86_64)
--
-- Host: localhost    Database: DigitalBooking
-- ------------------------------------------------------
-- Server version	8.0.17

CREATE SCHEMA IF NOT EXISTS `DigitalBooking_DB1` DEFAULT CHARACTER SET utf8 ;
USE `DigitalBooking_DB1` ;


-- INSERTS EN TABLA DE CATEGORÍAS - URLs S3
insert into categories (category, description, url_image) values ("Casas", "400.000 casas", "https://s3.amazonaws.com/digitalbooking.equipo3c3/imgGaleria/Categorias/imagenGeneralCasas.jpeg");
insert into categories (category, description, url_image) values ("Departamentos", "525.000 departamentos", "https://s3.amazonaws.com/digitalbooking.equipo3c3/imgGaleria/Categorias/imagenGeneralDepartamento.jpeg");
insert into categories (category, description, url_image) values ("Cabañas", "150.000 cabañas", "https://s3.amazonaws.com/digitalbooking.equipo3c3/imgGaleria/Categorias/imagenGeneralCabania.jpeg");
insert into categories (category, description, url_image) values ("Habitación privada", "82.000 habitaciones privadas", "https://s3.amazonaws.com/digitalbooking.equipo3c3/imgGaleria/Categorias/imagenGeneralBeachHouses.jpeg" );
select * from categories;

-- INSERTS EN TABLA DE CIUDADES
insert into cities (country, name) values ("Argentina", "Buenos Aires");
insert into cities (country, name) values ("Argentina", "Cariló");
insert into cities (country, name) values ("Uruguay", "Punta del Este");
insert into cities (country, name) values ("Argentina", "Villa General Belgrano");
insert into cities (country, name) values ("Argentina", "Mendoza");
insert into cities (country, name) values ("Argentina", "Mar del plata");
insert into cities (country, name) values ("Argentina", "San Carlos de Bariloche");
insert into cities (country, name) values ("Argentina", "Córdoba");


select * from cities;

DELETE FROM cities WHERE id=0;

-- INSERTS EN TABLA DE POLITICAS DE CANCELACIÓN

insert into cancellation_policies (cancellation_policy) values ("Agregá las fechas de tu viaje para obtener los detalles de cancelación de esta estadía. ");
insert into cancellation_policies (cancellation_policy) values ("Agregá las fechas de tu viaje para obtener los detalles de cancelación de esta estadía. ");
insert into cancellation_policies (cancellation_policy) values ("Agregá las fechas de tu viaje para obtener los detalles de cancelación de esta estadía. ");
insert into cancellation_policies (cancellation_policy) values ("Agregá las fechas de tu viaje para obtener los detalles de cancelación de esta estadía. ");
insert into cancellation_policies (cancellation_policy) values ("Agregá las fechas de tu viaje para obtener los detalles de cancelación de esta estadía. ");
insert into cancellation_policies (cancellation_policy) values ("Agregá las fechas de tu viaje para obtener los detalles de cancelación de esta estadía. ");
insert into cancellation_policies (cancellation_policy) values ("Agregá las fechas de tu viaje para obtener los detalles de cancelación de esta estadía. ");
insert into cancellation_policies (cancellation_policy) values ("Agregá las fechas de tu viaje para obtener los detalles de cancelación de esta estadía. ");
insert into cancellation_policies (cancellation_policy) values ("Agregá las fechas de tu viaje para obtener los detalles de cancelación de esta estadía. ");
insert into cancellation_policies (cancellation_policy) values ("Agregá las fechas de tu viaje para obtener los detalles de cancelación de esta estadía. ");
insert into cancellation_policies (cancellation_policy) values ("Agregá las fechas de tu viaje para obtener los detalles de cancelación de esta estadía. ");
insert into cancellation_policies (cancellation_policy) values ("Agregá las fechas de tu viaje para obtener los detalles de cancelación de esta estadía. ");
insert into cancellation_policies (cancellation_policy) values ("Agregá las fechas de tu viaje para obtener los detalles de cancelación de esta estadía. ");
insert into cancellation_policies (cancellation_policy) values ("Agregá las fechas de tu viaje para obtener los detalles de cancelación de esta estadía. ");
insert into cancellation_policies (cancellation_policy) values ("Agregá las fechas de tu viaje para obtener los detalles de cancelación de esta estadía. ");
insert into cancellation_policies (cancellation_policy) values ("Agregá las fechas de tu viaje para obtener los detalles de cancelación de esta estadía. ");
insert into cancellation_policies (cancellation_policy) values ("Agregá las fechas de tu viaje para obtener los detalles de cancelación de esta estadía. ");
insert into cancellation_policies (cancellation_policy) values ("Agregá las fechas de tu viaje para obtener los detalles de cancelación de esta estadía. ");
insert into cancellation_policies (cancellation_policy) values ("Agregá las fechas de tu viaje para obtener los detalles de cancelación de esta estadía. ");
insert into cancellation_policies (cancellation_policy) values ("Agregá las fechas de tu viaje para obtener los detalles de cancelación de esta estadía. ");
insert into cancellation_policies (cancellation_policy) values ("Agregá las fechas de tu viaje para obtener los detalles de cancelación de esta estadía. ");
insert into cancellation_policies (cancellation_policy) values ("Agregá las fechas de tu viaje para obtener los detalles de cancelación de esta estadía. ");
insert into cancellation_policies (cancellation_policy) values ("Agregá las fechas de tu viaje para obtener los detalles de cancelación de esta estadía. ");
insert into cancellation_policies (cancellation_policy) values ("Agregá las fechas de tu viaje para obtener los detalles de cancelación de esta estadía. ");
insert into cancellation_policies (cancellation_policy) values ("Agregá las fechas de tu viaje para obtener los detalles de cancelación de esta estadía. ");
insert into cancellation_policies (cancellation_policy) values ("Agregá las fechas de tu viaje para obtener los detalles de cancelación de esta estadía. ");
insert into cancellation_policies (cancellation_policy) values ("Agregá las fechas de tu viaje para obtener los detalles de cancelación de esta estadía. ");
insert into cancellation_policies (cancellation_policy) values ("Agregá las fechas de tu viaje para obtener los detalles de cancelación de esta estadía. ");
insert into cancellation_policies (cancellation_policy) values ("Agregá las fechas de tu viaje para obtener los detalles de cancelación de esta estadía. ");
insert into cancellation_policies (cancellation_policy) values ("Agregá las fechas de tu viaje para obtener los detalles de cancelación de esta estadía. ");
insert into cancellation_policies (cancellation_policy) values ("Agregá las fechas de tu viaje para obtener los detalles de cancelación de esta estadía. ");
insert into cancellation_policies (cancellation_policy) values ("Agregá las fechas de tu viaje para obtener los detalles de cancelación de esta estadía. ");
insert into cancellation_policies (cancellation_policy) values ("Agregá las fechas de tu viaje para obtener los detalles de cancelación de esta estadía. ");
insert into cancellation_policies (cancellation_policy) values ("Agregá las fechas de tu viaje para obtener los detalles de cancelación de esta estadía. ");
insert into cancellation_policies (cancellation_policy) values ("Agregá las fechas de tu viaje para obtener los detalles de cancelación de esta estadía. ");
insert into cancellation_policies (cancellation_policy) values ("Agregá las fechas de tu viaje para obtener los detalles de cancelación de esta estadía. ");
insert into cancellation_policies (cancellation_policy) values ("Agregá las fechas de tu viaje para obtener los detalles de cancelación de esta estadía. ");
insert into cancellation_policies (cancellation_policy) values ("Agregá las fechas de tu viaje para obtener los detalles de cancelación de esta estadía. ");
insert into cancellation_policies (cancellation_policy) values ("Agregá las fechas de tu viaje para obtener los detalles de cancelación de esta estadía. ");
insert into cancellation_policies (cancellation_policy) values ("Agregá las fechas de tu viaje para obtener los detalles de cancelación de esta estadía. ");
insert into cancellation_policies (cancellation_policy) values ("Agregá las fechas de tu viaje para obtener los detalles de cancelación de esta estadía. ");
insert into cancellation_policies (cancellation_policy) values ("Agregá las fechas de tu viaje para obtener los detalles de cancelación de esta estadía. ");

select * from cancellation_policies;


-- INSERTS EN TABLA DE SALUD Y SEGURIDAD
insert into healt_andsafty (health_and_safty) values ("Se aplican las pautas de distanciamiento social y otras normas relacionadas con el coronavirus.");
insert into healt_andsafty (health_and_safty) values ("Se aplican las pautas de distanciamiento social y otras normas relacionadas con el coronavirus.");
insert into healt_andsafty (health_and_safty) values ("Se aplican las pautas de distanciamiento social y otras normas relacionadas con el coronavirus.");
insert into healt_andsafty (health_and_safty) values ("Se aplican las pautas de distanciamiento social y otras normas relacionadas con el coronavirus.");
insert into healt_andsafty (health_and_safty) values ("Se aplican las pautas de distanciamiento social y otras normas relacionadas con el coronavirus.");
insert into healt_andsafty (health_and_safty) values ("Se aplican las pautas de distanciamiento social y otras normas relacionadas con el coronavirus.");
insert into healt_andsafty (health_and_safty) values ("Se aplican las pautas de distanciamiento social y otras normas relacionadas con el coronavirus.");
insert into healt_andsafty (health_and_safty) values ("Se aplican las pautas de distanciamiento social y otras normas relacionadas con el coronavirus.");
insert into healt_andsafty (health_and_safty) values ("Se aplican las pautas de distanciamiento social y otras normas relacionadas con el coronavirus.");
insert into healt_andsafty (health_and_safty) values ("Se aplican las pautas de distanciamiento social y otras normas relacionadas con el coronavirus.");
insert into healt_andsafty (health_and_safty) values ("Se aplican las pautas de distanciamiento social y otras normas relacionadas con el coronavirus.");
insert into healt_andsafty (health_and_safty) values ("Se aplican las pautas de distanciamiento social y otras normas relacionadas con el coronavirus.");
insert into healt_andsafty (health_and_safty) values ("Se aplican las pautas de distanciamiento social y otras normas relacionadas con el coronavirus.");
insert into healt_andsafty (health_and_safty) values ("Se aplican las pautas de distanciamiento social y otras normas relacionadas con el coronavirus.");
insert into healt_andsafty (health_and_safty) values ("Se aplican las pautas de distanciamiento social y otras normas relacionadas con el coronavirus.");
insert into healt_andsafty (health_and_safty) values ("Se aplican las pautas de distanciamiento social y otras normas relacionadas con el coronavirus.");
insert into healt_andsafty (health_and_safty) values ("Se aplican las pautas de distanciamiento social y otras normas relacionadas con el coronavirus.");
insert into healt_andsafty (health_and_safty) values ("Se aplican las pautas de distanciamiento social y otras normas relacionadas con el coronavirus.");
insert into healt_andsafty (health_and_safty) values ("Se aplican las pautas de distanciamiento social y otras normas relacionadas con el coronavirus.");
insert into healt_andsafty (health_and_safty) values ("Se aplican las pautas de distanciamiento social y otras normas relacionadas con el coronavirus.");
insert into healt_andsafty (health_and_safty) values ("Se aplican las pautas de distanciamiento social y otras normas relacionadas con el coronavirus.");
insert into healt_andsafty (health_and_safty) values ("Se aplican las pautas de distanciamiento social y otras normas relacionadas con el coronavirus.");
insert into healt_andsafty (health_and_safty) values ("Se aplican las pautas de distanciamiento social y otras normas relacionadas con el coronavirus.");
insert into healt_andsafty (health_and_safty) values ("Se aplican las pautas de distanciamiento social y otras normas relacionadas con el coronavirus.");
insert into healt_andsafty (health_and_safty) values ("Se aplican las pautas de distanciamiento social y otras normas relacionadas con el coronavirus.");
insert into healt_andsafty (health_and_safty) values ("Se aplican las pautas de distanciamiento social y otras normas relacionadas con el coronavirus.");
insert into healt_andsafty (health_and_safty) values ("Se aplican las pautas de distanciamiento social y otras normas relacionadas con el coronavirus.");
insert into healt_andsafty (health_and_safty) values ("Se aplican las pautas de distanciamiento social y otras normas relacionadas con el coronavirus.");
insert into healt_andsafty (health_and_safty) values ("Se aplican las pautas de distanciamiento social y otras normas relacionadas con el coronavirus.");
insert into healt_andsafty (health_and_safty) values ("Se aplican las pautas de distanciamiento social y otras normas relacionadas con el coronavirus.");

select * from healt_andsafty;


-- INSERTS EN LAS NORMAS DE LA CASA 

insert into houses_policies (house_policies) values ("Check-out: 10pm");
insert into houses_policies (house_policies) values ("Check-out: 10pm");
insert into houses_policies (house_policies) values ("Check-out: 10pm");
insert into houses_policies (house_policies) values ("Check-out: 10pm");
insert into houses_policies (house_policies) values ("Check-out: 10pm");
insert into houses_policies (house_policies) values ("Check-out: 10pm");
insert into houses_policies (house_policies) values ("Check-out: 10pm");
insert into houses_policies (house_policies) values ("Check-out: 10pm");
insert into houses_policies (house_policies) values ("Check-out: 10pm");
insert into houses_policies (house_policies) values ("Check-out: 10pm");
insert into houses_policies (house_policies) values ("Check-out: 10pm");
insert into houses_policies (house_policies) values ("Check-out: 10pm");
insert into houses_policies (house_policies) values ("Check-out: 10pm");
insert into houses_policies (house_policies) values ("Check-out: 10pm");
insert into houses_policies (house_policies) values ("Check-out: 10pm");
insert into houses_policies (house_policies) values ("Check-out: 10pm");
insert into houses_policies (house_policies) values ("Check-out: 10pm");
insert into houses_policies (house_policies) values ("Check-out: 10pm");
insert into houses_policies (house_policies) values ("Check-out: 10pm");
insert into houses_policies (house_policies) values ("Check-out: 10pm");
insert into houses_policies (house_policies) values ("Check-out: 10pm");
insert into houses_policies (house_policies) values ("Check-out: 10pm");
insert into houses_policies (house_policies) values ("Check-out: 10pm");
insert into houses_policies (house_policies) values ("Check-out: 10pm");
insert into houses_policies (house_policies) values ("Check-out: 10pm");
insert into houses_policies (house_policies) values ("Check-out: 10pm");
insert into houses_policies (house_policies) values ("Check-out: 10pm");
insert into houses_policies (house_policies) values ("Check-out: 10pm");
insert into houses_policies (house_policies) values ("Check-out: 10pm");
insert into houses_policies (house_policies) values ("Check-out: 10pm");
insert into houses_policies (house_policies) values ("Check-out: 10pm");
insert into houses_policies (house_policies) values ("Check-out: 10pm");
insert into houses_policies (house_policies) values ("Check-out: 10pm");

select * from houses_policies;

-- INSERTS EN TABLA DE ALOJAMIENTOS

-- Casas:
select * from accommodations;
insert into accommodations (description, name, cancellation_policy_id, category_id, city_id, health_and_safty_id, house_policies_id) values ( "En el corazón de Puerto Madero, disfruta de un albergue inspirado en las pasiones de Buenos Aires.", "Casa con pileta en Pilar", 1, 1,1, 1, 1);
insert into accommodations (description, name, cancellation_policy_id, category_id, city_id, health_and_safty_id, house_policies_id) values ( "En el corazón de Punta del Este, disfruta de un albergue frente a Playa Mansa.", "Apartamento sobre Playa Mansa", 2, 2,3, 2,2);
insert into accommodations (description, name, cancellation_policy_id, category_id, city_id, health_and_safty_id, house_policies_id) values ( "Entre las sierras de Córdoba y con una vista única", "Casa con parque y asador.", 3, 1,4, 3, 3);
insert into accommodations (description, name, cancellation_policy_id, category_id, city_id, health_and_safty_id, house_policies_id) values ( "Entre los viñedos Mendocinos y para aprovechar los centros de esquí en invierno", "Casa familiar apta para mascotas.", 4, 1,5, 4, 4);
insert into accommodations (description, name, cancellation_policy_id, category_id, city_id, health_and_safty_id, house_policies_id) values ( "En el corazón de Puerto Madero, disfruta de un albergue inspirado en las pasiones de Buenos Aires.", "Casa con pileta en Pilar", 5, 1,1, 5, 5);
insert into accommodations (description, name, cancellation_policy_id, category_id, city_id, health_and_safty_id, house_policies_id) values ( "En el corazón de Punta del Este, disfruta de un albergue frente a Playa Mansa.", "Apartamento sobre Playa Mansa", 6, 2,3, 6, 6);
insert into accommodations (description, name, cancellation_policy_id, category_id, city_id, health_and_safty_id, house_policies_id) values ( "Entre las sierras de Córdoba y con una vista única", "Casa con parque y asador.",7,  1,4, 7, 7);
insert into accommodations (description, name, cancellation_policy_id, category_id, city_id, health_and_safty_id, house_policies_id) values ( "Entre los viñedos Mendocinos y para aprovechar los centros de esquí en invierno", "Casa familiar apta para mascotas.", 8, 1,5, 8, 8);
insert into accommodations (description, name, cancellation_policy_id, category_id, city_id, health_and_safty_id, house_policies_id) values ( "En el corazón de Puerto Madero, disfruta de un albergue inspirado en las pasiones de Buenos Aires.", "Casa con pileta en Pilar",9, 1,1, 9,9 );
insert into accommodations (description, name, cancellation_policy_id, category_id, city_id, health_and_safty_id, house_policies_id) values ( "En el corazón de Punta del Este, disfruta de un albergue frente a Playa Mansa.", "Apartamento sobre Playa Mansa", 10, 2,3, 10,10);
insert into accommodations (description, name, cancellation_policy_id, category_id, city_id, health_and_safty_id, house_policies_id) values ( "Entre las sierras de Córdoba y con una vista única", "Casa con parque y asador.",11, 1,4, 11, 11);
insert into accommodations (description, name, cancellation_policy_id, category_id, city_id, health_and_safty_id, house_policies_id) values ( "Entre las sierras de Córdoba y con una vista única", "Casa con parque y asador.", 12, 1,4, 12, 12);

-- Cabanias

insert into accommodations (description, name, cancellation_policy_id, category_id, city_id, health_and_safty_id, house_policies_id) values ( "En el corazón del bosque y entre los árboles de Cariló.", "Cabaña con vistas únicas.", 13, 3,2, 13,13);
insert into accommodations (description, name, cancellation_policy_id, category_id, city_id, health_and_safty_id, house_policies_id) values ( "Para los mejores inviernos entre la naturaleza y los bosques inigualables del sur argentino", "Cabaña de fin de semana.",14, 3,7, 14,14);
insert into accommodations (description, name, cancellation_policy_id, category_id, city_id, health_and_safty_id, house_policies_id) values ( "En el corazón del bosque y entre los árboles de Cariló.", "Cabaña con vistas únicas.", 15, 3,2,15,15);
insert into accommodations (description, name, cancellation_policy_id, category_id, city_id, health_and_safty_id, house_policies_id) values ( "Para los mejores inviernos entre la naturaleza y los bosques inigualables del sur argentino", "Cabaña de fin de semana.", 16,3,7, 16,16);
insert into accommodations (description, name, cancellation_policy_id, category_id, city_id, health_and_safty_id, house_policies_id) values ( "En el corazón del bosque y entre los árboles de Cariló.", "Cabaña con vistas únicas.", 17, 3,2, 17, 17);
insert into accommodations (description, name, cancellation_policy_id, category_id, city_id, health_and_safty_id, house_policies_id) values ( "Para los mejores inviernos entre la naturaleza y los bosques inigualables del sur argentino", "Cabaña de fin de semana.", 18, 3,7, 18, 18);
insert into accommodations (description, name, cancellation_policy_id, category_id, city_id, health_and_safty_id, house_policies_id) values ( "En el corazón del bosque y entre los árboles de Cariló.", "Cabaña con vistas únicas.", 19, 3,2, 19, 19);
insert into accommodations (description, name, cancellation_policy_id, category_id, city_id, health_and_safty_id, house_policies_id) values ( "Para los mejores inviernos entre la naturaleza y los bosques inigualables del sur argentino", "Cabaña de fin de semana.", 20, 3,7, 20, 20);

-- Departamentos

insert into accommodations (description, name, cancellation_policy_id, category_id, city_id, health_and_safty_id, house_policies_id) values ("En el corazón de Puerto Madero, disfruta de un albergue inspirado en las pasiones de Buenos Aires.", "Departamento en complejo residencial entero", 21, 3,1, 21,21);
insert into accommodations (description, name, cancellation_policy_id, category_id, city_id, health_and_safty_id, house_policies_id) values ( "Para disfrutar veranos incríbles en la costa Argentina", "Departamento en el centro de Mar del Plata.", 22, 2,6, 22, 22);
insert into accommodations (description, name, cancellation_policy_id, category_id, city_id, health_and_safty_id, house_policies_id) values ( "En el corazón de Puerto Madero, disfruta de un albergue inspirado en las pasiones de Buenos Aires.", "Departamento en complejo residencial entero", 23, 3,1, 23, 23);
insert into accommodations (description, name, cancellation_policy_id, category_id, city_id, health_and_safty_id, house_policies_id) values ( "Para disfrutar veranos incríbles en la costa Argentina", "Departamento en el centro de Mar del Plata.", 24, 2,6, 24,24);
insert into accommodations (description, name, cancellation_policy_id, category_id, city_id, health_and_safty_id, house_policies_id) values ( "En el corazón de Puerto Madero, disfruta de un albergue inspirado en las pasiones de Buenos Aires.", "Departamento en complejo residencial entero", 25, 3,1, 25, 25);
insert into accommodations (description, name, cancellation_policy_id, category_id, city_id, health_and_safty_id, house_policies_id) values ( "Para disfrutar veranos incríbles en la costa Argentina", "Departamento en el centro de Mar del Plata.", 26, 2,6, 26,26);
insert into accommodations (description, name, cancellation_policy_id, category_id, city_id, health_and_safty_id, house_policies_id) values ( "En el corazón de Puerto Madero, disfruta de un albergue inspirado en las pasiones de Buenos Aires.", "Departamento en complejo residencial entero", 27, 3,1, 27,27);
insert into accommodations (description, name, cancellation_policy_id, category_id, city_id, health_and_safty_id, house_policies_id) values ( "Para disfrutar veranos incríbles en la costa Argentina", "Departamento en el centro de Mar del Plata.", 28, 2,6, 28,28);

-- Habitación privada
insert into accommodations (description, name, cancellation_policy_id, category_id, city_id, health_and_safty_id, house_policies_id) values ("En el corazón de las sierras cordobesas, disfruta esta pequeña pero cómoda habitación.", "Habitación privada en las sierras", 29, 4,8, 29,29);



select * from accommodations;



-- INSERTS EN TABLA DE IMÁGENES - URLs S3

-- CASAS: 
-- Casa 1 

insert into images (id, title, url_image, accommodation_id) values (1, "Casa", "https://s3.amazonaws.com/digitalbooking.equipo3c3/imgGaleria/Casas/Casa1/casa101.jpg", 1);
insert into images (id, title, url_image, accommodation_id) values (2, "Casa", "https://s3.amazonaws.com/digitalbooking.equipo3c3/imgGaleria/Casas/Casa1/casa102.jpg", 1);
insert into images (id, title, url_image, accommodation_id) values (3, "Casa", "https://s3.amazonaws.com/digitalbooking.equipo3c3/imgGaleria/Casas/Casa1/casa103.jpg", 1);
insert into images (id, title, url_image, accommodation_id) values (4, "Casa", "https://s3.amazonaws.com/digitalbooking.equipo3c3/imgGaleria/Casas/Casa1/casa104.jpg", 1);
insert into images (id, title, url_image, accommodation_id) values (5, "Casa", "https://s3.amazonaws.com/digitalbooking.equipo3c3/imgGaleria/Casas/Casa1/casa105.jpg", 1);
insert into images (id, title, url_image, accommodation_id) values (6, "Casa", "https://s3.amazonaws.com/digitalbooking.equipo3c3/imgGaleria/Casas/Casa1/casa106.jpg", 1);
insert into images (id, title, url_image, accommodation_id) values (7, "Casa", "https://s3.amazonaws.com/digitalbooking.equipo3c3/imgGaleria/Casas/Casa1/casa107.jpg", 1);
insert into images (id, title, url_image, accommodation_id) values (8, "Casa", "https://s3.amazonaws.com/digitalbooking.equipo3c3/imgGaleria/Casas/Casa1/casa108.jpg", 1);

-- Casa 2
insert into images (id, title, url_image, accommodation_id) values (9, "Casa", "https://s3.amazonaws.com/digitalbooking.equipo3c3/imgGaleria/Casas/Casa2/casa201.jpg", 3);
insert into images (id, title, url_image, accommodation_id) values (10, "Casa", "https://s3.amazonaws.com/digitalbooking.equipo3c3/imgGaleria/Casas/Casa2/casa202.jpg", 3);
insert into images (id, title, url_image, accommodation_id) values (11, "Casa", "https://s3.amazonaws.com/digitalbooking.equipo3c3/imgGaleria/Casas/Casa2/casa203.jpg", 3);
insert into images (id, title, url_image, accommodation_id) values (12, "Casa", "https://s3.amazonaws.com/digitalbooking.equipo3c3/imgGaleria/Casas/Casa2/casa204.jpg", 3);
insert into images (id, title, url_image, accommodation_id) values (13, "Casa", "https://s3.amazonaws.com/digitalbooking.equipo3c3/imgGaleria/Casas/Casa2/casa205.jpg", 3);
insert into images (id, title, url_image, accommodation_id) values (14, "Casa", "https://s3.amazonaws.com/digitalbooking.equipo3c3/imgGaleria/Casas/Casa2/casa206.jpg", 3);

-- Casa 3

insert into images (id, title, url_image, accommodation_id) values (21, "Casa", "https://s3.amazonaws.com/digitalbooking.equipo3c3/imgGaleria/Casas/Casa4/Casa401.jpg", 4);
insert into images (id, title, url_image, accommodation_id) values (22, "Casa", "https://s3.amazonaws.com/digitalbooking.equipo3c3/imgGaleria/Casas/Casa4/casa402.jpg", 4);
insert into images (id, title, url_image, accommodation_id) values (23, "Casa", "https://s3.amazonaws.com/digitalbooking.equipo3c3/imgGaleria/Casas/Casa4/casa403.jpg", 4);
insert into images (id, title, url_image, accommodation_id) values (24, "Casa", "https://s3.amazonaws.com/digitalbooking.equipo3c3/imgGaleria/Casas/Casa4/casa404.jpg", 4);
insert into images (id, title, url_image, accommodation_id) values (25, "Casa", "https://s3.amazonaws.com/digitalbooking.equipo3c3/imgGaleria/Casas/Casa4/casa405.jpg", 4);

-- Casa 4

insert into images (id, title, url_image, accommodation_id) values (15, "Casa", "https://s3.amazonaws.com/digitalbooking.equipo3c3/imgGaleria/Casas/Casa3/casa301.jpg", 5);
insert into images (id, title, url_image, accommodation_id) values (16, "Casa", "https://s3.amazonaws.com/digitalbooking.equipo3c3/imgGaleria/Casas/Casa3/casa302.jpg", 5);
insert into images (id, title, url_image, accommodation_id) values (17, "Casa", "https://s3.amazonaws.com/digitalbooking.equipo3c3/imgGaleria/Casas/Casa3/casa303.jpg", 5);
insert into images (id, title, url_image, accommodation_id) values (18, "Casa", "https://s3.amazonaws.com/digitalbooking.equipo3c3/imgGaleria/Casas/Casa3/casa304.jpg", 5);
insert into images (id, title, url_image, accommodation_id) values (19, "Casa", "https://s3.amazonaws.com/digitalbooking.equipo3c3/imgGaleria/Casas/Casa3/casa305.jpg", 5);
insert into images (id, title, url_image, accommodation_id) values (20, "Casa", "https://s3.amazonaws.com/digitalbooking.equipo3c3/imgGaleria/Casas/Casa3/casa306.jpg", 5);

-- Casa 5
insert into images (id, title, url_image, accommodation_id) values (26, "Casa", "https://s3.amazonaws.com/digitalbooking.equipo3c3/imgGaleria/Casas/Casa5/casa501.jpg", 7);
insert into images (id, title, url_image, accommodation_id) values (27, "Casa", "https://s3.amazonaws.com/digitalbooking.equipo3c3/imgGaleria/Casas/Casa5/casa502.jpg", 7);
insert into images (id, title, url_image, accommodation_id) values (28, "Casa", "https://s3.amazonaws.com/digitalbooking.equipo3c3/imgGaleria/Casas/Casa5/casa503.jpeg", 7);
insert into images (id, title, url_image, accommodation_id) values (29, "Casa", "https://s3.amazonaws.com/digitalbooking.equipo3c3/imgGaleria/Casas/Casa5/casa504.jpg", 7);
insert into images (id, title, url_image, accommodation_id) values (30, "Casa", "https://s3.amazonaws.com/digitalbooking.equipo3c3/imgGaleria/Casas/Casa5/casa505.jpg", 7);

-- Casa 6
insert into images (id, title, url_image, accommodation_id) values (31, "Casa", "https://s3.amazonaws.com/digitalbooking.equipo3c3/imgGaleria/Casas/Casa6/casa601.jpg", 8);
insert into images (id, title, url_image, accommodation_id) values (32, "Casa", "https://s3.amazonaws.com/digitalbooking.equipo3c3/imgGaleria/Casas/Casa6/casa602.jpg", 8);
insert into images (id, title, url_image, accommodation_id) values (33, "Casa", "https://s3.amazonaws.com/digitalbooking.equipo3c3/imgGaleria/Casas/Casa6/casa603.jpg", 8);
insert into images (id, title, url_image, accommodation_id) values (34, "Casa", "https://s3.amazonaws.com/digitalbooking.equipo3c3/imgGaleria/Casas/Casa6/casa604.jpg", 8);
insert into images (id, title, url_image, accommodation_id) values (35, "Casa", "https://s3.amazonaws.com/digitalbooking.equipo3c3/imgGaleria/Casas/Casa6/casa605.jpg", 8);

-- Casa 7
insert into images (id, title, url_image, accommodation_id) values (36, "Casa", "https://s3.amazonaws.com/digitalbooking.equipo3c3/imgGaleria/Casas/Casa7/casa701.jpg", 9);
insert into images (id, title, url_image, accommodation_id) values (37, "Casa", "https://s3.amazonaws.com/digitalbooking.equipo3c3/imgGaleria/Casas/Casa7/casa702.jpg", 9);
insert into images (id, title, url_image, accommodation_id) values (38, "Casa", "https://s3.amazonaws.com/digitalbooking.equipo3c3/imgGaleria/Casas/Casa7/casa703.jpg", 9);
insert into images (id, title, url_image, accommodation_id) values (39, "Casa", "https://s3.amazonaws.com/digitalbooking.equipo3c3/imgGaleria/Casas/Casa7/casa704.jpg", 9);
insert into images (id, title, url_image, accommodation_id) values (40, "Casa", "https://s3.amazonaws.com/digitalbooking.equipo3c3/imgGaleria/Casas/Casa7/casa705.jpg", 9);
insert into images (id, title, url_image, accommodation_id) values (41, "Casa", "https://s3.amazonaws.com/digitalbooking.equipo3c3/imgGaleria/Casas/Casa7/casa706.jpg", 9);

-- Casa 8
insert into images (id, title, url_image, accommodation_id) values (42, "Casa", "https://s3.amazonaws.com/digitalbooking.equipo3c3/imgGaleria/Casas/Casa8/casa801.jpg", 11);
insert into images (id, title, url_image, accommodation_id) values (43, "Casa", "https://s3.amazonaws.com/digitalbooking.equipo3c3/imgGaleria/Casas/Casa8/casa802.jpg", 11);
insert into images (id, title, url_image, accommodation_id) values (44, "Casa", "https://s3.amazonaws.com/digitalbooking.equipo3c3/imgGaleria/Casas/Casa8/casa803.jpg", 11);
insert into images (id, title, url_image, accommodation_id) values (45, "Casa", "https://s3.amazonaws.com/digitalbooking.equipo3c3/imgGaleria/Casas/Casa8/casa804.jpg", 11);
insert into images (id, title, url_image, accommodation_id) values (46, "Casa", "https://s3.amazonaws.com/digitalbooking.equipo3c3/imgGaleria/Casas/Casa8/casa805.jpg", 11);
insert into images (id, title, url_image, accommodation_id) values (47, "Casa", "https://s3.amazonaws.com/digitalbooking.equipo3c3/imgGaleria/Casas/Casa8/casa806.jpg", 11);

-- Casa 9
insert into images (id, title, url_image, accommodation_id) values (48, "Casa", "https://s3.amazonaws.com/digitalbooking.equipo3c3/imgGaleria/Casas/Casa9/casa901.jpg", 12);
insert into images (id, title, url_image, accommodation_id) values (49, "Casa", "https://s3.amazonaws.com/digitalbooking.equipo3c3/imgGaleria/Casas/Casa9/casa902.jpg", 12);
insert into images (id, title, url_image, accommodation_id) values (50, "Casa", "https://s3.amazonaws.com/digitalbooking.equipo3c3/imgGaleria/Casas/Casa9/casa903.jpg", 12);
insert into images (id, title, url_image, accommodation_id) values (51, "Casa", "https://s3.amazonaws.com/digitalbooking.equipo3c3/imgGaleria/Casas/Casa9/casa904.jpg", 12);
insert into images (id, title, url_image, accommodation_id) values (52, "Casa", "https://s3.amazonaws.com/digitalbooking.equipo3c3/imgGaleria/Casas/Casa9/casa905.jpg", 12);


-- Casa 10
insert into images (id, title, url_image, accommodation_id) values (53, "Casa", "https://s3.amazonaws.com/digitalbooking.equipo3c3/imgGaleria/Casas/Casa10/casa1001.jpg", 21);
insert into images (id, title, url_image, accommodation_id) values (54, "Casa", "https://s3.amazonaws.com/digitalbooking.equipo3c3/imgGaleria/Casas/Casa10/casa1002.jpg", 21);
insert into images (id, title, url_image, accommodation_id) values (55, "Casa", "https://s3.amazonaws.com/digitalbooking.equipo3c3/imgGaleria/Casas/Casa10/casa1003.jpg", 21);
insert into images (id, title, url_image, accommodation_id) values (56, "Casa", "https://s3.amazonaws.com/digitalbooking.equipo3c3/imgGaleria/Casas/Casa10/casa1004.jpg", 21);
insert into images (id, title, url_image, accommodation_id) values (57, "Casa", "https://s3.amazonaws.com/digitalbooking.equipo3c3/imgGaleria/Casas/Casa10/casa1005.jpg", 21);
insert into images (id, title, url_image, accommodation_id) values (58, "Casa", "https://s3.amazonaws.com/digitalbooking.equipo3c3/imgGaleria/Casas/Casa10/casa1006.jpg", 21);

-- Casa 11
insert into images (id, title, url_image, accommodation_id) values (59, "Casa", "https://s3.amazonaws.com/digitalbooking.equipo3c3/imgGaleria/Casas/Casa11/casa1101.jpg", 23);
insert into images (id, title, url_image, accommodation_id) values (60, "Casa", "https://s3.amazonaws.com/digitalbooking.equipo3c3/imgGaleria/Casas/Casa11/casa1102.jpg", 23);
insert into images (id, title, url_image, accommodation_id) values (61, "Casa", "https://s3.amazonaws.com/digitalbooking.equipo3c3/imgGaleria/Casas/Casa11/casa1103.jpg", 23);
insert into images (id, title, url_image, accommodation_id) values (62, "Casa", "https://s3.amazonaws.com/digitalbooking.equipo3c3/imgGaleria/Casas/Casa11/casa1104.jpg", 23);
insert into images (id, title, url_image, accommodation_id) values (63, "Casa", "https://s3.amazonaws.com/digitalbooking.equipo3c3/imgGaleria/Casas/Casa11/casa1105.jpg", 23);

-- Casa 12
insert into images (id, title, url_image, accommodation_id) values (64, "Casa", "https://s3.amazonaws.com/digitalbooking.equipo3c3/imgGaleria/Casas/Casa12/casa1201.jpg", 25);
insert into images (id, title, url_image, accommodation_id) values (65, "Casa", "https://s3.amazonaws.com/digitalbooking.equipo3c3/imgGaleria/Casas/Casa12/casa1202.jpg", 25);
insert into images (id, title, url_image, accommodation_id) values (66, "Casa", "https://s3.amazonaws.com/digitalbooking.equipo3c3/imgGaleria/Casas/Casa12/casa1203.jpg", 25);
insert into images (id, title, url_image, accommodation_id) values (67, "Casa", "https://s3.amazonaws.com/digitalbooking.equipo3c3/imgGaleria/Casas/Casa12/casa1204.jpg", 25);
insert into images (id, title, url_image, accommodation_id) values (68, "Casa", "https://s3.amazonaws.com/digitalbooking.equipo3c3/imgGaleria/Casas/Casa12/casa1205.jpg", 25);




-- CABAÑAS: 
-- Cabaña 1
insert into images (id, title, url_image, accommodation_id) values (69, "Cabaña", "https://s3.amazonaws.com/digitalbooking.equipo3c3/imgGaleria/Cabanias/caba%C3%B1a1/eb395942-cb00-4715-917b-5cfcf640b17c.jpeg", 13);
insert into images (id, title, url_image, accommodation_id) values (70, "Cabaña", "https://s3.amazonaws.com/digitalbooking.equipo3c3/imgGaleria/Cabanias/caba%C3%B1a1/9f087514-5f42-44d6-b476-93d823efbd41.jpeg", 13);
insert into images (id, title, url_image, accommodation_id) values (71, "Cabaña", "https://s3.amazonaws.com/digitalbooking.equipo3c3/imgGaleria/Cabanias/caba%C3%B1a1/396485e9-05e3-455a-99ea-b3a31721af98.jpeg", 13);
insert into images (id, title, url_image, accommodation_id) values (72, "Cabaña", "https://s3.amazonaws.com/digitalbooking.equipo3c3/imgGaleria/Cabanias/caba%C3%B1a1/36b9cebd-bdd1-43c6-8dc1-b87e8cc8a569.jpeg", 13);
insert into images (id, title, url_image, accommodation_id) values (73, "Cabaña", "https://s3.amazonaws.com/digitalbooking.equipo3c3/imgGaleria/Cabanias/caba%C3%B1a1/29084fe9-2bfc-4d97-bd25-cc6bd5c308ac.jpeg", 13);


-- Cabaña 2
insert into images (id, title, url_image, accommodation_id) values (74, "Cabaña", "https://s3.amazonaws.com/digitalbooking.equipo3c3/imgGaleria/Cabanias/caba%C3%B1a2/fe03324b-c3aa-442b-bd1a-7e5a86a5ba35.jpeg", 14);
insert into images (id, title, url_image, accommodation_id) values (75, "Cabaña", "https://s3.amazonaws.com/digitalbooking.equipo3c3/imgGaleria/Cabanias/caba%C3%B1a2/e71c6495-f023-4e79-839c-0462d7232fde.jpeg", 14);
insert into images (id, title, url_image, accommodation_id) values (76, "Cabaña", "https://s3.amazonaws.com/digitalbooking.equipo3c3/imgGaleria/Cabanias/caba%C3%B1a2/9bbd8ebb-9ba3-4766-a485-bf205678579d.jpeg", 14);
insert into images (id, title, url_image, accommodation_id) values (77, "Cabaña", "https://s3.amazonaws.com/digitalbooking.equipo3c3/imgGaleria/Cabanias/caba%C3%B1a2/8d449bbc-c549-40c2-b438-4aee95ff2860.jpeg", 14);
insert into images (id, title, url_image, accommodation_id) values (78, "Cabaña", "https://s3.amazonaws.com/digitalbooking.equipo3c3/imgGaleria/Cabanias/caba%C3%B1a2/60d80c9b-9531-469f-a797-30c478dd319e.jpeg", 14);

-- Cabaña 3
insert into images (id, title, url_image, accommodation_id) values (79, "Cabaña", "https://s3.amazonaws.com/digitalbooking.equipo3c3/imgGaleria/Cabanias/caba%C3%B1a3/bf73643d-ee5b-4299-8a78-6396b9f0222a.jpeg", 15);
insert into images (id, title, url_image, accommodation_id) values (80, "Cabaña", "https://s3.amazonaws.com/digitalbooking.equipo3c3/imgGaleria/Cabanias/caba%C3%B1a3/365559dc-90e7-4a16-ae4a-813790e8679d.jpeg", 15);
insert into images (id, title, url_image, accommodation_id) values (81, "Cabaña", "https://s3.amazonaws.com/digitalbooking.equipo3c3/imgGaleria/Cabanias/caba%C3%B1a2/9bbd8ebb-9ba3-4766-a485-bf205678579d.jpeg", 15);
insert into images (id, title, url_image, accommodation_id) values (82, "Cabaña", "https://s3.amazonaws.com/digitalbooking.equipo3c3/imgGaleria/Cabanias/caba%C3%B1a3/2fd8c2b1-a0e0-487b-8f35-c91241dfdda9.jpeg", 15);
insert into images (id, title, url_image, accommodation_id) values (83, "Cabaña", "https://s3.amazonaws.com/digitalbooking.equipo3c3/imgGaleria/Cabanias/caba%C3%B1a3/009aa5a1-2653-47ec-b60e-364126ab3049.jpeg", 15);


-- Cabaña 4
insert into images (id, title, url_image, accommodation_id) values (84, "Cabaña", "https://s3.amazonaws.com/digitalbooking.equipo3c3/imgGaleria/Cabanias/caba%C3%B1a4/ead2a0ef-481e-4290-a0b0-cd7931b4cd4b.jpeg", 16);
insert into images (id, title, url_image, accommodation_id) values (85, "Cabaña", "https://s3.amazonaws.com/digitalbooking.equipo3c3/imgGaleria/Cabanias/caba%C3%B1a4/b3b7dd3f-2121-46e3-b863-8661a2b53486.jpeg", 16);
insert into images (id, title, url_image, accommodation_id) values (86, "Cabaña", "https://s3.amazonaws.com/digitalbooking.equipo3c3/imgGaleria/Cabanias/caba%C3%B1a4/8eb20642-3f96-40f5-add9-6d5cd983fd01.jpeg", 16);
insert into images (id, title, url_image, accommodation_id) values (87, "Cabaña", "https://s3.amazonaws.com/digitalbooking.equipo3c3/imgGaleria/Cabanias/caba%C3%B1a4/378394a0-70e9-4582-9326-5b3941bb406c.jpeg", 16);


-- Cabaña 5
insert into images (id, title, url_image, accommodation_id) values (88, "Cabaña", "https://s3.amazonaws.com/digitalbooking.equipo3c3/imgGaleria/Cabanias/caba%C3%B1a5/606ac194-8629-400c-aced-3d837f42b715.jpeg", 17);
insert into images (id, title, url_image, accommodation_id) values (89, "Cabaña", "https://s3.amazonaws.com/digitalbooking.equipo3c3/imgGaleria/Cabanias/caba%C3%B1a5/5964ed9d-4969-4164-8b4d-27764d1163b7.jpeg", 17);
insert into images (id, title, url_image, accommodation_id) values (90, "Cabaña", "https://s3.amazonaws.com/digitalbooking.equipo3c3/imgGaleria/Cabanias/caba%C3%B1a5/5964ed9d-4969-4164-8b4d-27764d1163b7.jpeg", 17);
insert into images (id, title, url_image, accommodation_id) values (91, "Cabaña", "https://s3.amazonaws.com/digitalbooking.equipo3c3/imgGaleria/Cabanias/caba%C3%B1a5/1bb799dc-0b57-4ecb-b6ac-c50f11dd6a38.jpeg", 17);

-- Cabaña 6
insert into images (id, title, url_image, accommodation_id) values (92, "Cabaña", "https://s3.amazonaws.com/digitalbooking.equipo3c3/imgGaleria/Cabanias/caba%C3%B1a6/fbda2364-f61c-44a4-bd21-62a69b8bdddb.jpeg", 18);
insert into images (id, title, url_image, accommodation_id) values (93, "Cabaña", "https://s3.amazonaws.com/digitalbooking.equipo3c3/imgGaleria/Cabanias/caba%C3%B1a6/9e19a5e7-c2a9-4260-8f5c-089e884f5595.jpeg", 18);
insert into images (id, title, url_image, accommodation_id) values (94, "Cabaña", "https://s3.amazonaws.com/digitalbooking.equipo3c3/imgGaleria/Cabanias/caba%C3%B1a6/90a0f021-d126-4a16-ad36-618c2fa58cc4.jpeg", 18);
insert into images (id, title, url_image, accommodation_id) values (95, "Cabaña", "https://s3.amazonaws.com/digitalbooking.equipo3c3/imgGaleria/Cabanias/caba%C3%B1a6/6f19e866-aebf-464e-b0d9-98050d6a96c8.jpeg", 18);
insert into images (id, title, url_image, accommodation_id) values (96, "Cabaña", "https://s3.amazonaws.com/digitalbooking.equipo3c3/imgGaleria/Cabanias/caba%C3%B1a6/338c7048-fd8b-491a-b329-10f56517eabd.jpeg", 18);

select * from images;

-- Cabaña 7
insert into images (id, title, url_image, accommodation_id) values (97, "Cabaña", "https://s3.amazonaws.com/digitalbooking.equipo3c3/imgGaleria/Cabanias/caba%C3%B1a7/fbb36c01-b001-4321-83f2-1f2212ed1e87.jpeg", 19);
insert into images (id, title, url_image, accommodation_id) values (98, "Cabaña", "https://s3.amazonaws.com/digitalbooking.equipo3c3/imgGaleria/Cabanias/caba%C3%B1a7/a13115d0-b053-4ec9-9c70-d091df5b2aca.jpeg", 19);
insert into images (id, title, url_image, accommodation_id) values (99, "Cabaña", "https://s3.amazonaws.com/digitalbooking.equipo3c3/imgGaleria/Cabanias/caba%C3%B1a7/6f133e74-a35b-4a9c-853d-7f0adf19c532.jpeg", 19);
insert into images (id, title, url_image, accommodation_id) values (100, "Cabaña", "https://s3.amazonaws.com/digitalbooking.equipo3c3/imgGaleria/Cabanias/caba%C3%B1a7/6e66ee6a_original.jpeg", 19);
insert into images (id, title, url_image, accommodation_id) values (101, "Cabaña", "https://s3.amazonaws.com/digitalbooking.equipo3c3/imgGaleria/Cabanias/caba%C3%B1a7/2cb572d2-5677-4ad4-9d79-3c9e3ac3118d.jpeg", 19);

-- Cabaña 8
insert into images (id, title, url_image, accommodation_id) values (102, "Cabaña", "https://s3.amazonaws.com/digitalbooking.equipo3c3/imgGaleria/Cabanias/caba%C3%B1a8/d95c0f84-3943-4014-8fb7-46369c444063.jpeg", 20);
insert into images (id, title, url_image, accommodation_id) values (103, "Cabaña", "https://s3.amazonaws.com/digitalbooking.equipo3c3/imgGaleria/Cabanias/caba%C3%B1a8/4c35ebd4-43d1-43fe-af63-85deaa4dca68.jpeg", 20);
insert into images (id, title, url_image, accommodation_id) values (104, "Cabaña", "https://s3.amazonaws.com/digitalbooking.equipo3c3/imgGaleria/Cabanias/caba%C3%B1a7/6f133e74-a35b-4a9c-853d-7f0adf19c532.jpeg", 20);
insert into images (id, title, url_image, accommodation_id) values (105, "Cabaña", "https://s3.amazonaws.com/digitalbooking.equipo3c3/imgGaleria/Cabanias/caba%C3%B1a8/3746043f-30a0-475d-a4aa-c1590b33cda7.jpeg", 20);
insert into images (id, title, url_image, accommodation_id) values (106, "Cabaña", "https://s3.amazonaws.com/digitalbooking.equipo3c3/imgGaleria/Cabanias/caba%C3%B1a8/208b3595-2835-48e9-8a49-03a8683a890e.jpeg", 20);




-- DEPARTAMENTOS: 
-- Departamento 1 
insert into images (id, title, url_image, accommodation_id) values (107, "Departamento", "https://s3.amazonaws.com/digitalbooking.equipo3c3/imgGaleria/Departamentos/DEPTO+1/DEPTO1.jpg", 2);
insert into images (id, title, url_image, accommodation_id) values (108, "Departamento", "https://s3.amazonaws.com/digitalbooking.equipo3c3/imgGaleria/Departamentos/DEPTO+1/DEPTO2.jpg", 2);
insert into images (id, title, url_image, accommodation_id) values (109, "Departamento", "https://s3.amazonaws.com/digitalbooking.equipo3c3/imgGaleria/Departamentos/DEPTO+1/ccc4282b-3a74-43c9-a7ed-5bc95a6e628c.jpg", 2);
insert into images (id, title, url_image, accommodation_id) values (110, "Departamento", "https://s3.amazonaws.com/digitalbooking.equipo3c3/imgGaleria/Departamentos/DEPTO+1/054b7ab7-b097-442e-a75d-05acce149829.jpg", 2);

-- Departamento 2
insert into images (id, title, url_image, accommodation_id) values (111, "Departamento", "https://s3.amazonaws.com/digitalbooking.equipo3c3/imgGaleria/Departamentos/DEPTO+2/e30b3e1b-5c93-463d-a48d-212e7650a3d1.jpeg", 6);
insert into images (id, title, url_image, accommodation_id) values (112, "Departamento", "https://s3.amazonaws.com/digitalbooking.equipo3c3/imgGaleria/Departamentos/DEPTO+2/a4b44d51-226d-4456-831d-e094869728e9.jpeg", 6);
insert into images (id, title, url_image, accommodation_id) values (113, "Departamento", "https://s3.amazonaws.com/digitalbooking.equipo3c3/imgGaleria/Departamentos/DEPTO+2/2b8a3ef8-d2ad-45c0-8b5a-cd4018fd7ed1.jpeg", 6);
insert into images (id, title, url_image, accommodation_id) values (114, "Departamento", "https://s3.amazonaws.com/digitalbooking.equipo3c3/imgGaleria/Departamentos/DEPTO+2/0daf1661-9935-4b0e-925b-f74dde3219fa.jpeg", 6);

-- Departamento 3
insert into images (id, title, url_image, accommodation_id) values (115, "Departamento", "https://s3.amazonaws.com/digitalbooking.equipo3c3/imgGaleria/Departamentos/DEPTO+3/fecb9910-6dc5-4871-915f-b998c63584a6.jpg", 10);
insert into images (id, title, url_image, accommodation_id) values (116, "Departamento", "https://s3.amazonaws.com/digitalbooking.equipo3c3/imgGaleria/Departamentos/DEPTO+3/f61f147c-ea5e-4a17-95eb-57241095a17a.jpg", 10);
insert into images (id, title, url_image, accommodation_id) values (117, "Departamento", "https://s3.amazonaws.com/digitalbooking.equipo3c3/imgGaleria/Departamentos/DEPTO+3/5740fd1e-c9b8-4e70-95f4-fbc1740e6ab7.jpg", 10);
insert into images (id, title, url_image, accommodation_id) values (118, "Departamento", "https://s3.amazonaws.com/digitalbooking.equipo3c3/imgGaleria/Departamentos/DEPTO+3/0422b667-e0c4-4023-81b9-2120b88e1220.jpg", 10);

-- Departamento 4 
insert into images (id, title, url_image, accommodation_id) values (119, "Departamento", "https://s3.amazonaws.com/digitalbooking.equipo3c3/imgGaleria/Departamentos/DEPTO+4/d0aa7bf7-5467-4bcd-ab6b-b84809f9be2f.jpg", 17);
insert into images (id, title, url_image, accommodation_id) values (120, "Departamento", "https://s3.amazonaws.com/digitalbooking.equipo3c3/imgGaleria/Departamentos/DEPTO+4/8933464f-d6e9-4548-8f56-9b9bfa38db96.jpg", 17);
insert into images (id, title, url_image, accommodation_id) values (121, "Departamento", "https://s3.amazonaws.com/digitalbooking.equipo3c3/imgGaleria/Departamentos/DEPTO+4/805e2dcc-ba54-44db-84fb-6eea113aaca8.jpg", 17);
insert into images (id, title, url_image, accommodation_id) values (122, "Departamento", "https://s3.amazonaws.com/digitalbooking.equipo3c3/imgGaleria/Departamentos/DEPTO+4/23c982af_original.jpg", 17);

-- Departamento 5
insert into images (id, title, url_image, accommodation_id) values (123, "Departamento", "https://s3.amazonaws.com/digitalbooking.equipo3c3/imgGaleria/Departamentos/DEPTO+5/b3ffcc5b-5579-4a39-acc6-afa734445c4d.jpg", 22);
insert into images (id, title, url_image, accommodation_id) values (124, "Departamento", "https://s3.amazonaws.com/digitalbooking.equipo3c3/imgGaleria/Departamentos/DEPTO+5/6b4e81b8-4408-483a-956c-303a6c2dfc5d.jpg", 22);
insert into images (id, title, url_image, accommodation_id) values (125, "Departamento", "https://s3.amazonaws.com/digitalbooking.equipo3c3/imgGaleria/Departamentos/DEPTO+5/24490f65-10e7-452f-bf49-a5c8f931a2e5.jpg", 22);
insert into images (id, title, url_image, accommodation_id) values (126, "Departamento", "https://s3.amazonaws.com/digitalbooking.equipo3c3/imgGaleria/Departamentos/DEPTO+5/1aad88ef-8e0d-4aeb-84ec-ac89d8aa8b34.jpg", 22);

-- Departamento 6
insert into images (id, title, url_image, accommodation_id) values (127, "Departamento", "https://s3.amazonaws.com/digitalbooking.equipo3c3/imgGaleria/Departamentos/DEPTO+6/f4983a45-9716-4f9c-8cd8-885f5d3bdd33.jpg", 24);
insert into images (id, title, url_image, accommodation_id) values (128, "Departamento", "https://s3.amazonaws.com/digitalbooking.equipo3c3/imgGaleria/Departamentos/DEPTO+6/ca422b8e-be95-48d9-ad52-6c1c210f4b86.jpg", 24);
insert into images (id, title, url_image, accommodation_id) values (129, "Departamento", "https://s3.amazonaws.com/digitalbooking.equipo3c3/imgGaleria/Departamentos/DEPTO+6/998b3293-c3be-44e0-b139-63a0cdc67799.jpg", 24);
insert into images (id, title, url_image, accommodation_id) values (130, "Departamento", "https://s3.amazonaws.com/digitalbooking.equipo3c3/imgGaleria/Departamentos/DEPTO+6/3e6f726e-7e57-4686-912f-19b7a5048d86.jpg", 24);

-- Departamento 7
insert into images (id, title, url_image, accommodation_id) values (131, "Departamento", "https://s3.amazonaws.com/digitalbooking.equipo3c3/imgGaleria/Departamentos/DEPTO+7/f90805ba-0e30-4210-8118-1772d43d9b45.jpg", 26);
insert into images (id, title, url_image, accommodation_id) values (132, "Departamento", "https://s3.amazonaws.com/digitalbooking.equipo3c3/imgGaleria/Departamentos/DEPTO+7/a94479a6-d10c-4de9-a723-40ce99326e99.jpg", 26);
insert into images (id, title, url_image, accommodation_id) values (133, "Departamento", "https://s3.amazonaws.com/digitalbooking.equipo3c3/imgGaleria/Departamentos/DEPTO+7/967d6c8d-2661-4aeb-a9b6-9aae222290e1.jpg", 26);
insert into images (id, title, url_image, accommodation_id) values (134, "Departamento", "https://s3.amazonaws.com/digitalbooking.equipo3c3/imgGaleria/Departamentos/DEPTO+7/13821177-26b3-4bad-b5ce-dfd5dffeb282.jpg", 26);

-- Departamento 8
insert into images ( title, url_image, accommodation_id) values ( "Departamento", "https://s3.amazonaws.com/digitalbooking.equipo3c3/imgGaleria/Departamentos/DEPTO+8/f5e2aad1-6cca-403e-be3a-292cecec711e.jpg", 28);
insert into images ( title, url_image, accommodation_id) values ( "Departamento", "https://s3.amazonaws.com/digitalbooking.equipo3c3/imgGaleria/Departamentos/DEPTO+8/f220e8be-934c-4a2e-9e7e-e01c44c1091f.jpg", 28);
insert into images ( title, url_image, accommodation_id) values ( "Departamento", "https://s3.amazonaws.com/digitalbooking.equipo3c3/imgGaleria/Departamentos/DEPTO+8/f009b9af-6bc1-4ee8-b4bc-306a422fab53.jpg", 28);
insert into images ( title, url_image, accommodation_id) values ( "Departamento", "https://s3.amazonaws.com/digitalbooking.equipo3c3/imgGaleria/Departamentos/DEPTO+8/1387e7f4-99a3-4cf9-8baa-51604f2fb351.jpg", 28);

-- Cabaña 9 (ADICIONAL)
insert into images ( title, url_image, accommodation_id) values ( "Cabaña", "https://s3.amazonaws.com/digitalbooking.equipo3c3/imgGaleria/Cabanias/caba%C3%B1a8/d95c0f84-3943-4014-8fb7-46369c444063.jpeg", 27);
insert into images ( title, url_image, accommodation_id) values ( "Cabaña", "https://s3.amazonaws.com/digitalbooking.equipo3c3/imgGaleria/Cabanias/caba%C3%B1a8/4c35ebd4-43d1-43fe-af63-85deaa4dca68.jpeg", 27);
insert into images ( title, url_image, accommodation_id) values ( "Cabaña", "https://s3.amazonaws.com/digitalbooking.equipo3c3/imgGaleria/Cabanias/caba%C3%B1a7/6f133e74-a35b-4a9c-853d-7f0adf19c532.jpeg", 27);
insert into images ( title, url_image, accommodation_id) values ( "Cabaña", "https://s3.amazonaws.com/digitalbooking.equipo3c3/imgGaleria/Cabanias/caba%C3%B1a8/3746043f-30a0-475d-a4aa-c1590b33cda7.jpeg", 27);
insert into images ( title, url_image, accommodation_id) values ( "Cabaña", "https://s3.amazonaws.com/digitalbooking.equipo3c3/imgGaleria/Cabanias/caba%C3%B1a8/208b3595-2835-48e9-8a49-03a8683a890e.jpeg", 27);

-- Habtiaciones privadas
-- Habitación 1
insert into images ( title, url_image, accommodation_id) values ( "Habitación privada", "https://s3.amazonaws.com/digitalbooking.equipo3c3/imgGaleria/Departamentos/DEPTO+8/1387e7f4-99a3-4cf9-8baa-51604f2fb351.jpg", 40); -- DEBERÍA SER EL ALOJAMIENTO 29
insert into images ( title, url_image, accommodation_id) values ( "Habitación privada", "https://s3.amazonaws.com/digitalbooking.equipo3c3/imgGaleria/Departamentos/DEPTO+8/1387e7f4-99a3-4cf9-8baa-51604f2fb351.jpg", 40);
insert into images ( title, url_image, accommodation_id) values ( "Habitación privada", "https://s3.amazonaws.com/digitalbooking.equipo3c3/imgGaleria/Cabanias/caba%C3%B1a7/6f133e74-a35b-4a9c-853d-7f0adf19c532.jpeg", 40);
insert into images ( title, url_image, accommodation_id) values ( "Habitación privada", "https://s3.amazonaws.com/digitalbooking.equipo3c3/imgGaleria/Cabanias/caba%C3%B1a8/3746043f-30a0-475d-a4aa-c1590b33cda7.jpeg", 40);


select * from images;

-- INSERTS EN TABLA DE USUARIOS Y ROLES

insert into roles values (1,'USER');
insert into roles values (2,'ADMIN');
select * from roles;

select * from bookings;
select * from users;

-- INSERTS EN TABLA CARACTERÍSTICAS

insert into characteristics (icon, name) values ("tv", "Televisor");
insert into characteristics (icon, name) values ("snowflake", "Aire acondicionado");
insert into characteristics (icon, name) values ("paw", "Apto mascotas");
insert into characteristics (icon, name) values ("car-alt", "Estacionamiento gratuito");
insert into characteristics (icon, name) values ("swimmer", "Pileta");
insert into characteristics (icon, name) values ("wifi", "Wifi");

select * from characteristics;

insert into accommodations_characteristics values (1,1);
insert into accommodations_characteristics values (1,2);
insert into accommodations_characteristics values (1,3);
insert into accommodations_characteristics values (1,4);
insert into accommodations_characteristics values (1,5);
insert into accommodations_characteristics values (1,6);

insert into accommodations_characteristics values (2,1);
insert into accommodations_characteristics values (2,2);
insert into accommodations_characteristics values (2,3);
insert into accommodations_characteristics values (2,4);

insert into accommodations_characteristics values (3,1);
insert into accommodations_characteristics values (3,2);
insert into accommodations_characteristics values (3,5);
insert into accommodations_characteristics values (3,6);

insert into accommodations_characteristics values (4,4);
insert into accommodations_characteristics values (4,5);
insert into accommodations_characteristics values (4,6);

insert into accommodations_characteristics values (5,1);
insert into accommodations_characteristics values (5,2);
insert into accommodations_characteristics values (5,3);

insert into accommodations_characteristics values (6,1);
insert into accommodations_characteristics values (6,2);
insert into accommodations_characteristics values (6,3);
insert into accommodations_characteristics values (6,4);
insert into accommodations_characteristics values (6,5);
insert into accommodations_characteristics values (6,6);

insert into accommodations_characteristics values (7,1);
insert into accommodations_characteristics values (7,2);

insert into accommodations_characteristics values (8,5);
insert into accommodations_characteristics values (8,6);

insert into accommodations_characteristics values (9,1);
insert into accommodations_characteristics values (9,2);
insert into accommodations_characteristics values (9,3);
insert into accommodations_characteristics values (9,4);
insert into accommodations_characteristics values (9,5);
insert into accommodations_characteristics values (9,6);

insert into accommodations_characteristics values (10,1);
insert into accommodations_characteristics values (10,2);
insert into accommodations_characteristics values (10,3);
insert into accommodations_characteristics values (10,4);
insert into accommodations_characteristics values (10,5);
insert into accommodations_characteristics values (10,6);

insert into accommodations_characteristics values (11,1);
insert into accommodations_characteristics values (11,2);
insert into accommodations_characteristics values (11,3);
insert into accommodations_characteristics values (11,4);
insert into accommodations_characteristics values (11,5);
insert into accommodations_characteristics values (11,6);

insert into accommodations_characteristics values (12,1);
insert into accommodations_characteristics values (12,2);
insert into accommodations_characteristics values (12,3);
insert into accommodations_characteristics values (12,4);
insert into accommodations_characteristics values (12,5);
insert into accommodations_characteristics values (12,6);

insert into accommodations_characteristics values (13,1);
insert into accommodations_characteristics values (13,2);
insert into accommodations_characteristics values (13,3);


insert into accommodations_characteristics values (14,3);
insert into accommodations_characteristics values (14,4);
insert into accommodations_characteristics values (14,5);
insert into accommodations_characteristics values (14,6);

insert into accommodations_characteristics values (15,1);
insert into accommodations_characteristics values (15,2);
insert into accommodations_characteristics values (15,6);

insert into accommodations_characteristics values (16,1);
insert into accommodations_characteristics values (16,3);
insert into accommodations_characteristics values (16,4);
insert into accommodations_characteristics values (16,5);
insert into accommodations_characteristics values (16,6);

insert into accommodations_characteristics values (17,1);
insert into accommodations_characteristics values (17,2);
insert into accommodations_characteristics values (17,3);
insert into accommodations_characteristics values (17,4);
insert into accommodations_characteristics values (17,5);
insert into accommodations_characteristics values (17,6);

insert into accommodations_characteristics values (18,2);
insert into accommodations_characteristics values (18,3);
insert into accommodations_characteristics values (18,4);
insert into accommodations_characteristics values (18,5);
insert into accommodations_characteristics values (18,6);

insert into accommodations_characteristics values (19,1);
insert into accommodations_characteristics values (19,2);
insert into accommodations_characteristics values (19,3);
insert into accommodations_characteristics values (19,4);
insert into accommodations_characteristics values (19,5);

insert into accommodations_characteristics values (20,1);
insert into accommodations_characteristics values (20,2);
insert into accommodations_characteristics values (20,3);
insert into accommodations_characteristics values (20,5);
insert into accommodations_characteristics values (20,6);

insert into accommodations_characteristics values (21,1);
insert into accommodations_characteristics values (21,3);
insert into accommodations_characteristics values (21,4);
insert into accommodations_characteristics values (21,5);
insert into accommodations_characteristics values (21,6);

insert into accommodations_characteristics values (22,1);
insert into accommodations_characteristics values (22,2);
insert into accommodations_characteristics values (22,3);

insert into accommodations_characteristics values (23,3);
insert into accommodations_characteristics values (23,4);
insert into accommodations_characteristics values (23,5);
insert into accommodations_characteristics values (23,6);

insert into accommodations_characteristics values (24,1);
insert into accommodations_characteristics values (24,2);
insert into accommodations_characteristics values (24,3);
insert into accommodations_characteristics values (24,4);
insert into accommodations_characteristics values (24,5);
insert into accommodations_characteristics values (24,6);

insert into accommodations_characteristics values (25,1);
insert into accommodations_characteristics values (25,2);
insert into accommodations_characteristics values (25,3);

insert into accommodations_characteristics values (26,1);
insert into accommodations_characteristics values (26,2);
insert into accommodations_characteristics values (26,3);
insert into accommodations_characteristics values (26,6);

insert into accommodations_characteristics values (27,1);
insert into accommodations_characteristics values (27,2);
insert into accommodations_characteristics values (27,3);
insert into accommodations_characteristics values (27,4);
insert into accommodations_characteristics values (27,5);
insert into accommodations_characteristics values (27,6);

insert into accommodations_characteristics values (28,2);
insert into accommodations_characteristics values (28,3);
insert into accommodations_characteristics values (28,4);
insert into accommodations_characteristics values (28,5);
insert into accommodations_characteristics values (28,6);

select * from characteristics;
select * from accommodations;
select * from accommodations_characteristics;

-- TABLA DE USUARIOS

insert into users (email, last_name, name, password, role_id) values ("prueba1@gmail.com", "pruebita", "prueba1", "1", 1);
insert into users (email, last_name, name, password, role_id) values ("prueba2@gmail.com", "pruebita", "prueba2", "2", 1);

select * from users;

-- TABLA DE PUNTUACIONES

-- Alojamiento 1:
insert into scores (score, accommodation_id, user_id) values (3, 1, 1);
insert into scores (score, accommodation_id, user_id) values (4, 1, 2);

-- Alojamiento 2:
insert into scores (score, accommodation_id, user_id) values (3, 2, 1);
insert into scores (score, accommodation_id, user_id) values (2, 2, 2);

-- Alojamiento 3:
insert into scores (score, accommodation_id, user_id) values (3, 3, 1);
insert into scores (score, accommodation_id, user_id) values (5, 3, 2);

-- Alojamiento 4:
insert into scores (score, accommodation_id, user_id) values (1, 4, 1);
insert into scores (score, accommodation_id, user_id) values (1, 4, 2);

-- Alojamiento 5:
insert into scores (score, accommodation_id, user_id) values (5, 5, 1);
insert into scores (score, accommodation_id, user_id) values (5, 5, 2);

-- Alojamiento 6:
insert into scores (score, accommodation_id, user_id) values (1, 6, 1);
insert into scores (score, accommodation_id, user_id) values (4, 6, 2);

-- Alojamiento 7:
insert into scores (score, accommodation_id, user_id) values (3, 7, 1);
insert into scores (score, accommodation_id, user_id) values (4, 7, 2);

-- Alojamiento 8:
insert into scores (score, accommodation_id, user_id) values (3, 8, 1);
insert into scores (score, accommodation_id, user_id) values (4, 8, 2);

-- Alojamiento 9:
insert into scores (score, accommodation_id, user_id) values (3, 9, 1);
insert into scores (score, accommodation_id, user_id) values (5, 9, 2);

-- Alojamiento 10:
insert into scores (score, accommodation_id, user_id) values (3, 10, 1);
insert into scores (score, accommodation_id, user_id) values (3, 10, 2);

-- Alojamiento 11:
insert into scores (score, accommodation_id, user_id) values (2, 11, 1);
insert into scores (score, accommodation_id, user_id) values (2, 11, 2);

-- Alojamiento 12:
insert into scores (score, accommodation_id, user_id) values (1, 12, 1);
insert into scores (score, accommodation_id, user_id) values (4, 12, 2);

-- Alojamiento 13:
insert into scores (score, accommodation_id, user_id) values (2, 13, 1);
insert into scores (score, accommodation_id, user_id) values (2, 13, 2);

-- Alojamiento 14:
insert into scores (score, accommodation_id, user_id) values (4, 14, 1);
insert into scores (score, accommodation_id, user_id) values (4, 14, 2);

-- Alojamiento 15:
insert into scores (score, accommodation_id, user_id) values (5, 15, 1);
insert into scores (score, accommodation_id, user_id) values (4, 15, 2);

-- Alojamiento 16:
insert into scores (score, accommodation_id, user_id) values (1, 16, 1);
insert into scores (score, accommodation_id, user_id) values (5, 16, 2);

-- Alojamiento 17:
insert into scores (score, accommodation_id, user_id) values (2, 17, 1);
insert into scores (score, accommodation_id, user_id) values (4, 17, 2);

-- Alojamiento 18:
insert into scores (score, accommodation_id, user_id) values (3, 18, 1);
insert into scores (score, accommodation_id, user_id) values (5, 18, 2);

-- Alojamiento 19:
insert into scores (score, accommodation_id, user_id) values (1, 19, 1);
insert into scores (score, accommodation_id, user_id) values (4, 19, 2);

-- Alojamiento 20:
insert into scores (score, accommodation_id, user_id) values (3, 20, 1);
insert into scores (score, accommodation_id, user_id) values (4, 20, 2);

-- Alojamiento 21:
insert into scores (score, accommodation_id, user_id) values (2, 21, 1);
insert into scores (score, accommodation_id, user_id) values (4, 21, 2);

-- Alojamiento 22:
insert into scores (score, accommodation_id, user_id) values (5, 22, 1);
insert into scores (score, accommodation_id, user_id) values (4, 22, 2);

-- Alojamiento 23:
insert into scores (score, accommodation_id, user_id) values (1, 23, 1);
insert into scores (score, accommodation_id, user_id) values (4, 23, 2);

-- Alojamiento 24:
insert into scores (score, accommodation_id, user_id) values (3, 24, 1);
insert into scores (score, accommodation_id, user_id) values (4, 24, 2);

-- Alojamiento 25:
insert into scores (score, accommodation_id, user_id) values (2, 25, 1);
insert into scores (score, accommodation_id, user_id) values (5, 25, 2);


select * from scores;

-- TABLA DE FAVORITOS

-- Favoritos del usuario 1:
insert into favorites (accommodation_id, user_id) values (3,1);
insert into favorites (accommodation_id, user_id) values (6,1);
insert into favorites (accommodation_id, user_id) values (9,1);
insert into favorites (accommodation_id, user_id) values (12,1);
insert into favorites (accommodation_id, user_id) values (15,1);
insert into favorites (accommodation_id, user_id) values (23,1);

-- Favoritos del usuario 2:
insert into favorites (accommodation_id, user_id) values (1,2);
insert into favorites (accommodation_id, user_id) values (8,2);
insert into favorites (accommodation_id, user_id) values (9,2);
insert into favorites (accommodation_id, user_id) values (19,2);
insert into favorites (accommodation_id, user_id) values (21,2);
insert into favorites (accommodation_id, user_id) values (26,2);


select * from favorites;

select * from accommodations;
select * from accommodations_characteristics;
select * from images; 

delete from images where id = 144;

delete from accommodations where id = 38;
