import styled from "@emotion/styled";
/*const affiliation = ship.manufacturer.includes("Sienar") ? process.env.PUBLIC_URL + `/images/dark.jpg`: process.env.PUBLIC_URL + `/images/rebel.svg`
*/
export const Wrapper = styled.div`
    margin: 10px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    width: 100%;
    border: non;
    border-radius: 20px;
    border-right: 0px;
    height: 100%;
    img {
        object-fit: cover;
        border-radius: 20px ;
    }

    div {
        font-family: Ariel, Helvetica, sans-serif;
        padding: 1rem;
        height: auto;
    }
`;

