import React, { Component } from "react";
import { Link } from "react-router-dom";

class Photos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: []
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then(response => response.json())
      .then(json => {
        this.setState({
          photos: json
        });
      });
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.photos) {
      this.setState({ photos: nextProps.photos });
    }
  }

  render() {
    var styles = {
      photos_album: {
        display: "flex",
        paddingTop: "80px",
        flexWrap: "wrap",
        justifyContent: "space-evenly"
      }
    };
    const { match } = this.props;
    return (
      <div style={styles.photos_album}>
        {this.state.photos
          .filter(el => el.albumId.toString() === match.params.id.toString())
          .map(el => (
            <Link to={`/singlephoto/${el.id}`}>
              <img src={el.thumbnailUrl} />
            </Link>
          ))}
      </div>
    );
  }
}
export default Photos;
