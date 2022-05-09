import styled from 'styled-components';

const Redes = styled.div `
    @media (max-width: 415px) {
        display: none;   
    }
`

const FooterElement = styled.footer `
    align-items: center;
    background-color: #F0572D;
    display: flex;
    flex-direction: row;
    height: 3.63rem;
    justify-content: space-between;
    padding: 0 3.13rem;
    position: sticky;
    width: 100%;
    bottom: 0;
    ;
    
    @media (max-width: 768px) {
        padding: 0 1.88rem;
    }
    @media (max-width: 415px) {
        padding: 0 1.19rem;
    }
`

const Ul = styled.ul `
    display: flex;
    flex-direction: row;
    gap: 1.88rem;
    align-items: flex-end;
`

const P = styled.p `
    font-style: normal;
    font-weight: bold;
    font-size: 0.88rem;
    line-height: 1rem;
    color: #FFFFFF;
`
export {Redes, Ul, P, FooterElement};