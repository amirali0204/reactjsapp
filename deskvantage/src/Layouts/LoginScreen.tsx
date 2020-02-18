import * as React from 'react';
import {Redirect} from 'react-router-dom';
import FormBuilder from "./../DVControllers/FormBuilder"
import SessionHandler from '../DVControllers/SessionHandler';
import JqxScrollView from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxscrollview';
class dvLoginScreen extends React.Component<{}> {
    private myScrollView = React.createRef<JqxScrollView>();
    constructor(props: {}) {
        super(props);
    }

    public render() {
        if(SessionHandler.isAuthenticated() === "1"){
            return <Redirect to="/Staff"></Redirect>
        }
        return (
            <div>
                 <div style={{float: "left"}}>
                    <JqxScrollView ref={this.myScrollView} width={600} height={window.innerHeight-10}>
                        <div><div style={{backgroundSize:'contain',backgroundRepeat:'no-repeat',backgroundImage: "url(./../Assets/Loginbanner.jpg)",width:'600px', height: window.innerHeight }} /></div>
                        <div><div style={{backgroundSize:'contain',backgroundRepeat:'no-repeat',backgroundImage: "url(./../Assets/Loginbanner.jpg)",width:'600px', height: window.innerHeight }} /></div>
                        <div><div style={{backgroundSize:'contain',backgroundRepeat:'no-repeat',backgroundImage: "url(./../Assets/Loginbanner.jpg)",width:'600px', height: window.innerHeight }} /></div>
                    </JqxScrollView>
                
                </div>
                
                <div style={{border:"1px", borderColor:"#000", float: "left" , paddingTop:"250px", paddingLeft:"240px"}}><h4>Signin to Deskvantage </h4>
                <FormBuilder Id={"LoginScreenLayout"} > </FormBuilder></div>
            </div>
        );
    }
}
export default dvLoginScreen;