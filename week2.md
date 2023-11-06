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

We talked about Data Types - what they mean, examples, and potentially how they can help you narrow down the options of dataviz types and select the right data visualization for the dataset.

Today we are going to dive into some common chart types, and maybe some of theme you might not have encountered before, and understand how they work. Knowing these common dataviz are handy, because they can become your swissknife kit when comes to exploratory analysis, and also these chart types have gone through lots user testing to become the convention, they are the basis of all creative, explanatory and bespoke dataviz. 

-->


---
layout: section
---

## Qualitative

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

# Demo

- Javascript basics
- Data transformation and preprocessing


---
layout: section
---

# Exercises

- Visualize your own data using Plot code snippets
   - Transform coding skills dataset
   - Import downloaded MA municipalities data