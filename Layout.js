import styled from "styled-components";

export const Left = styled.div`
    align-items: center;
    display: grid;
    grid-template-columns: 0.7fr 1.3fr;
    grid-template-rows: 1fr;
    grid-template-areas: ". .";
    width: 960px;

    div {
        display: flex;
        flex-direction: column;
        justify-content: space-between
    }

    li {
        list-style: circle;
        margin: 2rem 0;
    }

    img {
        max-width: 300px;
        max-height: 300px;
    }
`;

export const Row = styled.div`
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 960px;

    img {
        max-width: 300px;
        max-height: 300px;
    }
`;