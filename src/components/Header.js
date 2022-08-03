import styled from "styled-components";

export const Header = styled.div`
    background-color: black;
    color: white;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
    padding: 20px;
    font-size: 25px;
    font-weight: bold;
    box-shadow: 0 3px 6px 0 #555;
`;

export const AppNameComponent = styled.div`
    display: flex;
    align-items: center;
`;

export const SearchComponent = styled.div`
    display: flex;
    flex-direction: row;
    background-color: white;
    padding: 10px;
    border-radius: 6px;
    width: 50%;
`;

export const SearchInput = styled.input`
    border: none;
    outline: none;
    margin-left: 15px;
    font-size: 16px;
    font-weight: bold;
`;

export const ButtonLogin = styled.button`
    font-size: 14px;
    border: solid 1px green;
    margin: 10px 0;
    cursor: pointer;
    padding: 5px 5px;
    border-radius: 4px;
    color: white;
    background-color: green;
    text-align: center;
    padding: 10px;
    margin: 5px;
    width: 70px;
`;

export const ButtonLogout = styled(ButtonLogin)`
    background-color: red;
    border: solid 1px red;
`;