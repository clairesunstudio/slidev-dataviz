---
layout: intro
--- 
# Week 4
##  Interactivity + Storytelling
11/24/2025

<Credit />

---
layout: two-cols
---

## Graphical Excellence
- Shows the data accurately
- Induces the viewer to think about substance, not methodology
- Presents many numbers in a small space (ink-to-data ratio)
- Makes large data sets coherent
- Encourages comparison of different pieces of data (multivariate)
- Reveals data at several levels of detail

::right::

## Graphical Integrity
- Lie Factor = (size of effect shown in graphic) / (size of effect in data)
- Lie factor should be close to 1.0
- Clear, detailed labeling defeats graphical distortion
- Show data variation, not design variation (Isotype chart)
- Don't quote data out of context (correlation is not causation)
- Avoids distorting what the data have to say
- **Use rates (e.g., per 100,000)** for population data to enable fair comparisons.
- **Use standardized units (e.g., inflation-adjusted dollars)** for time-series money data.


<!-- Last week, we went over some basic principles and theories of dataviz, brought forward by Edward Tufte.

In time-series displays of money, defalted and standardized units of monetary meansurement are nearly always better than nominal units.

careful when using 2D and 3D graphics to represent 1D data 
- when you scale marks or graphics along one axis, remember that the 2D graphics are scaled exponentially. 
- Quantities shouldn't shown by enlarging the same picture or symbol but by repeating the same-sized symbol.
-->


---

# Agenda

