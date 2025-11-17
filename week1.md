---
src: ./intro.md
---

---
theme: apple-basic
layout: intro
---

# Week 1
## Intro + Data Literacy Crash Course
11/03/2025

<Credit />
---

# Agenda

## Concepts (30 min)
- What is data and data visualization?
- Why it matters
- DataViz in the wild
- Types of data and their visual representations

## Demo (50 min)
- Observable account setup
- Observable basics
- Create your first chart!
## Working Session (30 min)
- Mini-exercise: "Visualize Yourself"

<!-- Today is about answering some big picture questions - what to expect from the class, what data visualization is and why it matters. We will be spending a good chuck of time learning about data and setting up the tool we will be using throughout the course. -->


---
layout: image-right
image: 'https://m.media-amazon.com/images/I/81ud7Ri9kFL._SY522_.jpg'
---

# What Is Data Visualization

<br/>
<quote v-click> The visual display of quantitative information <div>— Edward Tufte</div></quote> 


<!-- 
Turning data into visual form — 
Quoting the title of ET's first published book on dataviz. This is a very influential book in the field, it's regarded one of the cornerstone books on dataviz. This book studies the historical data visualizations, critiques dataviz published by the press, and he's really good at distilling guidelines and principles of making good data graphics from his collection of examples. ET's background was in Political Science, Statistics, and Computer Science and he taught at Yale and Princeton. He has a science background, yet he devotes the majority of his book discussing graphical excellence. This is also why this book is so interesting, his emphasis on a high design standard on something was not a popular problem in the design community before. He said design is not about decoration, the fact that it looks good is not a luxuary it's a necessity, it helps the perception of the data. In this class, I will be frequently referencing the theories and examples from his book, especially when we get to design principles.-->



---

# Why It Matters

<br/>

<quote v-click>
“Without data, you’re just another person with an opinion.” <div>— W. Edwards Deming, statistician, educator and industrial engineer</div>
</quote> 

<br/>

<quote v-click> “The greatest value of a picture is when it forces us to notice what we never expected to see.”
<div>— John W. Tukey, statistician and data-viz pioneer</div></quote> 

<br/>

<quote v-click> “The world cannot be understood without numbers. But the world cannot be understood with numbers alone.”
<div>— Hans Rosling, physician and cofounder of Gapminder</div></quote> 



<!-- 

I'm going to borrow two very famous quotes

the world we live in is inadated with data - being able to understand data is how we understand the world today.

We think visually — we process visual information thousands of times faster than text or numbers.
Visualization leverages our innate ability to see patterns more easily and quickly.


Data + Visuals are a power duo in communicating any types of ideas
Data grounds us in truth; visuals reveals insights and makes data accessible.

John W. Tukey coined the concept Exploratory Data Analysis (EDA).

-->

---

# Data Visualization Spectrum

<img src="/images/week1/dataviz-spectrum.png" height="500"/>

<!-- 

Exploratory data analysis is the process of reviewing new data to discover patterns, to spot anomalies, to test hypotheses, and to check assumptions.

- Analyze patterns and trends

Explanatory: We also use data visualization to transform raw data into something compelling for an external audience.
- Make data-driven/evidence-based decision
- Make complex data more accessible and digestible to their audience
- Explore, analyze, and communicate patterns and insights 

Where dataviz is the most applicable in most use cases and most powerful to the broadest audience.
 -->

---
fonts:
  # basically the text
  sans: Robot
  # use with `font-serif` css class from UnoCSS
  serif: Robot Slab
  # for code blocks, inline code, etc.
  mono: Fira Code
---

# Data Visualization Spectrum

<div style="font-size:0.9rem;">

