import {
  ADD_VIDEO,
  ADD_VIDEOS,
  REMOVE_VIDEO,
  REMOVE_ALL_VIDEOS,
  VIDEO_PROGRESS,
  VIDEO_COMPLETE,
} from './types';

const { ipcRenderer } = window.require('electron');

export const addVideos = (videos) => (dispatch) => {
  ipcRenderer.send('videosAdded', videos);
  ipcRenderer.on('metadataComplete', (event, results) => {
    dispatch({ type: ADD_VIDEOS, payload: results });
  });
};

export const convertVideos = () => (dispatch, getState) => {
  ipcRenderer.send('conversionStart', getState().videos);
  ipcRenderer.on('conversionEnd', (event, { video, outputPath }) => {
    dispatch({ type: VIDEO_COMPLETE, payload: { ...video, outputPath } });
  });
  ipcRenderer.on('conversionProgress', (event, { video, timemark }) => {
    dispatch({ type: VIDEO_PROGRESS, payload: { ...video, timemark } });
  });
};

export const showInFolder = (outputPath) => () => {
  ipcRenderer.send('folderOpen', outputPath);
};

export const addVideo = (video) => ({
  type: ADD_VIDEO,
  payload: { ...video },
});

export const setFormat = (video, format) => ({
  type: ADD_VIDEO,
  payload: { ...video, format, err: '' },
});

export const removeVideo = (video) => ({
  type: REMOVE_VIDEO,
  payload: video,
});

export const removeAllVideos = () => ({
  type: REMOVE_ALL_VIDEOS,
});
