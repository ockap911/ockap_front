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

    return(
    <div>
      <div onClick={plus} >+Цифорка</div>
      <Statistic value={count} />
      <Button onClick={minus} >-Цифорка</Button>
    </div>
  );
};
export default Knopka;