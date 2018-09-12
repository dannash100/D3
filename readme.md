## Notes taken while reading D3.js in Action 2017 Manning 

### Scales

- scaleLinear(): normalize data for presentation within restricted sizes of screens
    - domain setting takes an array determining the ramp of values being transformed
    - range setting refers to the ramp to which the values will be transformed

```javascript
let newRamp = d3.scaleLinear().domain([500000, 13000000]).range([0, 500]) 
newRamp(1000000) // returns 20 - refering to a datapoint at this size within the domain can be placed at 20px
newRamp.invert(313) // reverses the transformation - ie. what 313px would represent in the domain - in this case 8325000
```