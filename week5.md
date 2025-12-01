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
- GeoJson
- Map Projections
- Examples
### Final Project (15 min)


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

--- 

## Map Layers

<div class="grid grid-cols-3 gap-2">
    <v-clicks>
        <img src="/images/week6/gis-date-layers.jpeg" style="height: 400px" />
        <img src="/images/week6/map-data-layers.webp" class="col-span-2" />
    </v-clicks>
</div>

<!-- Maps has a long history.  -->

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


<!-- Data maps are usually described as "thematic maps" in cartography, because it displays spatial patterns and variations of a specific theme or topic, rather than just geographical features. It is designed to communicate information about a particular subject within a geographic area. Data maps use various visual elements, such as colors, symbols, and patterns, to represent data and help viewers understand spatial relationships and distributions. -->

---
layout: section
---

## Common Types of Data Maps

---

## Use Case 1: Choropleth Maps

**Best for:** Showing rates, percentages, or densities across predefined regions (e.g., states, counties). Color is used to encode the value.

**Example:** This NYT map shows the percentage of adults with a college degree. It's effective for comparing regions, but can be misleading if not normalized by population.

<img src="https://static01.nyt.com/newsgraphics/2012/05/31/education/assets/map.png" class="mt-4" />

---

## Use Case 2: Proportional Symbol Maps

**Best for:** Showing raw counts or totals. The size of a symbol (usually a circle) is scaled to the data value. This avoids the area-size distortion of choropleth maps.

**Example:** This map from The Guardian shows the number of deaths from terrorism. Larger circles mean more deaths, allowing for quick comparison without being misled by the size of the country.

<img src="https://i.guim.co.uk/img/media/a452a3c34592a3f447b5d272d1a6d9165680b345/0_0_1366_1000/master/1366.jpg?width=700&quality=85&auto=format&fit=max&s=217e57c83c2136067b36e9278939b40c" class="mt-4" />

---
layout: full
--- 

---
src: ./dataviz-maps.md
---

---

## Demo

- [Follow along Notebook - Data Maps](https://observablehq.com/@datavizstudio/data-maps)

---

## Final Project

- Visualize a dataset of your choice efficiently and expressively. Don't forget add context, labels, legends and interactivity!
- If you can't find any interesting datasets, you can use one of the [sample data provided by Observable](https://observablehq.com/@observablehq/sample-datasets)
- For more inspirations: [Plot Gallery](https://observablehq.com/@observablehq/plot-gallery)