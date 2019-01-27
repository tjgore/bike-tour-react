import React from 'react';

const Image = (props) => {
  return (
    <div>
      <img src={props.image} className="m-1 hg-120 hg-sm-200" alt={props.alt} />
    </div>
  );
}

export default Image;