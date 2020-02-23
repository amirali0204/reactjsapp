import * as React from 'react';
import { withRouter } from "react-router-dom";
import JqxMenu, { IMenuProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxmenu';
import { History, LocationState } from "history";
import { connect } from 'react-redux'
import { Dispatch } from "redux";

interface MyComponentProps {
    history: History<LocationState>;
}

class DVMenuList extends React.Component<MyComponentProps&NotesListState&any, IMenuProps> {

    constructor(props) {
        super(props);
        this.onItemClick = this.onItemClick.bind(this);
        const data = [
            {
                'id': '12',
                'parentid': '-1',
                'subMenuWidth': '250px',
                'text': 'Customers'
            },
            
            
            {
                'id': '1',
                'parentid': '-1',
                'subMenuWidth': '250px',
                'text': 'Projects'
            },
            {
                'id': '20',
                'parentid': '-1',
                'subMenuWidth': '250px',
                'text': 'Billing'
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
                'text': 'CustomerSupport'
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
                'text': 'SupportPrograms'
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
                'text': 'Services'
            },
            {
                'id': '19',
                'parentid': '1',
                'text': 'Projects'
            },
            {
                'id': '24',
                'parentid': '1',
                'text': 'WorkQueue'
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
                'text': 'ServiceTemplates'
            },
            {
                'id': '17',
                'parentid': '18',
                'text': 'FileManager'
            },
            {
                'id': '14',
                'parentid': '12',
                'text': 'Orders'
            },
            {
                'id': '18',
                'parentid': '12',
                'text': 'Files'
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
            source: dataAdapter.getRecordsHierarchy('id', 'parentid', 'items', [{ name: 'text', map: 'label' }]),
        }

    }
    public render() {
        return (
            <div>
                <JqxMenu onItemclick={this.onItemClick} 
                    width={'50%'} height={30} source={this.state.source} theme={'bootstrap'}/>
            </div>
        );
    }

    private onItemClick(event: any): void {
        event.preventDefault()
        this.props.menuaction(event.args.innerText);
        this.props.history.push('/'+event.args.innerText);
        window.location.reload(false);
    };
}
export interface IStoreState {
    type: string
  };
interface NotesListState {
    menuaction: (id) => (dispatch: Dispatch<IStoreState>) => Promise<void>;
  }
let mapStateToProps =  (state) => ({
    state: state,
});
export const toggleTodo = id => ({
    type: 'TOGGLE_TODO',
    id
  })

  const mapDispatchToProps = dispatch => ({
    menuaction: id => dispatch(toggleTodo(id))
  })
export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(withRouter(DVMenuList));
