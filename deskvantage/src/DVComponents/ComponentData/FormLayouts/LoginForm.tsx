export const LoginFormLayouts= [
    {
        align: 'left',
        bind: 'textBoxValue',                    
        label: 'User Name: ',
        labelPosition: 'left',
        labelWidth: '30%',
        required: true,
        type: 'text',
        width: '250px'                   
    },
    {
        align: 'left',
        bind: 'passwordBoxValue',                    
        label: 'Password: ',
        labelPosition: 'left',
        labelWidth: '30%',
        required: true,
        type: 'password',
        width: '250px'                    
    },
    {
        align: 'left',
        bind: 'checkboxValue2',
        width: "100%",
        columnWidth: '100%',                                
        text: 'Login/SignIn',                                
        labelPadding: { left: 0, top: 5, right: 0, bottom: 5 },
        labelPosition: 'left',
        name: "Login",
        type: 'button'
    },
    
];

export const LoginFormValue= {
        checkboxValue1: false,
        checkboxValue2: "hgugi",
        checkboxValue3: true,
        dropdownValue: 'value3',
        nubmberBoxValue: 67.44,
        passwordBoxValue: 'password box',
        radiobuttonValue: 'value2',
        textBoxValue: 'text box value' ,
        textBoxValue1: 'text box value'  ,
        textBoxValue2: 'text box value'                                                                
    }


