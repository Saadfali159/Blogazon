import { useState, useEffect } from 'react';
import '../../components/Hero/Hero.css';
import HeroBlogs from '../../components/Hero/HeroBlogs';
import useFetch from '../../context/useFetch';

const EducativeBlogs = () => {

const {blogs, isLoading, error} = useFetch('http://localhost:5000/blogs');

    return (
        <div className="Hero">
            {blogs && <div className="hero-container">
                <HeroBlogs blogs={blogs.filter((blog) => blog.type == 'Educative')} title='Educative Blogs'/>
            </div>}
        </div>
    );
}
 
export default EducativeBlogs;