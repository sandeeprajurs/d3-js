d3.select();
d3.selectAll();

// d3.select('h1').style('color', 'red')
// .attr('class', 'heading')
// .text('Updated H1 tag');

// d3.select('body').append('p').text('First Paragraph');
// d3.select('body').append('p').text('Second Paragraph');
// d3.select('body').append('p').text('Third Paragraph');
// -----------------------------------------------------------------------

let dataset = [1, 2, 3, 4, 5];

d3.select('body')
    .selectAll('p')
    .data(dataset)
    .enter()
    .append('p')
    .text(function(d) {
        return d;
    });