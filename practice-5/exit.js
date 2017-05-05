var data = [10];

var canvas = d3.select("body")
               .append("svg")
               .attr("width", 500)
               .attr("height", 500);
// first circle
var circle1 = canvas.append("circle")
            .attr("cx", 50)
            .attr("cy", 100) // this y axis indicates that this circle is further down the page
            .attr("r", 25);

// A circle with no corresponding DOM element
var circle2 = canvas.append("circle")
              .attr("cx", 50)
              .attr("cy", 200)
              .attr("r", 25);

var circles = canvas.selectAll("circle")
              .data(data)
              .attr("fill", "green")
              .exit()
                .attr("fill", "blue");
