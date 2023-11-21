---
layout: intro
---

# Week 4
## Design Principles for Effective Visualizations
11/21/2023

<Credit />

---
layout: image
image: ./images/week3/observable-layers.png
---

<!-- Last week, we introduced the grammer of graphics and how the Observable Plot grammer is based upon that concept. We talked about marks, scales and channels(and constant). Observable Plot lets us compose charts starting from Marks instead of chart types. We talked about general rules mapping data dimensions to graphic dimensions, which aligns with the Observable Plot semantics. -->

---

# Agenda

## Recap and Lecture (30 min)
- Principles and theories of data visualization
## Demo (60 min)
- How to create a [data-driven isotype/pictogram](https://observablehq.com/d/929667581b308364)
    - using emoji
    - using custom icons and with coordinates
## Working Session (60 min)
- Create your own data-driven pictogram/isotype chart

<!-- Today we are going to talk about the principles of data visualization. We will revisit some of the rule of thumb and concepts we came across earlier. 

Last week I asked you to prepare some summary statistics, and provided you some readings about isotype charts. The main activity today is going to be around creating a isotype chart on your own. I will first demo how to build them from scratch. The plan is to move through the slides rather quickly and we save the majority of time for demo and working session.  -->


---
layout: statement
---

**Excellence in statiscal graphics consists of complex ideas communicated with clarity, precision, and efficiency.**

— Edward Tufte


--- 

## Principles of Graphical Excellence

- well-designed presentation of interesting data - a matter of substance, of statistics, and of design
- complex ideas communicated with clairty, precision, and efficiency.
- gives the viewer the greatest number of ideas in the shortest time with the lest ink in the smallest space (data-ink ratio)
- telling the truth about the data (graphical integrity)

<!-- Graphical displays should:

- show the data
- induce the viewer to think about the substance rather than about methodology, graphic design, the techonolgy of graphic producation or something else
- avoid distrorting what the data have to say
- present many numbers in a small space (ink-to-data ratio)
- make large data sets coherent
- encourage the eye to compare different pieces of data
- reveal the data at several levels of detail, from a broad overview to the fine structure (overview as default, details on demand)
- serve a reasonably clear purpose: description, exploration, tabulation, or decoration
- be closely integrated with the statistical and verbal descriptions of a dataset -->

--- 

## Do not quote data out of context

Correlation is not causation.

<img src="/images/week4/correlation-not-causation.png" />

<!-- 
Do not quote data out of context. 
Correlation is not causation. -->


--- 

## Graphic dimensions should not exceed data dimension

Some variables change over time. 

<img src="/images/week4/data-dimension.png" />

<!-- 
Do not quote data out of context. 
Correlation is not causation. -->

--- 

## Show data variation, not design variation

Representation of numbers should proportional to the actual numbers.

<img src="/images/week4/design-variation.png" />

<!-- 
Do not quote data out of context. 
Correlation is not causation. -->


--- 
layout: image-left
image: ./images/week4/area-vs-radius.png
---

## Use area to represent quantities, not radius or diameter. 
e.g. Bubble chart

- 2x radius => 4x area
- 2x area

<br>
<small>
Note: by default, Observable defaults the scale r to sqrt (so it can directly be mapped to quantity)
</small>

<!-- 
Do not quote data out of context. 
Correlation is not causation. -->

---

## Lie Factor

<img src="/images/week4/lie-factor.png" />
<img src="/images/week4/lie-factor-examples.png" />

<!-- The representation of numbers, as physically measured on the surface of the graphic itself, should be directly proportional to the quantities represented. -->

---

## Data to Ink Ratio




---
layout: statment
---

"In good information visualization, there are no rules, no guidelines, no templates, no standard technologies, no stylebooks… You must simply do whatever it takes."

— Edward Tufte

<!-- Although we just went through a lot of principles and theories most and put forward or reinforced by Edward Tufted. I want to end with this quote of his.  Knowing you audience is important - if you are writing an academic paper, you would choose , but if it's for a more broader audience and none technical audience, creativity, good design and communication are also important for explanatory dataviz.Guidelines are meant to be followed not worshiped. Learn the rules like a pro, so you can break them like an artist. For example, the maximizing the data ink ratio. However, in any case, some principles should always be followed - a dataviz should never distort the data. -->


---
layout: section
---

## Case Studies


Gun Death Data Stories, which one is more successful?


---
layout: section
---

## Demo

