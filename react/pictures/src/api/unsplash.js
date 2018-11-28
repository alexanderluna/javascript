import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: { Authorization: 'Client-ID dc0ee898a7b460ab007ce1a3878f8139e1b9cf81dc068627c41abbee58a95104' }
})