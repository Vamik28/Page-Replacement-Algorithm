  function addTable() {
               
    let s = document.getElementById("abcd").value ;
    let se = document.getElementById("no_of_frames").value ;
    var g;
  var  noOfFrames = se - '0';
    if(s.length>(se - '0') + 1){
        g = s.length;
    }
    else{
        g = se - '0';
        g = g + 2;
    }
      var tables = new Array(g);
      
      
      for (var ikk = 0; ikk < tables.length; ikk++) {
        tables[ikk] = new Array(g);
    }
    let i = 0,j = 0;
     for(i = 0;i<g;i++){
         for(j = 0;j<g;j++){
             tables[i][j] = -1;
         }
     }
     
    for( i = 0;i<s.length;i++){
        
        for( j = 0;j<noOfFrames + 1;j++){
            if(j == 0){
                tables[j][i] = s[i] - '0';
            }
            else{
              
                if(i<noOfFrames){
                    tables[j+i][i] = s[i] - '0';
                    tables[noOfFrames + 1][i] = 0;
                    break;
                }
                else{
                      let k = 0;
                    for(let y = 1;y<noOfFrames + 1;y++){
                        if(tables[y][i] == s[i] - '0'){
                            k = 1;
                            // cout<<y<<" "<<i<<" "<<table[y][i]<<endl;

                        }
                    }
                    if(k == 1){
                        if(tables[noOfFrames- 2][i] == tables[noOfFrames- 2][i- 1]){
                           tables[noOfFrames + 1][i] = 1; 
                        }
                        break;
                    }
                    else{
                        let y;
                        for( y = 2;y<noOfFrames + 1;y++){
                            tables[y - 1][i] = tables[y][i];

                        }
                        tables[y - 1][i] = s[i] - '0';
                        tables[y][i] = 0;
                    }
                }
                
             }
        }
        if(i != s.length-1){
        for(j = 1;j<noOfFrames + 1;j++){
            tables[j][i+1] = tables[j][i];
        }
        }
    }
    
    let pages = s.length;
    let NoOfPageFault = 0,NoOfHit = 0,hitratio = 0.0,missratio = 0.0;

    
    var myTableDiv = document.getElementById("myDynamicTable");
      
    var table = document.createElement('TABLE');
    table.border='1';
    
    var tableBody = document.createElement('TBODY');
    table.appendChild(tableBody);
      
    for (var r=0; r<noOfFrames + 2; r++){
       var tr = document.createElement('TR');
       tableBody.appendChild(tr);
       
       for (var t=-1; t<s.length; t++){
           var td = document.createElement('TD');
           td.width='75';
                        if(t == -1){
                            if(r == 0){
                                td.appendChild(document.createTextNode("reference string"));
                                        
                            }
                            else if(r == noOfFrames + 1 ){
                                td.appendChild(document.createTextNode("status"));
                            }
                            else{
                                td.appendChild(document.createTextNode("frame " + r));
                            }
                        }
                        else if(r == noOfFrames + 1){
                            if(tables[r][t] == 1){
                                td.appendChild(document.createTextNode("hit"));
                                NoOfHit++;  
                            }
                            else{
                                td.appendChild(document.createTextNode("miss"));  
                                NoOfPageFault++;
                            }
                        }
                        else if(tables[r][t] == -1){
                            td.appendChild(document.createTextNode(" "));
                        }
                        else{
                         td.appendChild(document.createTextNode(tables[r][t]));
                       }
           tr.appendChild(td);
       }
    }
    myTableDiv.appendChild(table);

           hitratio = NoOfHit/pages;
           missratio = NoOfPageFault/pages;
        //    console.log("pages " + pages);
        //    console.log("page fault" + NoOfPageFault);
        //    console.log("no of hit" + NoOfHit);
        //    console.log("hit ratio " + hitratio);
        //    console.log("miss ratio" + missratio);
        //    
        var ctx = document.getElementById('myChart').getContext('2d');
        
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Pages','Frame','No of hits', 'No of page Faults','Hit Ratio','Miss Ratio'],
        datasets: [{
            label: '#FIFO',
            data: [pages,noOfFrames,NoOfHit,NoOfPageFault,hitratio,missratio],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }

});



    
}
 
