
const Comments = ({comments}) => {
    var commentList = [];
    const css = {
        comment: {
            padding:'2rem'
        }
    }

    if (comments !== []) {
        commentList = comments.map((com, id) => <div style={css.comment} key={id} dangerouslySetInnerHTML={{__html:com.snippet.topLevelComment.snippet.textDisplay}}></div>
        );
    }
   
    //console.log('lo que se imprimera sera ', commentList, typeof(commentList));
    return (
        <div>
            { commentList }
        </div>
    )
}

export default Comments
