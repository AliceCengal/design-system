import { button } from "../../components/button";
import { Dialog, DialogActions } from "../../components/modal-dialog";
import { panel } from "../../components/panel";
import { ToggleView } from "../../components/toggle-view";
import { generateText } from "../../lib/malay-text-synth";

export default function DialogsPage() {
  return (
    <main
      style={{ width: "min(calc(100% - 16px), 600px)", marginInline: "auto" }}
    >
      <h1>Dialogs</h1>
      <p>{generateText(20)}</p>

      <ToggleView>
        {(open, toggleOpen) => (
          <>
            <button className={button()} onClick={toggleOpen}>
              Toast
            </button>
            <Dialog open={open} onClose={() => open && toggleOpen()}>
              <div className={panel({ kind: "white" })}>
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
              </div>
            </Dialog>
          </>
        )}
      </ToggleView>
    </main>
  );
}
