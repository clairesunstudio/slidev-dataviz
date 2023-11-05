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
- Plot - grammar of graphics
- Write the first chart!
## Working Session (50 min)
- Find your own data
- Exercises


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
src: ./week2-dataviz.md
---