const CommentDetail = ({commentData}) => {
    const css = {
        img: {
            borderRadius:'50%',
            width:'3rem',
            marginRight:'1rem'

        },
        align: {
            display: 'flex',
            justifyContent:'start',
            alignItems:'center',
            paddingBottom:'1.5rem'
        },
        noMargin: {
            margin:'0rem'
            
        }
    }
    return (
        <div style={css.align}>
            <div><img style={css.img} src={commentData.snippet.topLevelComment.snippet.authorProfileImageUrl} alt="img-profile" /></div>
            
            <div>
                <h4 style={css.noMargin}>{commentData.snippet.topLevelComment.snippet.authorDisplayName}</h4>
                <p style={css.noMargin} dangerouslySetInnerHTML={{__html:commentData.snippet.topLevelComment.snippet.textDisplay}}></p>
            </div>
        </div>
    )
}

export default CommentDetail
