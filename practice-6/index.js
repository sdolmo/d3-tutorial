var canvas = d3.select("body")
               .append("svg")
               .attr("width", 500)
               .attr("height", 500);

var circle = canvas.append("circle")
                   .attr("cx", 50)
                   .attr("cy", 50)
                   .attr("r", 25);

circle.transition()
      .duration(1500)
      .delay(1000)
      .attr("cx", 150)
      .each("start", function() { d3.select(this).attr("fill", "red") })
