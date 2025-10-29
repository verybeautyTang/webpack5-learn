import React, { useState } from "react";
import './yami'


export default function App () {
  const [state, setState] = useState(0);
  return (
    <div onClick={ () => setState(state + 2)}>{state}hello this my word</div>
  )
};