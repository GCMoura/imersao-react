import styled from 'styled-components';

export const Div = styled.div `
    input {
        width: 300px;
        height: 50px;
        border: 2px solid #555;
        border-radius: 15px 0px 15px 0px;
        outline: none;
    }
    input[type=text]{
        border-bottom: 5px solid tomato;
        font-size: 1.1em;
        background: transparent;
        color: white;
        margin: 10px 0px;
        padding-top: 25px;
        padding-left: 10px;
    }
    input[type=color]{
        margin-top: 10px;
        margin-bottom: 20px;
        background: rgba(255, 255, 255, 2.3);
        padding: 8px 10px;
        transition: 0.5s ease;

        &:hover{
            background: tomato;
        }
    }
    input::placeholder{
        font-size: 1.1em;
        color: white;
        text-align: bottom;
        transition: 0.4s;
    }
    input:hover::placeholder,
    input:focus::placeholder{
        color: rgba(255, 255, 255, 0.6);
        transform: translateY(-20px);
        font-size: 12px;
        letter-spacing: 0.1em;
    }
`
export const Button = styled.button `
    width: 150px;
    height: 50px;
    color: white;
    background: #000;
    border-radius: 10px;
    border-bottom: 5px solid green;
    font-family: 'Roboto', 'monospace';
    font-size: 32px;
    transition: 0.8s ease;

    &:hover {
        color: #000;
        background: white;
    }
`