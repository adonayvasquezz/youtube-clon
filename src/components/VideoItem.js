import { Paper, Typography, Grid } from '@material-ui/core';

const VideoItem = ({ video }) => {
    return (
        <Grid item xs={12}>
            <Paper style={{ display:'flex', alignItems:'center'}}>
                <img style={{ marginRight:'1.5rem' }} alt='thumbnail' src={video.snippet.thumbnails.medium.url} />
                <Typography variant="subtitle1"><b>{video.snippet.title}</b></Typography>
            </Paper>
        </Grid>
    )
}

export default VideoItem;
