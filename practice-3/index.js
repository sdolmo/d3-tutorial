// domain values
var dataArray = [20, 40, 50, 60];

var width = 500;
var height = 500;

// The values in the calculated range are the result of a linear function applied to the domain values
// the resulting range is called the range
// linear scale is most common
var widthScale = d3.scale.linear()
                   // let the scale know where to fetch the data from
                   .domain([0, 60])
                   .range([0, width]);

var color = d3.scale.linear()
              .domain([0, 60])
              .range(["red", "blue"]);

var canvas = d3.select("body")
  .append("svg")
  .attr("width", width)
  .attr("height", height);

var bars = canvas.selectAll("rect")
                 .data(dataArray)
                 .enter()
                   .append("rect")
                   .attr("width", function(d) { return widthScale(d); })
                   .attr("height", 50)
                   .attr("fill", function(d) { return color(d); })
                   .attr("y", function(d, i) { return i * 100 });
