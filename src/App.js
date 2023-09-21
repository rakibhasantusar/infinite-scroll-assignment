import { useEffect, useState } from 'react';
import CardDetail from './components/CardDetail.jsx';
import SearchForm from './components/SearchForm.jsx';
import Loader from './components/Loader.jsx';

// welcome to my API PUNK app .....

const API_URL = `https://api.punkapi.com/v2/beers`; // url for beer api

function App() {
  const [data, setData] = useState([])
  const [page, setPage] = useState(1)
  const [message, SetErrorMessage] = useState('')
  const [loading, setLoading] = useState(false)

  //function for data loading for per page
  const beerData = async () => {
    const res = await fetch(`${API_URL}?page=${page}&per_page=10`)
    const newData = await res.json()
    setData([...data, ...newData])
  }

  /* for all beer data load */
  useEffect(() => {
    beerData()
    console.log(page)
  }, [page])


  /* useEffect for window event listener */
  useEffect(() => {
    window.addEventListener('scroll', handleInfiniteScroll)
    return () => window.removeEventListener('scroll', handleInfiniteScroll)

  }, [])

  const handleInfiniteScroll = () => {
    const totalHeight = window.innerHeight + document.documentElement.scrollTop; // screen total height
    const scrollHeight = document.documentElement.scrollHeight; //scrollbar height
    try {
      if (
        totalHeight === scrollHeight
      ) {
        setLoading(true)
        setPage(prev => prev + 1)
      }

    }
    catch (e) {
      console.error(e);
      SetErrorMessage(e)
    }

  }

  /* This function for name search with param api api */
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


  return (
    <div className="App container">
      {/* This is for search and random beer button */}
      <div className='container'>
        <SearchForm
          handleSearchChange={handleSearchChange}
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

        {/* Loader here */}
        <div className='d-flex justify-content-center'>
          {loading &&
            <Loader></Loader>
          }
        </div>
        {/* error message for user */}
        <p className='text-danger'>{message}</p>
      </div>
    </div>
  );
}

export default App;
