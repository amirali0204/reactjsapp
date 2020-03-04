import  React, { Component } from "react"
import {FormLayouts,FormLayoutValues} from "../Components/ComponentData/FormLayouts"
import Forms from "../Components/Forms";

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
                <Forms 
                 backgroundColor={ '#fff !important' } borderColor ={'#fff'} 
                 template={FormLayouts[this.props.Id]} value={FormLayoutValues[this.props.Id]}></Forms>
            </div>
        );
    }
  }
  export default FormBuilder;