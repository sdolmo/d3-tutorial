var data = [10, 20];

var canvas = d3.select("body")
               .append("svg")
               .attr("width", 500)
               .attr("height", 500);
// first circle
var circle1 = canvas.append("circle")
            .attr("cx", 50)
            .attr("cy", 100) // this y axis indicates that this circle is further down the page
            .attr("r", 25);

var circle2 = canvas.append("circle")
              .attr("cx", 50)
              .attr("cy", 200)
              .attr("r", 25);

// the circle selector inside the svg element is no longer empty
// Why? because above we have appended the circle and given it some attributes
// second circle
var circles = canvas.selectAll("circle")
            // this data bindding represents one of the data elements (ie 10)
            // Here the data is now bound to an existing circle meaning...
             .data(data)
           // This is the update selection, where data elements have their DOM elements
             .attr("fill", "red")
            // There are no placeholders for data elements that have no coresponding DOM elements
            // 20 indicates the enter selection, which contains placeholders for all the elements w/o DOM elements
             .enter()
               .append("circle")
               .attr("cx", 50)
               .attr("cy", 50)
               .attr("fill", "green")
               .attr("r", 25);
