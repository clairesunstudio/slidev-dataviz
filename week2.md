---
layout: intro
---

# Week 2
## Mapping Data to Graphics
11/10/2025

<Credit />

<!-- 

Quick recap
Last week, We talked about Data Types - how to categorize data and and a little bit of JS basics around structuring data in code.

Today we are going to walk through how data dimensions are mapped to graphic dimensions - use data types can guide use to the right data visualization.
-->


---

# Agenda

## Recap (45 min)
- Assignment Showcase
- Data Types
## Concepts (45 min)
- Chart Types
- Grammar of Graphics (Mapping data dimension to graphic dimensions)
- Demo [Histogram VS Bar Chart](https://observablehq.com/@datavizstudio/rect-vs-bar)
- Observable gallery and documentation
## Working Session (40 min)
- [Dataviz Types and Their Functions](https://observablehq.com/d/33a013dde2488ae9?collection=@datavizstudio/the-art-of-data-visualization/2)


<!-- Has anyone used AI for help in the assignment? If you haven't, I will show a live demo how to natual language programming using a tool like chatGPT. Although ChatGPT can probably help you write code - you must know the basic concepts and language to ask the right question - it will get you there 90 percent but most of the time you might need to change something to make it work.  -->


--

# Recap

- Create a plot using our own [class survey data](https://docs.google.com/spreadsheets/d/1UWg7p7rcAFwVNdc986sk5EoToaUlr2KqaYQXTk-LTLI/edit?gid=1950617488#gid=1950617488) 
- Visualize your week (Dear Data)

<!-- 🧹 Data Cleaning & Normalization
Before plotting or analyzing your dataset:

- Inspect your data: Look for missing values, outliers, or inconsistent formats (e.g., “Boston ” vs “boston”).
- Normalize numeric variables (if they’re on very different scales) to make comparisons fair, especially for multivariate analysis.
Example: use min-max scaling or z-scores so that variables like “population” (millions) and “income” (thousands) are comparable.
- Rename columns with clear, readable labels (e.g., year instead of YR).
- Filter or aggregate where appropriate: drop irrelevant rows, combine categories, or compute averages/ratios.
- Document what you did — note any transformations or filtering in your notebook.

⚖️ Data Ethics: Integrity & Privacy
When working with real-world data:

Integrity

- Always cite the original source and date accessed.
- Avoid altering or cherry-picking values to fit a narrative.
- Be transparent about how you cleaned or filtered the data (show your steps).
- Check for data accuracy and acknowledge limitations or uncertainty.

Privacy
- Use publicly available or anonymized datasets only.
- Never publish personally identifiable information (PII) such as names, addresses, or emails.
- If your dataset includes sensitive fields (like age, income, or location), aggregate them or blur exact details (e.g., use age ranges).
- Respect data licenses and terms of use. -->

---

# Data Types

<img src="/images/week1/data-types.png" height="500"/>

---
layout: fact
---

<img src="/images/week1/data-types-with-dataviz.png" height="600"/>

<!-- We talked about Data Types - definitions, saw some examples, and I promised that these will be helpful in guiding us to the right visual presentation. 
When you think about data visualization, what comes to mind? probably chart types - when you open any data visualization tools, like tableau, excel, you are presented with a set of read-made options for you to plug in the data. 

Let's flip through some most common chart types that you would encounter in these tools.  -->

---
src: ./dataviz-quan-common.md
---


<!-- When you open up dataviz tool, you will almost always encounter a list of dataviz. It's useful to know these common chart types, they have gone through lots of user testing to become the convention. They are also usually the basis of bespoke dataviz. -->

---
layout: intro-image-right
image: https://media.springernature.com/full/springer-static/cover-hires/book/978-0-387-28695-2?as=webp
---

# Grammar of Graphics

"A grammar of graphics is a tool that enables us to concisely describe the components of a graphic. Such a grammar allows us to move beyond named graphics (e.g., the “scatterplot”) and gain insight into the deep structure that underlies statistical graphics"
— [Hadley Wickham](https://vita.had.co.nz/papers/layered-grammar.html)

<!-- 

Statisical charts are not monolithic entities. There's an undelying language shared across them, that defines bar charts, scatterplots, and line graphs from composable pieces. 

On the right: This idea was originally introduced by Wilkinson's Grammar of Graphics - the idea of mapping data dimensions to graphic dimensions and using a systematic approach to creating a wide range of visualizations, allowing you think beyond an discrete “chart” abstraction in the process.

Grammar makes language expressive. A language that has words and no grammar expresses only as many ideas as there are words. --
Leland Wilkinson

On the left: Hadley Wickham, he's a computer scentist who created the language R - for statistical computing and graphics and an opensource dataviz framework ggplot2. Here's a link to his paper that covers his proposal and implementations in detail. -->

---

![7 layers of grammar of graphics](https://blog.gramener.com/wp-content/uploads/2018/11/7-layers-of-grammar-of-graphics-to-tell-powerful-data-stories-3.png
)

<!-- the conceptual framework that underpins tools like ggplot2, Vega-Lite, and even the way many dataviz systems (like Observable or D3) are structured. -->


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
layout: section 
---

# Plot Grammers

---
layout: image
image: ./images/week3/observable-layers.png
---

<!-- 

The 7 layers of Grammar of graphics provide a standard set of guidelines on converting data into effective visualisations..

Observable Plot library, inspired by Wilkinson's original work, It provides a structured and modular approach to building complex visualizations by layering different components to represent various aspects of the data. 

taken from official slides: https://docs.google.com/presentation/d/e/2PACX-1vQxvKDGkfiatd5fcGSIPZuEKUpRAq02UHMo6HC9_cJqKsNx5CT-6LAsWr72f5oPfq7Xi_-gJypxaggz/pub?start=false&loop=false&delayms=3000&slide=id.g24e07fe4aaa_0_88

-->

---
layout: section
---

<h2>Plot doesn’t have chart types; instead, you construct charts by layering <span style="background-color: yellow; color: black">marks</span>.</h2>

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

# [Channels](https://observablehq.com/plot/features/marks#marks-have-channels)

Channels are mark options that can be used to encode data. These options allow the value to vary with the data, such as a different position or color for each dot. 

![image](/images/week3/scale-channel.png)


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
layout: section
---

# Demo

Marks imply data types. Follow-along demo: ["rect" vs "bar"](https://observablehq.com/d/e0b59b590f6a05ac?collection=@datavizstudio/the-art-of-data-visualization/2)

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

[Dataviz Types and Their Functions](https://observablehq.com/d/33a013dde2488ae9?collection=@datavizstudio/the-art-of-data-visualization/2)

---

# For next week - create an exploratory analysis

- Find a dataset online (with at least 100 rows and 4 quantitative attributes)
    - [Data is Plural](https://www.data-is-plural.com/)
    - [World Bank Data](https://data.worldbank.org/indicator/SE.PRM.CMPT.FE.ZS?locations=1W&start=1973&view=chart)
    - [Census Data](https://data.census.gov/)
    - [Boston City Data](https://data.boston.gov/dataset)
    - [MA State Data](https://data.mass.gov/)
    - or I will provide a ready-to-use dataset downloaded from Wikipedia: [MA municipalities data](https://en.wikipedia.org/wiki/List_of_municipalities_in_Massachusetts)
- Plot it in a notebook and derive an insight 
 