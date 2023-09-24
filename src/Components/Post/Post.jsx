const Post = ({post}) => {
    const {id, title}= post;
    const userStyle = {
        border: '2px solid yellow',
        padding: '5px',
        borderRadius: '20px'
    }
    
    return (
        <div style={userStyle}>
            <h2>Posts: {title}</h2>
        </div>
    );
};

export default Post;