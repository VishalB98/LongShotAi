import './App.css';
import store from './redux/store';
import { fetchJsonData, setKeywordResult, setIntentMap, setKeywordDifficulty, setSearchFilter} from './redux/action';
import { Provider } from 'react-redux';
import keywordData from './data/keywordData.json';
import { useEffect } from 'react';
import intentMap from './data/intentMap';
import KeywordHeader from './components/KeywordHeader';
import KeywordMetrics from './components/KeywordMetrics';

function App() {
  useEffect(() => {
    (async () => {
      await store.dispatch(fetchJsonData(keywordData)) 
      await store.dispatch(setKeywordResult(store.getState().apiJsonData["raw_broadmatch_data"]))
      await store.dispatch(setIntentMap(intentMap[store.getState().keywordResult[0][2]]))
      await store.dispatch(setKeywordDifficulty(store.getState().keywordResult[0][7]))
      await store.dispatch(setSearchFilter("raw_broadmatch_data"))
    })();
  }, []);


  
  return (
    <Provider store={store}>
      <div className="App bg-slate-100">
        <KeywordHeader />
        <KeywordMetrics/>
      </div>
    </Provider>
  );
}

export default App;
