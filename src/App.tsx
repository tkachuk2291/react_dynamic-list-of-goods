import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { get5First, getAll, getRedGoods } from './api/goods';
import { Good } from './types/Good';



export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={() => getAll().then(allGoods => setGoods(allGoods))}
      >
        Load all goods
      </button>

      <button type="button"
              data-cy= "first-five-button"
              onClick={() => get5First().then(first5Good => setGoods(first5Good))}>Load 5 first goods
      </button>

      <button type="button"
              data-cy="red-button"
              onClick={
                () =>getRedGoods().then(RedGoods => setGoods((RedGoods)))}>Load 5 first goods
      </button>


      <GoodsList goods={goods} />


    </div>
  );
};
