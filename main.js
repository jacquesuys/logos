(function(){
  var w = window.innerWidth - 75, h = window.innerHeight - 75, ms = 2500;
  var svg = d3.select('.stage').attr({'width': w, 'height': h});
  
  var random = function(val) {
    return Math.floor(Math.random() * val);
  };

  var icons = d3.selectAll('.icon')

  icons.each(function(){
    d3.select(this)
    .attr({'x': random(w) + 'px', 'y': random(h) + 'px'});
  });

  var custom = setInterval(function(){
    icons
    .each(function(){
      d3.select(this)
      .transition()
      .duration(ms)
      .ease('linear')
      .style({'opacity': Math.random()})
      .attr({
        'x': random(w) + 'px',
        'y': random(h) + 'px'
      });
    });
  }, ms);

  icons.transition().tween(custom);
})();