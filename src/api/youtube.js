import axios from 'axios';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: 'AIzaSyBX2Aup4U8aak6nB1rw2Yk_FReEa_Fe1nE'
    }
});