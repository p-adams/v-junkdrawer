interface ITab {
  name: string;
  tabs: Tab[];
}

const tabA_: ITab = {
  name: "tab a",
  tabs: [
    { value: "A", label: "A" },
    { value: "Aa", label: "Aa" },
  ],
};

const tabB_: ITab = {
  name: "tab b",
  tabs: [
    { value: "B", label: "B" },
    { value: "Bb", label: "Bb" },
  ],
};

const tabC_: ITab = {
  name: "tab c",
  tabs: [
    { value: "C", label: "C" },
    { value: "Cc", label: "Cc" },
  ],
};

const tabD_: ITab = {
  name: "tab d",
  tabs: [
    { value: "D", label: "D" },
    { value: "Dd", label: "Dd" },
  ],
};

export const tabs = { tabA_, tabB_, tabC_, tabD_ };
