import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import useFetch from "../../context/useFetch";

const BlogDetails = () => {
    const { id } = useParams();
    const {blogs, isLoading, error} = useFetch('http://localhost:5000/blogs/' + id);

    return (
        <div className="main">
            {error && <div>{ error }</div>}
            {isLoading && <div>...loading</div>}
            {blogs && 
                <div className="blog-content">
                <h1 className="blog-title">{ blogs.title }</h1>
                <p className="blog-writer"> Written by { blogs.Writer }</p>
                <p className="blog-body"><span>"</span>{ blogs.para}<span>"</span></p>           
            </div>}
        </div>
    );
}
 
export default BlogDetails;