import styled from 'styled-components';

export const PgDiv = styled.div`
    display: grid;
    grid-template-rows: repeat(
        ${props => props.height},
        calc(30vw/${props => props.width})
    );
    grid-template-columns: repeat(${props => props.width},1fr);
    grid-gap: 1px;
    max-width: 30vw;
    background: #111;
    border: 2px solid #333;
    width: 100%;
`