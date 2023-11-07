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

We talked about Data Types - definitions, saw some examples, and potentially how they can help you narrow down the dataviz and select the right visual presentation for the dataset.

Today we are going to walk through these chart types and some additional ones, breakdown how they work. Knowing these common dataviz are handy, because they can become your swissknife kit when comes to exploratory analysis, and also these chart types have gone through lots user testing to become the convention, they are the basis of creative, explanatory and bespoke dataviz. 

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
- Copy and Paste into a spreadsheet and export as .CSV
- Or use an API [Wikitable2json](https://www.wikitable2json.com/), e.g. [1st table](https://www.wikitable2json.com/api/List_of_municipalities_in_Massachusetts?table=0)
- Download [JSON formatter](https://chrome.google.com/webstore/detail/json-formatter/bcjindcccaagfpapjjmafapmmgkkhgoa) in Chrome to preview data

<!-- In this class, we are not going to delve into data collection too much - although how data is collected does impact the data accuracy. You are welcome to collect your own data. We are going to mostly use sample data, or data that's on the web of our interests for the purpose of this class. 
-->



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