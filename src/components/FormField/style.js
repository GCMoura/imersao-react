import styled, { css } from 'styled-components';

export const FormFieldRapper = styled.div`
    position: relative;
    textarea{
        min-height: 59px;
    }
    input[type='color']{
        padding-left: 56px;
    }
`
export const Label = styled.label `

`
export const LabelText = styled.span`
    color: #e5e5e5;
    height: 57px;
    position: absolute;
    top: 0;
    left: 16px;

    display: flex;
    align-items: center;

    transform-origin: 0% 0%;
    font-size: 18px;
    font-style: normal;
    font-weight: 300;

    transition: .1s ease-in-out;
`

export const Input = styled.input`
    background: #535850;
    color: #f5f5f5;
    display: block;
    width: 100%;
    height: 57px;
    font-size: 18px; 

    cursor: pointer; 

    outline: 0;
    border: 0;
    border-top: 4px solid transparent;
    border-bottom: 4px solid #535850;  

    padding: 16px 16px;
    margin-bottom: 45px;

    resize: none;
    border-radius: 4px;
    transition: border-color .3s;

    &:focus {
        border-bottom-color: var(--primary);
    }
    &:focus:not([type="color"]) + span {
        transform: scale(.6) translateY(-10px);
    }

    ${ ({ hasValue }) => { 

        return hasValue && css`
            &:not([type="color"]) + span {
            transform: scale(.6) translateY(-10px);
        }
        `
    }}
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
    cursor: pointer;

    &:hover {
        color: #000;
        background: white;
    }
`


