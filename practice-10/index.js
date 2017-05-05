var canvas = d3.select("body").append("svg")
    .attr("width", 500)
    .attr("height", 500);

var group = canvas.append("g")
    .attr("transform", "translate(100, 100)");

var r = 100;
var p = Math.PI * 2; // 6.28


// unit of measurements = radians
// circle = 6.28 radians
var arc = d3.svg.arc()
    // distance from the center to the inner circle
    .innerRadius(r - 20)
    // distance from the center to the outer circle
    .outerRadius(r)
    // where the arc starts and ends
    .startAngle(0)
    .endAngle(p - 2)

group.append("path")
     .attr("d", arc)
