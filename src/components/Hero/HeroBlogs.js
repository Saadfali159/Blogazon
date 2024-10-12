import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import './Hero.css';
import { useState } from 'react';


const HeroBlogs = ({ blogs, title }) => {
    const [isExpanded, setisExpanded] = useState(false);
    const maxLength = 25;

    return (
            <div className="blog-list">
            <div className="spacer"></div>
            <h1 className='title'>{title}</h1>
            <div className="spacer"></div>
                {blogs.map((blog) => (
                    <Link to={`/blogs/${blog.id}`}>
                    <div className="blog-container" key={blog.id}>
                        <div className="blog-content">
                        <h1 className="blog-title">{ blog.title }</h1>
                        <p className="blog-writer"> Type: { blog.type }</p>
                        <p className="blog-writer"> Written by { blog.Writer }</p>
                        {isExpanded ? blog.para : `${blog.para.substring(0, maxLength)}...`}
                        {/* <p className="blog-body">{blog.para}</p> */}
                        </div>
                    </div>
                    </Link>
                ))}
            </div>
    );
}
 
export default HeroBlogs;