import React, { useState } from 'react';
import { Button, Statistic } from 'antd';
function Knopka(){
  const [count, setRolov] = useState(0);

  function plus() {
    setRolov(count + 1)
  }
  function minus() {
    setRolov(count-1)
  }

  function Vrema() {
    const timeValue = new Date();

    return timeValue.getHours() + ' : ' + timeValue.getMinutes() + ' : ' + timeValue.getSeconds(); 
  }

    return(
    <div>
      <div onClick={plus} >+Цифорка</div>
      <Statistic value={count} />
      <Button onClick={minus} >-Цифорка</Button>

      <div>{formattedTime}</div>

    </div>
  );
};
export default Knopka;


<div>{Rolov.map((item, index) => {
        return <div key={index}>{item}</div>
      })}</div>