import './_app.scss';
import MOCK_API_RESPONSE from './mockApiResponse.js';
import VestNav from './components/VestNav/VestNav';
import _ from 'lodash';

const sortResponseByDate = (response) => {
  const sortedResponse = response.map((award) => ({
    ...award,
    vesting_schedule: _.sortBy(award.vesting_schedule, [(obj) => new Date(obj.vesting_date)])
  }));
  return sortedResponse;
}

function App() {
  return (
    <div className="App" data-testid="app">
      <VestNav data={sortResponseByDate(MOCK_API_RESPONSE)} />
    </div>
  );
}

export default App;
