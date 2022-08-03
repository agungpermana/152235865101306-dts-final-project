import styled from "styled-components";

export const RecipeContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px;
    width: 300px;
    box-shadow: 0 3px 10px 0 #aaa;
`;

export const CoverImg = styled.img`
    height: 200px;
`;

export const RecipeName = styled.span`
    font-size: 18px;
    font-weight: bold;
    color: black;
    margin: 10px 0;
`;

export const Duration = styled.span`
    font-size: 14px;
    padding: 5px 5px;
    color: green;
`;

export const Dificult = styled(Duration)`
    color: blue;
`;

export const Portion = styled(Duration)`
    color: #eb3300;
`;

export const SeeMore = styled.span`
    font-size: 14px;
    border: solid 1px green;
    margin: 10px 0;
    cursor: pointer;
    padding: 5px 5px;
    border-radius: 4px;
    color: white;
    background-color: green;
    text-align: center;
`;