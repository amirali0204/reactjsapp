import * as React from 'react';
import * as ReactDOM from 'react-dom';
import JqxGrid, { IGridProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxgrid';
import {griddata} from "./beverages";
import JqxButton from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxbuttons';
class DVDataGrid extends React.PureComponent<{}, IGridProps> {
    constructor(props: {}) {
        const rendertoolbar = (statusbar: any): void => {
            const style: React.CSSProperties = { float: 'right', marginLeft: '5px' };
            const buttonsContainer = (
                <div style={{ overflow: 'hidden', position: 'relative', margin: '5px' }}>
                    <div id={'PreviewButton'} style={style} />
                    <div id={'deleteButton'} style={style} />
                    <div id={'EditButton'} style={style} />
                    <div id={'addButton'} style={style} />
                </div>
            );
            ReactDOM.render(buttonsContainer, statusbar[0]);
        };
        super(props);
        const source: any =
        {
            datafields: [
                { name: 'name', type: 'string' },
                { name: 'type', type: 'string' },
                { name: 'calories', type: 'int' },
                { name: 'totalfat', type: 'string' },
                { name: 'protein', type: 'string' }
            ],
            datatype: 'json',
            id: 'id',
            pagesize: 15,
            localdata: griddata,
            sortcolumn: 'name',
            sortdirection: 'asc'
        };
        this.state = {
            columns: [
                { text: 'Name', datafield: 'name', width: '20%' },
                { text: 'Beverage Type', datafield: 'type', width: '20%' },
                { text: 'Calories', datafield: 'calories', width: '20%' },
                { text: 'Total Fat', datafield: 'totalfat', width: '20%' },
                { text: 'Protein', datafield: 'protein', minwidth: '20%' }
            ],
            source: new jqx.dataAdapter(source),
            rendertoolbar,
        }
    }
    public componentDidMount() {
        setTimeout(() => {
            this.createButtons();
        });      
    }
 
    public render() {
        return (
            <JqxGrid theme={'bootstrap'} sortable={true} altrows={true}  showtoolbar={true}
            rendertoolbar={this.state.rendertoolbar} pageable={true}
            onSort={this.myGridOnSort} filterable={true} selectionmode={'checkbox'}
                width={'100%'} height={window.innerHeight-245} source={this.state.source} columns={this.state.columns} columnsresize={true} />
        );
    }
    private createButtons(): void {
        const addButtonClick = (event?: any) => {

        };
        const deleteButtonClick = (event?: any) => {

        };
        const EditButtonClick = (event?: any) => {
        };
        const PreviewButtonClick = (event?: any) => {

        };
        ReactDOM.render(
            <JqxButton onClick={addButtonClick}
                width={105} height={25} value={'Create New'} imgSrc={'./../Assets/BNewCreate.png'}
                imgPosition={'center'} textPosition={'center'} textImageRelation={'imageBeforeText'} />,
            document.getElementById('addButton')
        );
        ReactDOM.render(
            <JqxButton onClick={EditButtonClick}
                width={105} height={25} value={'Edit Record'} imgSrc={'./../Assets/YEdit.png'}
                imgPosition={'center'} textPosition={'center'} textImageRelation={'imageBeforeText'} />,
            document.getElementById('EditButton')
        );
        ReactDOM.render(
            <JqxButton onClick={deleteButtonClick}
                width={130} height={25} value={'Delete Selected'} imgSrc={'./../Assets/Delete.png'}
                imgPosition={'center'} textPosition={'center'} textImageRelation={'imageBeforeText'} />,
            document.getElementById('deleteButton')
        );
        
        ReactDOM.render(
            <JqxButton onClick={PreviewButtonClick}
                width={100} height={25} value={'Preview'} imgSrc={'./../Assets/BPreview.png'}
                imgPosition={'center'} textPosition={'center'} textImageRelation={'imageBeforeText'} />,
            document.getElementById('PreviewButton')
        );
    }
    private myGridOnSort(event: any): void {
    }

}
export default DVDataGrid;