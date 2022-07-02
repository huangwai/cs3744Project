import * as d3 from 'd3'

//Jimmy Huynh
//June 29,2022

//Notes provided during class
function LineChart() {
// Some styling no need for these
    let margin ={top: 10, right: 20, bottom: 40, left: 60}
    d3.json("./rsc/finance.json").then(data=>{
        let svg = d3.select("#fetch").append('svg')

        let pxX = 600 - margin.left - margin.right,
            pxY = 300 - margin.top - margin.bottom
        svg = svg.attr('width', 600 + margin.left + margin.right).attr('height', 300 + margin.top + margin.bottom)
            .style('background', 'lightgrey')
            .append('g')
            .attr('transform', `translate(${margin.left} ${margin.top + 30})`)

        // get values
        let {result} = data.chart
        let {timestamp, comparisons} = result[0]
        let date = [] //creating time array -> converting time
        timestamp.forEach(data=> {
            date.push(new Date(data*1000))
        })
        //console.log(date)

        // Set scaling for time
        let scX = d3.scaleTime([date[0],date[date.length-1]], [0,pxX])// your x scaling value generator for time (x range mapping)
        //console.log(date)
        // get min and max values
        let [minVal, maxVal] = [Infinity, -Infinity]
        comparisons.forEach(tick=>{
            //if found min High value is lower -> swap
            if(minVal > Math.min(...tick.high)){
                minVal = Math.min(...tick.high);
            }
            //if found max value is higher -> set to new one
            if(maxVal < Math.max(...tick.high)){
                maxVal = Math.max(...tick.high);
            }

            // get the high and min value for all values
        })
        minVal = minVal - 200;
        maxVal = maxVal + 200;

        //console.log([minVal,maxVal]);
        let scY = d3.scaleLinear().domain([minVal,maxVal]).range([pxY,0])// youy y scaling value generator for high (y range mapping)
        let color = ['red', 'blue', 'yellow', 'green']  // Some color to attach to each chart

        // generating circles for each value in high
        comparisons.forEach((tick, idx)=>{
            let {high,symbol} = tick
            let g = svg.append("g")
            //console.log(high)
            g.selectAll('circle')
                .data(high)
                .enter()
                .append('circle')
                .classed('cir',true)
                .attr('r',2)
                .attr('cx',(d,i)=> scX(date[i]))
                .attr('cy',d=> scY(d))


            let makeLine = d3.line().x((d,i)=>scX(date[i])).y(d=> scY(d))
            g.append('path')
                .attr('d', makeLine(high))
                .attr('fill', 'none')
                .attr('stroke', color[idx])

            let toolTip = svg.append('text')  // our tooltip

            g.selectAll('circle')
                .on('mouseover', function(e, d){
                    let [x, y] = d3.pointer(e, this)
                    // Make the text visible and disblay the value using this
                    // your code to generate the chart
                    // ......
                    toolTip.attr('x',x+10)
                        .attr('y',y+10)
                        .text(d)
                        .attr('visibility','visible')
                })
                //hide value when mouse leaves circle area
                .on('mouseleave', function(){
                    // hide the text
                    // your code to generate the chart
                    // ......
                    toolTip.attr('visibility','hidden')
                })

            // Adding legends
            g.append('text')
                .attr('x', pxX + 20)
                .attr('y', d=>200 - idx * 20)
                .attr("fill", color[idx])
                .text(symbol);
        })

        // adding ticks and axis
        // No need for this
        let axis = d3.axisRight(scY)
        svg.append('g').call(axis)
        axis = d3.axisTop(scX)
        svg.append('g')
            .attr('transform', `translate(0, ${pxY + 10})`)
            .call(axis)
            .selectAll('text')
            .attr('transform', 'rotate(90)translate(20, 0)')


        const xAxisGrid = d3.axisBottom(scX).tickSize(-pxX+270).tickFormat('').ticks(10);
        svg.append('g')
            .attr('class','x, axis-grid')
            .attr('transform', `translate(0, ${pxY})`).call(xAxisGrid)

        const yAxisGrid = d3.axisLeft(scY).tickSize(-pxY-280).tickFormat('').ticks(10);
        svg.append('g')
            .attr('class','y, axis-grid')
            .call(yAxisGrid)
    }).catch(err=>console.log(err))
    return(
        <div>
            <div id="chart">

            </div>
            <svg id = "fetch" width="700" height="350" style="background: lightgrey"/>
        </div>

    )
}
export default LineChart