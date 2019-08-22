import React, { Component } from "react";
import { connect } from "react-redux";

class SinglePhoto extends Component {
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
    const { match } = this.props;
    var styles = {
      single_photo: {
        display: "flex",
        margin: "0 30px",
        paddingTop: "80px"
      },
      photo_url: {
        padding: "20px"
      },
      photo_description: {
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "20px"
      },
      btn_add_photo: {
        cursor: "pointer",
        border: "2px solid #2288b9",
        padding: "5px 15px",
        fontFamily: "lato,sans-serif",
        color: "#2288b9",
        fontWeight: "600"
      }
    };
    return (
      <div>
        {this.state.photos
          .filter(el => el.id.toString() === match.params.id.toString())
          .map(el => (
            <div style={styles.single_photo}>
              <img src={el.url} style={styles.photo_url} />
              <div style={styles.photo_description}>
                <h1>{el.title}</h1>
                <img src={el.thumbnailUrl} />
                <span
                  style={styles.btn_add_photo}
                  onClick={() => {
                    this.props.history.push("/wishlist");
                    this.props.addPhoto(el);
                  }}
                >
                  Add to wishlist
                </span>
              </div>
            </div>
          ))}
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addPhoto: photo => {
      dispatch({
        type: "ADD_PHOTO",
        value: photo
      });
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(SinglePhoto);
