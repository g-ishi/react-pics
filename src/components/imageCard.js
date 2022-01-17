import React from "react";

class ImageCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      spans: 0
    }
    this.imageRef = React.createRef();
  }

  componentDidMount() {
    // imageのロードが終わるまで待つ。バニラJS
    this.imageRef.current.addEventListener('load', this.setSpans);
  }

  // thisContextをこのクラスインスタンス自身にセットするために、Lambda関数で定義する
  setSpans = () => {
    const height = this.imageRef.current.clientHeight
    const spans = Math.ceil(height / 10);

    this.setState({ spans })

  }

  render() {
    // classコンポーネントでpropsのでストラクチャをするときはrenderメソッド内で
    // やらないとレンダリング時に実行されなくなるからだめ。
    const { description, id, urls } = this.props.image

    return (
      <div key={id} style={{ gridRowEnd: `span ${this.state.spans}` }}>
        <img
          ref={this.imageRef}
          alt={description}
          src={urls.regular}
        />
      </div>
    )
  }
}

export default ImageCard;