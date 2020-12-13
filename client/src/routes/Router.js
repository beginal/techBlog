import React from "react";
import { NavBar, Header, Footer } from "components";
import { Container } from "reactstrap";
import { Redirect, Route, Switch } from "react-router-dom";
import PostCardList from "./normalRoute/PostCardList";
import PostWrite from "./normalRoute/PostWrite";
import PostDetail from "./normalRoute/PostDetail";
import PostEdit from "./normalRoute/PostEdit";
import Search from "./normalRoute/Search";
import Profile from "./normalRoute/Profile";
import CategoryResult from "./normalRoute/CategoryResult";
import styled from "styled-components";
const MyRouter = () => (
  <StyleDiv>
    <NavBar />
    <Header />
    <Container className="main-body">
      <Switch>
        <Route path="/" exact component={PostCardList} />
        <Route path="/post" exact component={PostWrite} />
        <Route path="/post/:id" exact component={PostDetail} />
        <Route path="/post/:id/edit" exact component={PostEdit} />
        <Route
          path="/post/category/:categoryName"
          exact
          component={CategoryResult}
        />
        <Route path="/search/:serarchTerm" exact component={Search} />
        <Route path="/user/:userName/profile" exact component={Profile} />
        <Redirect from="*" to="/" />
      </Switch>
    </Container>
    <Footer />
  </StyleDiv>
);

const StyleDiv = styled.div`
  .main-body {
    height: 90vh;
  }
`;

export default MyRouter;
