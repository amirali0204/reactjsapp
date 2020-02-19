export const columns = [
    { text: 'Project ID', datafield: 'name', width: '20%' },
    { text: 'Customer Name', datafield: 'type', width: '20%' },
    { text: 'Order ID', datafield: 'calories', width: '20%' },
    { text: 'Status', datafield: 'totalfat', width: '20%' },
    { text: 'Due Date', datafield: 'protein', minwidth: '20%' }
];
export const datafields= [
    { name: 'name', type: 'string' },
    { name: 'type', type: 'string' },
    { name: 'calories', type: 'int' },
    { name: 'totalfat', type: 'string' },
    { name: 'protein', type: 'string' }
];