---
layout: full
---

## Line Graph

<img src="http://datavizcatalogue.com/methods/images/top_images/line_graph.png" style="max-height: 100%" />

- Functions: Patterns,Data over time,Comparisons
- Related Dataviz: Area Graph,Stacked Area Graph

<!--

This chart is used to display quantitative values over a continuous interval or time period. A Line Graph is most frequently used to show trends and analyse how the data has changed over time.Line Graphs are drawn by first plotting data points on a Cartesian coordinate grid, and then connecting a line between all of these points. Typically, the y-axis has a quantitative value, while the x-axis is a timescale or a sequence of intervals. Negative values can be displayed below the x-axis.The direction of the lines on the graph works as a nice metaphor for the data: an upward slope indicates where values have increased and a downward slope indicates where values have decreased. The line's journey across the graph can create patterns that reveal trends in a dataset.  When grouped with other lines (other data series), individual lines can be compared to one another. However, avoid using more than 3-4 lines per graph, as this makes the chart more cluttered and harder to read. A solution to this is to divide the chart into smaller multiples (have a small Line Graph for each data series).  For example, bottom chart on https://abcs.sites.digital.mass.gov/
-->

---
layout: full
---

<img src="http://datavizcatalogue.com/methods/images/anatomy/line_graph.png" style="max-height: 100%" />



<!--

This chart is used to display quantitative values over a continuous interval or time period. A Line Graph is most frequently used to show trends, rather than convey specific values.and analyse how the data has changed over time.Line Graphs are drawn by first plotting data points on a Cartesian coordinate grid, and then connecting a line between all of these points. Typically, the y-axis has a quantitative value, while the x-axis is a timescale or a sequence of intervals. Negative values can be displayed below the x-axis.The direction of the lines on the graph works as a nice metaphor for the data: an upward slope indicates where values have increased and a downward slope indicates where values have decreased. The line's journey across the graph can create patterns that reveal trends in a dataset.  When grouped with other lines (other data series), individual lines can be compared to one another. However, avoid using more than 3-4 lines per graph, as this makes the chart more cluttered and harder to read. A solution to this is to divide the chart into smaller multiples (have a small Line Graph for each data series). 
-->


---
layout: full
---

## Area Graph

<img src="http://datavizcatalogue.com/methods/images/top_images/area_graph.png" style="max-height: 100%" />

- Functions: Patterns,Data over time
- Related Dataviz: Line Graph,Stacked Area Graph

<!--

Area Graphs are Line Graphs but with the area below the line filled in with a certain colour. Like Line Graphs, Area Graphs are used to display the development of quantitative values over an interval or time period.  

Visual Emphasis: Line charts emphasize the individual data points and the changes between them, while area charts emphasize the cumulative values, making it easier to see the overall contribution of each data series. 
-->

---
layout: full
---

<img src="http://datavizcatalogue.com/methods/images/anatomy/area_graph.png" style="max-height: 100%" />



<!--

Area Graphs are usually either stacked or grouped (multiple data series), otherwise use line chart.

-->


---
layout: full
---

## Stacked Area Graph

<img src="http://datavizcatalogue.com/methods/images/top_images/stacked_area_graph.png" style="max-height: 100%" />

- Functions: Comparisons,Data over time,Patterns
- Related Dataviz: Area Graph,Line Graph,Stream Graph

<!--

Stacked Area Graphs work the same way as simple Area Graphs, except for displaying multiple data series that start each point from the point left by the previous data series.The entire graph represents the total of all the data plotted. Stacked Area Graphs also use the areas to convey whole numbers, so they do not work for negative values. Overall, they are useful for comparing multiple variables changing over time. Data Series Comparison: Both charts can display multiple data series, but the interpretation of the data may differ. In line charts, it's easier to compare the individual values of different series, while in area charts, it's easier to compare the total values.



-->

---
layout: full
---

<img src="http://datavizcatalogue.com/methods/images/anatomy/stacked_area_graph.png" style="max-height: 100%" />



<!--
Grouped Area Graphs start from the same zero axis (show the delta), while Stacked Area Graphs have each data series start from the point left by the previous data series.More Area Graph variations in this blog post (show the sum). Stacked is more intuitive.
-->

---
layout: full
---

## Density Plot

<img src="http://datavizcatalogue.com/methods/images/top_images/SVG/density_plot.svg" style="max-height: 100%" />