| **Mode** | **Purpose** | **Context** | **Audience** | **Examples / Tools** |
| ---------| ----------- | ----------- | ------------ | -------------------- |
| **Scientific / Analytical** | Accuracy, objectivity, and discovery | Research papers, scientific analysis, engineering  | Scientists, researchers | Matplotlib, ggplot, NASA visualizations |
| **Exploratory** | Finding insights and patterns through interaction | Data analysis, finance & investment, policy work | Analysts, decision-makers | Tableau, Power BI, dashboards |
| **Explanatory / Storytelling** | Communicate a key message or narrative from data | Data journalism, education, policy communication | General public | [NYT visual stories](https://www.nytimes.com/interactive/2024/12/20/us/2024-year-in-graphics.html), [The Pudding](https://pudding.cool/), [Gapminder](https://www.gapminder.org/tools/#$chart-type=bubbles&url=v1) |
| **Artistic / Creative** | Emotional resonance, aesthetic exploration, conceptual ideas | Museums, art installations, creative coding        | General public, art audiences  | [*Dear Data*](https://www.dear-data.com/theproject), [Refik Anadol’s data sculptures](https://refikanadol.com/)  |

</div>

<!-- 
 - Minimal design; precise axes, units, and labels; strong focus on data integrity
 - Interactive filtering, clear visual encodings, emphasizes clarity and usability
 - Clear hierarchy, narrative flow, annotations, balance of accuracy and engagement
 - Experimental forms, sensory/abstract, sometimes data-driven metaphors           
 -->


---
layout: quote
---

<quote> "Data is wildly more powerful when it is both easy to understand and engaging to the public." <div>— Hans Rosling</div></quote> 

<br/>

### More from Hans Rosling

- [Hans Rosling famous Ted Talks](https://www.ted.com/speakers/hans_rosling)
- [Gapminder interactive data explorer](https://www.gapminder.org/tools/#$chart-type=bubbles&url=v1)

<!-- Hans Rosling in the video showed the audience how effective Data Visualization can be as a communication tool if done correctly. He was a Swedish physician, academic and public speaker. He was a professor of international healthand the co-founder and chairman of the Gapminder Foundation. Global trends in health and economics come to vivid life in his bubble charts.  -->


---
layout: iframe
url: https://www.youtube.com/embed/jbkSRLYSojo?si=OIwbNKIzT1jLtOqg
---

---
layout: quote
---

<quote> “This project is about how data can make us more human, not less.” <div>— Giorgia Lupi, Dear Data</div></quote> 

<br/>

### More on Dear Data

- [About the Dear Data Project by Giorgia Lupi and Stefanie Posavec](https://www.dear-data.com/theprojectg)
- [Giorgia Lupi and Stefanie Posavec @ Eyeo Festival](https://vimeo.com/133608605?fl=pl&fe=vl)

<!-- Two award wining information designers embarked on a year long project is a year-long, analog data drawing project on theirs personal data -->


---
layout: iframe
url: https://www.youtube.com/embed/iqaVe1MCTlA?si=6XeHzcsWbKxAcU9F
---

Data is wildly more powerful when it is both easy to understand and engaging to the public.

---

## DataViz in the Wild
Exploratory and Explanatory Dataviz
- [Observable Plot Gallery](https://observablehq.com/@observablehq/plot-gallery)
- [The Massachusetts Opioid Epidemic](https://chapter55.digital.mass.gov/)
- [Hans Rosling famous Ted Talks](https://www.ted.com/speakers/hans_rosling)
- [The Pudding Data Stories Collection](https://pudding.cool/)
- [NYT 2024 visual stories](https://www.nytimes.com/interactive/2024/12/20/us/2024-year-in-graphics.html)

Creative and Expressive Dataviz
- [*Dear Data*](https://www.dear-data.com/theproject)
- [Refik Anadol’s data sculptures](https://refikanadol.com/)
- [Front Row to Fashion Week (NYT)](https://www.nytimes.com/newsgraphics/2014/02/14/fashion-week-editors-picks/index.html)
- [Mike Bostock Generative Art on Observable](https://observablehq.com/@mbostock/altered-world)
- [Aaron Koblin projects](http://www.aaronkoblin.com/)


---
layout: section
---

# Understand Data

<!-- Now that we understand why we visualize data, let's talk about the data itself. Because here's the thing: you can't choose the right visualization without understanding your data. -->

---

# Types of Data


<img src="/images/week1/data-types.png" height="500"/>


---
layout: two-cols
---

## Categorical (Qualitative)

<v-clicks>

- Data that approximates or characterizes
- Often obtained through interviews, surveys, focus groups, documents, etc.
- Examples include:
  - name
  - sex (male, female, nonbinary)
  - observations (e.g., the food was salty)

</v-clicks>

::right::

## Numberical (Quantitative)

<v-clicks>

- Data that is measurable and expressed as a number
- Often gathered using metrics, tests, experiments, instruments with a ratings scale, etc.
- Examples include: 
  - cost
  - number of applicants
  - weight

</v-clicks>




--- 

## But there's important nuance...

<br/>
Not all numbers are quantitative! Can you think of any examples?

<v-clicks>

- ZIP codes (10001, 90210) - these are labels, not quantities
- Phone numbers - you don't "average" them
- Student IDs - the number doesn't mean anything
- Jersey numbers in sports - #23 isn't "greater than" #10
- Binary coding (0/1 for no/yes) - the numbers are just labels
</v-clicks>

<!-- Categorical data can be disguised as numbers

   whether there's a meaningful way to perform mathematical operations on these categories.
 -->

---
layout: section
---

## Types of Qualitative Data

---
layout: two-cols
---

## Nominal Data

<v-clicks>

- Categories with no inherent order or ranking

Examples include:
- Types of fruits (e.g., apples, bananas, oranges).
- Colors (e.g., red, blue, green).
- Marital status (e.g., single, married, divorced).
- Binary data (e.g., yes/no, true/false)

</v-clicks>

::right::

## Ordinal

<v-clicks>

- Categories with a meaningful order or ranking

Examples include:
- Education levels (e.g., high school, bachelor's, master's).
- Survey responses with Likert scales (e.g., strongly disagree, disagree, neutral, agree, strongly agree).
- Socioeconomic status (e.g., low, medium, high)

</v-clicks>

<!-- 
While categorical and numberical are mutually exclusive data types

For ordinal data, it's possible to be converted into numerical data using quantitative representations - for example, the survey scale can be 1-5.

you can use several methods to create summary statistics, such as 
Frequency Counts, Percentage Distribution, Ordinal Encoding (assign numerical values to categories, yes/no = 1/0)
-->


---
layout: section
---

## Types of Quantitative Data


---
layout: two-cols
---

## Discrete

<v-clicks>

- Data that can only take certain values

Examples include:
  - your shoe size
  - number of people enrolled in this course
  - number of times your cat wakes you up

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
layout: two-cols
---



<img src="/images/week1/rap-vocab.png" height="600"/>

> [The largest vocabulary in Hiptop - The Pudding](https://pudding.cool/2017/02/vocabulary/)

<br/>

## Texual Data

::right::

<img src="/images/week1/rap-treemap.png" height="600"/>

> [Rap Over Time - A Textual Data Analysis](https://observablehq.com/@columbiaviz-s21/rap-over-time-april-12)



<!-- Data Types Recap 
We didn't talk about textual data, is also a common type of qualitative data.
If your data is text-based, usually you would use text mining techniques to analyze the text and extract quantitative information. For example, This is setiment wordcloud is generated from hundreds of famous rap song lyrics through text mining (counting word use frequency) and sentiment analysis (sentiment analysis can assign numerical scores to sentiment in text data). https://github.com/fpaupier/RapLyrics-Scraper/tree/master/lyrics_US

-->


---
layout: two-cols
---

# Data Types Recap


<img src="/images/week1/data-types.png" wdith="300"/>

::right::

<img v-click src="/images/week1/graph-decision-tree.png" width="400"/>


<!-- These are some commonly used dataviz types to present these types of data, for example.
Understanding the data types will help you select the right data visualizations, and later map to different visual dimensions. We will dive into this next week.  -->

---
layout: section
---
# Interactive Data Types Exercise 
Let's classify some real data together...

---
layout: fact
---

## Quick Classification Game

**I'll show you some data - you tell me the type:**

<v-clicks>

1. **Your Instagram follower count** → ?
2. **Your favorite color** → ?
3. **Course rating: "Excellent, Good, Fair, Poor"** → ?
4. **Your exact height in inches** → ?
5. **Number of classes you're taking** → ?
6. **Your commute time today** → ?

</v-clicks>

*Think about: Categorical vs Numerical? Discrete vs Continuous? Nominal vs Ordinal?*


---

## Classify Our Own Survy Data

| # | Field Name | Data Type | Subtype |
|---|-------------|---------|---------|
| 3 | What time did you go to bed last night? |
| 4 | What time did you get up this morning? |
| 5 | How many hours of sleep did you get? |
| 6 | How long (in minutes) did you listen to music yesterday? |
| 7 | Describe your mood in one word. |
| 8 | Which one of the following best represents your current emotion? |
| 9 | Rate your current energy level |
| 10 | Are you a morning person or night owl? |

<!-- 
Pie Charts are ideal for giving the reader a quick idea of the proportional distribution of the data.

Bar Chart uses either horizontal or vertical bars (column chart) to show discrete, numerical comparisons across categories. 
 -->

---

## Classify Our Own Survy Data

| # | Field Name | Data Type | Subtype |
|---|-------------|------------|----------|
| 3 | What time did you go to bed last night? | Numerical | Continuous |
| 4 | What time did you get up this morning? | Numerical | Continuous |
| 5 | How many hours of sleep did you get? | Numerical | Continuous |
| 6 | How long (in minutes) did you listen to music yesterday? | Numerical | Discrete |
| 7 | Describe your mood in one word. | Categorical | Nominal |
| 8 | Which one of the following best represents your current emotion? | Categorical | Nominal |
| 9 | Rate your current energy level | Categorical | Ordinal |
| 10 | Are you a morning person or night owl? | Categorical | Nominal |



---

## Classify Our Own Survy Data

| # | Field Name | Data Type | Subtype |
|---|-------------|------------|----------|
| 11 | Are you a cat person, dog person, or neither? |
| 12 | Favorite season(s) |
| 13 | How many pieces of candy did you eat on Halloween? |
| 14 | How many trick-or-treaters came to your door? |
| 15 | Did you dress up for this Halloween? |
| 16 | What's the strongest Halloween costume idea of the year? |
| 17 | Do you consider yourself more analytical, artistic, or both? |
| 18 | How comfortable are you with JavaScript? |
| 19 | Which of the following have you used? |
| 20 | How comfortable are you with design tools and concepts? |

---

## Classify Our Own Survy Data

| # | Field Name | Data Type | Subtype |
|---|-------------|------------|----------|
| 11 | Are you a cat person, dog person, or neither? | Categorical | Nominal |
| 12 | Favorite season(s) | Categorical | Nominal |
| 13 | How many pieces of candy did you eat on Halloween? | Numerical | Discrete |
| 14 | How many trick-or-treaters came to your door? | Numerical | Discrete |
| 15 | Did you dress up for this Halloween? | Categorical | Nominal |
| 16 | What's the strongest Halloween costume idea of the year? | Categorical | Nominal |
| 17 | Do you consider yourself more analytical, artistic, or both? | Categorical | Nominal |
| 18 | How comfortable are you with JavaScript? | Categorical | Ordinal |
| 19 | Which of the following have you used? | Categorical | Nominal |
| 20 | How comfortable are you with design tools and concepts? | Categorical | Ordinal |

<!-- 
Pie Charts are ideal for giving the reader a quick idea of the proportional distribution of the data.

Bar Chart uses either horizontal or vertical bars (column chart) to show discrete, numerical comparisons across categories. 
 -->

---
layout: section
---

# Demo - Observable

- [Set up an account](https://observablehq.com/)
- [My First Notebook](https://observablehq.com/d/c3c7e3693a24b22f?collection=@datavizstudio/the-art-of-data-visualization/2)
- [Markdown Cheatsheet](https://observablehq.com/d/c3c7e3693a24b22f?collection=@datavizstudio/the-art-of-data-visualization/2)
- [Basic JS Concepts for Data](https://observablehq.com/d/370f2218a261e58d?collection=@datavizstudio/the-art-of-data-visualization/2)


<!-- 

- All-in-one-place: code, data and visualization, running environment
- Open-source: Leverage common coding languages and open-source libraries, most flexible, always have access to your creations, works are transparent, free

- Observable is used by journalists, researchers, and data professionals. Students learn a tool they might actually use or encounter in their careers. Rich ecosystem of examples
Thousands of public notebooks serve as living documentation and inspiration. 

- Notebook: web-based interactive canvases where you can remix data, code, and interaction
- Cell: content blocks - add content in **Markdown**, **JavaScript**, SQL, or HTML. -->


---
layout: section
---

# Working Session 

- Create your first chart using Plot library sample data
- Create a plot using our own [class survey data](https://docs.google.com/spreadsheets/d/1UWg7p7rcAFwVNdc986sk5EoToaUlr2KqaYQXTk-LTLI/edit?gid=1950617488#gid=1950617488) 

---
layout: section
---

# Assignment

---

## Capture Your Day → Visualize Your Metric

Watch [Giorgia Lupi and Stefanie Posavec @ Eyeo Festival](https://vimeo.com/133608605?fl=pl&fe=vl)

Then, you will:

1. Choose a metric from your daily life — something you do, track, or repeatedly experience. (Pick something you can realistically record every day for a week - things that can happen multiple times a)

2. For one week, record your chosen metric daily, and keep it in a notebook, spreadsheet, or your design journal.

3. At the end of the week, plot the data you collected in a new notebook. Visualize it in whatever format makes sense for your metric — line chart, bar chart, scatter, ridgeline, whatever you feel inspired by.

4. Write a short reflection in the notebook answering:
  - Why you chose this metric?
  - What you observed from the data?
  - Did anything surprise you?
  - What visualization choices did you make and why?