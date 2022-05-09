import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render , screen} from "@testing-library/react";
import { fireEvent, prettyDOM } from "@testing-library/dom";
import Card from "../Card/Card";
import { BrowserRouter } from 'react-router-dom';


describe("<Card />", () => {
    let card;
    let component;

    beforeEach (() => {
        card = {
            "id": 1,
            "name": "Casa con pileta en Pilar",
            "description": "En el corazón de Puerto Madero, disfruta de un albergue inspirado en las pasiones de Buenos Aires.",
            "category": {
                "id": 1,
                "category": "Casas",
                "description": "400.000 casas",
                "urlImage": "https://s3.amazonaws.com/digitalbooking.equipo3c3/imgGaleria/Categorias/imagenGeneralCasas.jpeg"
            },
            "city": {
                "id": 1,
                "name": "Buenos Aires",
                "country": "Argentina"
            },
            "images": [
                {
                    "id": 6,
                    "title": "Casa",
                    "urlImage": "https://s3.amazonaws.com/digitalbooking.equipo3c3/imgGaleria/Casas/Casa1/casa106.jpg"
                },
                {
                    "id": 7,
                    "title": "Casa",
                    "urlImage": "https://s3.amazonaws.com/digitalbooking.equipo3c3/imgGaleria/Casas/Casa1/casa107.jpg"
                },
                {
                    "id": 2,
                    "title": "Casa",
                    "urlImage": "https://s3.amazonaws.com/digitalbooking.equipo3c3/imgGaleria/Casas/Casa1/casa102.jpg"
                },
                {
                    "id": 5,
                    "title": "Casa",
                    "urlImage": "https://s3.amazonaws.com/digitalbooking.equipo3c3/imgGaleria/Casas/Casa1/casa105.jpg"
                },
                {
                    "id": 3,
                    "title": "Casa",
                    "urlImage": "https://s3.amazonaws.com/digitalbooking.equipo3c3/imgGaleria/Casas/Casa1/casa103.jpg"
                },
                {
                    "id": 4,
                    "title": "Casa",
                    "urlImage": "https://s3.amazonaws.com/digitalbooking.equipo3c3/imgGaleria/Casas/Casa1/casa104.jpg"
                },
                {
                    "id": 8,
                    "title": "Casa",
                    "urlImage": "https://s3.amazonaws.com/digitalbooking.equipo3c3/imgGaleria/Casas/Casa1/casa108.jpg"
                },
                {
                    "id": 1,
                    "title": "Casa",
                    "urlImage": "https://s3.amazonaws.com/digitalbooking.equipo3c3/imgGaleria/Casas/Casa1/casa101.jpg"
                }
            ],
            "characteristics": []
        }
        component = render(
          <BrowserRouter>
            <Card data={card}/>
          </BrowserRouter>
        )
    })

    test ("renders the component", ()=> {
        const card = screen.getByTestId("card-1")
        expect(card).toBeInTheDocument();
    })

    test ("should render card category, card description and card name", ()=>{
        // Testeamos la renderización de la categoría y descripción
        component.getByText(card.category.category.toUpperCase());
        component.getByText(card.name)
        component.getByText(card.description.slice(0, 89), {exact:false}); 
    }) 

    test ("the description does not have to be longer than 100", ()=>{
        const description = component.container.getElementsByClassName("descripcion")[0].querySelector("p").textContent; 
        console.log("Descripcion: " + description)
        expect(description.length).toBeLessThan(100)
    })


    

})