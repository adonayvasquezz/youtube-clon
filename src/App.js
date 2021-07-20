import React from 'react';
import { Grid } from '@material-ui/core';
import youtube from './api/youtube';
import logo from './images/youtube-logo.png';
import menuIcon from './images/menu.png';

import { SearchBar, VideoDetail, VideoList, Comments } from './components'

class App extends React.Component {
    state = {
        videos: [],
        selectedVideo: null,
        comments: []
    }

    componentDidMount() {
        //this.handleSubmit('nirvana');
    }

    onVideoSelect = async (video) => {
        const commentsList = await this.getComments(video.id.videoId);
        this.setState( {selectedVideo: video, comments:commentsList.data.items});
    }

    handleSubmit = async (searchTerm) => {
        const response = await youtube.get('search', { params: {q: searchTerm}});
        const commentsList = await this.getComments(response.data.items[0].id.videoId);
        this.setState({ videos: response.data.items, selectedVideo: response.data.items[0], comments:commentsList.data.items });
  
    }

    getComments = async (videoId) => {
        const commentsList = await youtube.get('commentThreads', { params: {videoId: videoId}});
        return commentsList;
    }

    render() {
        const { selectedVideo, videos, comments } = this.state;
        const css = {
            flexAlign: {
                display:'flex',
                justifyContent:'start',
                alignItems:'center',
                backgroundColor:'white',
                margin:'0.5rem 1rem'
            },
            layout: {
                display:"flex",
                justifyContent:"start",
                paddingLeft:'5rem'
            },
            videoList:{
               paddingLeft:"1rem"
            },
            menu: {
                width:'3rem',
                paddingTop:'0.2rem'
            },
            logo: {
               width:'7rem',
               paddingLeft:'1rem'
            },
          
        }
        return(
            <div>
                
                <Grid style={css.flexAlign}>
                    <div style={css.flexAlign}>
                        <img src={menuIcon} style={css.menu} alt="menu-icon" />
                        <img src={logo} style={css.logo} alt="youtube-logo" />
                    </div>
                    <SearchBar onFormSubmit={this.handleSubmit} />
                </Grid>

                <Grid container style={css.layout}>
                    <Grid item xs={12} md={8} lg={8} style={{width:'100%', height:'70vh'}}>
                        <VideoDetail video={selectedVideo} />
                        <Grid container>
                            <Grid item xs={12} md={12}>
                                <Comments comments={comments} />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} md={4} lg={4} style={css.videoList}>
                        <VideoList videos={videos} onVideoSelect={this.onVideoSelect} />
                    </Grid>
                </Grid>
                
                
            </div>
        )
    }
}

export default App;