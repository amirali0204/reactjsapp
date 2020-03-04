export const ProjectFormLayouts= [
    {
        columns:[{
        align: 'right',
        width: "50%",
        columnWidth: '50%',                                
        text: 'Save Changes',                                
        name: "Save",
        type: 'button'
    },
    {
        align: 'right',
        width: "50%",
        columnWidth: '50%',                                
        text: 'Cancel Changes',
        name: "Cancel",
        type: 'button'
    }]},
    {
        columns:[{
            label: 'Project ID:',
            rowHeight: '40px',
            type: 'label'                    
        },
        {
            label: 'PRJ11',
            rowHeight: '40px',
            type: 'label'                    
        }]
    },
    {
        align: 'left',
        bind: 'textBoxValue',                    
        label: 'Customer Name: ',
        labelPosition: 'left',
        labelWidth: '30%',
        required: true,
        type: 'text',
        width: '250px'                   
    },
    {
        align: 'left',
        bind: 'radiobuttonValue',
        columnWidth: '150px',                    
        label: 'Service Type',
        labelPosition: 'right',                                        
        options: [
            { label: 'Transcription', value: 'value1' },
            { label: 'Translation', value: 'value2' },
            { label: 'Software Development', value: 'value3' }
        ],
        optionsLayout: 'horizontal',
        type: 'option'                    
    },
    
    
];

export const ProjectFormValue= {
        checkboxValue1: false,
        SaveOrder: "Save Order",
        checkboxValue3: true,
        dropdownValue: 'value3',
        nubmberBoxValue: 67.44,
        passwordBoxValue: 'password box',
        radiobuttonValue: 'value2',
        textBoxValue: 'text box value' ,
        textBoxValue1: 'text box value'  ,
        textBoxValue2: 'text box value'                                                                
    }


