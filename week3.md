---
layout: intro
---

# Week 3
## Design Principles for Effective Visualizations
11/17/2025

<Credit />

---
layout: image
image: ./images/week3/observable-layers.png
---

<!-- Last week, we introduced the grammer of graphics and how the Observable Plot grammer is based upon that concept. We talked about marks, scales and channels(and constant). Observable Plot lets us compose charts starting from Marks instead of chart types. We talked about general rules mapping data dimensions to graphic dimensions, which aligns with the Observable Plot semantics. -->

---

# Agenda

### Assignment Demo (45 min)
- Exploratory Data Analysis
### Concepts (45 min)
- Principles and theories of data visualization
### Working Session (30 min)
- How to create a [data-driven isotype/pictogram](https://observablehq.com/@datavizstudio/isotype-pictogram-demo25?collection=@datavizstudio/the-art-of-data-visualization/2)
    - using emoji
    - using custom icons and with coordinates

<!-- Today we are going to talk about the principles of data visualization. We will revisit some of the rule of thumb and concepts we came across earlier. 

Last week I asked you to prepare some summary statistics, and provided you some readings about isotype charts. The main activity today is going to be around creating a isotype chart on your own. I will first demo how to build them from scratch. The plan is to move through the slides rather quickly and we save the majority of time for demo and working session.  -->


---
layout: image-right
image: 'https://m.media-amazon.com/images/I/81ud7Ri9kFL._SY522_.jpg'
---

<quote>Excellence in statiscal graphics consists of complex ideas communicated with clarity, precision, and efficiency. <div>— Edward Tufte</div></quote>

<!-- "The Visual Display of Quantitative Information" by Edward Tufte is a seminal work in data visualization. Here are the key concepts and principles from this influential book:

Core Philosophy
"Graphical excellence is that which gives to the viewer the greatest number of ideas in the shortest time with the least ink in the smallest space." -->

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

<!-- 

The representation of numbers, as physically measured on the surface of the graphic itself, should be directly proportional to the quantities represented. 

Violations of the this principle lead to misrepresentation - the effect can be measured by the "lie factor".

p1: increase of 454 percent is depicted as an increase of 4,280 percent for a lie factor of 9.4 (p62)
p2: p57 - 14.8 783/53 (53% increase in data is represented by 783% increase in graphic (5.3-0.6)/0.6)
The shrinking doctor, Lie factor of 2.8 (Los Angeles Times, 1979)

If LF = 1, graphic is doing a reasonable job of accurately representing the underlying numbers. lie factor greater than 1.05 or less than -.95 indicate substantical distortion 

LF >0 overstating the diffences, LF < 0 understating. 

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

## Low D-I Ratio vs High D-I Ratio

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

<quote>"In good information visualization, there are no rules, no guidelines, no templates, no standard technologies, no stylebooks… You must simply do whatever it takes. <span>Edward Tufte</span></quote>


<!-- Although we just went through a lot of principles and theories mostly put forward or reinforced by Edward Tufted. I want to end with this quote of his.  Knowing you audience is important - if you are writing an academic paper, you would choose , but if it's for a more broader audience and none technical audience, creativity, good design and communication are also important for explanatory dataviz. Guidelines are meant to be followed not worshiped. Learn the rules like a pro, so you can break them like an artist. For example, the maximizing the data ink ratio. However, in any case, some principles should always be followed - a dataviz should never distort the data. -->

---

## Learn the rules like a pro, so you can break them like an artist

<div class="grid grid-cols-4 gap-1 pt-20">
    <a href="https://www.nytimes.com/interactive/2014/09/14/sports/baseball/jeter-swings.html"><img src="/images/week4/case3.png" style="height: 200px"></a>
    <a href="https://www.nytimes.com/interactive/2016/11/29/us/trump-unauthorized-immigrants.html"><img src="/images/week4/case4.png" style="height: 200px"></a>
    <a href="https://chapter55.digital.mass.gov/"><img src="/images/week3/chapter55-prescription-decline.gif" style="height: 200px"></a>
    <a href="https://abcs.sites.digital.mass.gov/"><img src="/images/week3/dese.png" style="height: 200px"></a>
</div>

<!-- 
Motto: It is better to remember simplified images than to forget exact figures.

Pushing the limit 
Use data visualization to narrate  -->


---
layout: full
---

## Dot Matrix Chart

<img src="http://datavizcatalogue.com/methods/images/top_images/dotmatrix.png" style="max-height: 100%" />

- Functions: Comparisons,Distribution,Patterns,Proportions
- Related Dataviz: Pictogram Chart
- Example: [The ABCs of Success in High School and Beyond](https://abcs.sites.digital.mass.gov/)

<!--

Dot Matrix Charts display discreet data through a series of organised dots, each coloured to represent a particular category and grouped in a matrix. They are used to give a quick overview of the distribution and proportions of each category in a data set. Dot Matrix Charts are also used to compare distribution and proportion across other datasets, to discover patterns.When only one category is used in the dataset and all the dots are the same colour, a Dot Matrix Chart can be used to primarily show proportions.

-->

---
layout: full
---

<img src="http://datavizcatalogue.com/methods/images/anatomy/dotmatrix.png" style="max-height: 100%" />



<!--

Dot Matrix Charts display discreet data through a series of organised dots, each coloured to represent a particular category and grouped in a matrix. They are used to give a quick overview of the distribution and proportions of each category in a data set. Dot Matrix Charts are also used to compare distribution and proportion across other datasets, to discover patterns.When only one category is used in the dataset and all the dots are the same colour, a Dot Matrix Chart can be used to primarily show proportions.

-->

---
layout: full
---

## Pictogram Chart

<img src="http://datavizcatalogue.com/methods/images/top_images/pictograph.png" style="max-height: 100%" />

- Functions: Comparisons,Distribution
- Related Dataviz: Bar Chart,Dot Matrix Chart
- Example: [The MA Opioid Epidemic](Chhttps://chapter55.digital.mass.gov/#populations)

<!--

Also known as Pictograph Chart, Pictorial Chart, Pictorial Unit Chart, Picture Graph.Pictogram Charts use icons to give a more engaging overall view of small sets of discrete data. Typically, the icons represent the data’s subject or category, for example, data on population would use icons of people. Each icon can represent one unit or any number of units (e.g. each icon represents 10). Data sets are compared side-by-side in either columns or rows of icons, to compare each category to one another.The use of icons can sometimes help overcome differences in language, culture and education. Icons can also give a more representational view of the data. So for example, if your data is of 5 cars, you show 5 icons of cars in the chart.Two things to avoid when using Pictogram Charts are: Using them for large data sets, which makes values on the chart hard to count.Displaying partial icons, as this can add confusion to what they represent.   
-->

---
layout: full
---

<img src="http://datavizcatalogue.com/methods/images/anatomy/pictogram.png" style="max-height: 100%" />



<!--

Also known as Pictograph Chart, Pictorial Chart, Pictorial Unit Chart, Picture Graph.Pictogram Charts use icons to give a more engaging overall view of small sets of discrete data. Typically, the icons represent the data’s subject or category, for example, data on population would use icons of people. Each icon can represent one unit or any number of units (e.g. each icon represents 10). Data sets are compared side-by-side in either columns or rows of icons, to compare each category to one another.The use of icons can sometimes help overcome differences in language, culture and education. Icons can also give a more representational view of the data. So for example, if your data is of 5 cars, you show 5 icons of cars in the chart.Two things to avoid when using Pictogram Charts are: Using them for large data sets, which makes values on the chart hard to count.Displaying partial icons, as this can add confusion to what they represent.   
-->



---
layout: section
---

## Demo

[Isotype / Pictogram Demo](https://observablehq.com/@datavizstudio/isotype-pictogram-demo25?collection=@datavizstudio/the-art-of-data-visualization/2)
- Fork this notebook and follow along


## Next week: 
Tell a story with your own data-driven [pictogram/isotype](https://observablehq.com/@observablehq/plot-isotype-chart) chart
- Prepare summary data points
- Find or create icons or emoji for your data
- Recommended Readings: 
    - [Exploring Isotype Charts](https://nightingaledvs.com/exploring-isotype-charts-our-private-lives-lessons-of-isotype-part-2/)
    - [ISOTYPE Visualization Research](http://steveharoz.com/research/isotype/)