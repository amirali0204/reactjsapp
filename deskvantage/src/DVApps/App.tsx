import React from 'react';
import {Route, Switch} from 'react-router-dom';
import ListScreen  from '../DVLayouts/ListScreen';
import Login from '../DVLayouts/LoginScreen';
import {ProtectedRoute} from '../DVControllers/ProtectedRouter';

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