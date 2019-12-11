let tableData = data;

function tableDisplay(ufoSightings) {
    let tbody = d3.select("tbody");
    ufoSightings.forEach((ufoRecord) => {
        let row = tbody.append("tr");
        Object.entries(ufoRecord).forEach(([key, value]) => {
            let cell = row.append("td");
            cell.html(value);
        });
    });
};

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
    let dateInput = d3.select("#datetime").property("value");

    if (dateInput.trim() === "") {
        let filterData = tableData;
    
    } else {
        let filterData = tableData.filter(ufoSighting => 
            ufoSighting.datetime === dateInput.trim());
    };
    if (filteredData.length === 0) {
        d3.select("tbody")
        .append("tr")
        .append("td")
            .attr("colspan", 7)
            .html("<h4>No  Records Found</h4>");
    };
    console.log(filterData);
    tableDisplay(filterData);

 });

