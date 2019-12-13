let tableData = data;

function tableDisplay(ufos) {
  let tbody = d3.select("tbody")
  .selectAll("tr")
  .data(tableData)
  .enter()
  .append("tr")
  .html(function(d) {
    return `<td>${d.datetime}</td><td>${d.city}</td><td>${d.state}</td><td>${d.country}</td><td>${d.shape}</td><td>${d.duration}</td><td>${d.comments}</td>`;
  });
}

 function deleteTbody() {
     d3.select("tbody")
     .selectAll("tr").remove()
     .selectAll("td").remove();
 };

 console.log(tableData);
 tableDisplay(tableData);

let button = d3.select("#filter-btn");

button.on("click", function(event) {
    d3.event.preventDefault();
    deleteTbody();
    var dateInput = d3.select("#datetime").property("value");
    
    if (dateInput.trim() === "" ) {
      
      var filteredData = tableData;
    } else {
        
      var filteredData = tableData.filter(ufo => 
        ufo.datetime === dateInput.trim());
    };
  
    
    if (filteredData.length == 0) {
      d3.select("tbody")
        .append("tr")
        .append("td")
          .attr("colspan", 7)
          .html("<h4>No Records Found</h4>");
    };
  
    console.log(filteredData);
    tableDisplay(filteredData);
  });



