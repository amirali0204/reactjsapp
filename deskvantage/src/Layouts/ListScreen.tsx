import JqxLayout, { ILayoutProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxlayout';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import DVDataGrid from '../DVComponents/DVDataGrid';
import DVMenuList from "../DVComponents/DVMenuList";
import TreeMenu from "../DVComponents/TreeMenu";
import DVBarGuage from "../DVComponents/DVBarGuage";
import DVBarChart from "../DVComponents/DVBarChart";
import JqxButton from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxbuttons';
class ListScreen extends React.PureComponent<{}, ILayoutProps> {
    constructor(props: {}) {
        super(props);
        this.state = {
            layout: [{
                items: [{
                    alignment: 'left',
                    items: [{
                        contentContainer: 'SolutionExplorerPanel',
                        initContent: (): void => {ReactDOM.render(<TreeMenu/>, document.getElementById('solutionExplorerTree'));},
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
                            title: 'User Management',
                            type: 'documentPanel',
                            initContent: (): void => {ReactDOM.render(<DVDataGrid/>, document.getElementById('Document1PanelExplorer'));}
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
                    width: '66%',
                    minWidth: '66%'
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
                    minWidth: '18%',
                    width: '18%',
                    allowClose:false,
                    allowPin:false,
                    selected: false,
                    allowUnpin:false
                }],
                orientation: 'horizontal',
                type: 'layoutGroup'
            }]
        }
    }
    public render() {
        return (
            <div>
                <div>
                    <h4 style={{float:'left'}}>DeskVantage Logo</h4>
                    <div style={{marginLeft: '300px',paddingTop:"13px", width: '75%'}}><DVMenuList />
                </div>
            </div>
            <br/>
            <hr></hr>
            <br/>
            <JqxLayout style={{border: 'none'}} theme="material" width={'100%'} height={window.innerHeight-105} layout={this.state.layout}>
                <div data-container="Document1Panel">
                    <div>
                        <div style={{float:'left', marginTop:'0px', marginLeft:'340px'}}>
                            <div style={{float:'left'}}>
                                <JqxButton width={120} imgPosition={'left'} textPosition={'left'}
                                        textImageRelation={'imageBeforeText'} imgSrc={'./../images/facebook.png'}>Create</JqxButton>
                                        </div>
                            <div style={{float:'right', marginLeft:'10px'}}><JqxButton width={120} imgPosition={'left'} textPosition={'left'}
                                        textImageRelation={'imageBeforeText'} imgSrc={'./../images/facebook.png'}>Delete</JqxButton>
                            </div>
                            <div style={{float:'right', marginLeft:'10px'}}><JqxButton width={120} imgPosition={'left'} textPosition={'left'}
                                        textImageRelation={'imageBeforeText'} imgSrc={'./../images/facebook.png'}>Block User</JqxButton>
                            </div>
                        </div>
                        
                        <div id="Document1PanelExplorer" 
                        style={{ border: 'none', width: '99%', height: '90%',marginTop:'20px',float:'left' }} />
                       
                    </div>

                </div>
                <div data-container="MessagesListPanel">List of Messages</div>
                <div data-container="RecentActivityListPanel">List of Recent Activities</div>
                <div data-container="RecentFilesPanel">List of Recent updated Files</div>
                <div data-container="OutputPanel">Output</div>
                <div data-container="SolutionExplorerPanel">
                    <div id="solutionExplorerTree" style={{ border: 'none', width: '99%', height: '100%' }} />
                </div>
                <div data-container="ExtraActions">Extra Quick Actions</div>
                <div data-container="SystemStats">
                    <div id="SystemStatsExplorer3" style={{ border: 'none', width: '99%', height: '33%' }} />
                    <div id="SystemStatsExplorer" style={{ border: 'none', width: '99%', height: '33%' }} />
                    <div id="SystemStatsExplorer2" style={{ border: 'none', width: '99%', height: '34%' }} />
                </div>
            </JqxLayout>
            </div>
        );
    }
}
export default ListScreen;