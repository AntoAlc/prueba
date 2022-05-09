import styled from 'styled-components';

const colors = {
    primario: "#F0572D",
    secundario: "#31363F",
    tercero: "#191B1D",
    cuarto: "#DFE4EA"
}

const SBButton = styled.button`
    background: ${colors.primario};
    border-radius: 0.31rem;
    border-radius: 0.31rem;
    border: none;
    box-shadow: 0px 0.13rem 0.25rem rgba(0, 0, 0, 0.12);
    color: #FFFFFF;
    cursor: pointer;
    height: 2.5rem;
    left: 0px;
    margin-left: 0.63rem;
    top: 0px;
    width: 12rem;

    @media (max-width: 768px) {
        width: 35vw;
    }

    @media (max-width: 600px) {
        align-content: space-around;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        height: 2.5rem;
        justify-content: space-around;
        margin-left: 0px;
        margin-top: 0.94rem;
        width: 90vw;
    } 
`

const SBContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;

    @media (max-width: 768px) {
        flex-direction: column;
    }

    @media (max-width: 600px) {
        flex-direction: column;
        justify-content: space-around;
    }
`

const SBDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-bottom: 1.62rem;
    margin-top: 1.44rem;
    margin-left: 10vw;

    @media (max-width: 768px) {
        margin-left:0;
    }


    @media (max-width: 600px) {
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        margin-left:0.06rem;
    }
`

const SBDiv2 = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: row;
    margin-bottom: 1.62rem;
    margin-top: 1.44rem;
    margin-right: 10vw;

    @media (max-width: 768px) {
        margin-top: 0.5rem;   
        margin-right: 0;     
        align-items: center;
    }

    @media (max-width: 600px) {
        display: flex;
        flex-direction: column;
        flex-direction: column;
        justify-content: space-around;
        margin-left:0.06rem;
    }
`

const SBForm = styled.form`
    align-items: center;
    background: ${colors.tercero};
    display: flex;
    flex-direction: column;
    top: 80px;
    z-index:500;

    @media(max-width: 768px){
        display: flex;
        flex-direction: column;
        top: 98px;
    }

    @media (max-width: 600px) {
        align-items: center;
        min-height: 25rem;
        top: 5.8125rem;
        width: 100%;
}
`

const SBH1 = styled.h1`
    color: #FFFFFFFF;
    margin-top: 1.44rem;

    @media (max-width: 600px) {
        margin-left: 0.56rem;
        text-align: center;
    }
`

export { SBButton, SBContainer, SBDiv, SBDiv2, SBForm, SBH1 }