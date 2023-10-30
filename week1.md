---
theme: apple-basic
layout: intro
---

# Week 1
## Introduction to Data Visualization
10/31/2023

<Credit />
---

# Agenda

## Intro + Lecture (45 min)
- What is data visualization?
- Importance of data visualization
- Types of data and their visual representations
## Demo (50 min)
- Observable account setup
- Observable basics
- Create the first notebook!
## Working Session (45 min)

<!-- The first class is about answering some big picture questions - what to expect from the class, what data visualization is and why it matters. We will be spending a good chuck of time setting up the tool we will be using throughout the course. -->


---
layout: image-right
image: 'https://m.media-amazon.com/images/I/81ud7Ri9kFL._SY522_.jpg'
---

# What Is Data Visualization

<quote v-click> The visual display of quantitative information — Edward Tufte</quote> 
<br/>
<br/>
<div v-click>Common data visualizations include tables, charts, graphs, and dashboards.</div> 

<!-- Quoting the title of ET's first published book on dataviz. This is a very influential book in the field, it's regarded one of the cornerstone books on dataviz. This book studies the historic data visualizations, critiques dataviz published by the press, and distills guidelines and principles of making good data graphics. ET's background was in Political Science, Statistics, and Computer Science and he taught at Yale and Princeton. He has a science background, yet he devotes the majority of his book discussing graphical excellence. This is also why this book is so interesting, his emphasis on a high design standard on something was not a popular problem in the design community before. He said design is not about decoration, the fact that it looks good is not a luxuary it's a necessity, it helps the perception of the data. In this class, I will be frequently referencing the theories and examples from his book. -->

---
layout: section
---

## Why Visualize Data

<v-clicks>

- Reveal patterns and trends
- Empower data-driven/evidence-based decision
- Make complex data more accessible and digestible to their audience

</v-clicks>

<!-- Make data more understandable to a broader audience. Empower individuals and communities with data, helping them make informed decisions and advocate for change. -->

---
layout: iframe
url: https://www.youtube.com/embed/jbkSRLYSojo?si=OIwbNKIzT1jLtOqg
---

<!-- In the spirit of show, don't tell. A 4 minute video by BBC.  -->

---
layout: quote
---


### More from Hans Rosling

