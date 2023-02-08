import Grid from './src/index.js';
let gridConfig = {
    containerId: 'demo',
    url: 'http://localhost:3000/get-customer-list',
    pageSize: 10,
    columns: [
        {
            field: 'name',
            title: 'User',
            render: function(val){
                return `<strong>${val}</strong>`;
            },
            style: {},
            // sort: true
        },
        
        {
            field: 'gender',
            title: 'Sex',
        },

        {
            field: 'age',
            title: 'Age',
            render: function(val){
                return `${val} Years`;
            },
            sort: true
        },
    ],
}
let grid = new Grid(gridConfig);
grid.render();
// document.getElementById("demo").innerHTML = grid.render();