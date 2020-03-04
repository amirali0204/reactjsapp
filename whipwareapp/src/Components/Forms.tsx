import React from 'react';
import JQXform,  { IFormProps } from "jqwidgets-scripts/jqwidgets-react-tsx/jqxform"

class DVForms extends React.Component<IFormProps> {
    constructor(props) {
        super(props);
    }
    private onclick(e?: Event){
        const args = "args";
        const name = "name";
        // post the form data to the server and wait for response
        //Response could be - Notification / Redirect to URL / Download file etc
    }
    public render() {
        return (
            <div>
                <JQXform  backgroundColor={this.props.backgroundColor} 
                borderColor={this.props.borderColor} onButtonClick={this.onclick}
                template={this.props.template} value={this.props.value}></JQXform>
            </div>
        );
    }
}
export default DVForms;