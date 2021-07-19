import { Paper, Typography } from '@material-ui/core';

const VideoDetail = ({ video }) => {
    if (!video) return <div></div>
    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
    console.log(videoSrc);
    return (
        <>
            <iframe frameBorder="0" height="100%" width="100%" title="Video Player" src={videoSrc} />
            
            <Paper elevation={6} style={{ padding:'1.2rem', marginBottom:'1rem' }}>
                <Typography variant="h4">{video.snippet.title} - {video.snippet.channelTitle} </Typography>
                <Typography variant="subtitle1">{video.snippet.channelTitle}</Typography>
                <Typography variant="subtitle2">{video.snippet.description}</Typography>
                
            </Paper>
        </>
    )
}

export default VideoDetail;
