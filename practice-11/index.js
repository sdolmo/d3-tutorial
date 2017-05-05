var data = [10, 50, 80];
var r = 300;

var color = d3.scale.ordinal()
    .range(["red", "blue", "orange"])

var canvas = d3.select("body").append("svg")
               .attr("width", 1500)
               .attr("height", 1500);

var group = canvas.append("g")
            .attr("transform", "translate(300, 300)");

// arc generator
var arc = d3.svg.arc()
          .innerRadius(0)
          .outerRadius(r);

// this is the pie layout, which specifies the start and end angles
var pie = d3.layout.pie()
          // specify how the layout fetches the data
          .value(function(d) { return d; });

// bind data to document
var arcs = group.selectAll(".arc")
            // before binding the data it first goes through the pie layout
           .data(pie(data))
           .enter()
             .append("g")
             .attr("class", "arc");

// append a path to each return object
arcs.append("path")
    // the d attribute gets it's path data from the arc generator
    .attr("d", arc)
    .attr("fill", function(d) { return color(d.data); });

arcs.append("text")
    .attr("transform", function(d) { return `translate(${arc.centroid(d)})`; })
    .attr("text-anchor", "middle")
    .attr("font-size", "1.5em")
    .attr("fill", "white")
    .text(function(d) { return d.data; });
