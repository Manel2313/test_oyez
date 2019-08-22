import React, { Component } from "react";
import { connect } from "react-redux";

class Wishlist extends Component {
  render() {
    var styles = {
      wishlist: {
        display: "flex",
        margin: "0 30px",
        paddingTop: "80px",
        flexWrap: "wrap"
      },
      wishlist_item: {
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        border: "1px solid #eee",
        padding: "20px",
        marginBottom: "20px"
      },
      photo_title: {
        fontFamily: "lato,sans-serif",
        fontSize: "20px",
        color: "#3c3c3c"
      }
    };
    return (
      <div style={styles.wishlist}>
        {this.props.wishlist.map(el => {
          return (
            <div style={styles.wishlist_item}>
              <p style={styles.photo_title}>{el.title}</p>
              <img src={el.thumbnailUrl} />
            </div>
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    wishlist: state.addPhotoToWishlist
  };
};

export default connect(
  mapStateToProps,
  null
)(Wishlist);
