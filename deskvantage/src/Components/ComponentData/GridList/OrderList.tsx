export const imagerenderer = (row: number, datafield: string, value: string): string => {
    return '<img style="margin-left: 5px;" height="40" width="40" src="./Assets/' + value + '.jpg"/><a style="margin-bottom: 5px;" >Andrew Smith</a>';
};
export const columns = [
    { text: 'Order ID', datafield: 'id', width: '10%' },
    { text: 'Customer Name', datafield: 'type' , width: '30%', cellsrenderer: imagerenderer  },
    { text: 'Service Type', datafield: 'calories', width: '20%' },
    { text: 'Status', datafield: 'totalfat', width: '20%' },
    { text: 'Due Date', datafield: 'protein', minwidth: '20%' }
];

export const datafields= [
    { name: 'id', type: 'string' },
    { name: 'name', type: 'string' },
    { name: 'type', type: 'string' },
    { name: 'calories', type: 'int' },
    { name: 'totalfat', type: 'string' },
    { name: 'protein', type: 'string' }
];