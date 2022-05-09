import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import { findByText, fireEvent, prettyDOM, queryByText } from "@testing-library/dom";
import Login from "../../pages/Login/Login";

describe("<Login />", () => {
    let component;
    let validUser;
    let invalidUser;

    beforeEach(() => {
        component = render(<Login />)
        invalidUser = {
            nombre: "Pepe",
            apellido: "Rodriguez",
            email: "grupo100@dh.com",
            password: "00000"
        }
        validUser = {
            nombre: "Bruno",
            apellido: "Rodriguez",
            email: "grupo3@dh.com",
            password: "123456"
        }
        
    })

    test("Login with invalid user shouldnt login", () => {
        const { getByText, getByLabelText } = component;

        const inputEmail = getByLabelText("Correo electrónico");
        fireEvent.change(inputEmail, { target: { value: invalidUser.email } })

        const inputPassword = getByLabelText("Contraseña");
        fireEvent.change(inputPassword, { target: { value: invalidUser.password } })

        fireEvent.click(getByText("Ingresar"))
        expect(getByText("Por favor, vuelva a intentarlo sus credenciales son inválidas")).toBeInTheDocument()

    })

    test("Login with valid user should login", () => {
        const { getByText, getByLabelText } = component;

        const inputEmail = getByLabelText("Correo electrónico");
        fireEvent.change(inputEmail, { target: { value: validUser.email } })

        const inputPassword = getByLabelText("Contraseña");
        fireEvent.change(inputPassword, { target: { value: validUser.password } })

        fireEvent.click(getByText("Ingresar"))
        expect(findByText("Por favor, vuelva a intentarlo sus credenciales son inválidas")).toBeNull()
    })
})