---
layout: intro
--- 
# Week 5
## Interactive Dataviz
11/28/2023

<Credit />

---
layout: section
---

## Recap

- Do not quote data out of context
- The number of information-carrying dimensions depicted should not exceed the number of dimensions in the data.
- Value of some variables can change over time (eg. money – inflation, population – increase) Make comparisons using inflation-adjusted units of money.
- Representation of numbers should be directly proportional to the numerical quantities represented.
- Show data variation, not design variation.
- Don't: Too many decoration (non-data ink)

<!-- Last week, we learned principles and theories of dataviz. -->


---

# Agenda

### Recap and Warm-up (30 min)
- The Visual Information-Seeking Mantra + Examples
- How to plot a matrix using Observable Plot - [Isotype Matrix Notebook](https://observablehq.com/@datavizstudio/person-isotype-matrix)
### Demo + Exercises (2h)
- Quantative and Categorical Colors
- Tips and Pointers
- Zoom and Filter
- User Inputs
- Exercise: Recreate the [Gapminder visualization](https://www.gapminder.org/tools/#$chart-type=bubbles&url=v1) made famous by Hans Rosling. 

---
layout: statement
---

Visual Information-Seeking Mantra:

## "Overview first, zoom and filter, then details-on-demand." 

— Shneiderman, 1996

<!-- There are many possible paths to discovery, but some are surer and faster than others. When skilled seekers venture into the world of data exploration, they tend to follow a particular path that Ben Shneiderman of the University of Maryland recognized and expressed in the form of a mantra 
-->

---
layout: center
---

Example 1: Overview first, then details-on-demand

<img src="/images/week5/prescription.gif" style="height: 360px">

<!-- Overview provides a general context for understanding the data set; it paints a "picture" of the whole data entity that the information visualization represents. Patterns and themes in the data that may be helpful can often be seen only from a vantage point that comprises the whole view. From this perspective, major components and their relationships to one another are made evident. Simply the overall shape of the data itself can provide assistance in understanding the information that is encoded. Significant features can be discerned and selected for further examination. Such features might not be readily viewable from another part of the data representation or might be obscured from certain vantage points. Revealing these features at the outset can aid the user in filtering the extraneous information so that they can complete their task more efficiently by excluding unimportant aspects of the representation.
[Craft and Cairns, 2005] -->

<small>[The opioid epidemic data story](https://chapter55.digital.mass.gov/#addictions)</small>

---
layout: center
---

Example 2: Overview first, zoom and filter

<img src="/images/week5/abcs.gif" style="height: 360px">

<!-- Overview provides a general context for understanding the data set; it paints a "picture" of the whole data entity that the information visualization represents. Patterns and themes in the data that may be helpful can often be seen only from a vantage point that comprises the whole view. From this perspective, major components and their relationships to one another are made evident. Simply the overall shape of the data itself can provide assistance in understanding the information that is encoded. Significant features can be discerned and selected for further examination. Such features might not be readily viewable from another part of the data representation or might be obscured from certain vantage points. Revealing these features at the outset can aid the user in filtering the extraneous information so that they can complete their task more efficiently by excluding unimportant aspects of the representation.
[Craft and Cairns, 2005] -->

<small>[The ABCs of Success in High School and Beyond](https://abcs.sites.digital.mass.gov/)</small>

---
layout: center
---

Example 3: Overview first, zoom and filter, then details-on-demand

<img src="/images/week5/rideshare.gif" style="height: 360px">

<!-- Overview provides a general context for understanding the data set; it paints a "picture" of the whole data entity that the information visualization represents. Patterns and themes in the data that may be helpful can often be seen only from a vantage point that comprises the whole view. From this perspective, major components and their relationships to one another are made evident. Simply the overall shape of the data itself can provide assistance in understanding the information that is encoded. Significant features can be discerned and selected for further examination. Such features might not be readily viewable from another part of the data representation or might be obscured from certain vantage points. Revealing these features at the outset can aid the user in filtering the extraneous information so that they can complete their task more efficiently by excluding unimportant aspects of the representation.
[Craft and Cairns, 2005] -->

<small>[Rideshare in Massachusetts](https://tnc.sites.digital.mass.gov/)</small>


---

## Demo 


### Part 1: 

Follow-along notebook: [Isotype Matrix Notebook](https://observablehq.com/@datavizstudio/person-isotype-matrix)
- How to plot data in a two dimensional coordinate system

### Part 2: 

Follow-along notebook: [Colors, Labels and Interactivity](https://observablehq.com/@datavizstudio/colors-labels-and-interactivity)

- Quantative and Categorical Colors
- Overview first, zoom and filter, then details-on-demand


---

# Assignment

- Try to recreate one of these charts:
    - "Deadly Trend: Switching from Legal to Illegal Opioids" in the [The Massachusetts Opioid Epidemic](https://chapter55.digital.mass.gov/)
    - "Explore Your District" in the [The ABCs of Success in High School and Beyond](https://abcs.sites.digital.mass.gov/)
    - Or create an interactive dataviz of your choice