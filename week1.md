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

## Lecture (30 min)
- What is data visualization?
- Importance of data visualization
- Types of data and their visual representations
## Demo (1 hour)
- Observable account setup
- Observable basics
- Create the first notebook!
## Working Session (1 hour)

<!-- The first class is about answering some big picture questions - what to expect from the class, what data visualization is and why it matters. We will be spending a good chunk of time setting up the tool we will be using throughout the class.  -->


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

# Why Visualize Data

<v-clicks>

- Analyze patterns and trends
- Make data-driven/evidence-based decision
- Make complex data more accessible and digestible to their audience
- Explore, analyze, and communicate patterns and insights 

</v-clicks>


---
layout: iframe
url: https://www.youtube.com/embed/jbkSRLYSojo?si=OIwbNKIzT1jLtOqg
---

<!-- Show, don't tell. A 4 minute video by BBC.  -->

---
layout: quote
---

Data is wildly more powerful when it is both easy to understand and engaging to the public.

### More from Hans Rosling

- [Hans Rosling famous Ted Talks](https://www.ted.com/speakers/hans_rosling)
- [Gapminder interactive data explorer](https://www.gapminder.org/tools/#$chart-type=bubbles&url=v1)

<!-- Hans Rosling in the video showed the audience how effective Data Visualization can be as a communication tool if done correctly. He was a Swedish physician, academic and public speaker. He was a professor of international healthand the co-founder and chairman of the Gapminder Foundation. Global trends in health and economics come to vivid life in his bubble charts.  -->

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

<v-click>

- Everyone!

</v-click>


<!-- We live in a world that is inundated with data.   -->

---

##  Examples
- NYT
- Economists
- Chapter 55 
- Barbie vs Oppenheimer


---
layout: section
---

# Types of Data

---
layout: two-cols
---

## Qualitative

<v-clicks>

- Data that approximates or characterizes
- Often obtained through interviews, surveys, focus groups, documents, etc.
- Examples include:
  - name
  - sex (male, female, nonbinary)
  - observations (e.g., the food was salty)

</v-clicks>

::right::

## Quantitative

<v-clicks>

- Data that is measurable and expressed as a number
- Often gathered using metrics, tests, experiments, instruments with a ratings scale, etc.
- Examples include: 
  - cost
  - number of applicants
  - weight

</v-clicks>

---
layout: two-cols
---

## Discrete

<v-clicks>

- Data that can only take certain values

Examples include:
  - the cost of a BMW 7-series
  - your shoe size
  - number of people enrolled in this course

</v-clicks>

::right::

## Continuous

<v-clicks>

- Data that can take any value and usually changes over time

Examples include:
  - the speed of a car during the morning commute
  - your weight
  - the time your cat wakes up each day

</v-clicks>

---
layout: section
---

# Exercise
## Halloween Datasets
- Pumpkin dataset
- Candy dataset


---

# Data Analysis
<br/>

## Exploratory
- Exploratory data analysis (EDA) is the process of reviewing new data to discover patterns, to spot anomalies, to test hypotheses, and to check assumptions.


## Explanatory
- We also use data visualization to transform raw data into something compelling for an external audience.


---
layout: section
---

# Demo

---

# Observable
- All-in-one-place: code, data and visualization, running environment
- Open-source: Leverage common coding languages and open-source libraries, most flexible, always have access to your creations, works are transparent, free

- Notebook: web-based interactive canvases where you can combine data, code, and interaction
- Cell: content blocks - add content in **Markdown**, **JavaScript**, SQL, or HTML.

[Set up an account](https://observablehq.com/)

---

# Markdown

- [My First Notebook](https://observablehq.com/d/425164bd033d021d)
- [Markdown Cheatsheet](https://observablehq.com/d/5fad9ce5a1234c52)


---

# Javascript

- [Javascript Data Basics](https://observablehq.com/d/2dc5f3fdd2d0c5c5)


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

<!-- JSON is a data interchange format often used for data transmission between systems and is based on a subset of JavaScript object notation. JSON is highly prevalent and often the default choice for data interchange, especially in web and API contexts. -->

Other data formats: XML (eXtensible Markup Language), CSV (Comma-Separated Values), SQL (Structured Query Language), etc.