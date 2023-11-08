---
layout: intro
---

# Week 2
## Data Exploration and Preparation
11/07/2023

<Credit />

---

# Agenda

## Lecture (40 min)
- Familiarize with basic chart types
- Structured Data
- Data sourcing and collection from the web
## Demo (50 min)
- Javascript basics
- Data preprocessing
- Write the first chart!
## Working Session (50 min)
- Find your own data
- Exercises



---
layout: fact
---

<img src="/images/week1/data-types-with-dataviz.png" height="600"/>


<!-- Recap from last week

We talked about Data Types - definitions, saw some examples, and potentially how they can help you narrow down the options and select the right visual presentation for a dataset.

Today we are going to walk through these chart types and some additional ones, and breakdown how they work. Knowing these common dataviz are handy, because they have gone through lots of user testing to become the convention. They are also usually the basis of bespoke dataviz. 

-->


---
layout: section
---

## Qualitative

<!-- Purely qualitative datasets have only limited dimensions to map to visuals, therefore only limited dataviz options available. Usually for these data, we are interested in visualzing the relationships between categories - hierarchy, comparison, part of a whole, logical flow. Let's quickly go through some commonly seen options. -->

---
src: ./week2-dataviz-qual.md
---

---
layout: section
---

## Qualitative


---
src: ./week2-dataviz.md
---


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

### JSON (JavaScript Object Notation)
```json
{
  "name": "John", // key-value pair
  "age": 30,
  "city": "New York"
}
```

### CSV (Comma-Separated Values)
```csv
name, age, city
John, 30, New York
```

<small>Other data formats: XML (eXtensible Markup Language), SQL (Structured Query Language), etc.</small>

<!-- JSON is a data interchange format often used for data transmission between systems and is based on a subset of JavaScript object notation. JSON is highly prevalent and often the default choice for data interchange, especially in web and API contexts. -->

---

# JSON

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

# Data Sourcing

## Cities and Towns in MA

- Search "cities and towns in massachusetts"
- First result in Google - [List of municipalities in Massachusetts](https://en.wikipedia.org/wiki/List_of_municipalities_in_Massachusetts)
- [Follow along notebook](https://observablehq.com/@datavizstudio/ma-municipalities)

<!-- In this class, we are not going to delve into data collection too much - although how data is collected does impact data accuracy. You are welcome to collect your own data. For the purpose of this class, we are not going to start collecting data from scratch. Last time, we looked at our small dataset from all of your survey responses, we are going to go back to that; as well as exploring the sample data that's provided out-of-box by Observable. The goal of today is to walk you through how to source your own data. We just learned a lot of theorectical stuff, let's get our hands dirty by switching to Observable and starting a new notebook.
-->

---
layout: section
---

# Demo

- Javascript basics
- Data transformation and preprocessing
- [Observable Notebook](https://observablehq.com/@datavizstudio/basic-javascript-concepts-for-data)


---
layout: section
---

# Exercises

- Visualize your own data using Plot code snippets
   - Transform coding skills dataset
   - Import downloaded MA municipalities data
- Look for your own data
  - [Data is Plural](https://www.data-is-plural.com/)