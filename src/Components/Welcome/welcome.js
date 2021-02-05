import React from 'react';
function Welcome(props) {
  let name = props.match.params.name || props.name;
  return (
    <div>
      <h1>Welcome Back {name}</h1>
    </div>
  );
}
export default Welcome;
