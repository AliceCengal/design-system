import { button } from "../../components/button";
import { Dialog } from "../../components/modal-dialog";
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
            <Dialog open={open} onClose={toggleOpen}>
              <div className={panel()}>{generateText(40)}</div>
            </Dialog>
          </>
        )}
      </ToggleView>
    </main>
  );
}
