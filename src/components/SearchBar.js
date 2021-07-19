import React from 'react';
import searchLogo from '../images/search.png';

class SearchBar extends React.Component {
    state = {
        searchTerm: ''
    }

    handleChange = (event) => this.setState({ searchTerm: event.target.value});
    handleSubmit = (event) => {
        const { searchTerm } = this.state;
        const { onFormSubmit } = this.props;

        onFormSubmit(searchTerm);

        event.preventDefault();
    }
    
    render() {
        const css = {
            btn: {
                backgroundColor: '#F0F0F0',
                padding:'0rem 1rem',
                border: '1.5px solid #D3D3D3',
                borderLeft: 'none',
                cursor:'pointer',
                
               "&:hover": {
                background: "#efefef"
              },
            },
            img: {
                width:'1.5rem',
                padding:'0.15rem', 
            },
            search: {
                height:'1.9rem',
                width:'30vw',
                border: '1.5px solid #D3D3D3'

            },
            form: {
                display:'flex',
                alignItems:'center',
            },
            center: {
                display:'block',
                marginLeft:'20%',
                backgroundColor:'grey'
            }
        }
        return(
            <div style={css.center}>
                <form style={css.form} onSubmit={this.handleSubmit}>
                    <input type="text" style={css.search} label="Search..." onChange={this.handleChange} />
                    <button style={css.btn}> <img style={css.img} src={searchLogo} alt="search-logo" /> </button>
                </form>
            </div>
        )
    }
}

export default SearchBar;