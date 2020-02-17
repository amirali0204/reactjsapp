import * as React from 'react';
import {Redirect} from 'react-router-dom';
import JqxPanel from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxpanel';
import JqxInput from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxinput';
import JqxPasswordInput from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxpasswordinput';
import JqxButton, { IButtonProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxbuttons';
import SessionHandler from '../DVControllers/SessionHandler';
import DVForms from '../DVComponents/DVForms';

class dvLoginScreen extends React.Component<{}, IButtonProps> {
    private textImageButton = React.createRef<JqxButton>();
    private htmlButton = React.createRef<JqxButton>();
    private events = React.createRef<HTMLDivElement>();
    constructor(props: {}) {
        super(props);
    }

    public render() {
        if(SessionHandler.isAuthenticated() === "1"){
            return <Redirect to="/Staff"></Redirect>
        }
        return (
            <div>
                <DVForms></DVForms>
            </div>
        );
    }
}
export default dvLoginScreen;