- [Hans Rosling famous Ted Talks](https://www.ted.com/speakers/hans_rosling)
- [Gapminder interactive data explorer](https://www.gapminder.org/tools/#$chart-type=bubbles&url=v1)

<!-- Data is wildly more powerful when it is both easy to understand and engaging to the public. In this video, Hans Rosling showed the audience how effective Data Visualization can be as a communication tool if done correctly. He was a Swedish physician, academic and public speaker. He's famous for his Tedtalks on global trends in health and economics and his animated bubble charts. He co-founded the Gapminder Foundation - an NGO that use data and visualizations to provide information on social-economic and environmental trends and promotes sustainable global development. -->

---

#  Who Uses Data Visualization

- Data Scientists
- Analysts - Business, Financial, Healthcare, Sports
- Economists
- Government & Policy Makers
- Journalists
- Educators
- Marketers
- Researchers - Academics, UX
- Artists

<v-click>

- Everyone!

</v-click>

We live in a world that is inundated with data. We are data citizens. The ability to refine, process and analyze data shapes our understanding of the world. 

---
layout: fact
---

## [Visualizing the Israel-Hamas war (CNN)](https://www.cnn.com/2023/10/10/world/map-israel-hamas-war-dg/index.html)
<small>Across the Middle East, Gaza is among the smallest and most densely-packed cities.</small>

![Gaza population density](/images/week1/gaza-population-density.png)

<small><a href="http://www.demographia.com/db-worldua.pdf">Source: Demographia World Urban Areas, 2023</a></small>

<!-- 
As airstrikes in Gaza have forced hundreds of thousands of people to flee their homes and overwhelm areas, including hospitals, there is little room to go.
Visuals are more memorable than text alone. People tend to retain information presented visually for a longer time.
Imagine you are looking at the raw data, or just a table of these data points. You are not likely to recall the numbers of people per sqare mile across these cities, but the visual will have a long-lasting effect on your brain. 
-->

---
layout: fact
---

"Without data, you're just another person with an opinion."

— W. Edwards Deming


---
layout: fact
---

## [The Massachusetts Opioid Epidemic](https://chapter55.digital.mass.gov/)

| | |
| -------- | ------- |
| ![Chapter55 line chart](/images/week1/chapter55-MA-vs-USA.png)  | ![Chapter55 pictogram](/images/week1/chapter55-prescription-decline.gif)    |


<!-- 
Chapter 55 Data Report (>100 pages, technical, scientific report)
Chapter 55 Data Story (accessible reading level, multimedia, interactive, creative process)
Why data story —> our goal is data to information into insights 
-->

---
layout: center
---

<img src="/images/week1/data-value-relationship.png"/>

> Source: Dave Campbell’s model of information refinement. Infographics: The Power of Visual Storytelling by Ross Crooks, Josh Ritchie, Jason Lankow

<!-- 
Data visualization is the tool that transforms data into information and insights. 
-->

---
layout: fact
---

## [Front Row to Fashion Week (NYT)](https://www.nytimes.com/newsgraphics/2014/02/14/fashion-week-editors-picks/index.html)

![Frontrow Fashion](/images/week1/frontrow-fashion.gif)
![Frontrow Fashion Fingerprints](/images/week1/frontrow-fashion-fingerprints.png)

<!-- 
Of the hundreds of fall 2014 collections shown during New York Fashion Week, here are the ones that left the biggest impressions on fashion editors as they headed off to the next round of shows, in London, Milan and Paris.

Color is an important part of the ideas and trends that emerge during Fashion Week. Each look is broken into a minimal stack of color bars, then combined to abstract the collection’s hues.
-->

---
layout: quote
---

### More from Mike Bostock

- [NYT Dataviz work by Mike Bostock](https://www.nytimes.com/by/mike-bostock)
- [Mike Bostock Generative Art on Observable](https://observablehq.com/@mbostock/altered-world)

<!-- 
Michael Bostock is an American computer scientist and data visualization specialist. He is one of the co-creators of Observable and a key developer of D3.js, a JavaScript library used to produce dynamic, interactive data visualizations for web browsers. A lot of the Javascript based dataviz libraries are based upon D3.
-->

---
layout: iframe
url: https://www.youtube.com/embed/ystkKXzt9Wk?si=5VtC6-GkTAUT1VyC
---

<!-- Paths of air traffic over North America visualized in color and form - Aaron Koblin - FAA data was parsed and plotted using the Processing programming. 

Aaron created and led the Data Arts Team at Google from 2008-2015. Aaron has received numerous awards including the Smithsonian Cooper-Hewitt National Design Award for Interaction Design and the National Science Foundation’s award for science visualization. He received an Emmy in 2014, and two of his music video collaborations have been Grammy nominated. In 2010 Aaron was the Abramowitz Artist in Residence at MIT. He received his MFA in Design|Media Arts from UCLA. His work is part of the permanent collection of the Museum of Modern Art (MoMA) in New York, the Victoria & Albert Museum (V&A) in London, and the Centre Pompidou in Paris. His projects have been shown at international festivals including TED, Sundance, Tribeca Film Festival, Ars Electronica, SIGGRAPH, the Japan Media Arts Festival, and more.-->


---
layout: quote
---

### More from Aaron Koblin

- [Aaron Koblin: Artfully visualizing our humanity](https://www.youtube.com/watch?v=4v4XxlfVk3o)
- [Aaron Koblin projects](http://www.aaronkoblin.com/)

<!-- Artist, designer, programmer, and entrepreneur specializing in data and digital technologies.
He talked about the flight data art and data art he created using crowd-sourced data. Very interesting if you are into a data arts and humanizing d

Aaron created and led the Data Arts Team at Google from 2008-2015. Aaron has received numerous awards including the Smithsonian Cooper-Hewitt National Design Award for Interaction Design and the National Science Foundation’s award for science visualization. He received an Emmy in 2014, and two of his music video collaborations have been Grammy nominated. In 2010 Aaron was the Abramowitz Artist in Residence at MIT. He received his MFA in Design|Media Arts from UCLA. His work is part of the permanent collection of the Museum of Modern Art (MoMA) in New York, the Victoria & Albert Museum (V&A) in London, and the Centre Pompidou in Paris. His projects have been shown at international festivals including TED, Sundance, Tribeca Film Festival, Ars Electronica, SIGGRAPH, the Japan Media Arts Festival, and more. -->


---
layout: quote
---

https://observablehq.com/collection/@observablehq/generative-art

---
layout: fact
---

"The ability to take data—to be able to understand it, to process it, to extract value from it, to visualize it, to communicate it—that’s going to be a hugely important skill in the next decades."

— Google’s Chief Economist Dr. Hal R.Varian


---
layout: fact
---

"We are dealing with data systems that are larger than anything that humans have ever built or experienced before."

— Jer Thorp


---


# Data Analysis
<br/>

## Exploratory
- Exploratory data analysis (EDA) is the process of reviewing new data to discover patterns, to spot anomalies, to test hypotheses, and to check assumptions.


## Explanatory
- We also use data visualization to transform raw data into something compelling for an external audience.

---
layout: fact
---

## Data Visualization Process

```mermaid {theme: 'neutral', scale: 0.8}
flowchart TD
subgraph ZA[" "]
direction LR
  B[Choose DataViz Type] --> C[Apply Design Principles] --> D[Testing] --> E[Refine and Iterate] --> D
end
Z0[Define Objectives and Audience] --> Z1[Data Collection] --> Z2[Data Preprocessing] --> Z3[Exploratory Analysis] --> ZA --> Z4[Create Explanatory Data Visualization]

```

<!-- Data are raw facts, objective, but the way we collect data, process data and present data can be subjective and biased. Data visualization are convincing, but they can also distort information in the attempts to do so. As consumers of data graphics, equip ourselves with data literacy skills can strenghthen our judgements of the quantitative evidence, and develop our own insights. -->


---
layout: section
---

# Types of Data

---
layout: two-cols
---

## Qualitative

<v-clicks>

- Data that approximates or characterizes, also known as categorical or non-numeric data.
- Often obtained through interviews, surveys, focus groups, documents, etc.
- Examples include:
  - name
  - gender (male, female, nonbinary)
  - observations (e.g., the food was salty)

</v-clicks>

::right::

## Quantitative

<v-clicks>

- Data that is measurable and expressed as a number, also known as numerical data.
- Often gathered using metrics, tests, experiments, instruments with a ratings scale, etc.
- Examples include: 
  - cost
  - number of students
  - weight

</v-clicks>

---
layout: section
---

## Types of Qualitative Data


---
layout: two-cols
---

## Nominal Data

<v-clicks>

- Categories with no inherent order or ranking

Examples include:
- Types of fruits (e.g., apples, bananas, oranges).
- Colors (e.g., red, blue, green).
- Marital status (e.g., single, married, divorced).
- Binary data (e.g., yes/no, true/false)

</v-clicks>

::right::

## Ordinal

<v-clicks>

- Categories with a meaningful order or ranking

Examples include:
- Education levels (e.g., high school, bachelor's, master's).
- Survey responses with Likert scales (e.g., strongly disagree, disagree, neutral, agree, strongly agree).
- Socioeconomic status (e.g., low, medium, high)

</v-clicks>

---
layout: section
---

## Types of Quantitative Data


---
layout: two-cols
---

## Discrete

<v-clicks>

- Distinct values or categories that can be counted and enumerated

Examples include:
  - shoe sizes
  - number of people enrolled in this course

</v-clicks>

::right::

## Continuous

<v-clicks>

- Measurements that can take on any value within a given range. It can be divided into smaller and smaller units without limit

Examples include:
  - the speed of a car during the morning commute
  - Time intervals
  - Temperature
  - Weight and Height

</v-clicks>


---
layout: fact
---

<img src="/images/week1/data-types.png" height="600"/>

<!-- Data Types Recap -->


---
layout: fact
---

<img src="/images/week1/data-types-with-dataviz.png" height="600"/>

<!-- Data Types Recap DataViz-->



---
layout: section
---

# Structured data

Structured data is organized and formatted in a way that is easily understandable by both humans and machines. It follows a predefined structure or schema that allows for clear organization and presentation of data. 

---
layout: section
---

## Unstructured

John is 30 years old and he lives in New York.

## Structured

```json
{ // JSON object
  "name": "John",
  "age": 30,
  "city": "New York"
}
```

<!-- JSON is a data interchange format often used for data transmission between systems and is based on a subset of JavaScript object notation. JSON is highly prevalent and often the default choice for data interchange, especially in web and API contexts. -->

Other data formats: XML (eXtensible Markup Language), CSV (Comma-Separated Values), SQL (Structured Query Language), etc.

---

# JSON (JavaScript Object Notation)

JavaScript Object Notation - a subset of JavaScript object literal notation. It consists of key-value pairs, where keys are strings, and values can be strings, numbers, objects, arrays, booleans, or null.

```json
{ // JSON object
  "name": "John",
  "age": 30,
  "city": "New York"
}
```
<v-click>
```ts
var person1 = { // javascript object
  name: "John",
  age: 30,
  city: "New York"
}
```
</v-click>

<!-- JSON is based on a subset of JavaScript object notation.  -->

---
layout: section
---
# Exercise 
[survey responses](https://docs.google.com/forms/d/1DPSLJ9Kq6GbVBsQkyhqxri6x0v4otgaXg1CdhFfHWL8/edit#responses)

<!-- 
Pie Charts are ideal for giving the reader a quick idea of the proportional distribution of the data.

Bar Chart uses either horizontal or vertical bars (column chart) to show discrete, numerical comparisons across categories. 
 -->

---
layout: section
---

# Demo

---
layout: section
---

## Observable

- [Set up an account](https://observablehq.com/)
- [My First Notebook](https://observablehq.com/d/425164bd033d021d)
- [Markdown Cheatsheet](https://observablehq.com/d/5fad9ce5a1234c52)


<!-- - All-in-one-place: code, data and visualization, running environment
- Open-source: Leverage common coding languages and open-source libraries, most flexible, always have access to your creations, works are transparent, free

- Notebook: web-based interactive canvases where you can combine data, code, and interaction
- Cell: content blocks - add content in **Markdown**, **JavaScript**, SQL, or HTML. -->


---

# Javascript

- [Javascript Data Basics](https://observablehq.com/d/2dc5f3fdd2d0c5c5)


---

