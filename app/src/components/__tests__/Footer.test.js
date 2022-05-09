import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render , screen} from "@testing-library/react";
import { fireEvent, prettyDOM } from "@testing-library/dom";
import Footer from "../Footer/Footer";

describe("<Footer />", () => {
    let component;

    beforeEach (()=>{
        component = render(<Footer/>) 
    })

    test ("renders the component", ()=> {
        const ul = screen.getByTestId("footer-1")
        expect(ul).toBeInTheDocument();
    })

    test ("renders the four social networks" , () => {
        const socialNetworks = component.container.querySelectorAll("li");
        expect(socialNetworks.length).toBe(4)
    })

})
