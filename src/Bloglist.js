const Bloglist = ({blogs,handledel}) => {
    // const blogs=props.blogs;
    // const handledel=props.handledel();
    // const author=props.author;
    return (  
        <div className="blog-preview">
            {blogs.map((blogs)=>(
                <div className="manyblogs">
                    <h2>{blogs.title}</h2>
                    <p>{blogs.description}</p>
                    <p>-{blogs.author}</p>
                    <button onClick={()=>handledel(blogs.id)}>Delete</button><br />  
                </div>
            ))}
        </div>
        
    );
}
 
export default Bloglist;