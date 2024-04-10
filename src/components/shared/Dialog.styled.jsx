import InputNumber from "../common/InputNumber";
import { styled } from "styled-components";

export const DialogParent = styled.div`
  width: 100vw;
  position: absolute;
  height: 100vh;
  background-color: rgba(40, 40, 40, 0.3);
  display: flex;
  align-items: center;
  top: 0;
`;

export const Dialog = styled.dialog`
  display: flex;
  border: none;
  border-radius: 5px;
  flex-direction: column;
  padding: 0;
`;

export const DialogTop = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const SettingsItem = styled.div`
  padding: 20px;
  display: flex;
  gap: 14px;
  align-items: center;
  justify-content: space-between;
`;

export const NumberInput = styled(InputNumber)`
  font-size: 15px;
  width: 20%;
  outline: none;
  padding: 4px;
`;

