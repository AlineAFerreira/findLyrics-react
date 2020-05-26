import React from 'react';

export default (props) => {
  return (
    <input type="number" value={props.passo}  onChange={e => props.update(+e.target.value)}/>
  );
}

