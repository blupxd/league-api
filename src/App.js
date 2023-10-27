import {Route,Routes} from 'react-router-dom'
import { SummonerProfile } from './components/SummonerProfile';
import Navbar from './components/Navbar';
import Home from './components/Home';
import ScrollToTopButton from './components/ScrollToTopButton';
import Info from './components/Info';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Info />
      <ScrollToTopButton />
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/summoner/:id' element={<SummonerProfile />} />
       </Routes>
    </div>
  );
}

export default App;
