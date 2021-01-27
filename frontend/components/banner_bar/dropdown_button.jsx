import React from "react";
import DropdownContent from "./dropdown_content";

class DropdownButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
    };
    this.onOff = this.onOff.bind(this);
  }
  onOff(e) {
    const flip = !this.state.active;
    this.setState({ active: flip });
  }
  render() {
    return (
      <div>
        <button onFocus={this.onOff} onBlur={this.onOff} className="dropdown">
          {this.state.active ? (
            <DropdownContent currentUser={this.props.currentUser} />
          ) : null}
        </button>
      </div>
    );
  }
}

export default DropdownButton;
