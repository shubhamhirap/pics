import { Component } from "react";
import unsplash from "./api/unsplash";
import "./App.css";
import ImageList from "./components/ImageList";
import SearchBar from "./components/SearchBar";

class App extends Component {
  state = { images: [] };

  onSearchSubmit = (term) => {
    unsplash
      .get("/search/photos", {
        params: { query: term },
      })
      .then((res) => {
        this.setState({ images: res.data.results });
      });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "1rem" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
