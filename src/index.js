import './index.css';
import * as d3 from 'd3';

const gdpArr=[];
const dateArr=[];
const dataSet = await fetch("https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/GDP-data.json")
.then((res)=>res.json())
.then((data)=>{
  return data
});
dataSet.data.forEach(element => {
    gdpArr.push(element[1]);
    dateArr.push(new Date(element[0]))
});

const height = document.documentElement.clientHeight-200;
const width = document.documentElement.clientWidth-200;

const xScale = d3.scaleBand().domain(dateArr).range([0,width]);
const yScale = d3.scaleLinear().domain([d3.min(gdpArr),d3.max(gdpArr)]).range([5,height]);

const xAxisScale = d3.scaleTime().domain([d3.min(dateArr),(d3.max(dateArr).setMonth(d3.max(dateArr).getMonth()+3))]).range([0,width]);
const yAxisScale = d3.scaleLinear().domain([d3.max(gdpArr),d3.min(gdpArr)]).range([5,height]);

const xAxis = d3.axisBottom(xAxisScale).ticks(15);
const yAxis = d3.axisLeft(yAxisScale).tickFormat((d,i)=>d3.format(".1s")(d)).ticks(25);

const theme = "#034694"
const themeAcc = "#00BFFF"
const svg = d3.select("svg")
.attr("height",height+50)
.attr("width",width+110);


svg.selectAll("rect")
.data(gdpArr)
.enter()
.append("rect")
.style("fill",theme)
.attr("height",(d)=>yScale(d))
.attr("width",xScale.bandwidth())
.attr("x",(d,i)=>xScale(dateArr[i])+100)
.attr("y",(d)=>(height)-(yScale(d)))
.attr("index",(d,i)=>i)
.on('mouseover', function (e,d){
    d3.select(this).style("fill",themeAcc);
    d3.select(".tooltip")
    .append("div")
    .html(`${d} B$`)
    .attr("class","tooltiptext")
    .style("top",`${height-yScale(d)+30}px`)
    .style("left",`${xScale(dateArr[this.getAttribute("index")])+50}px`)
    .attr("id",`tip${d}`)
})
.on("mouseout",function(e,d){
    d3.select(this).style("fill",theme);
    document.getElementById(`tip${d}`).remove()
})


d3.select("svg").append("g").attr("transform", `translate(100, ${height})`).call(xAxis)
.append("text")
.text("years →")
.attr("x","40")
.attr("y","40")
.style("fill",theme)
.style("font-size","20");
d3.select("svg").append("g").attr("transform", `translate(100, 0)`).call(yAxis).append("text").text("$ in billions → ")
.attr("y","20")
.attr("x","-100")
.attr("transform","rotate(-90)")
.style("fill",theme)
.style("font-size","20");




if(module.hot){
    module.hot.accept();
}
