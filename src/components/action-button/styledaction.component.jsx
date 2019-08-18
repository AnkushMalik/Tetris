import styled from 'styled-components'

export const StyledButton = styled.button`
    height: 50px
    min-height: 30px;
    width: 100%;
    font-size: 1.25rem;
    font-family: 'Press Start 2P', cursive;
    background: black;
    color: rgb(153, 153, 153);
    border : 2px solid rgb(153, 153, 153);
    &:hover{
        background: white;
        color: grey;
        border: 2px solid grey;
    }
`