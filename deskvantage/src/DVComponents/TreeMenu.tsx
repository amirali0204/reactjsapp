import * as React from 'react';
import JqxTree, { ITreeProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxtree';
class TreeMenu extends React.PureComponent<{}, ITreeProps> {
    private myTree = React.createRef<JqxTree>();
    constructor(props: {}) {
        super(props);
        const data = [
            {
                'id': '2',
                'parentid': '1',
                'text': 'Users Created By Me',
                'value': '$2.3'
            }, {
                'id': '3',
                'parentid': '1',
                'text': 'Most Active Users',
                'value': '$2.3'
            }, {
                'id': '4',
                'parentid': '1',
                'text': 'Blocked Users',
                'value': '$2.3'
            }, {
                'id': '5',
                'parentid': '1',
                'text': 'Admin Role Users',
                'value': '$2.3'
            }, {
                'id': '1',
                'parentid': '-1',
                'text': 'My Filters',
                'value': '$2.3'
            }, {
                'id': '6',
                'parentid': '-1',
                'text': 'Layout Styles',
                'value': '$2.3'
            }, {
                'id': '7',
                'parentid': '6',
                'text': 'Grid View',
                'value': '$2.3'
            }, {
                'id': '8',
                'parentid': '6',
                'text': 'kanban View',
                'value': '$2.3'
            }, {
                'id': '9',
                'parentid': '6',
                'text': 'Timeline View',
                'value': '$2.3'
            }
        ];
        const source = {
            datafields: [
                { name: 'id' },
                { name: 'parentid' },
                { name: 'text' },
                { name: 'value' }
            ],
            datatype: 'json',
            id: 'id',
            localdata: data,
            
        };
        const dataAdapter = new jqx.dataAdapter(source, { autoBind: true });
        const records = dataAdapter.getRecordsHierarchy('id', 'parentid', 'items', [{ name: 'text', map: 'label' }]);
        this.state = {
            source: records
        }
    }
    public componentDidMount(): void {
        this.myTree.current!.expandAll();
      }
    public render() {
        return (
            <JqxTree ref={this.myTree} theme={'bootstrap'} style={{border:"none !important"}} 
                source={this.state.source} checkboxes={false}
            />
        );
    }
}
export default TreeMenu;