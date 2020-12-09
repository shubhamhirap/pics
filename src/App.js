import { Component } from "react";
import unsplash from "./api/unsplash";
import "./App.css";
import SearchBar from "./components/SearchBar";

class App extends Component {
  state = { images: [] };

  onSearchSubmit = (term) => {
    unsplash
      .get("/search/photos", {
        params: { query: term },
      })
      .then((res) => {
        console.log(res.data.results);
        this.setState({ images: res.data.results });
      });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "1rem" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        Found: {this.state.images.length} images
      </div>
    );
  }
}

export default App;
