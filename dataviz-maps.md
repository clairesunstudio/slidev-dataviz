
## Dot Map

<img src="http://datavizcatalogue.com/methods/images/top_images/SVG/dot_map.svg" style="max-height: 100%" />

- Functions: Distribution,Location,Patterns
- Related Dataviz: Bubble Map

<!--

Also known as a Point Map, Dot Distribution Map, Dot Density Map.Dot Maps are a way of detecting spatial patterns or the distribution of data over a geographical region, by placing equally sized points over a geographical region.There are two types of Dot Map: one-to-one (one point represents a single count or object) and one-to-many (one point represents a particular unit, e.g. 1 point = 10 trees).  Dot Maps are ideal for seeing how things are distributed over a geographical region and can reveal patterns when the points cluster on the map.  Dot Maps are easy to grasp and are better at giving an overview of the data, but are not great for retrieving exact values. 
-->

---
layout: full
---

<img src="/images/week6/Snow-cholera-map.jpeg" style="max-height: 100%" />



<!--
A dot map variation of John Snow's cholera outbreak map. Each dot represents a case.
-->


---
layout: full
---

## Connection Map

<img src="http://datavizcatalogue.com/methods/images/top_images/PNG/connection_map.png" style="max-height: 100%" />

- Functions: Distribution,Location,Movement,Patterns,Relationships
- Related Dataviz: Flow Map

<!--

Also known as a Link Map or Ray Map.Connection Maps are drawn by connecting points placed on a map by straight or curved lines.While Connection Maps are great for showing connections and relationships geographically, they can also be used to display map routes through a single chain of links. Connection Maps can also be useful in revealing spatial patterns through the distribution of connections or by how concentrated connections are on a map. 
-->

---
layout: full
---

<img src="https://www.aaronkoblin.com/work/flightpatterns/4_1920.png" style="max-height: 100%" />



<!--
https://www.aaronkoblin.com/work/flightpatterns/
-->


---
layout: full
---

## Flow Map

<img src="http://datavizcatalogue.com/methods/images/top_images/flow_map.png" style="max-height: 100%" />

- Functions: Distribution,Location,Movement & Flow
- Related Dataviz: Connection Map,Sankey Diagram

<!--

Flow Maps geographically show the movement of information or objects from one location to another and their amount. Typically Flow Maps are used to show the migration data of people, animals and products. The magnitude or amount of migration in a single flow line is represented by its thickness. This helps to show how migration is distributed geographically.Flow Maps are drawn from a point of origin and branch out of their “flow lines”. Arrows can be used to show direction, or if the movement is incoming or outgoing. Drawing flow lines without arrows can be used to represent trade going back-and-forth. Merging/bundling flow lines together and avoiding crossovers can help to reduce visual clutter on the map.

Sankey Diagrams display flows and their quantities in proportion to one another. Typically, Sankey Diagrams are used to visually represent the transfer of energy, money, materials, or the flow of any isolated system or process.The thickness of the arrows and lines shows their magnitudes or quantities. Flow arrows or lines can combine or split apart at each stage of a process.Colour can be used to divide the diagram into different categories or to show the transition from one state of the process to another.Often, Sankey Diagrams are confused with Parallel Sets and Alluvial Diagrams, but this post clarifies the differences.

-->

---
layout: full
---

<img src="http://datavizcatalogue.com/methods/images/anatomy/flow_map.png" style="max-height: 100%" />



<!--

Flow Maps geographically show the movement of information or objects from one location to another and their amount. Typically Flow Maps are used to show the migration data of people, animals and products. The magnitude or amount of migration in a single flow line is represented by its thickness. This helps to show how migration is distributed geographically.Flow Maps are drawn from a point of origin and branch out of their “flow lines”. Arrows can be used to show direction, or if the movement is incoming or outgoing. Drawing flow lines without arrows can be used to represent trade going back-and-forth. Merging/bundling flow lines together and avoiding crossovers can help to reduce visual clutter on the map.

-->


---
layout: full
---

## Bubble Map

<img src="http://datavizcatalogue.com/methods/images/top_images/SVG/bubble_map.svg" style="max-height: 100%" />

- Functions: Location,Proportions
- Related Dataviz: Dot Map,Proportional Area Chart

<!--

