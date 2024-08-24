import { cloneElement } from "react";
import { Box } from "../../components/common/box";
import { button } from "../../components/common/button";
import { Dialog, DialogActions } from "../../components/common/modal-dialog";
import { panel } from "../../components/common/panel";
import { generateText } from "../../lib/malay-text-synth";
import { PropsWithChildElem } from "../../utils/props";
import { useToggle } from "../../utils/use-toggle";
import pageStyle from "../pages.module.css";

export default function DialogsPage() {
  return (
    <main className={pageStyle.main_sm}>
      <h1>Dialogs</h1>
      <p>{generateText(20)}</p>

      <p>
        <WideDialog>
          <button className={button()}>
            <span>Full-width dialog</span>
          </button>
        </WideDialog>
      </p>

      <p>
        <NarrowDialog>
          <button className={button()}>
            <span>Narrow dialog</span>
          </button>
        </NarrowDialog>
      </p>
    </main>
  );
}

function WideDialog({ children }: PropsWithChildElem) {
  const [open, toggleOpen] = useToggle();

  return (
    <>
      {cloneElement(children, { onClick: toggleOpen })}
      <Dialog open={open} onClose={() => open && toggleOpen()}>
        <Box className={panel()} padding="var(--sp-4)">
          <h2>{generateText(4)}?</h2>
          <p>{generateText(40)}</p>
          <DialogActions>
            <button
              className={button({ kind: "text", size: "small" })}
              onClick={toggleOpen}
            >
              cancel
            </button>
            <button
              className={button({ kind: "text", size: "small" })}
              onClick={toggleOpen}
            >
              accept
            </button>
          </DialogActions>
        </Box>
      </Dialog>
    </>
  );
}

function NarrowDialog({ children }: PropsWithChildElem) {
  const [open, toggleOpen] = useToggle();

  return (
    <>
      {cloneElement(children, { onClick: toggleOpen })}
      <Dialog open={open} onClose={() => open && toggleOpen()}>
        <Box className={panel({ maxWidth: "sm" })} padding="var(--sp-4)">
          <h2>{generateText(4)}?</h2>
          <p>{generateText(40)}</p>
          <DialogActions>
            <button
              className={button({ kind: "text", size: "small" })}
              onClick={toggleOpen}
            >
              cancel
            </button>
            <button
              className={button({ kind: "text", size: "small" })}
              onClick={toggleOpen}
            >
              accept
            </button>
          </DialogActions>
        </Box>
      </Dialog>
    </>
  );
}
