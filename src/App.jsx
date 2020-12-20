import React, {useState, useEffect} from 'react';
import './App.css';
import InputBar from './components/InputBar';
import Weather from './components/Weather';

// API Key = 59d4ab2b03de720047ea4fe2967f263b
const API_URL = 'http://api.openweathermap.org/data/2.5/weather?q=rabat&appid=59d4ab2b03de720047ea4fe2967f263b&lang=ar';

export default function App() {

  const [city_name, setCITY] = useState("");
  const [lang_selected, setLANG] = useState("en");
  const [temp_type, setTEMP] = useState("c");
  const [data, setDATA] = useState(undefined);
  const [isLoading, setLoad] = useState(false);

  useEffect(() => {
    city_name === "" ? getDATA(API_URL) : getDATA(`http://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=59d4ab2b03de720047ea4fe2967f263b&lang=${lang_selected}`);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading])
  const getDATA = api => {
    city_name === '' ?
    setDATA(undefined) 
    :
    fetch(api)
    .then(res => res.json())
    .then(resp_data => {
      //console.log(resp_data);
      setLoad(false);
      setDATA(resp_data);
    });
  }

  const cityChange = e => {
    e.target.value === '' ? setLoad(false) : setLoad(true);
    setCITY(e.target.value);
  }

  const selectLANG = e => {
    setLoad(true);
    setLANG(e.target.value);
  }

  const selectTEMP = e => {
    setTEMP(e.target.value)
  }

  const onSubmit = e => {
    e.preventDefault();
  }
  
//console.log(data);
console.log(isLoading)
  return (
    <div className="App">
      <InputBar submit={onSubmit} cityChange={cityChange} cityName={city_name} setLang={selectLANG} setTemp={selectTEMP}/>
      <div className="content">
        {
          isLoading ?
            <h1>Loading...</h1>
          :
            data === undefined || data === {} ?
              <h1>Enter city name !</h1>
            :
              data.cod === 200 ?
                <Weather data={data} temp_type={temp_type}/>
              :
                <h1>{data.message}</h1>
        }
      </div>
    </div>
  )
}
