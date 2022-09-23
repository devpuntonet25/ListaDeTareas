import './App.css';
import Logo from './components/Logo';
import freeCodeCampLogo from './images/freecodecamp-logo.png';
import ListaDeTareas from './components/ListaDeTareas';

function App() {
  return (
    <main className='todolist'>
      <div className='todolist__container container'>
        <Logo logoSrc={freeCodeCampLogo} />
        <section className='todolist__listatareas'>
          <h1 className='todolist__title'>Mis tareas</h1>
            <ListaDeTareas/>
        </section>
      </div>
    </main>
  );
}

export default App;
