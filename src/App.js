import { useEffect, useState } from 'react';
import CardDetail from './components/CardDetail.jsx';
import SearchForm from './components/SearchForm.jsx';

const API_URL = "https://api.punkapi.com/v2/beers"; // url for beer api

function App() {
  const [data, setData] = useState([])

  /* for all beer data load */
  useEffect(() => {
    fetch(API_URL)
      .then(res => res.json())
      .then(data => {
        setData(data)
      })
  }, [])

  /* This functio for name search with param api api */
  const beerFilterFetch = async (beerParam) => {
    await fetch(`${API_URL}?beer_name=${beerParam}`)
      .then((res) => res.json())
      .then((jsonResponse) => {
        console.log(jsonResponse.length);
        if (jsonResponse.length) {
          setData(jsonResponse);
        }
      });
  };


  const handleSearchChange = (event) => {
    event.preventDefault();
    const InputValue = event.target.value.toLowerCase();
    beerFilterFetch(InputValue)
  };
  /* This functio for random button with random api */
  const handleSubmit = async () => {
    await fetch(`${API_URL}/random`)
      .then((res) => res.json())
      .then((jsonResponse) => {
        console.log(jsonResponse.length);
        if (jsonResponse.length) {
          setData(jsonResponse);
        }
      });
  };

  return (
    <div className="App container">
      {/* This is for search and random beer button */}
      <div className='container'>
        <SearchForm
          handleSearchChange={handleSearchChange}
          handleSubmit={handleSubmit}
        ></SearchForm>
      </div>

      {/* This is for all card */}
      <div className=" row d-flex justify-content-center">
        {
          data.map(detail =>
            <CardDetail
              key={detail.id}
              detail={detail}
            ></CardDetail>
          )
        }
      </div>

    </div>
  );
}

export default App;
