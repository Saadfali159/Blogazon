import { useState, useEffect } from 'react';

const useFetch = (url) => {

    const [blogs, setBlogs] = useState(null);
    const [isLoading, setisLoading] = useState(true);
    const [error, setError] = useState(null); 

    useEffect(() => {
        fetch(url)
            .then(res => {
                if(!res.ok) {
                    throw error("Failed to load data");
                }
                return res.json();
            })
            .then(data => {
                setBlogs(data);
                setisLoading(false);
                setError(null);
            })
            .catch(err => {
                setisLoading(false);
                setError(err.message);
            })
    }, []);

    return {blogs, isLoading, error};
}
 
export default useFetch;