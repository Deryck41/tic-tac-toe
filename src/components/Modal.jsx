import { TransparentButton, Button } from "./shared/styled";
import {
  DialogParent,
  Dialog,
  DialogTop,
  SettingsItem,
  NumberInput,
} from "./shared/Dialog.styled";
import { createPortal } from "react-dom";
import propTypes from "prop-types";
import { useState } from "react";

export default function Modal({ opened, onClose, onApply }) {
  const [size, SetSize] = useState(0);
  if (!opened) {
    return null;
  }

  return createPortal(
    <DialogParent>
      <Dialog>
        <DialogTop>
          <TransparentButton color="#606060" iconed="true" onClick={onClose}>
            <i className="fa-solid fa-xmark"></i>
          </TransparentButton>
        </DialogTop>
        <SettingsItem>
          <label>Size</label>
          <NumberInput onChange={SetSize} type="number" from="0" to="50" />
        </SettingsItem>
        <Button onClick={() => onApply(size)} iconed="true">
          <i className="fa-solid fa-check"></i>Apply
        </Button>
      </Dialog>
    </DialogParent>,
    document.body
  );
}

Modal.propTypes = {
  opened: propTypes.bool,
  onClose: propTypes.func,
  onApply: propTypes.func,
};