With this data map, circles are displayed over a designated geographical region with the area of each circle being proportional to its value in the dataset.Bubble Maps are good for comparing proportions over geographic regions without the issues caused by regional area size, as seen on Choropleth Maps. However, a major flaw with Bubble Maps is that overly large bubbles can overlap other bubbles and regions on the map, so this needs to be accounted for.

-->

---
layout: full
---

<img src="http://datavizcatalogue.com/methods/images/anatomy/SVG/bubble_map.svg" style="max-height: 100%" />



<!--

With this data map, circles are displayed over a designated geographical region with the area of each circle being proportional to its value in the dataset.Bubble Maps are good for comparing proportions over geographic regions without the issues caused by regional area size, as seen on Choropleth Maps. However, a major flaw with Bubble Maps is that overly large bubbles can overlap other bubbles and regions on the map, so this needs to be accounted for.

-->

---
layout: full
---

## Choropleth Map

<img src="http://datavizcatalogue.com/methods/images/top_images/choropleth.png" style="max-height: 100%" />

- Functions: Comparisons,Location,Patterns
- Related Dataviz: Heatmap

<!--
The choropleth map. It's probably the most common type of data map. A choropleth map uses color to show a value in a specific geographic region, like a state or a county. This example from the New York Times shows the percentage of adults with a college degree in each county. The darker the shade, the higher the percentage. It's great for seeing regional patterns. But there's a big catch: you should always use normalized data, like rates or percentages, not raw numbers. If you used raw population numbers, big states like California and Texas would always be dark, just because they have more people, which isn't a very interesting story.

Choropleth Maps display divided geographical areas or regions that are coloured, shaded or patterned in relation to a data variable. This provides a way to visualise values over a geographical area, which can show variation or patterns across the displayed location.The data variable uses colour progression to represent itself in each region of the map. Typically, this can be a blending from one colour to another, a single hue progression, transparent to opaque, light to dark or an entire colour spectrum.One downside to the use of colour is that you can't accurately read or compare values from the map. Another issue is that larger regions appear more emphasised then smaller ones, so the viewer's perception of the shaded values are affected.A common error when producing Choropleth Maps is to encode raw data values (such as population) rather than using normalized values (calculating population per square kilometre for example) to produce a density map.

-->

---
layout: full
---

<img src="http://datavizcatalogue.com/methods/images/anatomy/choropleth.png" style="max-height: 100%" />



<!--

Choropleth Maps display divided geographical areas or regions that are coloured, shaded or patterned in relation to a data variable. This provides a way to visualise values over a geographical area, which can show variation or patterns across the displayed location.The data variable uses colour progression to represent itself in each region of the map. Typically, this can be a blending from one colour to another, a single hue progression, transparent to opaque, light to dark or an entire colour spectrum.One downside to the use of colour is that you can't accurately read or compare values from the map. Another issue is that larger regions appear more emphasised then smaller ones, so the viewer's perception of the shaded values are affected.A common error when producing Choropleth Maps is to encode raw data values (such as population) rather than using normalized values (calculating population per square kilometre for example) to produce a density map.

-->


---

## Choropleth Map VS. Heat Map

<img src="/images/week6/choropleth_heatmap.png" style="max-height: 100%" />

<!-- 
https://www.standardco.de/notes/heatmaps-vs-choropleths
When it comes to using maps for data visualization, the term heatmap is used rather loosely. (We've looked at heatmap example as a colored matrix, a grid of colored cells, that allows you to glance at and quickly tell which pairings have a high or low rate of occurrence or correlation. It's much easier to scan for dark or light patches than to assess numeric values) It also can be used to describe any map that uses colors to categorize location based data. which might sound similar to choropleth maps. However there is a distinction between geographic heatmaps and choropleth maps. Let's compare...

Choropleths are thematic maps where a geographic region has a uniform color based on a metric. A color scale is used to encode a range of values. These are often called heatmaps, but that isn't entirely accurate. The key difference between choropleth maps and heat maps is the shape of colored areas. In choropleths, shapes are defined by standard geographical boundaries, not by the data itself. A true geographic heatmap is an isopleth map (has data drawn shapes) that depict hotspots on a map to present concentrations of values.

Presenting GDP by country would be a good use case for a choropleth because the values would be directly tied to political boundaries. Using a heatmap for average rainfall would be a good fit because rain is not influenced by borders. -->


---

### Viral Choropleth Map: Barbie VS Oppenheimer 

