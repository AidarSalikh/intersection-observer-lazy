import "./App.css";
import Photo from "./components/Photo";
import photos from "./data/photos.json";

function App() {
  return (
    <div className="App">
      <div className="photos">
        {photos.map((url, i) => (
          <Photo key={i} imgUrl={url} />
        ))}
      </div>
    </div>
  );
}

export default App;
