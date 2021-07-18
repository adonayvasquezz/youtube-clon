import React from 'react';
import { Grid } from '@material-ui/core';
import youtube from './api/youtube';
import logo from './images/youtube-logo.png';
import menuIcon from './images/menu.png'

import { SearchBar, VideoDetail, VideoList } from './components'

class App extends React.Component {
    state = {
        videos: [],
        selectedVideo: null,
    }

    componentDidMount() {
        //this.handleSubmit('nirvana');
    }

    onVideoSelect = (video) => {
        this.setState( {selectedVideo: video});
    }

    handleSubmit = async (searchTerm) => {
        const response = await youtube.get('search', { params: {q: searchTerm}});
        console.log(response.data.items);

        this.setState({ videos: response.data.items, selectedVideo: response.data.items[0] });
    }

    render() {
        const { selectedVideo, videos } = this.state;
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
                    <Grid item xs={12} md={9} style={{width:'100%'}}>
                        <VideoDetail video={selectedVideo} />
                    </Grid>
                    <Grid item xs={12} md={3} style={css.videoList}>
                        <VideoList videos={videos} onVideoSelect={this.onVideoSelect} />
                    </Grid>
                </Grid>
                
            </div>
        )
    }
}

export default App;