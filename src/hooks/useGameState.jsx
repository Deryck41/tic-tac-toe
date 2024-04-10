import { useState, useEffect } from "react";

export const useGameState = (crossClassName, circleClassName) => {
  const [currentSymbol, SetCurrentSymbol] = useState(crossClassName);
  const [winner, SetWinner] = useState(null);
  const [size, SetSize] = useState(3);
  const [cells, SetCells] = useState(
    Array.from({ length: size }, () => Array.from({ length: size }, () => null))
  );

  useEffect(()=>{
    Reset();
  }, [size]);

  useEffect(() => {
    for (let y = 0; y < size; y++) {
      let row = true;

      for (let x = 0; x < size; x++) {
        if (cells[y][0] !== cells[y][x]) {
          row = false;
          break;
        }
      }

      if (row && cells[y][0] !== null) {
        SetWinner(cells[y][0]);
      }
    }

    for (let x = 0; x < size; x++) {
      let column = true;

      for (let y = 0; y < size; y++) {
        if (cells[0][x] !== cells[y][x]) {
          column = false;
          break;
        }
      }

      if (column && cells[0][x] !== null) {
        SetWinner(cells[0][x]);
      }
    }

    let diag = true;

    for (let diagIdx = 0; diagIdx < size; diagIdx++) {
      if (cells[0][0] !== cells[diagIdx][diagIdx]) {
        diag = false;
        break;
      }
    }

    if (diag && cells[0][0] !== null) {
      SetWinner(cells[0][0]);
    }

    diag = true;
    let diagX = size - 1;

    for (let diagY = 0; diagY < size; diagY++) {
      if (diagX >= 0) {
        if (cells[0][size - 1] !== cells[diagY][diagX]) {
          diag = false;
          break;
        }
        diagX--;
      }
    }

    if (diag && cells[0][size - 1] !== null) {
      SetWinner(cells[0][size - 1]);
    }
  }, [cells]);

  const Reset = () => {
    SetCells(
      Array.from({ length: size }, () =>
        Array.from({ length: size }, () => null)
      )
    );
    SetCurrentSymbol(crossClassName);
    SetWinner(null);
  };

  const HandleClick = (yIdx, xIdx) => {
    if (cells[yIdx][xIdx] === null && winner === null) {
      let copyCells = [...cells];
      copyCells[yIdx][xIdx] = currentSymbol;
      SetCells(copyCells);
      SetCurrentSymbol(
        currentSymbol === crossClassName ? circleClassName : crossClassName
      );
    }
  };
  return { cells, currentSymbol, winner, Reset, HandleClick, size, SetSize };
};
