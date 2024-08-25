import { useCallback, useEffect, useReducer, useState } from "react";

export type Result<T extends Object> = {
  formData: T;
  formDirty: boolean;
  updateForm: (update: Partial<T>) => void;
  updateFormClean: (update: Partial<T>) => void;
  clearForm: () => void;
  register: (name: keyof T) => { name: keyof T; value: any };
  registerCheckbox: (name: keyof T) => { name: keyof T; checked: any };
  registerValue: (name: keyof T) => { name: keyof T; value: any };
};

export type FormController<T extends Object> = Result<T>;

type Options<T> = {
  onChange?: (formData: T) => void;
};

export default function useForm<T extends Object>(
  init: T,
  opts?: Options<T>
): Result<T> {
  const [formData, updateFormClean] = useReducer(formReducer<T>, init);
  const [formDirty, setFormDirty] = useState(false);

  useEffect(() => {
    if (opts?.onChange) {
      opts.onChange(formData);
    }
  }, [formData]);

  const clearForm = useCallback(() => {
    updateFormClean(init);
    setFormDirty(false);
  }, []);

  const register = useCallback(
    (name: keyof T) => ({
      name: name,
      value: formData[name] ?? "",
      onChange: (e: any) => {
        const { value } = e.target;
        updateFormClean({ [name]: value } as any);

        setFormDirty(true);
      },
    }),
    [formData]
  );

  const registerCheckbox = useCallback(
    (name: keyof T) => ({
      name: name,
      checked: formData[name],
      onChange: (e: any) => {
        const { checked } = e.target;
        updateFormClean({ [name]: checked } as any);
        setFormDirty(true);
      },
    }),
    [formData]
  );

  const registerValue = useCallback(
    (name: keyof T) => ({
      name,
      value: formData[name],
      onValueChange: (value: any) => {
        updateFormClean({ [name]: value } as any);
        setFormDirty(true);
      },
    }),
    [formData]
  );

  const updateForm = useCallback((value: Partial<T>) => {
    updateFormClean(value);
    setFormDirty(true);
  }, []);
  // console.log('useForm formData', formData)
  // console.log('useForm init', init)

  return {
    formData,
    updateForm,
    updateFormClean,
    clearForm,
    formDirty,
    register,
    registerCheckbox,
    registerValue,
  };
}

function formReducer<U extends Object>(state: U, update: Partial<U>): U {
  return {
    ...state,
    ...update,
  };
}
