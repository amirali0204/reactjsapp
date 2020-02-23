import JqxLayout, { ILayoutProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxlayout';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import DVDataGrid from '../DVComponents/DVDataGrid';
import DVKanban from '../DVComponents/DVKanban';
import DVTimeline from '../DVComponents/DVTimeline';
import DVMenuList from "../DVComponents/DVMenuList";
import {LeftTreeBuilder} from "../DVControllers/LeftTreeBuilder"
import { connect } from 'react-redux'
import { withRouter } from "react-router-dom";
import { Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import createBrowserHistory from 'history/createBrowserHistory';
import {persistor,store} from "./../DVReducers/Storeconfig"
import { PersistGate } from 'redux-persist/lib/integration/react';
import DVBarGuage from "../DVComponents/DVBarGuage";
import DVBarChart from "../DVComponents/DVBarChart";
import JqxDropDownButton, { IDropDownButtonProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxdropdownbutton';
import JqxTree from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxtree';
class ListScreen extends React.Component<NotesListState&any, ILayoutProps&any&IDropDownButtonProps> {
    private myLayout = React.createRef<JqxLayout>();
    private history = createBrowserHistory();
    listlayout = [{
        items: [
            {
            alignment: 'left',
            items: [{
                contentContainer: 'LeftMenuPanel',
                initContent: (): void => {
                     ReactDOM.render(
                        <Provider store={store}>
                            <PersistGate persistor={persistor}>
                                <Router history={this.history}>
                                    <LeftTreeBuilder Id={this.props.menuselected}/>
                                </Router>
                            </PersistGate>
                            </Provider>
                     , document.getElementById('LeftMenuTree'));
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
                    initContent: (): void => {
                        ReactDOM.render(
                            <Provider store={store}>
                                <PersistGate persistor={persistor}>
                                    { this.props.viewselected == "Grid" ? <DVDataGrid  menuselected={this.props.menuselected} />: null}
                                    { this.props.viewselected == "Kanban" ? <DVKanban  menuselected={this.props.menuselected} />: null}
                                    { this.props.viewselected == "Timeline" ? <DVTimeline  menuselected={this.props.menuselected} />: null}
                                </PersistGate>
                            </Provider>
                        , document.getElementById('DocumentPanel'));
                   },
                    type: 'documentPanel',
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
                initContent: (): void => {
                ReactDOM.render(<DVBarGuage/>, document.getElementById('SystemStatsExplorer'));
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

     componentWillUpdate(prevProps, prevState) {
        // this.myLayout.current.destroy();
        // this.myLayout.current.loadLayout(this.state.layout);
        // this.myLayout.current.renderWidget();
        // this.myLayout.current.render();
        // this.myLayout.current.forceUpdate();
     }
    public render() {
        return (
            <div>
                <div>
                    <div style={{float:'left', width: '85%'}}>
                        <img style={{float:'left', height:'60px', width:'15%'}} src="./../Assets/system_logo.png" alt="Logo" />
                        <div style={{float:'right', marginLeft: '30px', marginTop:'26px',width: '800px'}}>
                            <DVMenuList /></div>
                    </div>
                    <div style={{ height:'43px', float: 'right' , marginTop:'17px',width: '15%'}}>
                        <JqxDropDownButton theme={'material-purple'} width={200} height={25} autoOpen={true}>
                            <JqxTree  width={200}>
                        <ul>
                            <li item-selected='true'>Logout</li>
                            <li item-selected='false'>
                                Account Configurations
                            </li>
                        </ul>
                    </JqxTree>
                        </JqxDropDownButton>
                    </div>
                </div>
                <br/>
                <hr/> <br/>
                <div>
                <JqxLayout style={{border: 'none'}} theme="material" width={'100%'} ref={this.myLayout}
                height={window.innerHeight-115} layout={this.state.layout}>
                    <div data-container="Document1Panel">
                        <div id="DocumentPanel" style={{ border: 'none', width: '99%', height: '96%' }} />
                        {/* { this.props.viewselected == "Grid" ? : null}
                        { this.props.viewselected == "Kanban" ?  <DVKanban menuselected={this.props.menuselected}/> :null}
                        { this.props.viewselected == "Timeline" ? <DVTimeline  menuselected={this.props.menuselected}/>: null }                                */}
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
            viewselected: state.rootReducer.viewselected
        }
    }else{
        return {
            state: state,
            menuselected: "Orders",
            viewselected: "Grid",
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
    )(withRouter(ListScreen));