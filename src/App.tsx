import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Logo, Button, NavLinkButton } from './components/';
import { Dashboard, Events, Event, Gallery, Members, Member, Posts, Post } from './containers';

function App() {
  return (
    <Router>
      <div className="app">
        <nav className="app__navigation">
          <Logo />
          <ul className="mt-3 list--unstyled">
            <li>
              <NavLinkButton to="/" icon="dashboard" exact>
                Dashboard
              </NavLinkButton>
            </li>
            <li>
              <NavLinkButton to="/posts" icon="layers">
                Blog posts
              </NavLinkButton>
            </li>
            <li>
              <NavLinkButton to="/events" icon="event">
                Events
              </NavLinkButton>
            </li>
            <li>
              <NavLinkButton to="/gallery" icon="insert_photo">
                Gallery
              </NavLinkButton>
            </li>
            <li>
              <NavLinkButton to="/members" icon="face">
                Members
              </NavLinkButton>
            </li>
            <li className="mt-3">
              {/* Delete this line and add your Button component, don't forget to import it! */}
              <Button icon="add" variant="primary">
                Add new
              </Button>
            </li>
          </ul>
        </nav>
        <main className="app__body">
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route path="/posts/:postId" component={Post} />
            <Route path="/posts" component={Posts} />
            <Route path="/events/:eventId" component={Event} />
            <Route path="/events" component={Events} />
            <Route path="/gallery" component={Gallery} />
            <Route path="/members/:memberId" component={Member} />
            <Route path="/members" component={Members} />
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
