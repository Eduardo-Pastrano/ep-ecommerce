import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';
import ItemCount from './components/ItemCount';
import './App.css';

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting="Welcome!">
        <ItemCount stock={20} />
      </ItemListContainer>
    </>
  );
}

export default App;
