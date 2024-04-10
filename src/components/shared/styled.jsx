import { styled } from "styled-components";

export const Container = styled.div`
  margin: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(${(props) => props.width}, 1fr);
  grid-template-rows: repeat(${(props) => props.height}, 1fr);
`;

export const InfoWrapper = styled.div`
  display: flex;
  width: 100%;
  color: #ececec;
  font-weight: 600;
  justify-content: center;
`;

export const FieldWrapper = styled.div`
  display: flex;
  gap: 5px;
  flex-direction: column-reverse;
`;

export const InfoItem = styled.div`
  display: flex;
  flex-direction: row;
  gap: 15px;
  align-items: center;
`;

export const Button = styled.button`
  border: none;
  outline: none;
  border-radius: 2px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.6);
  background-color: #2ecc71;
  color: #ecf0f1;
  transition: background-color 0.3s;
  padding: 10px 10px;
  font-size: 15px;
  font-weight: 600;
  font-family: Roboto, sans-serif;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  &:hover {
    background-color: #27ae60;
  }
  &:before {
    content: "";

    position: absolute;
    top: 50%;
    left: 50%;

    display: block;
    width: 0;
    padding-top: 0;

    border-radius: 100%;

    background-color: rgba(236, 240, 241, 0.3);

    -webkit-transform: translate(-50%, -50%);
    -moz-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    -o-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
  }
  &:active:before {
    width: 120%;
    padding-top: 120%;

    transition: width 0.2s ease-out, padding-top 0.2s ease-out;
  }
  ${(props) =>
    props.iconed
      ? `display: flex;
  gap: 7px;
  justify-content: center;
  align-items: center;`
      : null}
  ${(props) => (props.right ? `right: ${props.right}` : null)}
  ${(props) => (props.color ? `color: ${props.color}` : null)}
`;

export const TransparentButton = styled(Button)`
  background-color: transparent;
  box-shadow: none;
  &:hover {
    background-color: rgba(71, 71, 71, 0.2);
  }
`;


export const TopBar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  position: fixed;
  top: 0;
  right: 0;
`;
