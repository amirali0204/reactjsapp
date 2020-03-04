import React from 'react';
import {Route, Switch} from 'react-router-dom';
import ListScreen  from '../Layouts/ListScreen';
import Login from '../Layouts/LoginScreen';
import {ProtectedRoute} from '../Controllers/ProtectedRouter';

class App extends React.PureComponent<{}> {
    constructor(props){
        super(props);
        this.state = {LoggedIn: 0};
    }
    public render() {
        return (
            <div>
                <Switch>
                    <Route exact path="/login" component ={Login}></Route>
                    <ProtectedRoute exact path="*" component ={ListScreen}></ProtectedRoute>
                </Switch>
            </div>
        );
    }
}
export default App;