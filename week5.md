
---
layout: intro
--- 
# Week 5
## Data Maps
12/01/2025

<Credit />

---

## Agenda

### Recap and Showcase (30 min)
- Showcase the interactive bubble chart
### Concepts (45 min)
- A Brief History of Maps
- Map Layers
- Data Maps
### Demo + Activities (1.25 hour)
- Map Data - GeoJson and TopoJson
- Map Projections
- Examples


<!-- ### Recap and Warm-up (30 min)
- The Visual Information-Seeking Mantra + Examples
- How to plot a matrix using Observable Plot - [Isotype Matrix Notebook](https://observablehq.com/@datavizstudio/person-isotype-matrix)
### Demo + Exercises (2h)
- Quantative and Categorical Colors
- Tips and Pointers
- Zoom and Filter
- User Inputs
- Exercise: Recreate the [Gapminder visualization](https://www.gapminder.org/tools/#$chart-type=bubbles&url=v1) made famous by Hans Rosling.  -->

---
layout: full
--- 

## Maps

<div class="grid grid-cols-2 gap-2">
    <v-clicks>
        <img src="/images/week6/google-maps.png" />
        <img src="/images/week6/world-map-2022.jpeg" />
    </v-clicks>
</div>

<!-- This slide introduces the general concept of maps, showing both a digital, interactive map (Google Maps) and a static, stylized world map. This contrast sets the stage for discussing different types of maps and their purposes. -->

--- 

## Map Layers

<div class="grid grid-cols-3 gap-2">
    <v-clicks>
        <img src="/images/week6/gis-date-layers.jpeg" style="height: 400px" />
        <img src="/images/week6/map-data-layers.webp" class="col-span-2" />
    </v-clicks>
</div>

<!-- This slide explains the concept of map layers, a fundamental idea in Geographic Information Systems (GIS). Maps are often composed of multiple transparent layers stacked on top of each other. Each layer represents a different type of information (e.g., roads, buildings, water bodies, data points). This layered approach allows for complex and rich visualizations. -->

---
layout: section
---

## A Brief History of Data Maps

The first maps showed *where*. Data maps show *why* and *what*.

<div class="grid grid-cols-2 gap-4 mt-4">
<div>

**John Snow's Cholera Map (1854)**

A classic data story. By plotting cholera deaths as dots on a map of London, Snow identified a contaminated water pump as the source of the outbreak, proving the disease was waterborne.

</div>
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Snow-cholera-map-1.jpg/800px-Snow-cholera-map-1.jpg" style="height: 300px" />
</div>

<!-- This slide presents a foundational example of data mapping: John Snow's cholera map. It's a powerful illustration of how spatial data can lead to critical insights. By mapping data points (deaths) onto a geographic location, Snow was able to identify a pattern that was not otherwise obvious. -->

---
layout: center
---

## The Best Statistical Graphic Ever Drawn?

**Charles Minard's Map of Napoleon's Russian Campaign (1869)**

Edward Tufte called this "the best statistical graphic ever drawn." It's a masterpiece of data storytelling, showing multiple variables in a single image:
- The size of Napoleon's army (width of the bands)
- The army's location and path
- The direction of travel (tan for advance, black for retreat)
- The temperature during the brutal retreat

<img src="https://upload.wikimedia.org/wikipedia/commons/2/29/Minard.png" class="mt-4" />

<!-- This slide showcases another historical milestone in data visualization. Minard's map is a flow map that brilliantly combines different data dimensions (army size, location, direction, temperature) into a single, compelling narrative. It demonstrates the power of maps to tell complex stories. -->

---
layout: two-cols
---

## Reference Maps vs. Thematic (Data) Maps

::left::

### Reference Maps
- **Purpose:** To show the location of geographic features. Answers "Where is it?"
- **Examples:** Google Maps, road atlases, topographic maps.
- **Focus:** Accuracy of location, names, and routes.

<img src="/images/week6/google-maps.png" class="mt-4" />

::right::

### Thematic (Data) Maps
- **Purpose:** To show the spatial pattern of a specific variable or theme. Answers "What is the pattern here?"
- **Examples:** Election results, population density, disease outbreaks.
- **Focus:** Communicating a data-driven story.

<img src="https://static01.nyt.com/images/2021/02/14/us/politics/14-republican-map-promo/14-republican-map-promo-superJumbo.jpg" class="mt-4" />


<!-- This slide clarifies the distinction between two primary types of maps. Reference maps focus on geographic accuracy for navigation and location identification. Thematic maps, or data maps, use geography as a canvas to visualize data and reveal spatial patterns and relationships. -->

---
layout: section
---

## Common Types of Data Maps

<!-- This section will introduce various types of data maps, each suited for different kinds of data and storytelling purposes. -->

---

## Use Case 1: Choropleth Maps

**Best for:** Showing rates, percentages, or densities across predefined regions (e.g., states, counties). Color is used to encode the value.

**Example:** This NYT map shows the percentage of adults with a college degree. It's effective for comparing regions, but can be misleading if not normalized by population.

<img src="https://static01.nyt.com/newsgraphics/2012/05/31/education/assets/map.png" class="mt-4" />

<!-- This slide introduces the choropleth map. It's crucial to emphasize that choropleths are best for normalized data (like rates or densities) rather than raw counts, to avoid the distortion caused by the varying sizes of geographic areas. -->

---

## Use Case 2: Proportional Symbol Maps

**Best for:** Showing raw counts or totals. The size of a symbol (usually a circle) is scaled to the data value. This avoids the area-size distortion of choropleth maps.

**Example:** This map from The Guardian shows the number of deaths from terrorism. Larger circles mean more deaths, allowing for quick comparison without being misled by the size of the country.

<img src="https://i.guim.co.uk/img/media/a452a3c34592a3f447b5d272d1a6d9165680b345/0_0_1366_1000/master/1366.jpg?width=700&quality=85&auto=format&fit=max&s=217e57c83c2136067b36e9278939b40c" class="mt-4" />

<!-- This slide explains proportional symbol maps, which are an excellent alternative to choropleths for showing absolute values. The size of the symbol is directly proportional to the data, making comparisons more intuitive and less prone to misinterpretation based on region size. -->

---
layout: full
--- 

---
src: ./dataviz-maps.md
---

---

## Demo

- [Follow along Notebook - Data Maps](https://observablehq.com/@datavizstudio/data-maps)
