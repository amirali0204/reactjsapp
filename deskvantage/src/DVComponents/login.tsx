import * as React from 'react';
import {Redirect} from 'react-router-dom';
import JqxPanel from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxpanel';
import JqxInput from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxinput';
import JqxPasswordInput from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxpasswordinput';
import JqxButton, { IButtonProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxbuttons';
import SessionHandler from '../DVControllers/SessionHandler';

class dvlogin extends React.Component<{}, IButtonProps> {
    private textImageButton = React.createRef<JqxButton>();
    private htmlButton = React.createRef<JqxButton>();
    private events = React.createRef<HTMLDivElement>();
    constructor(props: {}) {
        super(props);
        this.buttonClicked = this.buttonClicked.bind(this);
        this.state = {
            imgPosition: 'center',
            textImageRelation: 'imageBeforeText',
            textPosition: 'left',
            value: "<span style={{ fontWeight: 'bold' }}>HTML Button</span>"
        }

    }
    private buttonClicked() {
        this.events.current!.innerHTML = '<span>Button Clicked</span>';
        SessionHandler.login(() => {
            sessionStorage.setItem("LoggIn","1");
            SessionHandler.test(1);
        });
    }
    public render() {
        if(SessionHandler.isAuthenticated() === "1"){
            return <Redirect to="/app"></Redirect>
        }
        return (
            <JqxPanel width={350} height={350} style={{margin: '0px', top: '26%', left: "38%", position: 'absolute'}} >
                <div style={{ margin: '10px' }}>
                    <h1>CapitalTyping Login:</h1>
                    <br/><br/><br/>
                    <div>
                        <label style={{float:"left", margin: "4px"}}>Username</label>
                        <div style={{float:"right", margin: "0px 22px"}}>
                        <JqxInput 
                        width={200} height={25} 
                     minLength={1} placeHolder={'Enter a Username'} />
                        </div>
                   
                     </div>
                    <br/><br/><br/>
                    <div>
                        <label style={{float:"left", margin: "4px"}}>Password</label>
                        <div style={{float:"right", margin: "0px 22px"}}>
                            <JqxPasswordInput
                                width={200} height={25} 
                                placeHolder={'Enter a password'}
                                showStrength={true} showStrengthPosition={'right'} />
                        </div>
                    </div>
                    <br/><br/><br/><br/><br/><br/><br/><br/>
                    <div>
                        <JqxButton width={120} height={15} style={{float:"right", margin: "0px 0px 0px 2px"}} 
                        onClick={this.buttonClicked}>Login</JqxButton>
                    </div>
                    <div ref={this.events} />
                </div>
            </JqxPanel>
        );
    }
}
export default dvlogin;