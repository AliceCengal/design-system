import { button } from "../../components/common/button";
import { Dialog, DialogActions } from "../../components/common/modal-dialog";
import { panel } from "../../components/common/panel";
import { ToggleView } from "../../components/common/toggle-view";
import { generateText } from "../../lib/malay-text-synth";
import pageStyle from "../pages.module.css";

export default function DialogsPage() {
  return (
    <main className={pageStyle.main_sm}>
      <h1>Dialogs</h1>
      <p>{generateText(20)}</p>

      <ToggleView>
        {(open, toggleOpen) => (
          <>
            <p>
              <button className={button()} onClick={toggleOpen}>
                <span>Toast</span>
              </button>
            </p>
            <Dialog open={open} onClose={() => open && toggleOpen()}>
              <div className={panel()}>
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

      <ToggleView>
        {(open, toggleOpen) => (
          <>
            <p>
              <button className={button()} onClick={toggleOpen}>
                <span>Toast sm</span>
              </button>
            </p>
            <Dialog open={open} onClose={() => open && toggleOpen()}>
              <div className={panel({ maxWidth: "sm" })}>
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
