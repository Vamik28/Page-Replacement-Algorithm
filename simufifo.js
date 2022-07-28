function addTable() 
{
    let str = document.getElementById("abcd").value; //get input string
    let i = 0,j = 0; //var declaration
    let flag = 1;
    for (i = 0; i < str.length; i++)
    {
      if 
      (str[i] == "-" ||str[i] == "." ||(str[i] >= "a" && str[i] <= "z") ||(str[i] >= "A" && str[i] <= "Z")) 
      {
        // if string contains any alphabetical,decimal or negative value
        flag = 0;
      }
    } // Big O(n)
    if (flag == 1) 
    {
      let inputString = str.split(","); //it reomve ',' from the input string
      let frames = document.getElementById("no_of_frames").value;
      var dimension; //dimension of the table
      var noOfFrames = frames - "0";
      let tkd = noOfFrames ;
      if (inputString.length > frames - "0" + 1) 
      {
        dimension = inputString.length;
      } else 
       {
        //assign value to dimension
         dimension = frames - "0";
          dimension = dimension + 2;
       }
      var tables = new Array(dimension); //create a 1d array
  
      for (i = 0; i < tables.length; i++) 
       {
        tables[i] = new Array(dimension); //create a 2d array, Big O(n)
       }
       //O(n)
  
      for (i = 0; i < dimension; i++) 
      {
        for (j = 0; j < dimension; j++) 
          tables[i][j] = -1; // set all values -1 initially, Big O (n square)
      }//O(dimension*dimension)
  
    
    for(i = 0;i<inputString.length;i++){ 
         if(i == 0)
         {
             tables[0][i] = inputString[i] - '0';
             tables[noOfFrames][i] = inputString[i] - '0';
             tables[noOfFrames + 1][i] = -1*(noOfFrames - i);
         }
         else
         {
             for(j = 0;j<noOfFrames + 1;j++)
             {
                 if(j == 0)
                 {
                     tables[j][i] = inputString[i] - '0';  // string ith value at top of the table
                 }
                 else
                  {
                     tables[j][i] = tables[j][i-1];  // copy elements of previous column
                  }

             }//time complexity O(noofframes)
             if(i<noOfFrames){
                 tables[noOfFrames - i][i] = inputString[i] - '0';  //inserting value of input string into the table
                 tables[noOfFrames + 1][i] = -1*(noOfFrames - i);
             }
             else
             {
                   let y = 0;
                   for(j = 1;j<noOfFrames + 1;j++)
                   {
                    if(tables[j][i] == inputString[i] - '0')

                       y = j;  // check for hit and miss
                   }// Big O (noofFrames)
               if(y == 0){
                  if(tkd< 1 ){
                    tkd = noOfFrames;
                  }
                   tables[tkd][i] = inputString[i] - '0';
                   tables[noOfFrames + 1][i] = -1*tkd;
                   tables[noOfFrames + 1][column] = -1*tkd;
                   tkd--;
               }
               else
                   tables[noOfFrames + 1][i] = y;
               }
         }
    }
      // time complexity for creating table is O(noframes * inputstring length);
      let pages = inputString.length;
      let NoOfPageFault = 0,
        NoOfHit = 0,
        hitratio = 0.0,
        missratio = 0.0; // declaration of required variable;
  
        var myTableDiv = document.getElementById("myDynamicTable");
        var table = document.createElement("TABLE");
        table.border = "1";
        var tableBody = document.createElement("TBODY");
        table.appendChild(tableBody);
        for (var row = 0; row < noOfFrames + 2; row++) 
        {
          var tr = document.createElement("TR");
          tableBody.appendChild(tr);
          for (var column = -1; column < inputString.length; column++) 
          {
            var td = document.createElement("TD");
            td.width = "75";
            if (column == -1) 
            {
              if (row == 0) 
              {
                td.appendChild(document.createTextNode("Reference string")); // add cell (0,0) for simulation table
              } else if (row == noOfFrames + 1)
               {
                td.appendChild(document.createTextNode("Status")); // add cell (last row,0) for simalation table
               } 
               else 
                {
                  let r = noOfFrames - row + 1 ;
                td.appendChild(document.createTextNode("Frame " + r) ); //add cell (row,0) for simulation table
                //  td.style.backgroundColor = "red";
                }
            } else if (row == noOfFrames + 1) 
            {
              if (tables[row][column] > 0)
              {
                td.appendChild(document.createTextNode("Hit")); // add cell (lastrow,column) for simulation table
                NoOfHit++;
              } else 
               {
                td.appendChild(document.createTextNode("Miss")); // add cell (lastrow,column) for simulation table
                NoOfPageFault++;
              
               }
            } else if (tables[row][column] == -1 ) 
              td.appendChild(document.createTextNode(" "));
              else if(tables[noOfFrames + 1][column] > 0 && row == tables[noOfFrames + 1][column]  )
            
            {
              td.appendChild(document.createTextNode(tables[row][column])); // add cell (row,column) for simulation table
              td.style.backgroundColor = "green";
            }
            else if(tables[noOfFrames + 1][column] < 0 && row == tables[noOfFrames + 1][column]*-1 )
            
            {
              td.appendChild(document.createTextNode(tables[row][column])); // add cell (row,column) for simulation table
              td.style.backgroundColor = "red";
            }

            else if(tables[noOfFrames + 1][column] == 0 && row == tables[noOfFrames + 1][column]*-1)
            
            {
              td.appendChild(document.createTextNode(tables[row][column])); // add cell (row,column) for simulation table
              td.style.backgroundColor = "red";
            }

              
             else 
            {
              td.appendChild(document.createTextNode(tables[row][column])); // add cell (row,column) for simulation table
              
            }
            tr.appendChild(td);
          }
        } // time complexity is O(noofframes*inputstring length)
       
  
      myTableDiv.appendChild(table);
  
      hitratio = NoOfHit / pages; // assign value to hitratio
      missratio = NoOfPageFault / pages; // assign value to missratio
  
      var ctx = document.getElementById("myChart").getContext("2d");
  
      var myChart = new Chart(ctx,
      {
        type: "bar",
        data: {
          labels: [
            "Pages",
            "Frame",
            "No of hits",
            "No of page Faults",
            "Hit Ratio",
            "Miss Ratio",
          ], //assigning value to a chart
          datasets: [
            {
              label: "#FIFO",
              data: [
                pages,
                noOfFrames,
                NoOfHit,
                NoOfPageFault,
                hitratio,
                missratio,
              ],
              backgroundColor: 
              [
                "rgba(255, 99, 132, 0.2)",
                "rgba(54, 162, 235, 0.2)",
                "rgba(255, 206, 86, 0.2)",
                "rgba(75, 192, 192, 0.2)",
                "rgba(153, 102, 255, 0.2)",
                "rgba(255, 159, 64, 0.2)",
              ],
              borderColor: 
              [
                "rgba(255, 99, 132, 1)",
                "rgba(54, 162, 235, 1)",
                "rgba(255, 206, 86, 1)",
                "rgba(75, 192, 192, 1)",
                "rgba(153, 102, 255, 1)",
                "rgba(255, 159, 64, 1)",
              ],
              borderWidth: 1,
            },
          ],
        },
        options: 
        {
          scales:
           {
            y: 
            {
              beginAtZero: true,
            },
          },
        },
      }
      );
  
     
    } 
    else 
     {
      alert
      (
        "Characters,negative and decimal number are not allowed in input string"
      ); //if any Alphabetical,negative or decimal number will be provided in the input string, an alert message
        // will be produced
     }
  }
  