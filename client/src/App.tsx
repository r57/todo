import React, { Component } from 'react';
import SideBar from './components/side-bar';
import ContentComponent from './components/content/content.component';
import MainAppRouter from './app-router';
import { BrowserRouter } from 'react-router-dom';

export default class App extends Component {
  render() {
    return (
      <div id='app-container'>
        <BrowserRouter>
          <SideBar />
          <ContentComponent>
            <MainAppRouter />
          </ContentComponent>
        </BrowserRouter>
      </div>
    );
  }
}
