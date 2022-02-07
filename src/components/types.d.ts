interface Prediction {
  label: string;
  value: string;
}
type Predictions = Array<Prediction>;

type Tab = { label: string; value: string; path?: string };