- Functions: Distribution,Patterns
- Related Dataviz: Histogram

<!--

Also known as a Kernel Density Plot or Density Trace Graph.A Density Plot visualises the distribution of data over a continuous interval or time period. This chart is a variation of a Histogram that uses kernel smoothing to plot values, allowing for smoother distributions by smoothing out the noise. The peaks of a Density Plot help display where values are concentrated over the interval.  

-->

---
layout: full
---

<img src="http://datavizcatalogue.com/methods/images/anatomy/SVG/density_plot.svg" style="max-height: 100%" />



<!--
 An advantage Density Plots have over Histograms is that they're better at determining the distribution shape because they're not affected by the number of bins used (each bar used in a typical histogram).  A Histogram comprising of only 4 bins wouldn't produce a distinguishable enough shape of distribution as a 20-bin Histogram would. However, with Density Plots, this isn't an issue. 
-->


---
layout: full
---

## Histogram

<img src="http://datavizcatalogue.com/methods/images/top_images/histogram.png" style="max-height: 100%" />

- Functions: Distribution,Patterns
- Related Dataviz: Bar Chart,Density Plot,Population Pyramid

<!--

A Histogram visualises the distribution of data over a continuous interval. Each bar in a histogram represents the tabulated frequency at each interval/bin.Histograms help give an estimate as to where values are concentrated, what the extremes are and whether there are any gaps or unusual values. They are also useful for giving a rough view of the probability distribution.

-->

---
layout: full
---

<img src="http://datavizcatalogue.com/methods/images/anatomy/histogram.png" style="max-height: 100%" />



<!--

A Histogram visualises the distribution of data over a continuous interval. Each bar in a histogram represents the tabulated frequency at each interval/bin.Histograms help give an estimate as to where values are concentrated, what the extremes are and whether there are any gaps or unusual values. They are also useful for giving a rough view of the probability distribution.

-->

---
layout: full
---

## Bar Chart

<img src="http://datavizcatalogue.com/methods/images/top_images/bar_chart.png" style="max-height: 100%" />

- Functions: Comparisons,Patterns
- Related Dataviz: Histogram,Multi-set Bar Chart,Population Pyramid,Radial Bar Chart,Radial Column Chart,Stacked Bar Graph

<!--

A Bar Chart uses either horizontal or vertical bars (column chart) to show discrete, numerical comparisons across categories. One axis of the chart shows the specific categories being compared and the other axis represents a discrete value scale.  Bar Charts are distinguished from  Histograms, as they do not display continuous developments over an interval. 
-->

---
layout: full
---

<img src="http://datavizcatalogue.com/methods/images/anatomy/bar_chart.png" style="max-height: 100%" />


<!--
Instead, Bar Chart's discrete data is categorical and therefore answers the question of "how many?" in each category.
-->

---
layout: full
---

## Multi-set Bar Chart

<img src="http://datavizcatalogue.com/methods/images/top_images/multiset_barchart.png" style="max-height: 100%" />

- Functions: Comparisons,Distribution,Patterns,Relationships
- Related Dataviz: Bar Chart,Histogram,Stacked Bar Graph

<!--

Also known as a Grouped Bar Chart or Clustered Bar Chart. This variation of a Bar Chart can be used when two or more data series need to be plotted all on the same axis and grouped into parent categories. Each bar for a data series is assigned a colour to distinguish them apart. Bars in the same group are placed together and are then spaced apart from other bar groupings.The use of Multiset Bar Charts is usually to compare across categories that contain the same sub-categorical variables between them. Each bar is a subcategory that is grouped into a larger parent category.

Multiset Bar Charts can also be used to compare mini Histograms to each other, so each bar in the group would represent the significant intervals of a variable. Another use could be to use Multiset Bar Charts to show data changing over time by having, for example, each bar represent a point in time such as a year.

The downside of Multiset Bar Charts is that they become harder to read the more bars you have in one group. Therefore, you should try to limit the number of bars per group. 
-->

---
layout: full
---

<img src="http://datavizcatalogue.com/methods/images/anatomy/multiset_barchart.png" style="max-height: 100%" />



<!--

Like on a Bar Chart, the length of each bar on a Multiset Bar Chart is used to show discrete, numerical comparisons amongst categories. Each bar for a data series is assigned a colour to distinguish them apart. 
-->

---
layout: full
---

## Stacked Bar Graph

