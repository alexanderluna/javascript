import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class StreamItem extends Component {
  get editLink() {
    const { stream } = this.props;
    return `/streams/edit/${stream.id}`;
  }

  get deleteLink() {
    const { stream } = this.props;
    return `/streams/delete/${stream.id}`;
  }

  get showLink() {
    const { stream } = this.props;
    return `/streams/${stream.id}`;
  }

  render() {
    const { stream, canEdit } = this.props;
    return (
      <div className="item">
        {canEdit && (
          <div className="right floated content">
            <Link to={this.editLink} className="ui button primary">
              Edit
            </Link>
            <Link to={this.deleteLink} className="ui button negative">
              Delete
            </Link>
          </div>
        )}
        <i className="large middle aligned icon camera" />
        <div className="content">
          <Link to={this.showLink} className="header">
            {stream.title}
          </Link>
          <div className="description">
            {stream.description}
          </div>
        </div>
      </div>
    );
  }
}

StreamItem.propTypes = {
  canEdit: PropTypes.bool.isRequired,
  stream: PropTypes.objectOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ])).isRequired,
};

export default StreamItem;
