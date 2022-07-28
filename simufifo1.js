document.getElementById("name").onclick = function(){
    let i = 0,j = 0,k = 0,NoOfPageFault = 0,NoOfHit = 0;
let InputString,NoOfFrames;

    InputString = document.getElementById("abcd").value ;
    NoOfFrames = document.getElementById("no_of_frames").value;
    console.log(InputString);
    console.log(InputString.length);
    let arr = new Array(NoOfFrames).fill(0);
    let pages = 0;
for(j = 0;j<InputString.length;j++){
  if(InputString[j] == ','){
        continue;
   }
     pages++;
   for(i = 0;i<NoOfFrames;i++){
         if(arr[i] == 0){
            NoOfPageFault++;
           arr[i] = InputString[j] - '0';
               
              break;
          }               
          else{
              if(arr[i] == InputString[j] - '0'){
                  NoOfHit++;
                  break;
              }
           }                                                     
    }
    if(i == NoOfFrames){
        NoOfPageFault++;
        for( k = 1;k<NoOfFrames;k++){
           arr[k-1] = arr[k];
        }
        arr[NoOfFrames-1] = InputString[j] - '0';
        i = 0; 
     }  

}
// alert("no of page fault " + NoOfPageFault);    
// alert("no of hit " + NoOfHit);    
var hitratio = NoOfHit/pages;

var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Pages','Frame','No of hits', 'No of page Faults','Hit Ratio','Miss Ratio'],
        datasets: [{
            label: '#FIFO',
            data: [pages,NoOfFrames,NoOfHit,NoOfPageFault,hitratio,1-hitratio],
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

