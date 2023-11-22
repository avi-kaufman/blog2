import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "../HomePage";
import NavBar from "../NavBar";
import Login from "../Login";
import PostPage from "../Post/PostPage";
import NewPost from "../Post/NewPost";
import Posts from "../Post/Posts";
import SignUp from "../SignUp";
import Logout from "../Logout";
import ContactMe from "../ContactMe";
import AboutTheBlog from "../AboutTheBlog";
import EditPost from "../Post/EditPost";
import SearchResults from "../SearchResults.js";
function App() {

  return (
    <Router>
      <NavBar />

      <Routes>
        <Route path="/AboutTheBlog" element={<AboutTheBlog />} />
        <Route path="/Fposts" element={<Posts />} />
        <Route path="/NewPost" element={<NewPost />} />
        <Route path="/edit-post/:id" element={<EditPost />} />
        <Route path="/post/:id" element={<PostPage />} />
        <Route path="/" element={<HomePage/>} />
        <Route path="/Login" element={<Login />} />
        <Route path="/ContactMe" element={<ContactMe />} />
        <Route path="/FLogout" element={<Logout />} />
        <Route path="/FSignUp" element={<SignUp />} />
        <Route path="/search-results" element={<SearchResults />} />
      </Routes>
    </Router>
  );
}

export default App;
