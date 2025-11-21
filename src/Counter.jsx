import React, { useState } from 'react';
import { Button, Statistic, Space } from 'antd';

const Counter = () => {
  const [shitai, setRolov] = useState(0);

  return (
    <div>
      <Button onClick={() => setRolov(shitai - 1)}>-</Button>
      <Statistic value={shitai} />
      <Button onClick={() => setRolov(shitai + 1)}>+</Button>
    </div>
  );
};
export default Counter;