import React from "react";

class AlbumCreateForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      artist: "",
      year: "",
      price: "",
      description: "",
      credit: "",
      photoUrl: null,
    };
  }

  render() {
    return (
      <div className="caf-outer">
        <div className="caf-inner">
          <div className="caf-box">
            <form className="caf">
              <div className="caf-left"></div>
              <div className="caf-right">
                <div className="caf-title-box">
                  <input type="text" className="caf-title" />
                </div>
                <div className="caf-year-box">
                  <label htmlFor="caf-year">release year</label>
                  <input type="text" className="caf-year" />
                </div>
                <input type="text" />
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default AlbumCreateForm;
