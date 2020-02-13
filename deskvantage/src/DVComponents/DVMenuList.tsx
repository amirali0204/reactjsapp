import * as React from 'react';
import JqxMenu, { IMenuProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxmenu';
class DVMenuList extends React.PureComponent<{}, IMenuProps> {
    constructor(props: {}) {
        super(props);
        this.onItemClick = this.onItemClick.bind(this);
        const data = [
            {
                'id': '12',
                'parentid': '-1',
                'subMenuWidth': '250px',
                'text': 'Customer Management'
            },
            
            
            {
                'id': '1',
                'parentid': '-1',
                'subMenuWidth': '250px',
                'text': 'Project Management'
            },
            {
                'id': '20',
                'parentid': '-1',
                'subMenuWidth': '250px',
                'text': 'Billing Management'
            },{
                'id': '21',
                'parentid': '20',
                'text': 'Invoices'
            },{
                'id': '22',
                'parentid': '20',
                'subMenuWidth': '250px',
                'text': 'PayRoll'
            },{
                'id': '2',
                'parentid': '1',
                'text': 'Services'
            },
            
            {
                'id': '3',
                'parentid': '25',
                'text': 'Staff'
            },
            {
                'id': '4',
                'parentid': '25',
                'text': 'Workflows'
            },
            {
                'id': '5',
                'parentid': '25',
                'text': 'Security'
            },
            {
                'id': '6',
                'parentid': '-1',
                'subMenuWidth': '200px',
                'text': 'Support'
            },
            {
                'id': '7',
                'parentid': '6',
                'text': 'Customer Service'
            },
            {
                'id': '8',
                'parentid': '6',
                'text': 'KnowledgeBase'
            },
            {
                'id': '9',
                'parentid': '6',
                'text': 'FAQs'
            },
            {
                'id': '10',
                'parentid': '6',
                'text': 'Support programs'
            },
            {
                'id': '11',
                'parentid': '6',
                'text': 'Forums'
            },
            {
                'id': '13',
                'parentid': '12',
                'text': 'Customers'
            },
            {
                'id': '15',
                'parentid': '2',
                'text': 'Manage Services'
            },
            {
                'id': '19',
                'parentid': '1',
                'text': 'Projects'
            },
            {
                'id': '24',
                'parentid': '1',
                'text': 'Work Queue'
            },
            {
                'id': '25',
                'parentid': '-1',
                'subMenuWidth': '250px',
                'text': 'Settings'
            },
            {
                'id': '16',
                'parentid': '2',
                'text': 'Service Templates'
            },
            {
                'id': '17',
                'parentid': '18',
                'text': 'File Manager'
            },
            {
                'id': '14',
                'parentid': '12',
                'text': 'Orders'
            },
            {
                'id': '18',
                'parentid': '12',
                'text': 'File Management'
            },
            {
                'id': '19',
                'parentid': '12',
                'text': 'Messages'
            },
        ];
        const source: any = {
            datafields: [
                { name: 'id' },
                { name: 'parentid' },
                { name: 'text' },
                { name: 'subMenuWidth' },
            ],
            datatype: 'json',
            id: 'id',
            localdata: data
        };
        const dataAdapter = new jqx.dataAdapter(source, { autoBind: true });
        this.state = {
            source: dataAdapter.getRecordsHierarchy('id', 'parentid', 'items', [{ name: 'text', map: 'label' }])
        }
    }
    public render() {
        return (
            <div>
                <JqxMenu onItemclick={this.onItemClick}
                    width={'90%'} height={30} source={this.state.source} theme={'material'}/>
            </div>
        );
    }
    private onItemClick(event: any): void {
       // this.eventLog.current!.innerHTML = 'Id: ' + event.args.id + ', Text: ' + event.args.innerText;
    };
}
export default DVMenuList;