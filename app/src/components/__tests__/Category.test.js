import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render , screen} from "@testing-library/react";
import { fireEvent, prettyDOM } from "@testing-library/dom";
import Category from "../Category/Category";
import Home from "../../pages/Home/Home"



describe("<Category />", () => {
    let card;
    let component;

    beforeEach (()=>{
        card = {
            "id": 1,
            "category": "Casas",
            "description": "400.000 casas",
            "urlImage": "/img/imagenGeneralCasas.jpeg"
        }
        component = render(<Category data={card}/>) 
    })

    test ("renders the component", ()=> {
        const div = screen.getByTestId("category-"+card.id)
        expect(div).toBeInTheDocument();
    })

    test ("should render Card contents", ()=>{
        // Testeamos la renderización de la categoría y descripción
        component.getByText(card.category);
        component.getByText(card.description); 
    
        // Testeamos la renderización de la imágen
        expect(component.container.querySelector("img").getAttribute("src")).toBe(card.urlImage)
        screen.getByAltText(card.category)
    }) 
    
    test ("by clicking once on the card handle", () => {
        
        /* const enlace = component.container.querySelector("div");
        

        const home = render(<Home />)
        const cards = home.container.querySelectorAll("div")
        console.log(cards)
        fireEvent.click(enlace) */

    })

})