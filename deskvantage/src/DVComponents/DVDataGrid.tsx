import * as React from 'react';
import JqxGrid, { IGridProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxgrid';
import {griddata} from "./beverages";
class DVDataGrid extends React.PureComponent<{}, IGridProps> {
    constructor(props: {}) {
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
            source: new jqx.dataAdapter(source)
        }
    }
    
    public render() {
        return (
            <JqxGrid theme={'material'} sortable={true} altrows={true} 
            onSort={this.myGridOnSort} filterable={true} selectionmode={'checkbox'}
                width={'100%'} height={window.innerHeight-245} source={this.state.source} columns={this.state.columns} columnsresize={true} />
        );
    }
    private myGridOnSort(event: any): void {
    }

}
export default DVDataGrid;