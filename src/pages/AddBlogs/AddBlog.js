import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import './AddBlogs.css';
const AddBlog = () => {
    const [newBlog, setnewBlog] = useState();
    const [title, setblogTitle] = useState('Title Here');
    const [Writer, setblogAuthor] = useState('Author Here');
    const [para, setblogBody] = useState('Content Here');
    const [type, settype] = useState('Educative');
    const [isPending, setisPending] = useState(false);
    const history = useHistory();

    const addNewBlog = () => {
        console.log('New Blog Added');
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        const newBlog = { title, Writer, para, type };
        setisPending(true);

        fetch('http://localhost:5000/blogs', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(newBlog)
        }).then(() => {
            alert('Blog Added Successfully');
            setisPending(false);
            history.push('/');
        })
    }

    return (
        <div className="main">
            <h1>Add a blog</h1>
            <div className="form-container">
                <form className="form" onSubmit={handleSubmit}>
                    <div className="js-input">
                        <label>Title <span>*</span></label>
                        <input type="text" className='input-fields title' onChange={(e) => setblogTitle(e.target.value)} value={title} required/>
                    </div>
                    <div className="js-input">
                        <label>Genre <span>*</span></label>
                        <select value={type} onChange={(e) => settype(e.target.value)} className='input-fields title' required>
                            <option value="Funny">Funny</option>
                            <option value="Educative">Educative</option>
                            <option value="Bussiness">Bussiness</option>
                            <option value="Social Media">Social Media</option>
                        </select>
                    </div>
                    <div className="js-input">
                        <label>Author <span></span></label>
                        <input type="text" className='input-fields writer' onChange={(e) => setblogAuthor(e.target.value)} value={Writer}/>
                    </div>
                    <div className="js-input">
                        <label>Body <span>*</span></label>
                        <textarea className='input-fields content' onChange={(e) => setblogBody(e.target.value)} value={para} required></textarea>
                    </div>
                    
                    {!isPending && <button className="btn" onClick={() => {
                        addNewBlog();
                    }}>Add Blog</button>}
                    {isPending && <button disabled className="btn" onClick={() => {
                        addNewBlog();
                    }}>Adding</button>}
                </form>
            </div>
            <div className="info">
                <p>Following symbol (<span>*</span>) denotes required fields</p>
            </div>
        </div>
    );
}
 
export default AddBlog;