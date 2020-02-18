import  React from "react"
import {LeftMenuLayouts} from "./Layouts/LeftMenuLayouts"
import TreeMenu from "../DVComponents/TreeMenu";
import {jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxtree';

type MenuID = {
    Id: string;
}
export class LeftTreeBuilder extends React.Component<MenuID,any> {
    constructor(props){
        super(props);
        const source: any  = {
            datafields: [
                { name: 'id' },
                { name: 'parentid' },
                { name: 'text' },
                { name: 'value' }
            ],
            datatype: 'json',
            id: 'id',
            localdata: LeftMenuLayouts[this.props.Id],
        };
        const dataAdapter = new jqx.dataAdapter(source, { autoBind: true });
        this.state = {
            source1: dataAdapter.getRecordsHierarchy('id', 'parentid', 'items', [{ name: 'text', map: 'label' }])
        };
    }
    render() {
      return (
            <div >
                <TreeMenu source={this.state.source1}></TreeMenu>
            </div>
        );
    }
  }
  export default LeftTreeBuilder;