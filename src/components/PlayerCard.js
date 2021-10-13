import React from 'react';

const PlayerCard = () => {
  return (
    <form>
      <div>
        <label>Player One: </label>
        <input name="playerOne" type="text"></input>
      </div>
      <div>
        <label>Player Two: </label>
        <input name="playerTwo" type="text"></input>
      </div>
    </form>
  );
};
