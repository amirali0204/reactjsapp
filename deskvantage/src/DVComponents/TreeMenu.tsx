import * as React from 'react';
import JqxTree, { ITreeProps,jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxtree';

class TreeMenu extends React.Component<ITreeProps> {
    private myTree = React.createRef<JqxTree>();
    constructor(props) {
        super(props);

        // const source: any  = {
        //     datafields: [
        //         { name: 'id' },
        //         { name: 'parentid' },
        //         { name: 'text' },
        //         { name: 'value' }
        //     ],
        //     datatype: 'json',
        //     id: 'id',
        //     localdata: data,
        // };
        // const dataAdapter = new jqx.dataAdapter(source, { autoBind: true });
        // this.state = {
        //     source: dataAdapter.getRecordsHierarchy('id', 'parentid', 'items', [{ name: 'text', map: 'label' }])
        // }
    }
    public componentDidMount(): void {
        this.myTree.current!.expandAll();
      }
    public render() {
        return (
            <JqxTree ref={this.myTree} theme={'bootstrap'} style={{border:"none !important"}} 
                source={this.props.source} checkboxes={false}
            />
        );
    }
}
export default TreeMenu;