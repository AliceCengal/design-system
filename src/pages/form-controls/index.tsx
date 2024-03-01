import {
  Checkbox,
  Radio,
  RadioGroup,
  Select,
  TextArea,
  TextField,
  formdata,
} from "../../components/form-control";
import { generateText } from "../../lib/malay-text-synth";
import pageStyle from "../pages.module.css";

export default function FormControlsPage() {
  // const {} = useForm({
  //   aa: 'aa'
  // })
  return (
    <main className={pageStyle.main_sm}>
      <h1>Form controls</h1>

      <form
        style={{ display: "grid", gap: "var(--sp-3)" }}
        onInput={(e) => {
          const data = formdata(e.currentTarget);
          e.currentTarget["display"].innerHTML =
            "<pre>" + JSON.stringify(data, null, 4) + "</pre>";
        }}
      >
        <output name="display">display</output>
        <TextField
          type="text"
          name="AA"
          label={generateText(4)}
          hint={generateText(5)}
        />
        <TextField type="number" name="BB" label={generateText(3)} max={5} />
        <TextField type="file" name="CC" label={generateText(4)} />
        <TextArea name="DD" label={generateText(4)} rows={5} />

        <Checkbox name="EE" value="EEA" label={generateText(6)} />
        <Checkbox name="EE" value="EEB" label={generateText(6)} />

        <RadioGroup label={generateText(8)} name="HII">
          <Radio label={generateText(4)} value="H7" />
          <Radio label={generateText(4)} value="H8" />
          <Radio label={generateText(4)} value="H9" />
        </RadioGroup>

        <Select label={generateText(5)} name="GG">
          <option value="GG1">{generateText(1)}</option>
          <option value="GG3">{generateText(1)}</option>
          <option value="GG4">{generateText(1)}</option>
          <option value="GG5">{generateText(1)}</option>
        </Select>
      </form>
    </main>
  );
}
