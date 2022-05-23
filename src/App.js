import React, { useState } from "react";
import DisplayPosts from "./Components/DisplayPosts/DisplayPosts";
import CreatePost from "./Components/CreatePost/CreatePost";
import NavBar from "./Components/NavBar/NavBar";
import { Container, Row, Col } from "react-bootstrap";

import "./App.css";

function App() {
  const [posts, setPosts] = useState([]);

  function createPost(myPost) {
    let allPosts = [...posts, myPost];
    setPosts(allPosts);
  }
  return (
    <div className="App">
      <NavBar />
      <Container>
        <Row>
          <Col>
            {" "}
            <CreatePost createPost={createPost} />
          </Col>
          <Col>
            {" "}
            <DisplayPosts posts={posts} />{" "}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
