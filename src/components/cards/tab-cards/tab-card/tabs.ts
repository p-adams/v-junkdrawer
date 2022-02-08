interface ITab {
  name: string;
  tabs: Tab[];
}

const tabA_: ITab = {
  name: "tabA_",
  tabs: [
    { value: "A", label: "A" },
    { value: "Aa", label: "Aa" },
  ],
};

const tabB_: ITab = {
  name: "tabB_",
  tabs: [
    { value: "B", label: "B" },
    { value: "Bb", label: "Bb" },
  ],
};

const tabC_: ITab = {
  name: "tabC_",
  tabs: [
    { value: "C", label: "C" },
    { value: "Cc", label: "Cc" },
  ],
};

const tabD_: ITab = {
  name: "tabD_",
  tabs: [
    { value: "D", label: "D" },
    { value: "Dd", label: "Dd" },
  ],
};

export const tabs = [tabA_, tabB_, tabC_, tabD_];
