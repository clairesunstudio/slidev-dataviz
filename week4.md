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

### Recap and Lecture (30 min)
- Principles and theories of data visualization
### Demo (60 min)
- How to create a [data-driven isotype/pictogram](https://observablehq.com/d/929667581b308364)
    - using emoji
    - using custom icons and with coordinates
### Working Session (60 min)
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
- telling the truth about the data (graphical integrity)
- complex ideas communicated with clairty, precision, and efficiency.
- gives the viewer the greatest number of ideas in the shortest time with the lest ink in the smallest space (data-ink ratio)

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


<small>Source: [Spurious Correlations](https://www.tylervigen.com/spurious-correlations), Gizmodo.com</small>

<!-- 
Do not quote data out of context. 
Correlation is not causation. 

Assuming small differences have meaning (rather than chalking them up to chance)
Equating statistical and real-world significance
Ignoring extremes (and the effect they can have on averages)
Putting too much faith in coincidence (and not understanding data relationships)
Labelling graphs deceptively (or not at all!)
Getting causation backward
Failing to evaluate potential third factors

-->

--- 

## What's wrong with this graphic?

<img src="/images/week4/data-dimension.png" />

<small>Left: New York Times, 1976</small>

<!-- 
Government spending - despite the hyperactive design, the state budget actually did not increase during the last 9 yeasrs shown in the graphic. The chart deploys several visual and statistical gimmicks - to falsely exaggerate the growth in the budget. 1970-1976 spending remained relatively constant, in fact a 5% cut in 1977. The NYT 3d barchart missed the real news story of these data.  -->

---

## 1. Graphic dimensions should not exceed data dimension

Chartjunk VS the real 3rd dimension

<div class="grid grid-cols-2 gap-2">
    <v-clicks>
        <img src="/images/week4/3d-chartjunk.png" />
        <a href="https://www.nytimes.com/interactive/2015/03/19/upshot/3d-yield-curve-economic-growth.html?action=click&contentCollection=The%20Upshot&region=Footer&module=WhatsNext&version=WhatsNext&contentID=WhatsNext&moduleDetail=undefined&pgtype=Multimedia"><img src="/images/week4/3d-yield-chart.png" /></a>
    </v-clicks>
</div>

<!-- p67
 “Chart junk” is a term coined by Edward Tufte to refer to elements of a chart or graph that do not add value to the data being presented, but rather serve only to distract or confuse the viewer. 
Leaving behind the distortion in the chartjunk heap at the left yields a cleaner view. 

A 3-D View of a Chart That Predicts The Economic Future: The Yield Curve (NYT)
-->

--- 

## 2. Statiscal Bias

<div class="grid grid-cols-2 gap-5 pt-4">
    <div>
        <div>
            Some variables change over time.
            <ol>
                <li> 1. Population Growth  --> per capita </li>
                <li> 2. Monetary Inflation --> constant dollars</li>
            </ol>
        </div>
        <v-click>
            <p>In time-series displays of money, defalted and standardized units of monetary meansurement are nearly always better than nominal units.</p>
        </v-click>
    </div>
    <v-click>
     <img src="/images/week4/oil-price-adjusted.png" style="height: 400px" />
    </v-click>
</div>

<!-- p63
1. the state's population increased by 1.7 million people (10%). Part of the buget growth simply paralleled population growth. 
2. the period was a time of substanitial inflation; goods and services cost state and local governments $1 in 1967 cost $2.03 in 1977. Buying power cut int half. 

The second error that the budget chart made - showing price of oil in inflated (current) dollars. The 1972 dollar was worth much more than the 1979 dikkar,
-->

---

## Show data variation, not design variation

Representation of numbers should be proportional to the actual numbers.

<img src="/images/week4/design-variation.png" />

<!-- 
There are considerable ambiguities in how people perceive a 2D surface and then convert that perception into 1D number. Especially with icons or images. 

Sometimes decoration can hlelp editorialize about the substance of the graphic. It's better to use it as a stylistic embellishment . But it's wrong to distort the data measures - the link locating values of numbers - in order to make an editorial comment or fit a decorative scheme. Lying graphics cheapens the art. If you want to use picture or symbols

Another way to use symbols and icons in a datavisualization, which we are going to do today:
Principle rule of Isotype: greater quantities are not shown by enlarging the same picture or symbol (which is still done often enough today) but by repeating the same-sized symbol.
 -->


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
Visua area and numberical measure
Another way to confuse data variation with design variation is to use areas to show one-dimentional data.
-->

---

## Lie Factor

<img src="/images/week4/lie-factor.png" />
<img src="/images/week4/lie-factor-examples.png" />

<!-- The representation of numbers, as physically measured on the surface of the graphic itself, should be directly proportional to the quantities represented. 

Violations of the this principle lead to misrepresentation - the effect can be measured by the "lie factor".

The shriking doctor, Lie factor of 2.8 (Los Angeles Times, 1979)
-->


---

## Non-data Ink vs Data Ink

<div class="grid grid-cols-2 gap-5 pt-4">
<img src="/images/week4/chartjunk.png" style="height: 430px">
<img src="/images/week4/data-rich-pulsar.png" style="height: 430px">
</div>

<small>Source: https://infovis-wiki.net/wiki/Data-Ink_Ratio</small>
---

## Data to Ink Ratio

<img src="https://infovis-wiki.net/w/images/5/55/DIR.jpg">

<!-- Maximize the share of data-ink, within reason
erase non-data ink, within reason
erase redundant data-ink   -->

---

## Data Ink vs Non-data Ink

<div class="grid grid-cols-2 gap-5 pt-4">
    <img src="/images/week4/data-ink-low.png">
    <img src="/images/week4/data-ink-high.png">
</div>

---

## Summary

- Do not quote data out of context
- The number of information-carrying dimensions depicted should not exceed the number of dimensions in the data.
- Value of some variables can change over time (eg. money – inflation, population – increase) Make comparisons using inflation-adjusted units of money.
- Representation of numbers should be directly proportional to the numerical quantities represented.
- Show data variation, not design variation.
- Don't: Too many decoration (non-data ink)


---
layout: statement
---

"In good information visualization, there are no rules, no guidelines, no templates, no standard technologies, no stylebooks… You must simply do whatever it takes."

— Edward Tufte

<!-- Although we just went through a lot of principles and theories most and put forward or reinforced by Edward Tufted. I want to end with this quote of his.  Knowing you audience is important - if you are writing an academic paper, you would choose , but if it's for a more broader audience and none technical audience, creativity, good design and communication are also important for explanatory dataviz. Guidelines are meant to be followed not worshiped. Learn the rules like a pro, so you can break them like an artist. For example, the maximizing the data ink ratio. However, in any case, some principles should always be followed - a dataviz should never distort the data. -->

---

## Cool Examples

<div class="grid grid-cols-4 gap-1 pt-20">
    <a href="https://pudding.cool/2017/05/song-repetition/"><img src="/images/week4/case1.png" style="height: 200px"></a>
    <a href="https://www.nytimes.com/interactive/2015/05/28/upshot/you-draw-it-how-family-income-affects-childrens-college-chances.html"><img src="/images/week4/case2.png" style="height: 200px"></a>
    <a href="https://www.nytimes.com/interactive/2014/09/14/sports/baseball/jeter-swings.html"><img src="/images/week4/case3.png" style="height: 200px"></a>
    <a href="https://www.nytimes.com/interactive/2016/11/29/us/trump-unauthorized-immigrants.html"><img src="/images/week4/case4.png" style="height: 200px"></a>
</div>

<!-- 
Pudding, lempel-ziv compression: using interesting topics and easy to undertand language and interactive visualization to explan complex algorithm
The Pudding is a journal of visual essays. It’s a new publication from Polygraph, a collective specializing in visualization.

Time-based, Interative
Parallax is a good friend
apply game design methodology— drive engagement and opportunity for data collection
https://fold.it/ 
an online game in which players contribute to scientific research by solving puzzles. 
In 2011, Foldit players identified the structure of a protein that helps HIV reproduce. This was a major accomplishment and will help researchers develop treatments for HIV.
run from University of Washington and Northeastern University), anyone in the world can help to optimize an enzyme that we hypothesize could be capable of degrading a susceptible lactone ring in aflatoxin. 

Pushing the limit 
Use data visualization to narrate  -->

---
layout: section
---

## Demo

[Isotype / Pictogram Demo](https://observablehq.com/@datavizstudio/isotype-pictogram-demo)
- Fork this notebook and follow along