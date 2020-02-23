import  React, { Component } from "react"
import {FormLayouts,FormLayoutValues} from "../DVComponents/ComponentData/FormLayouts/"
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
                 template={FormLayouts[this.props.Id]} value={FormLayoutValues[this.props.Id]}></DVForms>
            </div>
        );
    }
  }
  export default FormBuilder;