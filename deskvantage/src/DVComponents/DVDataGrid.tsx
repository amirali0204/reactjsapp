import * as React from 'react';
import * as ReactDOM from 'react-dom';
import JqxGrid, { IGridProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxgrid';
import {griddata} from "./beverages";
import JqxButton from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxbuttons';
import {dvGridColumns,dvGridDataFields} from "../DVComponents/ComponentData/GridList/index"
import JqxWindow from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxwindow';
import FormBuilder from '../DVControllers/FormBuilder';
import { withRouter } from "react-router-dom";
import { connect } from 'react-redux'
import { Dispatch } from "redux";


class DVDataGrid extends React.PureComponent<{}&any, IGridProps&any> {
    private myGrid = React.createRef<JqxGrid>();
    private myWindow = React.createRef<JqxWindow>();
    private jqxWidget = React.createRef<HTMLDivElement>();
    private  rendertoolbar:any;
    constructor(props) {
        super(props);
        this.myGridOnRowSelect = this.myGridOnRowSelect.bind(this);
        this.rendertoolbar = (statusbar: any): void => {
            const style: React.CSSProperties = { float: 'left', marginLeft: '5px' };
            const buttonsContainer = (
                <div style={{ overflow: 'hidden', position: 'relative', margin: '5px' }}>
                    <div id={'PreviewButton'} style={style} />
                    <div id={'deleteButton'} style={style} />
                    <div id={'EditButton'} style={style} />
                </div>
            );
            ReactDOM.render(buttonsContainer, statusbar[0]);
        }
        const source: any =
        {
            datafields: dvGridDataFields[this.props.menuselected],
            datatype: 'json',
            id: 'id',
            pagesize: 15,
            localdata: griddata,
            sortcolumn: 'name',
            sortdirection: 'asc'
        };
        this.state = {
            columns: dvGridColumns[this.props.menuselected],
            source: new jqx.dataAdapter(source),
        }

    }
    public componentWillReceiveProps(){
    //    this.setState({columns: dvGridColumns[this.props.menuselected],})
    //    this.myGrid.current!.renderWidget();
    }
    public componentDidUpdate(){

    }
    public componentDidMount() {
        const offsetLeft = this.jqxWidget.current!.getBoundingClientRect().left;
        const offsetTop = this.jqxWidget.current!.getBoundingClientRect().top;
        this.myWindow.current!.setOptions({
            position: { x: offsetLeft, y: offsetTop},
            width: this.jqxWidget.current!.getBoundingClientRect().width,
        });
        this.myWindow.current!.focus();  
        setTimeout(() => {
            this.createButtons();
        },100);  
    }
    
    public render() {
        return (
            <div ref={this.jqxWidget} id="tempss">
            <JqxGrid  theme={'bootstrap'} sortable={true} altrows={true}  showtoolbar={true}
            rendertoolbar={this.rendertoolbar} pageable={true}
            onSort={this.myGridOnSort} filterable={true} autoshowcolumnsmenubutton={true}
                width={'100%'} height={window.innerHeight-245} ref={this.myGrid}
                onRowselect={this.myGridOnRowSelect} selectionmode={'singlerow'} showcolumnlines={false}
                showcolumnheaderlines={false} rowsheight={50}
                source={this.state.source} columns={this.state.columns} columnsresize={true} > 
                    <JqxWindow ref={this.myWindow} width={'70%'} 
                    height={window.innerHeight-245} resizable={false} draggable={false}
                    isModal={true} autoOpen={false} >
                    <div><FormBuilder Id={this.props.menuselected}/></div>
                    </JqxWindow>
                </JqxGrid>
            </div>
        );
    }
    private createButtons(): void {
       
        const deleteButtonClick = (event?: any) => {

        };
        const EditButtonClick = (event?: any) => {
            this.myWindow.current!.open();
        };
        const PreviewButtonClick = (event?: any) => {
            this.myWindow.current!.open();

        };
        ReactDOM.render(
            <JqxButton onClick={PreviewButtonClick} theme={'bootstrap'}
                width={35} height={25} value={''} imgSrc={'./../Assets/folder-preview.png'}
                imgPosition={'center'} textPosition={'center'} textImageRelation={'imageBeforeText'} />,
            document.getElementById('PreviewButton')
        );
        ReactDOM.render(
            <JqxButton onClick={EditButtonClick} theme={'bootstrap'}
                width={35} height={25} value={''} imgSrc={'./../Assets/YEdit.png'}
                imgPosition={'center'} textPosition={'center'} textImageRelation={'imageBeforeText'} />,
            document.getElementById('EditButton')
        );
        ReactDOM.render(
            <JqxButton onClick={deleteButtonClick} theme={'bootstrap'}
                width={35} height={25} value={''} imgSrc={'./../Assets/trash.png'}
                imgPosition={'center'} textPosition={'center'} textImageRelation={'imageBeforeText'} />,
            document.getElementById('deleteButton')
        );
        
        
    }
    private myGridOnSort(event: any): void {
    }
    private myGridOnRowSelect(event: any): void {
        this.myWindow.current!.open();

    };
}
export interface IStoreState {
    type: string
  };
interface NotesListState {
    menuaction: (id) => (dispatch: Dispatch<IStoreState>) => Promise<void>;
  }
let mapStateToProps =  state => {
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
};
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
  )((DVDataGrid));
//export default ()