<img src="http://datavizcatalogue.com/methods/images/top_images/stacked_bar_graph.png" style="max-height: 100%" />

- Functions: Comparisons,Proportions,Part-to-a-whole
- Related Dataviz: Bar Chart,Multi-set Bar Chart

<!--

Unlike a Multiset Bar Graph which displays the bars side-by-side for multiple data series, Stacked Bar Graphs segment the bars on top of each other. They are used to show how a larger category is divided into smaller subcategories and what the relationship of each part has on the total amount. There are two types of Stacked Bar Graphs:Simple Stacked Bar Graphs place each value for the segment after the previous one. The total value of the bar is all the segment values added together. Ideal for comparing the total amounts across each segmented bar.100% Stack Bar Graphs show the percentage-of-the-whole by plotting the percentage of each value to the total amount in each group. This makes it easier to see the relative differences between quantities in each group.One major flaw of Stacked Bar Graphs is that they become harder to read the more segments each bar has. Also, comparing each segment to the other is difficult, as they're not aligned on a common baseline. 
-->

---
layout: full
---

<img src="http://datavizcatalogue.com/methods/images/anatomy/stacked_bar_graph.png" style="max-height: 100%" />



<!--

Unlike a Multiset Bar Graph which displays the bars side-by-side for multiple data series, Stacked Bar Graphs segment the bars on top of each other. They are used to show how a larger category is divided into smaller subcategories and what the relationship of each part has on the total amount. There are two types of Stacked Bar Graphs:Simple Stacked Bar Graphs place each value for the segment after the previous one. The total value of the bar is all the segment values added together. Ideal for comparing the total amounts across each segmented bar.100% Stack Bar Graphs show the percentage-of-the-whole by plotting the percentage of each value to the total amount in each group. This makes it easier to see the relative differences between quantities in each group.One major flaw of Stacked Bar Graphs is that they become harder to read the more segments each bar has. Also, comparing each segment to the other is difficult, as they're not aligned on a common baseline. 
-->


---
layout: full
---

## Population Pyramid

<img src="http://datavizcatalogue.com/methods/images/top_images/population_pyramid.png" style="max-height: 100%" />

- Functions: Comparisons,Distribution,Patterns
- Related Dataviz: Bar Chart,Histogram

<!--
 A Population Pyramid is a pair of back-to-back Histograms (for each sex) that is usually used to display the distribution of a population in all age groups and both sexes. Multiple Population Pyramids can be used to compare patterns across nations or selected population groups.The shape of a Population Pyramid can be used to interpret a population. 

-->

---
layout: full
---

<img src="http://datavizcatalogue.com/methods/images/anatomy/population_pyramid.png" style="max-height: 100%" />



<!--
The x-axis is used to plot population numbers and the y-axis lists all age groups. Population Pyramids are ideal for detecting changes or differences in population patterns. 

For example, a pyramid with a very wide base and a narrow top section suggests a population with both high fertility and death rates. Whereas, a pyramid with a wider top half and a narrower base would suggest an ageing population with low fertility rates.Population Pyramids can also be used to speculate a population’s future development. An ageing population that is not reproducing would eventually run into issues such as having enough offspring to care for the elderly. Other theories such as the “Youth Bulge” state that when there’s a wide bulge around the 16-30 age range, particularly in males, this leads to social unrest, war and terrorism. This makes Population Pyramids useful for fields such as Ecology, Sociology and Economics.

-->

---
layout: full
---

## Pie Chart

<img src="http://datavizcatalogue.com/methods/images/top_images/pie_chart.png" style="max-height: 100%" />

- Functions: Comparisons,Part-to-a-whole,Proportions
- Related Dataviz: Donut Chart,Nightingale Rose Chart,Sunburst Diagram

<!--

Extensively used in presentations and offices, Pie Charts help show proportions and percentages between categories, by dividing a circle into proportional segments. 
-->

---
layout: full
---

<img src="http://datavizcatalogue.com/methods/images/anatomy/pie_chart.png" style="max-height: 100%" />



<!--

Each arc length represents a proportion of each category, while the full circle represents the total sum of all the data, equal to 100%.

Pie Charts are ideal for giving the reader a quick idea of the proportional distribution of the data. 

However, the major downsides to pie charts are:They cannot show more than a few values, because as the number of values shown increases, the size of each segment/slice becomes smaller. This makes them unsuitable for large datasets with many categories.

