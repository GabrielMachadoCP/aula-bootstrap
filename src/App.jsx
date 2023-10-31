import './App.css'
import Aviso from './components/Aviso'
import Cartao from './components/Cartao'
import Lista from './components/Lista'
import Menu from './components/Menu'
import Slides from './components/Slides'

function App() {

  return (
    <>
      <Menu/>
      <h1>Aula - Bootstrap</h1>
      <div className="row">
        <div className="col-4">Col-4</div>
        <div className="col-4">Col-4</div>
        <div className="col-4">Col-4</div>
      </div>
      
      <div>
        <div className='bg-primary text-white p-2'>COLOR PRIMARY</div>
        <div className='bg-secondary text-warning p-2'>COLOR SECONDARY</div>
        <div className='bg-success p-2'>COLOR SUCCESS</div>
        <div className='bg-warning p-2'>COLOR WARNING</div>
        <div className='bg-danger p-2'>COLOR DANGER</div>
      </div>
      
      <button className='btn btn-primary'>CLIQUE AQUI</button>
      <button className='btn btn-success btn-sm'>CLIQUE AQUI</button>
      <button className='btn btn-danger btn-lg'>CLIQUE AQUI</button>

      <Slides/>
      <Lista/>

      <div className="row d-flex justify-content-evenly m-3">
        <Cartao/>
        <Cartao/>
        <Cartao/>
      </div>
      
      <Aviso/>

    </>
  )
}

export default App