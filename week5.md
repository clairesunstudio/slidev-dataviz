
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
- Showcase the [interactive bubble chart](https://observablehq.com/@datavizstudio/colors-labels-and-interactivity25?collection=@datavizstudio/the-art-of-data-visualization/2)
### Concepts (45 min)
- A Brief History of Data Maps
- Map Layers
- Data Maps
### Demo + Activities (1.25 hour)
- Map Data - GeoJson and TopoJson
- Chorepleth Map Demos

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

<!-- So, let's start with the basics. What is a map? We all use them. On the left, you see Google Maps, a tool we use every day to find our way around. It's a reference map; its job is to show you where things are. On the right, a stylized world map. Both are maps, but they serve different purposes. Today, we're going to talk about a special kind of map: a data map. A map that tells a story. -->

--- 

## Map Layers

<div class="grid grid-cols-3 gap-2">
    <v-clicks>
        <img src="/images/week6/gis-date-layers.jpeg" style="height: 400px" />
        <img src="/images/week6/map-data-layers.webp" class="col-span-2" />
    </v-clicks>
</div>

<!-- To understand maps, we first need to understand a key concept: layers. Think of a map not as a single image, but as a stack of transparent sheets. One sheet has the outlines of the countries. Another has the cities. A third has the roads. And on top of that, we can add our data layers. Maybe a layer for population density, or a layer showing the location of every Starbucks. This layered approach is the foundation of modern mapping and GIS, and it's what allows us to create rich, data-driven maps. -->

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

<!-- Now for a story. Before data science was even a term, a London doctor named John Snow used data mapping to solve a deadly mystery. In 1854, a cholera outbreak was devastating the Soho neighborhood. The prevailing theory was that the disease spread through 'bad air.' Snow suspected it was the water. So he did something revolutionary: he went from house to house, recording each death and marking it on this map with a small black bar. As he plotted the data, a terrifying pattern emerged. The deaths were all clustered around a single water pump on Broad Street. He presented his findings, convinced the local authorities to remove the pump handle, and the outbreak stopped. This map is a landmark in both public health and data visualization. It's a powerful story of how seeing data on a map can reveal hidden truths and, in this case, save lives. -->



---
layout: full
---

## The Best Statistical Graphic Ever Drawn?

**Charles Minard's Map of Napoleon's Russian Campaign (1869)**

<img src="https://upload.wikimedia.org/wikipedia/commons/2/29/Minard.png" class="mt-4" />

- The size of Napoleon's army (width of the bands)
- The army's location and path
- The direction of travel (tan for advance, black for retreat)
- The temperature during the brutal retreat

<!-- This is Charles Minard's map of Napoleon's disastrous Russian campaign of 1812. Follow the thick, tan band on the left. This is Napoleon's Grand Army, 422,000 men strong, as they begin their invasion of Russia. As they march towards Moscow, you can see the band getting thinner and thinner. This isn't just a line; it's a representation of the shrinking army, losing soldiers to skirmishes, disease, and desertion along the way. They reach Moscow, and then the retreat begins. Now follow the black band. It's already so much smaller. And look at the bottom of the chart - Minard has plotted the temperature during the retreat. You can see it plummeting to brutally cold temperatures, well below freezing. The black line shrinks to almost nothing as the brutal Russian winter decimates the remaining soldiers. Of the 422,000 who invaded, only about 10,000 made it back. Minard's map doesn't just show us numbers; it tells a powerful, tragic story all told in a single image. It visualizes the loss of life in a way that a simple table of numbers never could. This is the power of data storytelling. -->


---
layout: center
---

"An especially effective device for enhancing the explanatory power of time-series displays is to add spatial dimensions to the design of the graphic, so that the data are moving over space (in two or three dimensions) as well as over time."

Six variables are plotted: 
- the size of the army
- its location on a two-dimensional surface
- direction of the army's movement (advance vs. retreat)
- and temperature on various dates during the retreat from Moscow.

“It may well be the best statistical graphic ever drawn.”

— The Visual Display of Quantitative Information, Edward Tufte, P40-41

<!-- It is one of the most heavily featured examples in the book. At the bottom of the page, you'll see Edward Tufte call the greatest statistical graphic ever made.
He highlights Minard’s ability to:
    Show army size as line thickness
    Tie position to geographical path
    Encode temperature during retreat
    Show direction (advance vs. retreat)
    Integrate time and location seamlessly
Tufte uses it as a model for:
    High-density data graphics
    The principle of “graphical excellence”
    Combining multiple variables without clutter
-->

---
layout: two-cols
---

## Reference Maps vs. Thematic (Data) Maps

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

<img src="/images/week6/electoral.png" class="mt-4" />


<!-- So we've seen that maps can do more than just show us the way. This brings us to a key distinction: Reference maps versus Thematic maps. A reference map, like Google Maps on the left, is all about location and navigation. It answers the question, "Where is it?". A thematic map, on the other hand, is about a specific topic or theme. The election map on the right isn't trying to help you drive to Texas; it's telling you a story about the political landscape. It answers the question, "What is the pattern here?". Today, we're focused on thematic maps, which we'll also call data maps. -->

---
layout: section
---

## Common Types of Data Maps

<!-- Now that we know what data maps are, let's look at some of the most common types you'll encounter. Each one has its own strengths and is suited for different kinds of data and different stories. We'll cover a few key examples that you can use in your own projects. -->

---
src: ./dataviz-maps.md
---

---
layout: intro
---

## Demo

Follow-along notebooks:
- [Map Vector Layer](https://observablehq.com/@datavizstudio/map-data-vector-layer-25)
- [Data Maps](https://observablehq.com/@datavizstudio/map-data-vector-layer-25)
