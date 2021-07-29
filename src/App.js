import { useState, useEffect } from "react";
import ImageCard from "./components/ImageCard";
import SearchForm from "./components/SearchForm";

function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch(
      `https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${searchTerm}&image_type=photo&pretty=true`
    )
      .then((res) => res.json())
      .then((data) => {
        setImages(data.hits);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, [searchTerm]);

  const handleSearch = (value) => {
    setSearchTerm(value);
  };

  return (
    <div className="container mx-auto">
      <SearchForm handleSearch={handleSearch} />

      {!isLoading && images.length === 0 && (
        <h3 className="text-4xl text-center mx-auto mt-32">
          Images not found...
        </h3>
      )}

      {isLoading ? (
        <h3 className="text-4xl text-center mx-auto mt-32">Loading...</h3>
      ) : (
        <div className="grid grid-cols-4 gap-4 sm:flex md:flex-wrap justify-center items-center">
          {images.map((image) => (
            <ImageCard image={image} key={image.id} />
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
