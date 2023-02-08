class Grid {
    constructor(options) {
        this.options = options;
        this.data = [];
    }

    getData(cb){
        return fetch(this.options.url)
        .then(response => response.json())
        .then(data => cb(null, data));
    }

    render() {
        let sortedCol = null;
        if(this.options.columns){
            sortedCol = (this.options.columns.find( (col) => col.sort==true));
        }
        
        this.getData( (err, data) => {
            this.data = data.result;
            if(sortedCol){
                let field =  sortedCol.field;
                let x =  this.data.sort( (a,b) => {
                    let fa = a[field].toString().toLowerCase(),
                        fb = b[field].toString().toLowerCase();
                    if (fa < fb) {
                        return -1;
                    }
                    if (fa > fb) {
                        return 1;
                    }
                    return 0;
                });
            }
            let gridHTML = `<table style="border-collapse: collapse; font-family: Tahoma, Geneva, sans-serif;">
                                ${this._renderHeader()}
                                <tbody>
                                    ${this.data.map(row => this._renderRow(row))}
                                </tbody>
                            </table>`;
            document.getElementById(this.options.containerId).innerHTML = gridHTML;
        });
    }

    _renderRow(row){
        let columns = []
        if(this.options.columns){
            columns = this.options.columns.map( (col) => col.field)
        }
        else{
            columns = Object.keys(this.data[0]);
        }
        return `<tr style="background-color: #f9fafb;">
                    ${columns.map(key => this._renderCell(key, row[key]))}
                </tr>`;

    }

    _renderCell(field, cellData){
        if(this.options.columns){
            let colConfig = this.options.columns.find((col)=> col.field == field);
            if(colConfig && colConfig.render){
                cellData = colConfig.render(cellData);
            }
        }
        return `<td style="color: #636363; border: 1px solid #dddfe1; padding: 15px;">
                    ${cellData}
                </td>`;
    }

    _renderHeaderCell(colName){
        return `<td style="background-color: #54585d;padding: 15px;
                    color: #ffffff;
                    font-weight: bold;
                    font-size: 13px;
                    border: 1px solid #54585d;">${colName}  
                </td>`;
    }

    _renderHeader(){
        let columns = [];
        if(this.options.columns){
            columns = this.options.columns.map( (col) => col.title)
        }
        else{
            columns = Object.keys(this.data[0]);
        }
        return `<thead>
                    <tr>
                        ${columns.map(col => this._renderHeaderCell(col))}
                    </tr>
                </thead>`;
    }
    
    getConfig() {
        console.log(this.options)
    }
}

export default Grid;