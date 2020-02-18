import  React, { Component } from "react"
import {ScreenLayouts} from "./Layouts/FormLayouts"
import DVForms from "../DVComponents/DVForms";

type formId = {
    Id: string
}

export class FormBuilder extends React.Component<formId> {
    constructor(props){
        super(props);
    }

    render() {
      return (
            <div >
                <DVForms 
                 backgroundColor={ '#fff !important' } borderColor ={'#fff'} 
                 template={ScreenLayouts[this.props.Id]} value={ScreenLayouts["LoginScreenValue"]}></DVForms>
            </div>
        );
    }
  }
  export default FormBuilder;