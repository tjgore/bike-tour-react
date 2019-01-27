import React from 'react';

const Icon = (props) => {
  let styles = { ...props.style, position: "absolute" }

  return(
    <div><i className="fas fa-bicycle fa-3x mb-3" style={styles}></i></div>
  );
}

export default Icon;