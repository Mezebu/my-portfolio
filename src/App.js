import { Component } from "react";
import "./App.css";
import { Layout, Header, Navigation, Drawer, Content } from "react-mdl";
import Main from "./components/main";
import { Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
        <Layout>
          <Header
            className="header-color"
            title={
              <Link
                style={{
                  textDecoration: "none",
                  color: "white",
                  fontFamily: "montserrat",
                }}
                to="/"
              >
                Home
              </Link>
            }
            scroll
          >
            <Navigation>
              <Link to="/about">About Me</Link>
              <Link to="/resume">Resume</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/contact">Contact</Link>
            </Navigation>
          </Header>
          <Drawer
            className="drawer-response"
            title={
              <Link
                style={{
                  textDecoration: "none",
                  color: "black",
                  fontFamily: "montserrat",
                }}
                to="/"
              >
                Home
              </Link>
            }
          >
            <Navigation>
              <Link to="/about">About Me</Link>
              <Link to="/resume">Resume</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/contact">Contact</Link>
            </Navigation>
          </Drawer>
          <Content>
            <div className="page-content" />
            <Main />
          </Content>
        </Layout>
      </div>
    );
  }
}

export default App;
