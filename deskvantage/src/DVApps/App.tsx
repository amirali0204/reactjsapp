import React from 'react';
import {Route, Switch} from 'react-router-dom';
import ListScreen  from '../Layouts/ListScreen';
import Login from '../DVComponents/login';
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
                    <ProtectedRoute exact path="/Staff" component ={ListScreen}></ProtectedRoute>
                    <Route exact path="*" component ={Login}></Route>
                </Switch>
            </div>
        );
    }
}
export default App;