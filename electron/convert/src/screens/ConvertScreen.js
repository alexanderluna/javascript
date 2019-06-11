import React from 'react';
import { connect } from 'react-redux';
import VideoList from '../components/VideoList';
import ConvertPanel from '../components/ConvertPanel';
import VideoSelectScreen from './VideoSelectScreen';
import { setFormat, removeVideo, showInFolder } from '../actions';

const ConvertScreen = (props) => (
  <div className="container">
    <VideoSelectScreen small />
    <VideoList
      videos={props.videos}
      onFormatChange={props.setFormat}
      onFolderOpen={props.showInFolder}
      removeVideo={props.removeVideo}

    />
    <ConvertPanel />
  </div>
);

const mapStateToProps = ({ videos }) => ({ videos });

export default connect(
  mapStateToProps,
  { setFormat, removeVideo, showInFolder },
)(ConvertScreen);
