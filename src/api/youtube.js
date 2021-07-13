import axios from 'axios';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 10,
        key: 'AIzaSyATm9kbnKXq49glYv5_t6L6grTTuIkleDI'
    }
});