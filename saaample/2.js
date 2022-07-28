function addTable() {
      // Loop to create 2D array using 1D array
      let s = document.getElementById("abcd").value ;
        let se = document.getElementById("no_of_frames").value ;
        var g;
        if(s.length>(se + 2)){
            g = s.length;
        }
        else{
            g = se + 2;
        }
var tables = new Array(g)
for (var i = 0; i < tables.length; i++) {
    tables[i] = new Array(g);
}
  
var h = 0;
  
// Loop to initialize 2D array elements.
for (var i = 0; i < g; i++) {
    for (var j = 0; j < g; j++) {
        tables[i][j] = h++;
    }
}
    var myTableDiv = document.getElementById("myDynamicTable");
      
    var table = document.createElement('TABLE');
    table.border='1';
    
    var tableBody = document.createElement('TBODY');
    table.appendChild(tableBody);
      
    for (var ij=0; ij<se; ij++){
       var tr = document.createElement('TR');
       tableBody.appendChild(tr);
       
       for (var jk=0; jk<s.length; jk++){
           var td = document.createElement('TD');
           td.width='75';
           td.appendChild(document.createTextNode(tables[ij][jk]));
           tr.appendChild(td);
       }
    }
    myTableDiv.appendChild(table);
    
}