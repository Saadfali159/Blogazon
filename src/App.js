import './App.css';
import { useState } from 'react';
import Home from './pages/Home/Home';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import About from './pages/About/About';
import BlogDetails from './pages/BlogDetails/BlogDetails';
import AddBlog from './pages/AddBlogs/AddBlog';
import FunnyBlogs from './pages/Categories/FunnyBlogs';
import EducativeBlogs from './pages/Categories/EducativeBlogs';
import SocialBlogs from './pages/Categories/SocialBlogs';

function App() {

  return (
  <Router basename={process.env.PUBLIC_URL}>
    <div className="App">
      <Navbar />
        <Switch>
          <Route exact path='/'>
            <Home/> 
          </Route>
          <Route path='/blogs/:id'>
            <BlogDetails/> 
          </Route>
          <Route path='/addblog'>
            <AddBlog/> 
          </Route>
          <Route path='/funny/blogs'>
             <FunnyBlogs />
          </Route>
          <Route path='/educative/blogs'>
             <EducativeBlogs />
          </Route>
          <Route path='/social/blogs'>
             <SocialBlogs />
          </Route>
        </Switch>
        <p>Created by Ali Hassan</p>
    </div>
  </Router>

  );
}

export default App;
