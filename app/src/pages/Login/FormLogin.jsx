import styled, { css } from 'styled-components';

const colors = {
    primario: "#F0572D",
    secundario: "#31363F",
    tercero: "#191B1D",
    cuarto: "rgba(196, 196, 196, 0.1)",
    borde: "#99c7ff",
    error: "#ff432e",
    exito: "#1ed12d"
}

const Button = styled.button `
    width: 12.88rem;
    height: 2.5rem;
    left: 36.25rem;
    top: 28.19rem;
    color: #FFFFFFFF;
    border: 0.19rem solid transparent;
    border-radius: 0.19rem;
    background: ${colors.primario};
    cursor: pointer;

    /* botton sombra */

    filter: drop-shadow(0px 0.13rem 0.25rem rgba(0, 0, 0, 0.33));
`

const InputElement = styled.input `
    width: 28rem;
    height: 2.5rem;
    line-height: 1.88rem;
    
    font-size: 1rem;

    padding-left: 4.5%;

    / *padding: 0 40px 0 10px; * /
    
    transition: .3s ease all;
    border: 0.1px solid transparent;
    /* blanco */

    background: #FFFFFF;
    /* input shadow */

    box-shadow: 0px 0.06rem 0.31rem rgba(0, 0, 0, 0.15);
    border-radius: 0.31rem;

    &: focus {
        border: 0.1px solid ${colors.borde};
        outline: none;
        box-shadow: 0.19rem 0 1.88rem rgba(163,163,163, 0.4);
    }

    @media (max-width: 768px) {
        width: 21.63rem;
    }

    @media (max-width: 414px) {
        width: 18.75 ;
    }

    ${props => props.valido === 'true' && css `
    border: 0.1px solid transparent
    `}

    ${props => props.valido === 'false' && css `
    border: 0.1px solid ${colors.error};
    `}
`
const H2 = styled.h2 `
    margin-top: 5%;
    font-style: normal;
        width: 18.75 ;
    font-size: 1.5rem;
    color: ${colors.primario};
    text-decoration: none;
    display: flex;
   
    justify-content: space-around;
    align-items: center;
    width: 26.38rem;
    height: 2.5rem;
    left: 29.5rem;
    top: 13.63rem;
`

/*Contenedor de label, input y msError */
const Contenedor = styled.div `
    height: 2.5rem;
    left: 28.69rem;
    top: 16.69rem;
`

const ContenedorForm = styled.div `

    background: ${colors.cuarto};
    min-height: 100vh;
    display: Flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-bottom: 10.69rem;
`
//grid porque quiero div en grids
//grit-template-columns: cantidad de columnas, divid en frac
//gap separacion entre columnas y filas
//media para la parte responsive
const Form = styled.form`
    gap: 3.75rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    margin-bottom: 0.10rem;
    @media (max-width: 800px){
        grid-template-columns: 1fr;
    }
`;

//block para que abarque el 100 del espacio que tenga
//font-w negritas, es el tamaño que seleccionamos
//min-height para que si no tenemos texto quede alineado con el anterior
const Label = styled.label `
    display: block;
    /*display: flex;
    align-content: center;*/
    font-weight: 700;
    min-height: 2.5rem;
    cursor: pointer;
`;

const LinkA = styled.a `
    font-weight: bold;
    margin:0.63rem;
    color: ${colors.primario};

` 

const MensajeError = styled.div `
   line-height:2.5rem;
   font-size: 0.94rem;
   color: ${colors.error}
   background: #FFFFFFf;
   border-radius: 0.19rem;
   position: absolute;
    margin-top: -3%;
`;

const LeyendaError = styled.p `
    font-size: 0.75rem;
    font-weight: bold;
    margin: 0.31rem;
    color: ${colors.error};
    display:none;
    ${props => props.valido === 'true' && css `
        display: none;
    `}

    ${props => props.valido === 'false' && css `
        display: Flex;
        flex-direction: column;
        align-items: end;
    `}

    @media (max-width: 768px) {
        width: 21.63rem;
    }

    @media (max-width: 414px) {
        width: 18.75rem;
    }
`;

const Div = styled.div `
    display:flex;
    gap: 0.75rem;
    
    ${InputElement} {
    width: 13.63rem;
    }
`

export {Button, Form, Label, InputElement, H2, LeyendaError, Contenedor, MensajeError, ContenedorForm, LinkA, Div};