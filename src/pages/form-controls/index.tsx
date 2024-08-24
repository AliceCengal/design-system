import { FormEvent, useMemo } from "react";
import {
  Checkbox,
  TextArea,
  TextField,
  formdata,
} from "../../components/common/form-control";
import { generateText } from "../../lib/malay-text-synth";
import pageStyle from "../pages.module.css";
import { Grid } from "../../components/common/box";
import {
  MultiItem,
  MultiSelect,
} from "../../components/common/form-control/multi-select";
import {
  Select,
  SelectItem,
} from "../../components/common/form-control/select";
import {
  RadioGroup,
  RadioItem,
} from "../../components/common/form-control/radio-group";

export default function FormControlsPage() {
  // const {} = useForm({
  //   aa: 'aa'
  // })

  const options1 = useMemo(
    () =>
      Array(4)
        .fill(1)
        .map(() => generateText(5)),
    []
  );
  const options2 = useMemo(
    () =>
      Array(4)
        .fill(1)
        .map(() => generateText(1)),
    []
  );

  const options3 = useMemo(
    () =>
      Array(4)
        .fill(1)
        .map(() => generateText(1)),
    []
  );

  function handleInput(e: FormEvent<HTMLFormElement>) {
    console.log("FormControlsPage", "handleInput");
    const data = formdata(e.currentTarget);
    const dataString = JSON.stringify(data, null, 4);
    e.currentTarget["display"].innerHTML = `<pre>${dataString}</pre>`;
  }

  return (
    <main className={pageStyle.main_sm}>
      <h1>Form controls</h1>

      <form
        style={{
          display: "grid",
          gap: "var(--sp-4)",
          paddingBlockEnd: "var(--sp-6)",
        }}
        onInput={handleInput}
      >
        <output name="display">display</output>
        <TextField
          type="text"
          name="AA"
          label={generateText(4)}
          hint={generateText(5)}
        />
        <TextField
          layout="horizontal"
          type="number"
          name="BB"
          label={generateText(3)}
          max={5}
          size={4}
        />
        <TextField
          layout="horizontal"
          type="color"
          name="BBC"
          label={generateText(3)}
        />
        <TextField
          layout="horizontal"
          type="range"
          name="BBR"
          label={generateText(3)}
        />
        <TextField type="file" name="CC" label={generateText(4)} />
        <TextArea name="DD" label={generateText(4)} rows={5} />

        <Grid justifyItems="start">
          <Checkbox name="EE" value="EEA" label={generateText(6)} />
          <Checkbox name="EE" value="EEB" label={generateText(6)} />
        </Grid>

        {/* <RadioGroup label={generateText(8)} name="HII">
          <Radio value="H7">{generateText(4)}</Radio>
          <Radio value="H8">{generateText(4)}</Radio>
          <Radio value="H9">{generateText(4)}</Radio>
        </RadioGroup> */}

        <Select label={generateText(5)} name="GGS" defaultValue="GG2">
          {options1.map((opt, ix) => (
            <SelectItem key={opt} value={`GG${ix}`}>
              {opt}
            </SelectItem>
          ))}
        </Select>

        <Select
          layout="horizontal"
          label={generateText(5)}
          name="GGS2"
          defaultValue="GG3"
        >
          {options1.map((opt, ix) => (
            <SelectItem key={opt} value={`GG${ix}`}>
              {opt}
            </SelectItem>
          ))}
        </Select>

        <Grid gridTemplateColumns="minmax(0,1fr) 10rem" alignItems="baseline">
          <Select
            layout="freeform"
            label={generateText(5)}
            name="GGS3"
            defaultValue="GG3"
          >
            {options1.map((opt, ix) => (
              <SelectItem key={opt} value={`GG${ix}`}>
                {opt}
              </SelectItem>
            ))}
          </Select>
        </Grid>

        <MultiSelect
          label={generateText(5)}
          name="GGM"
          defaultValue={["GG1", "GG3"]}
          renderValue={(v) => options2[Number(v.slice(2))]}
        >
          {options2.map((opt, ix) => (
            <MultiItem key={opt} value={`GG${ix}`}>
              {opt}
            </MultiItem>
          ))}
        </MultiSelect>

        <MultiSelect
          layout="horizontal"
          label={generateText(5)}
          name="GGM2"
          defaultValue={["GG1", "GG3"]}
          renderValue={(v) => options2[Number(v.slice(2))]}
        >
          {options2.map((opt, ix) => (
            <MultiItem key={opt} value={`GG${ix}`}>
              {opt}
            </MultiItem>
          ))}
        </MultiSelect>

        <Grid gridTemplateColumns="minmax(0,1fr) 10rem" alignItems="baseline">
          <MultiSelect
            layout="freeform"
            label={generateText(5)}
            name="GGM3"
            defaultValue={["GG1", "GG3"]}
            renderValue={(v) => options2[Number(v.slice(2))]}
          >
            {options2.map((opt, ix) => (
              <MultiItem key={opt} value={`GG${ix}`}>
                {opt}
              </MultiItem>
            ))}
          </MultiSelect>
        </Grid>

        <RadioGroup label={generateText(5)} name="RG" defaultValue="RG2">
          {options3.map((opt, ix) => (
            <RadioItem key={opt} value={`RG${ix}`}>
              {opt}
            </RadioItem>
          ))}
        </RadioGroup>

        <RadioGroup
          layout="vertical-horizontal"
          label={generateText(5)}
          name="RG2"
          defaultValue="RG2"
        >
          {options3.map((opt, ix) => (
            <RadioItem key={opt} value={`RG${ix}`}>
              {opt}
            </RadioItem>
          ))}
        </RadioGroup>

        <RadioGroup
          layout="horizontal"
          label={generateText(5)}
          name="RG3"
          defaultValue="RG2"
        >
          {options3.map((opt, ix) => (
            <RadioItem key={opt} value={`RG${ix}`}>
              {opt}
            </RadioItem>
          ))}
        </RadioGroup>
      </form>
    </main>
  );
}
