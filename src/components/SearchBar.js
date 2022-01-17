import React from "react";

export class SearchBar extends React.Component {
  state = {
    term: ''
  }

  // イベント関数の引数に渡されるのは、一般的なjsのイベントオブジェクト
  // イベント関数の名前は、「on<htmlタグ名><イベント名>」でつけるのが、コミュニティの慣習になっている。
  onInputChange(event) {
    this.setState({ term: event.target.value })
  }

  onFormSubmit = e => {
    // フォームにデフォルトの動作をさせないようにする。
    // フォームのデフォルトの動作では、Enterを押されたときに、input内のvalueをバックエンドサーバに送り、ページをリフレッシュする。
    e.preventDefault();

    // 子コンポーネント側の値を親コンポーネント側で処理したいときには、コールバックを使用する。
    this.props.onSubmit(this.state.term)
  }


  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label>Image Search</label>
            {/* イベントハンドラー系のプロパティは特殊な名前がついている */}
            <input type="text"
              value={this.state.term}
              // render内にアロー関数を埋め込むことで、thisContextをインスタンス自身として使うこともできる。
              onChange={(e) => this.setState({ term: e.target.value })} />
          </div>
        </form>
      </div>
    )
  }
}