import React, { Component } from "react";
import "./PageLayout.scss";
import PropTypes from "prop-types";

class PageLayout extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    title: PropTypes.string.isRequired,
  };

  render() {
    return (
      <div className="PageLayout">
        <h1>{this.props.title}</h1>
        {this.props.children}
      </div>
    );
  }
}

export default PageLayout;
