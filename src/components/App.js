import React from "react";
import unsplash from "../api/unsplash";
import { SearchBar } from "./SearchBar";
import ImageList from "./imageList";

export class App extends React.Component {
  // 実際に入る値と同じ型で初期化しておくのが一番いい。
  state = {
    images: []
  }

  // アロー関数にして、thisContextを自身のインスタンスにしないと、子コンポーネント側で呼び出したときに、
  // 親コンポーネント側のstateにデータをセットできない。(thisが呼び出し先のオブジェクトに依存するから)
  onSearchBarSubmit = async (term) => {
    // paramsでクエリパラメータを指定することもできる。
    const response = await unsplash.get("/search/photos", {
      params: {
        query: term
      }
    })
    this.setState({
      images: response.data.results
    })
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchBarSubmit} />
        <div>Found: {this.state.images.length} images</div>
        <ImageList images={this.state.images} />
      </div>
    )
  }
}
