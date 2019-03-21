// function autoSearch()
// {
//     var search = document.getElementById("input");
//     var filter = search.value.toUpperCase();
//     var table = document.getElementById("table");
//     var trows = document.getElementsByTagName("tr");

//         var i = 0;
//         while (i < trows.length)
//             {
//                 tdata = trows[i].getElementsByTagName("td")[0];
//                 i++;
//                 if (tdata) {
//                     textValue = tdata.innerText;
//                     if (textValue.toUpperCase().indexOf(filter) > -1) {
//                       trows[i].style.display = "";
//                     } else {
//                       trows[i].style.display = "none";
//                     }
//                   }  
//             }
      
//     // console.log(trows); 

// }


        function autoSearch() {

            var search = document.getElementById("input");
            var filter = search.value.toUpperCase();
            var table = document.getElementById("table");
            var tr = document.getElementsByTagName("tr");
        
            for (i = 0; i < tr.length; i++) 
            {
                
              td = tr[i].getElementsByTagName("td")[0];
              if (td) {
                txtValue = td.textContent || td.innerText;
                if (txtValue.toUpperCase().indexOf(filter) > -1) {
                  tr[i].style.display = "";
                } else {
                  tr[i].style.display = "none";
                }
              }       
            }
          }