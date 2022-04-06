import React from 'react';

export default class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <div className="header-content">
          <div className="header-content-inner">
            <h1>{this.props.title}</h1>
          </div>
        </div>
      </div>
    );
  }
}
