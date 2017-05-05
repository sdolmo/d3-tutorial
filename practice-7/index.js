var data = [10, 20, 30, 40, 50];

d3.min(data);
// 10
d3.max(data);
// 50
d3.extent(data);
// (2) [10, 50]
d3.sum(data);
// 150
d3.mean(data);
// 30
d3.median(data);
// 30
d3.shuffle(data);
// (5) [20, 30, 40, 50, 10]
d3.shuffle(data);
// (5) [30, 10, 20, 50, 40]
