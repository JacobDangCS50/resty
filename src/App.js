import './App.scss';

// Let's talk about using index.js and some other name in the component folder
// There's pros and cons for each way of doing this ...
import Header from './components/header';
import Footer from './components/footer';
import Form from './components/form';
import Results from './components/results';
import { useEffect, useState } from 'react';
import axios from 'axios';

const App = () => {
  const [data, setData] = useState(null);
  const [requestParams, setRequestParams] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    console.log('Testing useEffect')
  }, []);

  useEffect(() => {
    async function callApi(url, method = 'GET') {
      let newData = await axios({
        method: method,
        url: url,
      })
      setData(newData.data.results);
      setLoading(false);
      setRequestParams(requestParams);
    }
    callApi();
  }, [requestParams]);

  return (
    <>
      <Header />
      <div>Request Method: {requestParams.method}</div>
      <div>URL: {requestParams.url}</div>
      <Form handleApiCall={requestParams} setLoading={setLoading} />
      <Results data={data} loading={loading} />
      <Footer />
    </>
  );
}

export default App;