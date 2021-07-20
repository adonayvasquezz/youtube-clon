import CommentDetail from "./CommentDetail";

const Comments = ({comments}) => {
    var commentList = [];
   
    if (comments !== []) {
        commentList = comments.map((com, id) => <CommentDetail key={id} commentData={com}  />
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
