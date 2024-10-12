import { useState, useEffect } from 'react';
import '../../components/Hero/Hero.css';
import HeroBlogs from '../../components/Hero/HeroBlogs';
import useFetch from '../../context/useFetch';

const FunnyBlogs = () => {

const {blogs, isLoading, error} = useFetch('http://localhost:5000/blogs');

    return (
        <div className="Hero">
            {blogs && <div className="hero-container">
                <HeroBlogs blogs={blogs.filter((blog) => blog.type == 'Funny')} title='Funny Blogs'/>
            </div>}
        </div>
    );
}
 
export default FunnyBlogs;