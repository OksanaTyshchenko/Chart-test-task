type Data = {
  label: string,
  data: number[],
  borderColor: string,
  backgroundColor: string,
};

export type ChartData = {
  labels: string[],
  datasets: Data[],
};

export type SetState<T> = React.Dispatch<React.SetStateAction<T>>;
