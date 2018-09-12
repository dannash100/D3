d3.select("body").append("div")
    .style("border", "1px black solid")
    .html("hello world")

d3.select("div")
    .style("background-color", "pink")
    .style("font-size", "24px")
    .attr("id", "newDiv")
    .attr("class", "d3div")
    .on("click", () => {
        console.log("you clicked a div")
    })