import styled from 'styled-components';

export const Container = styled.section`
    display:flex;
    align-items:center;
    justify-content:space-between;
    min-Width:25rem;
    min-height:45rem;
`
export const InfoContainer = styled.div`
        display:flex;
        margin:5rem 0;
        flex-direction:column;
        justify-content:flex-start;
        align-items:flex-start;
        min-height:18.75rem;
        height:40vh;
        width:50%;
        color:${(props) => props.theme.colors.gray500};
        & h1 {
            font-size:5rem;
            margin:0;
            color:${(props) => props.theme.colors.gray300};
        }
        & h2 {
            margin-bottom:1rem;
            color:${(props)=>{props.theme.colors.gray300}};
        }
        & h3 {
            font-size:3rem;
            color:${(props) => props.theme.colors.gray500};
            margin:1rem 0 2rem 0;
        }
        & p {
            font-size:2rem;
            text-align:justify;
            line-height: 2.5rem;
            & strong {
            color:${(props) => props.theme.colors.white};
            }
            margin-bottom:2rem;
        }
        @media ${(props => props.theme.breakpoints.md)}{
        flex-direction:column;
        height:auto;
        width:100%
    }
`




export const ButtonAction = styled.button`
    color:rgba(256,256,256,0.8);
    font-weight: 700;
    border: none;
    border-radius:50px; 
    width: 15rem;
    padding:1rem 2rem;
    background:linear-gradient(90deg, rgba(198,35,104,1) 20%, rgba(250,114,104,1) 85%);
    transition:ease-in-out 150ms;
    cursor:pointer;
    &:hover{
        transform:scale(1.05);
        box-shadow: 2px 2px 4px 3px rgba(0, 0, 0, 0.3);
        transition:ease-in-out 150ms;
        filter:brightness(1.1)
    }
    & a {
        text-decoration:none;
        color:rgba(256,256,256,0.8);
    }
`