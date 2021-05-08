import './firebase';
import './App.css';
import Links from './components/Links'
import 'bootswatch/dist/lux/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <h1 className="text-center p-4">Welcome</h1>
      <hr />
      <div className="container"> 
        <div className="row">
          <div className="col-md-12">
            <Links></Links>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
