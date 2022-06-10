import React, { ChangeEvent, useState } from 'react';
import { ChartData, SetState } from '../../types';
import './Inputs.scss';


type Props = {
  setCharData: SetState<ChartData>,
}

export const Inputs: React.FC<Props> = ({ setCharData }) => {
  const [xQuery, setXQuery] = useState('January, February, March, April, May');
  const [yQuery, setYQuery] = useState('1, 2, 3, 4, 5');

  const handleChange = (setValue: SetState<string>) => (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    setValue(value);
  };

  const handleChangeLabels = () => {
    setCharData((state) => ({
      labels: xQuery.split(','),
      datasets: state.datasets
    }));
  };

  const handleChangeValues = () => {
    setCharData((state) => ({
      ...state,
      datasets: [
        {
          ...state.datasets[0],
          data: yQuery.split(',').map(num => +num),
        }
      ],
    }));
  };

  const submitForm = (event: React.SyntheticEvent) => {
    event.preventDefault();

    handleChangeLabels();
    handleChangeValues();
  }

  return (
    <form onSubmit={submitForm}>
     <div className="Inputs__wrapper">
        <label className="Inputs__label">
        X axis labels:
          <input
            type="text"
            placeholder="January, February, March, April, May"
            value={xQuery}
            onChange={handleChange(setXQuery)}
            onBlur={handleChangeLabels}
            className="Inputs__input"
          />
        </label>

        <label className="Inputs__label">
        Y axis labels:
          <input
            type="text"
            placeholder="1, 2, 3, 4, 5"
            value={yQuery}
            onChange={handleChange(setYQuery)}
            onBlur={handleChangeValues}
            className="Inputs__input"
          />
        </label>

        <button type="submit"></button>
     </div>
    </form>
  );
}