import React from 'react';
import JQXform,  { IFormProps } from "jqwidgets-scripts/jqwidgets-react-tsx/jqxform"
import DVMenuList from "../DVComponents/DVMenuList"
import ReactDOM from 'react-dom';
import jqx from 'jqwidgets-scripts/jqwidgets/jqx-all'
class DVForms extends React.PureComponent<{}, IFormProps> {
    constructor(props: {}) {
        super(props);
        
        const columns: IFormProps['template'] = [
            {
                align: 'left',
                bind: 'checkboxValue1',
                columnWidth: '140px',                                
                label: 'Checkbox 1',                                
                labelPadding: { left: 0, top: 5, right: 0, bottom: 5 },
                labelPosition: 'right',
                type: 'boolean'
            },
            {
                align: 'left',                
                bind: 'checkboxValue2',
                columnWidth: '140px',                
                label: 'Checkbox 2',
                labelPadding: { left: 0, top: 5, right: 0, bottom: 5 },
                labelPosition: 'right',                                
                type: 'boolean',
            },
            {
                align: 'left',                
                bind: 'checkboxValue3',
                columnWidth: '140px',                
                label: 'Checkbox 3',
                labelPadding: { left: 0, top: 5, right: 0, bottom: 5 },
                labelPosition: 'right',                                
                type: 'boolean'
            }
        ];

        this.state = {
            template: [
                {
                    columns: [{
                        align: 'left',
                        bind: 'checkboxValue1',
                        columnWidth: '140px',                                
                        label: 'Checkbox 1',                                
                        labelPadding: { left: 0, top: 5, right: 0, bottom: 5 },
                        labelPosition: 'left',
                        type: 'text'
                    },
                    {
                        align: 'left',                
                        bind: 'checkboxValue2',
                        columnWidth: '140px',                
                        label: 'Checkbox 2',
                        labelPadding: { left: 0, top: 5, right: 0, bottom: 5 },
                        labelPosition: 'left',                                
                        type: 'text',
                    },
                    {
                        align: 'left',                
                        bind: 'checkboxValue3',
                        columnWidth: '140px',                
                        label: 'Checkbox 3',
                        labelPadding: { left: 0, top: 5, right: 0, bottom: 5 },
                        labelPosition: 'left',                                
                        type: 'text'
                    }]
                },
                {
                    align: 'left',
                    bind: 'textBoxValue',                    
                    label: 'Text input',
                    labelPosition: 'left',
                    labelWidth: '30%',
                    required: true,
                    type: 'text',
                    width: '250px'                   
                },
                {
                    align: 'left',
                    bind: 'passwordBoxValue',                    
                    label: 'Password input',
                    labelPosition: 'left',
                    labelWidth: '30%',
                    required: true,
                    type: 'password',
                    width: '250px'                    
                },
                {
                    align: 'left',
                    bind: 'nubmberBoxValue',                   
                    label: 'Number input',
                    labelPosition: 'left',
                    labelWidth: '30%',
                    required: true,
                    type: 'number',
                    width: '250px'                    
                },
                {
                    align: 'left',
                    bind: 'dropdownValue',
                    label: 'Drop down list',
                    labelPosition: 'left',
                    labelWidth: '30%',                                        
                    // options: [
                    //     { label: 'Option 1', value: 'value1' },
                    //     { label: 'Option 2', value: 'value2' },
                    //     { label: 'Option 3', value: 'value3' }
                    // ],
                    required: true,
                    type: 'custom',
                    width: '100%',
                    height:'100px',
                    init: function(component) {
                        component.jqxFileUpload({height: '100px'});            
                            },
                },
                {
                    label: 'Radio buttons:',
                    rowHeight: '90px',
                    type: 'label'                    
                },
                {
                    align: 'left',
                    bind: 'radiobuttonValue',
                    columnWidth: '150px',                    
                    label: 'Radio buttons',
                    labelPosition: 'right',                                        
                    options: [
                        { label: 'Option 1', value: 'value1' },
                        { label: 'Option 2', value: 'value2' },
                        { label: 'Option 3', value: 'value3' }
                    ],
                    optionsLayout: 'horizontal',
                    type: 'option'                    
                },
                {
                    label: 'Boolean options / checkboxes:',
                    rowHeight: '40px',
                    type: 'label'                    
                },
                {
                    columns
                }
                
            ],
            value: {
                checkboxValue1: false,
                checkboxValue2: false,
                checkboxValue3: true,
                dropdownValue: 'value3',
                nubmberBoxValue: 67.44,
                passwordBoxValue: 'password box',
                radiobuttonValue: 'value2',
                textBoxValue: 'text box value' ,
                textBoxValue1: 'text box value'  ,
                textBoxValue2: 'text box value'                                                                
            }
        };
    }

    public render() {
        return (
            <div>
                <JQXform style={{ width: '100%', height: 'auto' }}
                template={this.state.template} value={this.state.value}></JQXform>
                <div data-container="SystemStats">
                <div id="solutionExplorerTree"></div></div>
            </div>
        );
    }
}
export default DVForms;