import { Paper, Typography, Grid } from '@material-ui/core';

const VideoItem = ({ video, onVideoSelect }) => {
    const css = {
        paper:{
            display:'flex', 
            alignItems:'flex-start', 
            cursor:'pointer'
        },
        videoImg: {
            width:'50%',
            marginTop:'0.5rem'
        },
        videoTitle: {
            paddingLeft:'0.4rem',
            fontSize:'1rem'
        },
        videoChannel: {
            display:"block",
            fontSize: '0.8rem',
            fontWeight: '400',
            paddingTop: '0.2rem'
        }
    }
    return (
        <Grid>
            
            <Paper style={css.paper} onClick={()=>onVideoSelect(video)}>
                <img style={css.videoImg} alt='thumbnail' src={video.snippet.thumbnails.medium.url} />
                <h5 style={css.videoTitle}>{video.snippet.title}
                <label style={css.videoChannel}>{video.snippet.channelTitle}</label>
                </h5>
                
            </Paper>
        </Grid>
    )
}

export default VideoItem;
