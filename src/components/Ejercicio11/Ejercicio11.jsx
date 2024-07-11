import { useEffect, useState } from "react";
import SearchForm from "./SearchForm";
import CardView from "./Card/CardView";

const Ejercicio11 = () => {
  const [news, setNews] = useState([]);
  

  const fetchNews = async () => {
    try {
      const res = await fetch("https://newsdata.io/api/1/latest?apikey=pub_48328b5c0fa6813972291cb06728dd0776b4f&q=pizza");
      const data = await res.json();

      if (Array.isArray(data.results)) {
        setNews(data.results);
      } else {
        console.error("Expected an array in data.results but got:", data.results);
        setNews([]);
      }
    } catch (error) {
      console.error(error);
      setNews([]);
    }
  };


  useEffect(() => {
    fetchNews();
  }, []);

  return (
    
    <>
    <h1 className="text-center border border-dark p-3">Noticias</h1>
    <SearchForm />
    <CardView news={news}/> 
    </>

  );
};
export default Ejercicio11;
