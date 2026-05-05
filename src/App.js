import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Data from './Components/Data';
import MainCard from './Components/MainCard';

function App() {
  const Elements=Data.map(mock=>{
    const [date,hour]=mock.created_at.replace("Z","").split("T")
   let duration=0;
 return (
      <MainCard
      direction={mock.direction}
      from={mock.from}
      to={mock.to}
      date={date}
      hour={hour}
      duration={mock.duration}
      status={mock.call_type}


      
      />
    )
  })
  
  return (
    <div className="App">
<Header />
{Elements}
    </div>
  );
}

export default App;