They take up more space than their alternatives, for example, a 100% Stacked Bar Chart. Mainly due to their size and the usual need for a legend.  They are not great for making accurate comparisons between groups of Pie Charts. This is because it is harder to distinguish the size of items via area when it is for length.Despite that, comparing a given category (one slice) within the total of a single Pie Chart, then it can often be more effective.
-->

---
layout: full
---

## Donut Chart

<img src="http://datavizcatalogue.com/methods/images/top_images/donut_chart.png" style="max-height: 100%" />

- Functions: Comparisons,Part-to-a-whole,Proportions
- Related Dataviz: Pie Chart,Sunburst Diagram

<!--

A Donut Chart is essentially a Pie Chart but with the area of the centre cut out.  However, Donut Charts have a slight advantage over Pie Charts, which are sometimes criticised for focusing on the relative sizes of the pieces to one another and to the chart as a whole, giving no indication of changes as a whole when compared to other Pie Charts.  

A Donut Chart partly addresses this problem by de-emphasising the use of area, to make the viewer focus more on the changes in overall values. You are focused on reading the length of the arcs, rather than comparing the proportions between slices.  Also, Donut Charts are more space-efficient than Pie Charts because the blank space inside a Donut Chart can be used to display information inside it. 
-->

---
layout: full
---

<img src="http://datavizcatalogue.com/methods/images/anatomy/donut_chart.png" style="max-height: 100%" />



<!--

A Donut Chart is essentially a Pie Chart but with the area of the centre cut out.  However, Donut Charts have a slight advantage over Pie Charts, which are sometimes criticised for focusing on the relative sizes of the pieces to one another and to the chart as a whole, giving no indication of changes as a whole when compared to other Pie Charts.  A Donut Chart partly addresses this problem by de-emphasising the use of area, to make the viewer focus more on the changes in overall values. You are focused on reading the length of the arcs, rather than comparing the proportions between slices.  Also, Donut Charts are more space-efficient than Pie Charts because the blank space inside a Donut Chart can be used to display information inside it. 
-->


---
layout: full
---

## Treemap

<img src="http://datavizcatalogue.com/methods/images/top_images/treemap.png" style="max-height: 100%" />

- Functions: Comparisons,Hierarchy,Part-to-a-whole,Proportions
- Related Dataviz: Circle Packing,Marimekko Chart,Sunburst Diagram

<!--

Treemaps are an alternative way of visualising the hierarchical structure of a Tree Diagram while also displaying quantities for each category via area size. 
-->

---
layout: full
---

<img src="http://datavizcatalogue.com/methods/images/anatomy/treemap.png" style="max-height: 100%" />



<!--

Each category is assigned a rectangle area with the subcategory rectangles nested inside.  When a quantity is assigned to a category, its area size is in proportion to that quantity and any other quantities within the same parent category in a part-to-whole relationship. Also, the area size of the parent category is the total of its subcategories. If no quantity has been assigned to a subcategory, then its area is divided equally amongst the other subcategories within the parent category.The way rectangles are divided and ordered into sub-rectangles depends on the tiling algorithm used. Many tiling algorithms have been developed, but the "squarified algorithm", which keeps each rectangle as square-like as possible is the one commonly used.Ben Shneiderman originally developed Treemaps as a way of visualising a vast file directory on a computer, without taking up too much space on the screen. This makes Treemaps a more compact and space-efficient option for displaying hierarchies, that can give a quick overview of the hierarcal structure. Treemaps are also great at comparing the proportions between categories via their area size.  The downside to Treemaps is that they doesn't show the hierarchal levels as clearly as other charts that visualise hierarchal data (such as a Tree Diagram or Sunburst Diagram). 
-->


---
layout: full
---

## Marimekko Chart

<img src="http://datavizcatalogue.com/methods/images/top_images/marimekko_chart.png" style="max-height: 100%" />

- Functions: Comparisons,Part-to-a-whole,Proportions,Relationships
- Related Dataviz: Stacked Bar Graph,Treemap

<!--

Also known as a Mosaic Plot.Marimekko Charts are used to visualise categorical data over a pair of variables. In a Marimekko Chart, both axes are variables with a percentage scale, that determines both the width and height of each segment. So Marimekko Charts work as a kind of two-way 100% Stacked Bar Graph. This makes it possible to detect relationships between categories and their subcategories via the two axes.The main flaws of Marimekko Charts are that they can be hard to read, especially when there are many segments. Also, it’s hard to accurately make comparisons between each segment, as they are not all arranged next to each other along a common baseline. Therefore, Marimekko Charts are better suited for giving a more general overview of the data.

