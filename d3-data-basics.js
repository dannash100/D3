let newRamp = d3.scaleLinear().domain([500000, 13000000]).range([0, 500])
newRamp(1000000)
newRamp(9000000)
newRamp.invert(313)