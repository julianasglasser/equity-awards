import './App.css';
import MOCK_API_RESPONSE from './mockApiResponse.js';
import VestNav from './components/VestNav/VestNav';

function App() {
  return (
    <div className="App">
      <VestNav data={MOCK_API_RESPONSE} />
    </div>
  );
}

export default App;
