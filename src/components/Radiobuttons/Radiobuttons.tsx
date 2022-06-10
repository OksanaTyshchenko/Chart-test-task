import React from 'react';
import { SetState } from '../../types';
import './Radiobuttons.scss';

type Props = {
  setTypeChart: SetState<string>;
  typeChart: string,
};

export const Radiobuttons: React.FC<Props> = React.memo(({ typeChart, setTypeChart }) => {
  return (
    <div className="Radiobuttons__wrapper">
    <label className="Radiobuttons__label">
      <input
        type="radio"
        value="bar"
        onChange={(event) => setTypeChart(event.target.value)}
        className='Radiobuttons__input'
        checked={typeChart === "bar"}
      />
      Bar Chart
    </label>

    <label className="Radiobuttons__label">
      <input
        type="radio"
        value="line"
        onChange={(event) => setTypeChart(event.target.value)}
        className='Radiobuttons__input'
        checked={typeChart === "line"}
      />
      Line Chart
    </label>
    </div>
  );
});