-->

---
layout: full
---

<img src="http://datavizcatalogue.com/methods/images/anatomy/marimekko_chart.png" style="max-height: 100%" />



<!--

Also known as a Mosaic Plot.Marimekko Charts are used to visualise categorical data over a pair of variables. In a Marimekko Chart, both axes are variables with a percentage scale, that determines both the width and height of each segment. So Marimekko Charts work as a kind of two-way 100% Stacked Bar Graph. This makes it possible to detect relationships between categories and their subcategories via the two axes.The main flaws of Marimekko Charts are that they can be hard to read, especially when there are many segments. Also, it’s hard to accurately make comparisons between each segment, as they are not all arranged next to each other along a common baseline. Therefore, Marimekko Charts are better suited for giving a more general overview of the data.

-->


---
layout: full
---

## Scatterplot

<img src="http://datavizcatalogue.com/methods/images/top_images/scatterplot.png" style="max-height: 100%" />

- Functions: Patterns,Relationships
- Related Dataviz: Bubble Chart

<!--

Also known as a Scatter Graph, Point Graph, X-Y Plot, Scatter Chart or Scattergram.

-->

---
layout: full
---

<img src="http://datavizcatalogue.com/methods/images/anatomy/scatterplot.png" style="max-height: 100%" />



<!--

Also known as a Scatter Graph, Point Graph, X-Y Plot, Scatter Chart or Scattergram.A Scatterplot places points on a Cartesian Coordinates system to display all the values between two variables. By having an axis for each variable, you can detect if a relationship or correlation between the two exists.  The kind of correlation can be interpreted through the patterns revealed on a Scatterplot. These are: positive (values increase together), negative (one value decreases as the other increases) or null (no correlation). The shape of the correlation can be described as: linear, exponential and U-shaped. The strength of the correlation can be determined by how closely packed the points are to each other on the graph. Points that end up far outside the general cluster of points are known as outliers.Lines or curves can be displayed over the graph to aid in the analysis. This is typically known as the Line of Best Fit or Trend Line and can be used to make estimates via interpolation. A Line of Best Fit is drawn as close to all the points as possible to show how it would look if all the points were condensed together into a single line.Scatterplots are ideal when you have paired numerical data and you want to see if one variable impacts the other. However, do remember that correlation is not causation and another unnoticed or indirect variable may be influencing the results.

-->


---
layout: full
---

## Bubble Chart

<img src="http://datavizcatalogue.com/methods/images/top_images/bubble_chart.png" style="max-height: 100%" />

- Functions: Comparisons,Data over time,Distribution,Patterns,Proportions,Relationships
- Related Dataviz: Proportional Area Chart,Scatterplot

<!--

A Bubble Chart is a multi-variable graph that is a cross between a Scatterplot and a Proportional Area Chart. Popularized by Hans Rosling. 
-->

---
layout: full
---

<img src="http://datavizcatalogue.com/methods/images/anatomy/bubble_chart.png" style="max-height: 100%" />



<!--
Like a Scatterplot, Bubble Charts use a Cartesian coordinate system to plot points along a grid where the X and Y axis are separate variables. However. unlike a Scatterplot, each point is assigned a label or category (either displayed alongside or on a legend). Each plotted point then represents a third variable by the area of its circle. Colours can also be used to distinguish between categories or used to represent an additional data variable. Time can be shown either by having it as a variable on one of the axis or by animating the data variables changing over time.

Bubble Charts are typically used to compare and show the relationships between categorised circles, by the use of positioning and proportions.  The overall picture of Bubble Charts can be used to analyse for patterns/correlations.Too many bubbles can make the chart hard to read, so Bubble Charts have a limited data size capacity.

 This can be somewhat remedied by interactivity: clicking or hovering over bubbles to display hidden information, having an option to reorganise or filter out grouped categories. Today we will be builiding a bubble chart in Observable.
 
 Like with Proportional Area Charts, the sizes of the circles need to be drawn based on the circle’s area, not its radius or diameter. Not only will the size of the circles change exponentially, but this will lead to misinterpretations by the human visual system. We are going to revisit this again when we get to the design principles. 
-->