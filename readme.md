# Notes taken while reading D3.js in Action 2017 Manning 


## Formating Data

### Scales

- scaleLinear(): normalize data for presentation within restricted sizes of screens
    - domain setting takes an array determining the ramp of values being transformed
    - range setting refers to the ramp to which the values will be transformed
    - range can reference colors to represent linearly scalable data as a gradient 
- scaleLog(), scalePow(), scaleOrdinal: less common scales to map data with
- scaleTime(): linear scale formats correctly with data data. 

```javascript 
let newRamp = d3.scaleLinear().domain([500000, 13000000]).range([0, 500]) 
newRamp(1000000) // returns 20 - refering to a datapoint at this size within the domain can be placed at 20px
newRamp.invert(313) // reverses the transformation - ie. what 313px would represent in the domain - in this case 8325000

let newColorRamp = d3.scaleLinear().domain([500000,13000000]).range(["blue", "red"])
newRamp(100000) // returns #ad0052  note invert does not work on color ranges. 
```

### Binning
- stores quantitative data in catagories
- scale-Quantile(): 
    - splits array into equal sized parts 
    - sorts array of numbers in domain- splits values at appropriate point to create necessary categories .
    - note that this is not weighted like a gradient as with linear scaling - it simply arranging them into sets of equally sized bins
```javascript
let sampleArray = [423,124,66,424,58,10,900,44,1]
let qScale = d3.scaleQuantile().domain(simpleArray).range([0,1,2]) 
let qScaleText = d3.scaleQuantile().domain(simpleArray).range([small, medium, big]) 
qScale(68) // 1, medium
qScale(20) // 0, small
qScale(10000) // 2, big
```

### Nesting
- d3.nest():
    - shared attributes used to sort into discrete catagories. i.e list of books by author
  
```javascript
d3.json("books.json", data => {
    let bookData = data.books
    let nestedBooks = d3.nest()
        .key(book => book.author)
        .entries(bookData)
})

// will output
{
    "Dan Nash": [book3, book6, book9]
    "Sean Penn": [book4, book5, book8]
}
```

## Measuring and Sorting Data

    - determine the distribution of values in d3
    - d3 measuring functions follow pattern of designating the array and an accessor function for the desire value to measure
  
  ```javascript
  let testArray = [88,10000,1,75,12,35]
  d3.min(testArray, el => el) 
  d3.max(data, el => +el.population) // unary plus operator will force numerical casting of value
  d3.mean()
  d3.extent() // returns [min, max]
  ```

  ## Data-Binding
  