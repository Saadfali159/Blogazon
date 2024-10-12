import { useState, useEffect } from 'react';
import './Hero.css';
import HeroBlogs from './HeroBlogs';
import useFetch from '../../context/useFetch';

const Hero = () => {

const {blogs, isLoading, error} = useFetch('http://localhost:5000/blogs');

    return (
        <div className="Hero">
            {error && <div>{ error }</div>}
            {isLoading && <div>...loading</div>}
            {blogs && <div className="hero-container">
                <HeroBlogs blogs={blogs} title='All Blogs'/>
                <HeroBlogs blogs={blogs.filter((blog) => blog.type == 'Funny')} title='Funny Blogs'/>
                <HeroBlogs blogs={blogs.filter((blog) => blog.type == 'Educative')} title='Educative Blogs'/>
                <HeroBlogs blogs={blogs.filter((blog) => blog.type == 'Social Media')} title='Social Blogs'/>

                {/* <HeroBlogs blogs={blogs.filter((blog) => blog.Writer == 'ALi')} title='Ali Blogs'/>
                <HeroBlogs blogs={blogs.filter((blog) => blog.Writer == 'Saad')} title='Saad Blogs' />
                <HeroBlogs blogs={blogs.filter((blog) => blog.Writer == 'Haiqa')} title='Haiqa Blogs' /> */}
            </div>}
        </div>
    );
}
 
export default Hero;