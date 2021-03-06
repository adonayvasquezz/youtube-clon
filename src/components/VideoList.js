import { Grid } from '@material-ui/core';
import VideoItem from './VideoItem'

const VideoList = ({ videos, onVideoSelect }) => {
    const listOfVideos = videos.map((video, id) => <VideoItem onVideoSelect={onVideoSelect} key={id} video={video} />);
   
    return (
        <Grid container>
            {listOfVideos}
        </Grid>
        
    );
}

export default VideoList
