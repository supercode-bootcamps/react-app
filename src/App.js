import './App.css';
import MyHeader from './components/Header';
import MyProducts from './components/Products';
import MySection from './components/Section';
import Welcome from './components/Welcome';


function App()
{
  const log = () =>
  {
    console.log('Hello World');
  }
  return (
    <div className="App">
      <MyHeader></MyHeader>
      <Welcome name='Super-Code' age='33'>
      </Welcome>
      <button onClick={log}>Click Me!</button>
      <MySection></MySection>
      <MyProducts></MyProducts>
    </div>
  );
}

export default App;