<div class="grid grid-cols-2 gap-2">
    <v-clicks>
        <img src="/images/week6/barbie.png" />
        <img src="/images/week6/electoral.png" />
    </v-clicks>
</div>

<small>image source: <a>[daily mail](https://www.dailymail.co.uk/news/article-12331625/Barbenheimer-map-reveals-Democrat-voting-states-favor-birth-bomb-movie-Trump-voters-drawn-camp-world-pink.html?ito=email_share_article-floatingBar)</a>, <a>[Read more about it here](https://scotscoop.com/opinion-barbie-and-oppenheimer-draws-a-map-of-political-values/)</a> </small>


<!-- 

a viral X (formerly known as Twitter) post displayed the popularity of each movie in U.S. states. 

Interestingly, the graphic looks very similar to the 2020 electoral map. The map shows Barbie trending more in Republican states, while Oppenheimer was more popular in Democratic states. Even the swing states of Wisconsin, Michigan, and Pennsylvania were evenly divided between the two blockbusters.

- States' preferences for Barbie vs. Oppenheimer broke down along shockingly political lines following the blockbuster opening weekend 
- While most southern states majorly preferred Barbie, Democratic strongholds leaned heavily toward the nuclear bomb biopic 
- The results were so close to a real deal electoral college map that, as usual, the ultimate winner came down to key swing states like Mich., Wisc., and Penn. 
- New Mexico, for instance, the state with the highest percentage of Oppenheimer viewers, was the location for the Manhattan Project testing. The movie is a depiction of New Mexico’s own history and global impact, which drew in many viewers.
-->

---

## Choropleth Map or Cartogram?

<div class="grid grid-cols-2 gap-2">
    <v-clicks>
        <img src="/images/week6/choropleth-chapter55.gif" style="height: 300px" />
        <img src="/images/week6/cartogram-chapter55.gif" />
    </v-clicks>
</div>

### More readings
- [Grid Cartograms](https://observablehq.com/@severo/grid-cartograms)
- [Reasons to consider a cartogram](https://medium.com/civic-tech-thoughts-from-joshdata/how-that-map-you-saw-on-538-under-represents-minorities-by-half-and-other-reasons-to-consider-a-4a98f89cbbb1)



<!-- 

A cartogram is a type of map where geographic regions are resized based on a data value, rather than their true physical land area. In other words:
A cartogram distorts geography to make the data—not the land—drive the visual size.
It is a data-driven map, not a geography-driven one.

Key Problems Each Solves (and Creates)
Choropleth: Strengths & Weaknesses
✔ Strengths
    Shows geographic continuity—good for spatial reasoning.
    Easy for audiences (familiar).
    Color gradients show patterns over space extremely well.
    Works great when data are normalized (rates/percentages).

✘ Common Issues
    Area bias: large regions dominate visually (e.g., Montana, Texas).
    Population distortion: sparsely populated regions may overshadow dense ones.
    Sensitive to classification choices (quantile, equal interval, natural breaks).
    Misleading when used with absolute values (huge no-no).

Dorling Cartogram: Strengths & Weaknesses
✔ Strengths
    Removes geographic area bias.
    Shows comparative importance very clearly.
    Circles simplify irregular shapes, reducing visual noise.
    Perfect for population-weighted storytelling.

✘ Weaknesses
    Distorts geography: some readers find them unfamiliar.
    Relative placement is preserved only approximately.
    Harder to read if spatial adjacency is important.
    Not ideal for variables tied to environment or real land.

A Dorling cartogram is a type of cartogram that replaces each geographic region (state, county, country) with a circle, and sizes each circle based on a data variable—usually population, votes, or cases.

Key idea:
Real geography is simplified into circles so that the size of each region reflects the data, not the land area.
It was introduced by Danny Dorling (1996).
-->


---

## Understand Your Data - Distribution

<div class="grid grid-cols-2 gap-2">
    <v-clicks>
        <img src="/images/week6/quantize_quantile.png" />
        <img src="/images/week6/quantize-distribution.png" />
    </v-clicks>
</div>

---


## Understand Your Data - Time Series

<div class="grid grid-cols-2 gap-2">
    <v-clicks>
        <img src="/images/week6/map-1year.gif" />
        <img src="/images/week6/choropleth-chapter55.gif" />
    </v-clicks>
</div>

---

## Understand Your Data - Time Series (Small Multiples)

<img src="/images/week6/map-5year.gif" />