import  React from "react"
import {LeftMenuLayouts} from "../Components/ComponentData/LeftTreeMenuList"
import TreeMenu from "../Components/TreeMenu";
import {jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxtree';
import JqxButton from "jqwidgets-scripts/jqwidgets-react-tsx/jqxbuttons";
import JqxWindow from "jqwidgets-scripts/jqwidgets-react-tsx/jqxwindow";
import { FormBuilder } from "./FormBuilder";

type MenuID = {
    Id: string;
}
export class LeftTreeBuilder extends React.Component<MenuID,any> {
    private myWindow = React.createRef<JqxWindow>();

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
    onComposeButton = (event?: any) => {
        this.myWindow.current!.open();
    };
    render() {
        return (
          
            <div >
                <JqxButton onClick={this.onComposeButton} theme={'bootstrap'}
                 width={'75%'} height={35} style={{marginLeft:'10px'}} value={'Compose '+ this.props.Id} 
                 imgSrc={'./../Assets/Create.png'}
                 imgPosition={'center'} textPosition={'center'} textImageRelation={'imageBeforeText'} />
                 <br/>
                <TreeMenu source={this.state.source1}></TreeMenu>
                <JqxWindow ref={this.myWindow} width={'70%'} 
                    height={window.innerHeight-160} resizable={false} draggable={false}
                    isModal={true} autoOpen={false} >
                    <div><FormBuilder Id={this.props.Id}/></div>
                    </JqxWindow>
            </div>
        );
    }
  }
  export default LeftTreeBuilder;