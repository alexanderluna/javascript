import axios from 'axios';

const KEY = 'AIzaSyC0CBCveJ50H-lx6QC6k8dxEA1axktRpbI';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY,
    }
})