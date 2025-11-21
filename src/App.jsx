import {TupaText, Button, Gridfdfdf} from './Testovie.jsx'
import Knopka from './Button.jsx'
 import './App.css'

function App() {

  return (
    <div 
      style={{
      borderTop: '5px double #ff0000',
      borderRight: '5px double #00ff00', 
      borderBottom: '5px double #0000ff',
      borderLeft: '5px double #ffff00'
      }}
    >
      <TupaText></TupaText>
      <Knopka></Knopka>

      <Button buttonText="Свой текст"></Button>

      <Gridfdfdf>
        <div>lorem123</div>
        <div>lorem456</div>
      </Gridfdfdf>
       <Gridfdfdf>
        <div>lorem789</div>
        <div>lorem000</div>
      </Gridfdfdf>
    </div>
  
    
  )
}
export default App
