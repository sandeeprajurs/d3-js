var dataset = [180, 100, 105, 123, 112, 123, 140, 201, 24];
var svgWidth = 500, svgHeight = 300, barPadding = 5;
var barwidth = (svgWidth/dataset.length);

var svg = d3.select('svg')
    .attr('width', svgWidth)
    .attr('height', svgHeight)

// -----------------------------scale------------------------------------------ 

var xScale = d3.scaleLinear()
            .domain([0, d3.max(dataset)])
            .range([0, svgWidth]);

var yScale = d3.scaleLinear()
            .domain([0, d3.max(dataset)])
            .range([svgHeight, 0]);

// ------------------------ axis label ----------------------------------------
var x_axis = d3.axisBottom().scale(xScale);

var y_axis = d3.axisLeft().scale(yScale);

svg.append('g')
    .attr("transform", "translate(50, 10)")
    .call(y_axis);

var xAxisTranslate = svgHeight - 20;

svg.append('g')
    .attr('transform', 'translate(50, ' + xAxisTranslate + ')')
    .call(x_axis);

// ---------------------------------------------- bar chart -----------------------------------------

// var barChart = svg.selectAll('react')
//                 .data(dataset)
//                 .enter()
//                 .append('rect')
//                 // used for moving vertically
//                 .attr('y', function(d) {
//                     return svgHeight - yScale(d);
//                     // return svgHeight - d;
//                 })
//                 .attr('height', function(d) {
//                     return yScale(d);
//                     // return d;
//                 })
//                 .attr('width', barwidth - barPadding)
//                 .attr('transform', function(d, i) {
//                     var translate = [barwidth * i, 0];
//                     return "translate("+ translate +")";
//                 })
//                 .attr('fill', 'blue');

// var texts = svg.selectAll('text')
//                 .data(dataset)
//                 .enter()
//                 .append('text')
//                 .text(function(d) {
//                     return d;
//                 })
//                 .attr('y', function(d, i){
//                     return svgHeight - d -2;
//                 })
//                 .attr('x', function(d, i){
//                     return barwidth * i;
//                 })
//                 .attr('fill', 'red');