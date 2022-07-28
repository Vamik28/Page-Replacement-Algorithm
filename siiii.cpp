#include<bits/stdc++.h>
using namespace std;
// class queuess{
//     public:
//     int *arr;
//     int front;
//     int back;
//     int size;
//     public:
//     queuess(int n){
//           arr = new int[n];
//           front= -1;
//           back = -1;
//           size = n ;
//     }
//     void enqueue(int val){
//             if(isempty()){
//                 front++;
//                 back++;
//                 arr[back] = val;
//             }
//             else if(isfull()){
//                 cout<<"queue is full!"<<endl;
//             }
//             else{
//                 back++;
//                 arr[back] = val;

//             }
    
//     }
//     void dequeue(){
//         if(isempty()){
//                 cout<<"queue is empty!"<<endl;
//         }
//         else
//            front++;
//      }
//      void swap(){
//         if(isempty()){
//                 cout<<"queue is empty!"<<endl;
//         }
//         else
//            front++;
//      }
//      bool isempty(){
//          if(front == -1 && back == -1 || front > back){
//              return true;
//          }
//          return false;
//      }
//      bool isfull(){
//          if(back == size - 1){
//                return true;
//          }
//          return  false;
//      }
//      void traverse(){
//          for(int i = front ;i<=back;i++){
//              cout<<arr[i]<<" ";
//          }
//          cout<<endl;
//      }
// };
int main(int argc, char const *argv[])
{
    int i,j, pagefault = 0,hit  = 0,no_of_frames;
      cin>>no_of_frames;
    string s;
    cin>>s;
    
    int arr[no_of_frames] = {0};
    // cout<<s<<no_of_frames;
    for(j = 0;j<s.size();j++){
         if(s[j] == ','){
             continue;
         }
         for(i = 0;i<no_of_frames;i++){
               if(arr[i] == 0){
                   pagefault++;
                    arr[i] = s[j] - '0';
                    break;
               }               
               else{
                   if(arr[i] == s[j] - '0'){
                       hit++;
                       break;
                   }
               }                                                     
         }
        //  if(i == no_of_frames){
        //      pagefault++;
        //       i = 0;
        //   }
        //   arr[i] = s[j] - '0';  
        if(i == no_of_frames){
             pagefault++;
             for(int k = 1;k<no_of_frames;k++){
                arr[k-1] = arr[k];
             }
             arr[2] = s[j] - '0';
             i = 0; 
          }  

    }    

    cout<<pagefault<<" "<<hit<<endl;  
	return 0;
}
