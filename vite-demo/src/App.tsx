import React, { useState } from "react";


export default function App () {
  const [state, setState] = useState(0);
  return (
    <div onClick={ () => setState(state + 2)}>{state}hello this my word</div>
  )
};