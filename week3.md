---
layout: intro
---

# Week 3
## Mapping Data to Graphics
11/14/2023

<!-- Last week was very information-dense. We didn’t get to play a lot in Observable. This week we will be making up for that and spend most of the time in Observable doing exercises and applying what we've learned from last week.

Quick recap
We went through a lot of the basic charts and their purposes - some are common options for qualitative and quantitative data, some are accurate data representations, and are good tools for exploratory analysis - finding patterns and trends, like scatter plots, histogram, some are mostly meant for more of a visual overview like pie chart, stream graph, dot matrix, pictogram, usually used for explanary purposes. 

We talked about structured data, and how to get them from the internet into Observable, and preprocess them for data visualization. 

I also overwhelmed you with Javascript definitions and basic functions - mentioned using ChatGPT - Any of you haven't used ChatGPT before? Sign up as we are probably going to use it today. Although ChatGPT can probably help you write code (better than most developers can) - you must know the basic concepts and language to ask the right question - it will get you there 90 percent but most of the time you might need to change something to make it work.  -->


---

# Agenda

## Recap and Exercise (30 min)
- Warm-up exercise - [MA municipalities](https://observablehq.com/@datavizstudio/ma-municipalities)
## Lecture + Demo (80 min)
- Grammar of Graphics (Mapping data dimension to graphic dimensions)
- Demo [Histogram VS Bar Chart](https://observablehq.com/@datavizstudio/rect-vs-bar)
- Observable gallery and documentation
- Quick break (10 min)
- [Dataviz Types and Their Functions](https://observablehq.com/@datavizstudio/dataviz-types-and-their-functions)
## Working Session (40 min)
- Find your own data
- Next week: Create your own data-driven pictogram/isotype chart


---
layout: image-right
image: ./images/week3/d3-plot-quadrant.png
---

# JS, D3, or Observable Plot?

"a histogram in D3 might require 50 lines of code, Plot can do it in one!"

— [D3 Documentation](https://d3js.org/what-is-d3)

<!-- 
We've been using Observable Plot and know how to quickly explore data using the built-in code snippets. We know how to somewhat modify the code impromptu. But we haven't yet talked about the semantics and how it works compared to the other tools out there.

D3 was created by Mike Bostock in 2011. Most creative and bespoke data visualizations on the web are created using D3. You can tailor the visualization to achieve exactly what you want. D3: even a basic chart may require a few dozen lines of code.  Plot is the high-level sister library of D3. The same team of people created D3 is now also working on Observable Plot. It gets you a little closer to the final product, say a histogram.
Most importantly, it adopts the concept of Grammar of Graphics, an effective way of undertanding and composing data visualization.  
-->

---
layout: intro-image-right
image: https://media.springernature.com/full/springer-static/cover-hires/book/978-0-387-28695-2?as=webp
---

# Grammar of Graphics

"A grammar of graphics is a tool that enables us to concisely describe the components of a graphic. Such a grammar allows us to move beyond named graphics (e.g., the “scatterplot”) and gain insight into the deep structure that underlies statistical graphics"
— [Hadley Wickham](https://vita.had.co.nz/papers/layered-grammar.html)

<!-- 
The Grammar of Graphics (GoG) is a language for defining statistical graphics like bar charts, scatterplots, and line graphs from composable pieces. 

On the right: This idea was originally introduced by Wilkinson's Grammar of Graphics - the idea of mapping data dimensions to graphic dimensions and using a systematic approach to creating a wide range of visualizations, allowing you think beyond an overarching “chart” abstraction in the process.

On the left: Hadley Wickham, he's a computer scentist who created the language R - for statistical computing and graphics and an opensource dataviz framework ggplot2. Here's a link to his paper that covers his proposal and implementations in detail. -->

---

![7 layers of grammar of graphics](https://blog.gramener.com/wp-content/uploads/2018/11/7-layers-of-grammar-of-graphics-to-tell-powerful-data-stories-3.png
)

<small>source: https://blog.gramener.com/grammar-of-graphics-data-stories/</small>


---
layout: section 
---

# Plot Grammers

---
layout: image
image: ./images/week3/observable-layers.png
---

<!-- 

Observable Plot library, inspired by Wilkinson's original work, It provides a structured and modular approach to building complex visualizations by layering different components to represent various aspects of the data. 

taken from official slides: https://docs.google.com/presentation/d/e/2PACX-1vQxvKDGkfiatd5fcGSIPZuEKUpRAq02UHMo6HC9_cJqKsNx5CT-6LAsWr72f5oPfq7Xi_-gJypxaggz/pub?start=false&loop=false&delayms=3000&slide=id.g24e07fe4aaa_0_88

-->

---
layout: section
---

<h2>Plot doesn’t have chart types; instead, you construct charts by layering <span style="color: yellow">marks</span>.</h2>

— [Observable Plot Documentation](https://observablehq.com/plot/features/marks
)
---

# Marks

"Plot provides a variety of mark types. Think of marks as the “visual vocabulary” — the painter’s palette 🎨, but of shapes instead of colors — that you pull from when composing a chart. Each mark type produces a certain type of geometric shape."

<v-clicks>

- Marks are geometric shapes
- Mark constructors take two arguments: *data* and *options*. 
- Mark options are specification of how data variations are mapped to graphic variations (mark binds channels to scales)
- Marks imply data types (Demo: rect vs bar)

</v-clicks>

---
layout: image
image: ./images/week3/Plot-dot-examples.png
---

---
layout: intro
---

## [Observable Gallery](https://observablehq.com/@observablehq/plot-gallery) is organized by mark types.

<!-- Official examples, organized by mark types -->

---
layout: image-right
image: ./images/week3/Plot-mark-options.png
---

[Observable Plot Mark Types:](https://observablehq.com/plot/features/marks)

Area, Arrow, Auto, Axis, Bar, Bollinger, Box, Cell, Contour, Delaunay, Density, Difference, Dot, Frame, Geo, Grid, Hexgrid, Image, Line, Linear regression, Link, Raster, Rect, Rule, Text, Tick, Tip, Tree, Vector

---
layout: fact
---

<h2>Mark Binds <span style="color: yellow">Channels</span> to <span style="color: yellow">Scales</span></h2>

Mark options are specification of how data variations are mapped to graphic variations.

---

# [Scales](https://observablehq.com/plot/features/scales#scale-options) 

"Scales convert an abstract value such as time or temperature to a visual value such as x→ or y↑ position or color. "

Each scale’s options are specified as a nested options object with the corresponding scale name within the top-level plot options:

- x - horizontal position
- y - vertical position
- r - radius (size)
- color - fill or stroke
- opacity - fill or stroke opacity
- length - linear length (for vectors)
- symbol - categorical symbol (for dots)

---

# [Channels](https://observablehq.com/plot/features/marks#marks-have-channels)

Channels are mark options that can be used to encode data. These options allow the value to vary with the data, such as a different position or color for each dot. 

![image](/images/week3/scale-channel.png)

<!-- Reducer - a type of statistical transforms, will save it for next time! -->

---
layout: section
---

# Demo

Marks imply data types, for example ["rect" vs "bar"](https://observablehq.com/@datavizstudio/rect-vs-bar)

<!-- The bar mark is a variant of the rect mark for use when one dimension is categorical and the other is quantitative. See also the cell mark. rect mark is used when both dimensions are quantitative (A rectangle has a quantitative width and height) -->


---
layout: fact
---

![image](/images/week3/observable-layers2.png)

<!-- Next time: more on Scale and Transform -->

---
layout: section
---

# Exercise

[Dataviz Types and Their Functions](https://observablehq.com/@datavizstudio/dataviz-types-and-their-functions)

---

# Prepping for Next Week

- Find your own data
    - [Data is Plural](https://www.data-is-plural.com/)
    - Wikipedia
    - [World Bank Data](https://data.worldbank.org/indicator/SE.PRM.CMPT.FE.ZS?locations=1W&start=1973&view=chart), [Census Data](https://data.census.gov/), [Boston City Data](https://data.boston.gov/dataset) and [MA State Data](https://data.mass.gov/)
    - ...
- Next week: Create your own data-driven [pictogram/isotype](https://observablehq.com/@observablehq/plot-isotype-chart) chart
    - Prepare summary data points
    - Find or create icons or emoji
    - Reading: [Picture it with pictograms](https://flourish.studio/blog/pictogram-isotype)