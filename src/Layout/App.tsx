import './index.css';
import Button from "../component/Button";

function App() {
  return (
    <>
      <img src='../../src/img/icon-pool.svg'/>
       <h3>Строим прекрасные пруды и водоемы для Вас</h3>
        <h2 className='numberText'>+7(903)740-58-58</h2>
        <p>akvagard80@gmail.com</p>
        <Button view='main'>Написать в WhatsApp</Button>
        <Button view='secondary'>Заказать звонок</Button>
    </>
  )
}

export default App



