import React from "react";

export default class GifSearch extends React.Component {
  state = {
    inputValue: "",
    gifs: [],
  };

  componentDidMount() {
    this.fetchGifs();
  }

  fetchGifs = async () => {
    const APIKEY = "2AxM18wOUNJTxhKXmOrO4dSreLQIkDkP";
    try {
      const res = await fetch(
       ` https://api.giphy.com/v1/gifs/trending?api_key=${APIKEY}`
      );
      if (!res.ok) {
        throw new Error(`HTTP error, status: ${res.status}`);
      }
      const data = await res.json();
      this.setState({ gifs: data.data });
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    const { inputValue, gifs } = this.state;
    return (
      <>
        <div>
          <h1>Gif Search Component</h1>
          <input type="search" value={inputValue} />
          <button>Search</button>
        </div>
        <div>
          {gifs.map((gif) => (
            <img
              src={gif.images.fixed_height_downsampled.url}
              alt={gif.title}
              key={gif.id}
            />
          ))}
        </div>
      </>
    );
  }
}
