import React, { useState } from 'react';
import { Button } from 'antd';

function Vrema() {

  let [Rolov, setRolov] = useState();

  function stoi(){
    
  const timeValue = new Date();
  const pokaz_vrema = timeValue.getHours() + ' : ' + timeValue.getMinutes() + ' : ' + timeValue.getSeconds();
  setRolov(pokaz_vrema);

  }
    return (
    <div>
      <Button onClick={stoi} >Сколько времени, дАрАгой</Button>
      <div>{Rolov}</div>
    </div>

    )
  };


  export default Vrema;