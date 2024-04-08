import { useMemo, useState } from "preact/hooks";
import { button } from "../../components/common/button";
import { panel } from "../../components/common/panel";
import { TabPanel } from "../../components/common/tab";
import { generateText } from "../../lib/malay-text-synth";
import pageStyle from "../pages.module.css";

export default function FrontPage() {
  const [tab, setTab] = useState(0);

  const p1 = useMemo(() => generateText(100), []);
  const p2 = useMemo(() => generateText(100), []);
  const p3 = useMemo(() => generateText(100), []);
  const p4 = useMemo(() => generateText(100), []);
  const p5 = useMemo(() => generateText(100), []);

  const tt = useMemo(
    () => [generateText(1), generateText(1), generateText(1), generateText(1)],
    []
  );

  return (
    <main className={pageStyle.main_sm}>
      <h1>Tabs</h1>
      <p>{p1}</p>

      <div>
        {Array(4)
          .fill(1)
          .map((i, ix) => (
            <button
              className={button({ kind: "tab", active: ix === tab })}
              onClick={() => setTab(ix)}
            >
              {tt[ix]}
            </button>
          ))}
      </div>

      <TabPanel
        index={0}
        value={tab}
        render={() => (
          <>
            <h2>First tab</h2>
            <p>{p2}</p>
          </>
        )}
      />
      <TabPanel
        index={1}
        value={tab}
        render={() => (
          <>
            <h2>Second tab</h2>
            <p>{p3}</p>
          </>
        )}
      />
      <TabPanel
        index={2}
        value={tab}
        render={() => (
          <>
            <h2>Third tab</h2>
            <p>{p4}</p>
          </>
        )}
      />
      <TabPanel
        index={3}
        value={tab}
        render={() => (
          <>
            <h2>Fourth tab</h2>
            <p>{p5}</p>
          </>
        )}
      />
    </main>
  );
}
