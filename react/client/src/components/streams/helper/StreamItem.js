import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class StreamItem extends Component {
  renderSomething = () => true

  render() {
    const { stream, isAdmin } = this.props;
    return (
      <div className="item">
        {isAdmin && (
          <div className="right floated content">
            <Link to="/streams/edit" className="ui button primary">
              Edit
            </Link>
            <Link to="/streams/edit" className="ui button negative">
              Delete
            </Link>
          </div>
        )}
        <i className="large middle aligned icon camera" />
        <div className="content">
          {stream.title}
          <div className="description">
            {stream.description}
          </div>
        </div>
      </div>
    );
  }
}

StreamItem.propTypes = {
  isAdmin: PropTypes.bool.isRequired,
  stream: PropTypes.objectOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ])).isRequired,
};

export default StreamItem;
