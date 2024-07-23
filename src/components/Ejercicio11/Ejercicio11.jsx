import { useEffect, useState } from "react";
import SearchForm from "./SearchForm";
import CardView from "./Card/CardView";

const API_KEY = import.meta.env.VITE_API_KEY_EJERCICIO_11;

const Ejercicio11 = () => {
  const [news, setNews] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [searchTriggered, setSearchTriggered] = useState(false);

  useEffect(() => {
    const fetchNewsAndCategories = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          `https://newsdata.io/api/1/latest?apikey=${API_KEY}`
        );
        if (!response.ok) {
          throw new Error("Error al obtener noticias");
        }
        const data = await response.json();
        console.log("Response from API:", data);

        if (data.results) {
          setNews(data.results);

          const categories = data.results.map((article) => {
            console.log("Article:", article); // Debugging line
            return article.category[0] || "general"; // Get the first category or use default
          });

          const uniqueCategories = Array.from(new Set(categories)).map(
            (category) => ({
              value: category,
              label: category.charAt(0).toUpperCase() + category.slice(1),
            })
          );

          setCategories(uniqueCategories);
          setSelectedCategory(uniqueCategories[0].value);
        } else {
          setNews([]);
          setCategories([]);
        }
      } catch (error) {
        console.error("Error al obtener noticias:", error);
      }
      setIsLoading(false);
    };
    fetchNewsAndCategories();
  }, []);

  useEffect(() => {
    if (searchTriggered) {
      const fetchNewsByCategory = async () => {
        setIsLoading(true);
        try {
          const response = await fetch(
            `https://newsdata.io/api/1/latest?category=${selectedCategory}&apikey=${API_KEY}`
          );
          const data = await response.json();
          console.log("Response from API:", data);

          if (data.results) {
            setNews(data.results);
          } else {
            setNews([]);
          }
        } catch (error) {
          alert("Ocurrió un error al buscar las noticias");
        }
        setIsLoading(false);
      };

      if (selectedCategory) {
        fetchNewsByCategory();
      }
      setSearchTriggered(false); // Reinicia el estado de búsqueda
    }
  }, [selectedCategory, searchTriggered]);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const handleSearch = () => {
    setSearchTriggered(true);
  };

  return (
    <>
      <h1 className="text-center border border-dark p-3">Noticias</h1>
      <SearchForm
        categories={categories}
        isLoading={isLoading}
        handleCategoryChange={handleCategoryChange}
        handleSearch={handleSearch}
      />
      <CardView news={news} isLoading={isLoading} />
    </>
  );
};
export default Ejercicio11;