### Isotype Demo (45 min)
- Isotype Matrix using Observable Plot ([Notebook](https://observablehq.com/@datavizstudio/person-isotype-matrix25?collection=@datavizstudio/the-art-of-data-visualization/2))
### Concepts (45 min)
- The Visual Information-Seeking Mantra + Examples
### Demo + Activities (1h)
- Colors, Labels, and Interactivity ([Notebook](https://observablehq.com/@datavizstudio/colors-labels-and-interactivity25?collection=@datavizstudio/the-art-of-data-visualization/2))
    - Quantitative and Categorical Colors
    - Implementing Zoom, Filters, and Tooltips
- Exercise: Recreate the [Gapminder visualization](https://www.gapminder.org/tools/#$chart-type=bubbles&url=v1) made famous by Hans Rosling. 

---
layout: statement
---

Visual Information-Seeking Mantra:

## "Overview first, zoom and filter, then details-on-demand." 

— Shneiderman, 1996

<v-clicks>

- **Overview:** Gain a high-level understanding of the entire dataset.
- **Zoom and Filter:** Focus on interesting areas or subsets of the data.
- **Details-on-Demand:** Get specific information about individual data points (e.g., via tooltips).
</v-clicks>

<!-- There are many possible paths to discovery, but some are surer and faster than others. When skilled seekers venture into the world of data exploration, they tend to follow a particular path that Ben Shneiderman of the University of Maryland recognized and expressed in the form of a mantra 

Ben Shneiderman (born August 21, 1947) is an American computer scientist, a Distinguished University Professor in the University of Maryland Department of Computer Science. He conducted fundamental research in the field of human–computer interaction, developing new ideas, methods, and tools such as the direct manipulation interface, and his eight golden rules for interaction design.

Overview paints a "picture" of the whole dataset. Patterns and themes in the data that may be helpful can often be seen only from a vantage point that comprises the whole view. From this perspective, major components and their relationships to one another are made evident. Simply the overall shape of the data itself can provide assistance in understanding the information that is encoded. Significant features can be discerned and selected for further examination. Such features might not be readily viewable from another part of the data representation or might be obscured from certain vantage points. Revealing these features at the outset can aid the user in filtering the extraneous information so that they can complete their task more efficiently by excluding unimportant aspects of the representation.
[Craft and Cairns, 2005]
-->

---
layout: center
---

Example 1: Overview first, then details-on-demand



<img src="/images/week5/prescription.gif" style="height: 360px">

[The opioid epidemic data story](https://chapter55.digital.mass.gov/#addictions)

<!-- This story confronts the tragic evolution of the opioid crisis in Massachusetts. It begins with a powerful **overview** showing the dramatic rise in deaths over time. As you explore the timeline, **details-on-demand** reveal a critical shift: while prescription-related deaths leveled off, they were tragically replaced by a surge in deaths from heroin and, more recently, highly potent fentanyl. 

Scroll-driven Narratives
What it is: Content unfolds as users scroll, with visualizations updating dynamically

What it is: Reveal information step-by-step to avoid overwhelming users
1. High-level trend line
2. Click to add regional breakdown  
3. Hover for individual data points
4. Filter by time period

Interactive Annotations
What it is: Contextual information that appears on demand
Tooltips with additional context
Clickable hotspots explaining anomalies
Pop-up explanations for methodology
-->


---
layout: center
---

Example 2: Overview first, zoom and filter



<img src="/images/week5/abcs.gif" style="height: 360px">

[The ABCs of Success in High School and Beyond](https://abcs.sites.digital.mass.gov/)


<!-- This project provides an actionable **overview** of the key factors that predict student success after high school, like attendance and grades. It's designed for students, parents, educators and policymakers. The core interaction allows users to **zoom and filter** from the statewide view down to a specific district, making the data relevant and comparable for local communities.

Martini Glass Structure
What it is: Start with guided narrative (author-driven), then allow exploration (reader-driven)

Structure:

Opening: Set up the story and context
Guided tour: Walk through key insights
Exploration: Let users dive deeper

Multi-modal Storytelling
What it is: Combine different media types

Elements:

Photography + data overlays
Video + interactive charts
Audio narration + synchronized visuals
Illustrated explanations + real data

-->

---
layout: center
---

Example 3: Overview first, zoom and filter, then details-on-demand



<img src="/images/week5/rideshare.gif" style="height: 360px">

[Rideshare in Massachusetts](https://tnc.sites.digital.mass.gov/)

<!-- This project visualizes the immense scale and patterns of rideshare services across Massachusetts. The story starts with a geographic **overview** of all trips, revealing hotspots. Users can then **zoom** into specific towns and **filter** by time of day or day of the week. Finally, hovering provides **details-on-demand** for any location, showing precise trip counts and completing the full analytical journey. -->

---
layout: two-cols
---

### The Pudding: Song Repetition
Guides viewers step-by-step through the complex Lempel-Ziv algorithm 

<a href="https://pudding.cool/2017/05/song-repetition/"><img src="/images/week4/case1.png" class="mt-2"></a>

::right::
### NYT: You Draw It

Invites the viewers to come up with a hypothesis by drawing a trend line

<a href="https://www.nytimes.com/interactive/2015/05/28/upshot/you-draw-it-how-family-income-affects-childrens-college-chances.html"><img src="/images/week4/case2.png" class="mt-2"></a>


<!-- 
Pushing the Limits: Using Viz to Teach
Explanatory Dataviz isn't just for showing data; it can be used to explain complex ideas. 

- This story takes an interesting path: it guides viewers step-by-step through the complex Lempel-Ziv algorithm. 
 By visualizing how the algorithm "sees" repetition in song lyrics, it teaches a key mathematical concept needed to understand the final analysis.
- This format cleverly involves the user in the story. It first asks you to explore your own assumptions by drawing a trend line, then it reveals the actual data, creating a powerful "aha!" moment that makes the final explanation more memorable.

Interactivity - involves the user in the discovery paths
-->

---

## Demo & Activities

Follow along with the notebooks to learn how to implement interactivity.

- [Colors, Labels and Interactivity Notebook](https://observablehq.com/@datavizstudio/colors-labels-and-interactivity25?collection=@datavizstudio/the-art-of-data-visualization/2)

---

# Assignment

Choose one of the following paths for your assignment:

1.  **Recreate & Enhance:** Choose one of the example charts we discussed and recreate its core interactive feature.
    - [The Massachusetts Opioid Epidemic](https://chapter55.digital.mass.gov/) (Focus on tooltips for details-on-demand)
    - [The ABCs of Success](https://abcs.sites.digital.mass.gov/) (Focus on a dropdown to filter by district)
2.  **Create & Invent:** Add interactivity to a visualization you've already built, or create a new one from scratch with a dataset that interests you.

<br>
**Goal:** The main goal is to practice implementing interactivity. Use the **"Overview first, zoom and filter, then details-on-demand"** mantra to guide your storytelling.

**Deliverable:** Submit a link to your Observable notebook. In a cell at the top, write a short paragraph explaining which interactive features you added and why.
