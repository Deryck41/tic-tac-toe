import { useGameState } from "./hooks/useGameState";
import Cell from "/src/components/Cell.jsx";
import Modal from "/src/components/Modal.jsx";
import {
  Grid,
  Container,
  InfoWrapper,
  InfoItem,
  FieldWrapper,
  Button,
  TransparentButton,
  TopBar,
} from "/src/components/shared/styled.jsx";
import "./App.css";
import { useState } from "react";

const crossClassName = "fa-solid fa-xmark";
const circleClassName = "fa-regular fa-circle";

function App() {
  const [modalOpen, SetModalOpen] = useState(false);
  const { cells, currentSymbol, winner, Reset, HandleClick, size, SetSize } =
    useGameState(crossClassName, circleClassName);

  const ApplySettings = (size) => {
    SetSize(Number(size));
    SetModalOpen(false);
  };

  return (
    <Container>
      <TopBar>
        <a target="_blank" href="https://github.com/Deryck41">
          <TransparentButton iconed="true">
            <i className="fa-brands fa-github"></i> Deryck41
          </TransparentButton>
        </a>
        <TransparentButton iconed="true" onClick={() => SetModalOpen(true)}>
          <i className="fa-solid fa-gear"></i> Settings
        </TransparentButton>
      </TopBar>
      <FieldWrapper>
        {winner === null ? null : (
          <Button iconed="true" onClick={Reset}>
            <i className="fa-solid fa-rotate-right"></i>Retry
          </Button>
        )}
        {cells.flat().indexOf(null) === -1 && winner === null ? (
          <Button iconed="true" onClick={Reset}>
            <i className="fa-solid fa-trash"></i>Clear
          </Button>
        ) : null}
        <Grid width={size} height={size}>
          {cells.map((row, yIdx) =>
            row.map((cell, xIdx) => (
              <Cell
                key={xIdx + yIdx * size}
                onClick={() => {
                  HandleClick(yIdx, xIdx);
                }}
                state={cell}
              />
            ))
          )}
        </Grid>
        <InfoWrapper>
          {winner === null ? (
            <InfoItem>
              <i className={currentSymbol}></i> <span>move</span>
            </InfoItem>
          ) : (
            <InfoItem>
              <span>Winner</span>
              <i className={winner}></i>
            </InfoItem>
          )}
        </InfoWrapper>
      </FieldWrapper>
      <Modal
        opened={modalOpen}
        onClose={() => SetModalOpen(false)}
        onApply={ApplySettings}
      />
    </Container>
  );
}

export default App;
