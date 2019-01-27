import React from 'react';

const Rider = (props) => {
  return(
    <div>
      <img src={props.image} className="m-1 hg-120 hg-sm-180 rounded" alt={props.name} />
        <p className="pt-2 txt-25 font-weight-bold m-0">{props.name}</p>
        <p className="pb-2 txt-13 pb-4">{props.city}</p>
    </div>
  );
}

export default Rider;