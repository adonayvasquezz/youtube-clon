import { Paper, Grid } from '@material-ui/core';

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
            display:'block',
            paddingLeft:'0.4rem',
            fontSize:'0.8rem',
            
        },
        videoChannel: {
            display:"block",
            fontSize: '0.6rem',
            fontWeight: '400',
            paddingTop: '0.2rem'
        }
    }
    return (
        <Grid style={{minWidth:'100%'}}>
            <Paper style={css.paper} onClick={()=>onVideoSelect(video)}>
                <img style={css.videoImg} alt='thumbnail' src={video.snippet.thumbnails.medium.url} />
                <div style={css.videoTitle}>
                    <h5>{video.snippet.title}</h5>
                    <label style={css.videoChannel}>{video.snippet.channelTitle}</label>
                </div>
                
            </Paper>
        </Grid>
    )
}

export default VideoItem;
