import React from "react";
import { Contenedor, Label, InputElement, LeyendaError } from "../../pages/Login/FormLogin";

function Input ({estado, cambiarEstado, tipo, label, name, leyendaError, expresionRegular}) {
    const onChange = (e) => {
        cambiarEstado({...estado, campo: e.target.value});
    }

    const validacion = () => {
        if(expresionRegular){
            if(expresionRegular.test(estado.campo))
            {
                cambiarEstado({...estado, valido: 'true'});
            }
            else{
                cambiarEstado({...estado, valido: 'false'});
            }
        }
    }

    return (
        <Contenedor>
            <Label htmlFor={name}>{label}</Label>
            <InputElement 
                type={tipo} 
                id={name}
                value = {estado.campo}
                //Funcion que toma los cambios
                onChange={onChange}
                //Funcion que se ejecuta cuando se deja de cliquear
                onKeyUp={validacion}
                //Cuando se presiona fuera del input
                onBlur={validacion}
                valido={estado.valido}
            />
            <LeyendaError valido={estado.valido}>{leyendaError}</LeyendaError>
        </Contenedor>
    )
}

export default Input;