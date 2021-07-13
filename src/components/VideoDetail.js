import { Paper, Typography } from '@material-ui/core';

const VideoDetail = ({ video }) => {
    if (!video) return <div>Loading...</div>
    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
    console.log(videoSrc);
    return (
        <>
            <Paper elevation={6} style={{ height:'70%' }}>
                <iframe frameBorder="0" height="100%" width="100%" title="Video Player" src={videoSrc} />
            </Paper>
            <Paper elevation={6} style={{ padding:'1.2rem' }}>
                <Typography variant="h4">{video.snippet.title} - {video.snippet.channelTitle} </Typography>
                <Typography variant="subtitle1">{video.snippet.channelTitle}</Typography>
                <Typography variant="subtitle2">{video.snippet.description}</Typography>
                
            </Paper>
            This is a Video Detail Component
        </>
    )
}

export default VideoDetail;
