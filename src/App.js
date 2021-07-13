import React from 'react';
import { Grid } from '@material-ui/core';
import youtube from './api/youtube';

import { SearchBar, VideoDetail } from './components'

class App extends React.Component {
    handleSubmit = async (searchTerm) => {
        const response = await youtube.get('search', { params: {q: searchTerm}});
        console.log(response.data.items);
    }

    render() {
        return(
            <Grid justifyContent="center" container spacing={10}>
                <Grid item xs={12}>
                    <Grid container spacing={10}>
                        <Grid item xs={12}>
                           <SearchBar onFormSubmit={this.handleSubmit} />
                        </Grid>
                        <Grid item xs={8}>
                            <VideoDetail />
                        </Grid>
                        <Grid item xs={4}>
                            {/* Video list */}
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        )
    }
}

export default App;