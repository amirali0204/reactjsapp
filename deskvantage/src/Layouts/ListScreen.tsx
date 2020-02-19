import JqxLayout, { ILayoutProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxlayout';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import DVDataGrid from '../DVComponents/DVDataGrid';
import DVMenuList from "../DVComponents/DVMenuList";
import {LeftTreeBuilder} from "../DVControllers/LeftTreeBuilder"
import { connect } from 'react-redux'
import DVBarGuage from "../DVComponents/DVBarGuage";
import DVBarChart from "../DVComponents/DVBarChart";
class ListScreen extends React.Component<NotesListState&any, ILayoutProps&any> {
    private myLayout = React.createRef<JqxLayout>();
    listlayout = [{
        items: [
            {
            alignment: 'left',
            items: [{
                contentContainer: 'LeftMenuPanel',
                initContent: (): void => {
                    ReactDOM.render(<LeftTreeBuilder Id={this.props.menuselected}/>, document.getElementById('LeftMenuTree'));
                },
                title: '',
                type: 'layoutPanel'
            }],
            type: 'tabbedGroup',
            orientation:'vertical',
            unpinnedWidth: '15%',
            width: '15%',
            minWidth:'15%',
            allowClose:false,
            allowPin:false,
            selected: false,
            allowUnpin:false
        },{
            items: [{
                height: '95%',
                items: [{
                    contentContainer: 'Document1Panel',
                    title: this.props.menuselected+' Management',
                    type: 'documentPanel',
                    initContent: (): void => {
                        ReactDOM.render(<DVDataGrid menuselected={this.props.menuselected}/>, document.getElementById('Document1PanelExplorer'));
                    }
                }],
                minHeight: '55%',
                type: 'documentGroup'
            }, {
                height: '5%',
                pinnedHeight:'50%',
                unpinnedHeight:'50%',
                alignment:'bottom',
                items: [{
                    contentContainer: 'MessagesListPanel',
                    title: 'Live Messages',
                    type: 'layoutPanel'
                },{
                    contentContainer: 'RecentActivityListPanel',
                    title: 'Recent Activities',
                    type: 'layoutPanel'
                },{
                    contentContainer: 'RecentFilesPanel',
                    title: 'Recent Updated Files',
                    type: 'layoutPanel'
                }],
                
                type: 'autoHideGroup',
            }],
            orientation: 'vertical',
            type: 'layoutGroup',
            width: '70%',
            minWidth: '70%'
        },{
            alignment: 'right',
            items: [ {
                contentContainer: 'SystemStats',
                initContent: (): void => {ReactDOM.render(<DVBarGuage/>, document.getElementById('SystemStatsExplorer'));
                ReactDOM.render(<DVBarGuage/>, document.getElementById('SystemStatsExplorer2'));
                ReactDOM.render(<DVBarChart/>, document.getElementById('SystemStatsExplorer3'));},
                title: '',
                type: 'layoutPanel'
            }],
            type: 'tabbedGroup',
            minWidth: '15%',
            width: '15%',
            allowClose:false,
            allowPin:false,
            selected: false,
            allowUnpin:false
        }],
        orientation: 'horizontal',
        type: 'layoutGroup'
    }];

    constructor(props) {    
        super(props);
        
        this.state = {
            layout: this.listlayout,
        }
       
    }
    public componentDidMount(): void {
   this.myLayout.current!.refresh();
   this.myLayout.current!.render();
      }
    componentDidUpdate(prevProps, prevState) {
        if((prevProps.menuselected != this.props.menuselected)) { 
            this.myLayout.current!.refresh();
            this.myLayout.current!.render();
            this.setState({layout: this.listlayout})
        }
    }
    public render() {
        return (
            <div>
                <div>
                    <img style={{float:'left', height:'60px', width:'200px'}} src="./../Assets/system_logo.png" alt="Logo" />
                    <div style={{marginLeft: '300px',paddingTop:"13px", width: '75%'}}><DVMenuList />
                </div>
            </div>
            <br/>
            <hr></hr>
            <br/>
            <JqxLayout style={{border: 'none'}} theme="material" width={'100%'} ref={this.myLayout}
            height={window.innerHeight-115} layout={this.state.layout}>
                <div data-container="Document1Panel">
                    <div>
                        <div id="Document1PanelExplorer" 
                        style={{ border: 'none', width: '99%', height: '90%',marginTop:'20px',float:'left' }} />
                       
                    </div>
                </div>
                <div data-container="MessagesListPanel">List of Messages</div>
                <div data-container="RecentActivityListPanel">List of Recent Activities</div>
                <div data-container="RecentFilesPanel">List of Recent updated Files</div>
                <div data-container="OutputPanel">Output</div>
                <div data-container="LeftMenuPanel">
                    <div id="LeftMenuTree" style={{ border: 'none', width: '99%', height: '96%' }} />
                </div>
                <div data-container="ExtraActions">Extra Quick Actions</div>
                <div data-container="SystemStats">
                    <div id="SystemStatsExplorer3" style={{ border: 'none', width: '99%', height: '33%' }} />
                    <div id="SystemStatsExplorer" style={{ border: 'none', width: '99%', height: '33%' }} />
                    <div id="SystemStatsExplorer2" style={{ border: 'none', width: '99%', height: '33%' }} />
                </div>
            </JqxLayout>
            </div>
        );
    }
}

export interface IStoreState {
    type: string
  };
interface NotesListState {
    menuaction: (id) => (dispatch: React.Dispatch<IStoreState>) => Promise<void>;
  }
const mapStateToProps = state => {
    if(state.rootReducer !== null){
        return {
            state: state,
            menuselected: state.rootReducer.menuselected,
        }
    }else{
        return {
            state: state,
            menuselected: "Orders",
        }
    }
  }
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
  )( ListScreen);