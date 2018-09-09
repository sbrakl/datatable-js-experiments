//JS Scripts
$(document).ready(function(){

    var testd = {
        uniqueColumns : [ 'a', 'b', 'c' ],
        verdetails : [
            { os: 'windows', server: 'in-win-gk', 
                columns: [
                    {a:1, deployedOn: 'someday'},
                    {b:1, deployedOn: 'someday'},
                    {c:1, deployedOn: 'someday'}
                ]
            },
            { os: 'windows', server: 'in-win-kr', 
                columns: [                    
                    {b:1, deployedOn: 'someday'},
                    {c:1, deployedOn: 'someday'}
                ]
            },
            { os: 'windows', server: 'in-win-gk', 
                columns: [
                    {a:1, deployedOn: 'someday'},
                    {b:1, deployedOn: 'someday'}                    
                ]
            }
        ]
    }

    function cellCreated(td, cellData, rowData, row, col) {
        if ( cellData < 1 ) {
          $(td).css('color', 'red')
        }
    }

    var datatableOption = {}
    datatableOption['paging'] = false;
    datatableOption['ordering'] = false;
    colsettings = []
    // 1st Column
    colsetting = { title : 'Servers', data: 'server'};
    colsettings.push(colsetting);
    testd.uniqueColumns.forEach(function(col, index) {
        colsetting = { title : col, data: col, defaultContent: 'N.A.'};
        colsettings.push(colsetting);
    });
    datatableOption['columns'] = colsettings;
   


    var table = $('#mytable').DataTable(datatableOption)
    testd.verdetails.forEach(function(col, index) {
        
    });


    // var table = $('#mytable').DataTable(
    //     {
    //         paging:   false,
    //         ordering: false,
    //         columns: [
    //             { title: 'A', data: 'a', defaultContent: "N.A." },
    //             { title: 'B', data: 'b', defaultContent: "N.A." },
    //             { title: 'C', data: 'c', defaultContent: "N.A." }                
    //            ]             
    //     }
    // )

    $('#mytable tbody').on( 'mouseenter', 'td', function () {
            var colIdx = table.cell(this).index().column;
            $( table.cells().nodes() ).removeClass( 'highlight' );
            $( table.column( colIdx ).nodes() ).addClass( 'highlight' );
    });

    $('#mytable tbody').on( 'click', 'td', function () {
        var rowIdx = table.cell(this).index().row;
        table.row.add()        
}) ;
});