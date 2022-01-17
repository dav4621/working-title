import React from 'react';                      // 'webpages' will go here (might change Posts from component to .js file)
import {Home} from './views/Home';
import {About} from './views/About';
import {Projects} from './views/Projects';
import {Posts} from './views/Posts';
import {IWOHAP} from './views/IWOHAP';

import {Navbar} from './components/Navbar';     // re-useable components
import {Footer} from './components/Footer';

import {Route, Switch, Redirect} from 'react-router-dom';

import RenderedPosts from './views/Posts/RenderedPosts';
import SinglePost from './views/Posts/SinglePost';

const Routes = () => {
    return (
        <>
            <Navbar />

            <Switch>
                <Route exact path = '/Home' component = {Home} />
                <Route exact path = '/'>
                    <Redirect to = '/Home' />
                </Route>
                
                <Route exact path = '/About' component = {About} />
                <Route exact path = '/Projects' component = {Projects} />
                <Route exact path = '/IWOHAP' component = {IWOHAP} />
                <Route exact path = '/Posts' render = {() =>
                <>
                <Posts />
                
                </>   
                } />
                <Route path = '/:id' component = {SinglePost} />
            </Switch>

            

            <Footer />  
        </>
    );
};

export default Routes;