---
theme: apple-basic
layout: intro
---

# Week 6
## Data Sonification: Hearing Data
12/08/2025

<Credit />

---

# Agenda

## Recap (30 min)
- [Add Data Dimension to GeoJson](https://observablehq.com/@datavizstudio/add-data-properties-to-geojson25?collection=@datavizstudio/the-art-of-data-visualization/2)

## Concepts (45 min)
- What is data sonfication?
- Why it matters
- Data sonfication in the wild

### Demo + Activities (1.25 hour)
- Web Audio Sonification - Tone.js
- Mapping Data to Tone.js
- Single Dimension Data Sonification
- Stock Analysis Using Sound

<!-- 
Welcome, everyone, to our final topic of the course: Data Sonification.

So far, we've spent all our time exploring how to represent data visually. We've familiarized ourselves with data dimensions and graphical dimensions, and the mapping between those. It's powerful to see data visually, it helps us identify outliers, trend, distribution at a glance —  patterns that are very difficult to uncover in a spreadsheet.

Today, we're diving into the world of sonification, which is all about mapping data to sound. It's a powerful technique/a different sensory modality for experiencing data that can reveal patterns you'd never see and tell stories in a completely different way. Compared to data visualization, a practice data sonifcation is still kinda niche, and experimental, butit's emerging - Its growth is noticeable across scientific research, education, accessibility contexts. We'll explore why it's useful, what it is, and listen to some cool examples from fields like astronomy and public health, and get our hands dirty.
-->

---
layout: center
---

# What is Data Sonification?

**Data sonification** is the use of non-speech audio to convey information or perceptualize data.

- **Visualization:** Maps data to visual properties (color, shape, size).
- **Sonification:** Maps data to auditory properties (pitch, volume, tempo).

It's the auditory equivalent of data visualization

<!--
So what exactly is data sonification? The formal definition is "the use of non-speech audio to convey information."

Let's break that down. "Non-speech audio" means we're not talking about a computer reading numbers out loud. We're talking about sounds—notes, tones, textures of sound.

The simplest way to think about it is as a direct counterpart to data visualization. In visualization, we take a dataset and map its values to visual properties. For example, a higher value might become a darker color, a larger circle, or a taller bar.

In sonification, we do the same thing, but with sound. A higher value might become a higher-pitched note, a louder sound, or a faster tempo.

-->

---
layout: center
---

# Data Sonification of Everyday Things

<v-clicks>

- **Geiger counter** (volume --> click frequency)
- **Car reverse warning beeps** (proximity data → beep frequency)
- **Hard drive spinning sounds** (activity data → motor noise)
- **Heart rate monitors** (pulse data → beep rhythm)
- **Train crossing signals** (train approach → bell rhythm)
- **Sonar pings** (distance/object data → audio pulses)

</v-clicks>

<!--

What are somethings we know of, the design of everything things that uses data sonification?

Think of a Geiger counter: the faster it clicks, the more radiation it's detecting. That's a simple, effective form of data sonification.

What are some other examples you can think of?

It's immediate, and it works without replying on a screen. 

Every time you back up your car and hear those beeps getting faster, that's a perfect example of proximity data being sonified. The parking sensors are measuring distance and converting it to audio feedback that you can process without looking.

Even something as mundane as your turn signal - that rhythmic clicking is time-based data (the blinker interval) being converted to audio so you know it's working without looking at the dashboard.

Medical devices are full of sonification. Heart monitors don't just show a line graph - they convert your heart rhythm data into audio beeps that nurses can hear from across the room.


The key insight here is that good sonification is so intuitive that we don't even think of it as "data." It just makes sense.
-->

---
layout: default
---

# Why Listen to Data?

<v-clicks>

- **Accessibility and Inclusivity:** By using sound to represent data, researchers can create more inclusive ways of presenting scientific information, ensuring that everyone can participate in the exploration and understanding.

- **Pattern Recognition:** Sound has a temporal dimension, and so does most science data, allowing researchers to listen to changes and patterns in data over time.

- **Outreach and Education:** Data sonification can be used as a powerful tool for outreach and education. Sonification can also inspire curiosity and interest in science, technology, engineering, and mathematics (STEM) fields, particularly among young learners.

- **Artistic Expression:** Data sonification has the potential to inspire new forms of artistic expression. Artists can use sonified data to create unique musical compositions or soundscapes that reflect the rhythms and patterns of the natural world.

-- [From Data to Melody: Data Sonification and Its Role in Open Science](https://www.earthdata.nasa.gov/news/blog/from-data-melody-data-sonification-its-role-open-science), NASA

</v-clicks>

<!--

- **Accessibility:** Provides access to data for visually impaired individuals.
- **Eyes-Free Monitoring:** Allows monitoring of data while performing other tasks (e.g., a surgeon monitoring vital signs, a pilot monitoring engine status).
- **Pattern Detection:** The human ear is excellent at detecting patterns, anomalies, and changes over time. Sometimes you can hear a trend that's difficult to spot in a noisy visual chart.
- **Multidimensionality:** Adds another channel for conveying data. You can show two variables on a 2D chart and sonify a third or fourth variable.

You might be wondering, "Why bother? We have charts, and they work just fine." And that's a fair question. But sonification offers some unique advantages.

First and foremost is accessibility. For people with visual impairments, sonification isn't just a novelty; it's a gateway to understanding data that would otherwise be inaccessible. This is a huge and growing area of research.

Second is "eyes-free" monitoring. Imagine a surgeon in the middle of an operation. They can't afford to look away at a monitor, but an auditory tone that changes with a patient's blood pressure can provide constant, crucial information without demanding their visual attention. The same goes for pilots, factory workers, or even just driving your car. Those beeps and chimes are simple sonifications.

Third, our ears are incredible pattern-detection machines. Think about how you can instantly recognize a song from just a few notes, or how you can pick out a friend's voice in a crowded room. We can use that ability to hear trends, cycles, and outliers in data that might be hidden in a complex visualization.

Finally, it adds more dimensions to our data displays. A standard scatterplot shows us two variables on the X and Y axes. We can add a third with color or size. But with sound, we can add even more. Imagine each point on the scatterplot also has a pitch representing a fourth variable and a volume representing a fifth. It can get complex, but it opens up new possibilities for exploration.
-->


---
layout: iframe
url: https://www.youtube-nocookie.com/embed/-hY9QSdaReY?si=L-zrSNDkO4gLIPSS&amp;start=133
---

<!--
Accessibility - I want you to watch a clip from a Ted talk by Wanda Merced, an astronomer who lost her sight in her life and shes known for using sonification to turn large space datasets into audible sound, for her everyday work, and advocating for an inclusive and equitable scientific community. 

Science is for everyone. It has to be available to everyone, because we are all natural explorers.
-->


---
layout: center
---

# Auditory "Visual" Variables

Just as we have visual variables, we have auditory ones. We can map data dimensions to these properties of sound.


| Auditory Property | Description | Example Mapping |
|---|---|---|
| **Pitch** | The highness or lowness of a sound. | Higher temperature = higher pitch |
| **Loudness** | The perceived volume of a sound. | Larger sales volume = louder sound |
| **Tempo** | The speed or rate of sounds. | Higher website traffic = faster tempo |
| **Timbre** | The quality or "color" of a sound. | Different instruments for categories |
| **Panning** | The position of a sound in stereo space. | Data from East = right speaker |


[Observable Notebook Demo --> Introducing Tone.js](https://observablehq.com/d/82abaf25db447f7f?collection=@datavizstudio/the-art-of-data-visualization/2)

<!--
To make a sonification, we need a palette of auditory properties, just like we have a palette of visual properties for charts. These are the knobs we can turn to make our data audible.

On the left, you see the core building blocks of sound that we can control.

**Pitch** is probably the most common. It's incredibly intuitive—we associate high pitch with high values and low pitch with low values. Think of a rising stock price represented by a rising musical scale.

**Loudness** or volume is another straightforward one. A big event could be a loud sound; a small one could be quiet. For example, the volume of an earthquake could be mapped to the loudness of a rumble.

**Tempo** or rhythm is great for time-series data. We can represent faster-moving processes with a faster beat, like the Geiger counter example.

**Timbre** is the character or "color" of a sound. This is what makes a violin sound different from a piano playing the same note. We can use timbre to represent categories. For instance, in a dataset of fruit sales, we could use a piano sound for apples, a guitar for oranges, and a flute for bananas.

Finally, **Panning** lets us use stereo space. We can place sounds in the left, right, or center channel. This is often used for geographical data—data from the western US could be panned to the left, and data from the eastern US to the right.

By combining these, we can create rich, multi-layered data stories.
-->


---
layout: section
---

# Musical Scale Mapping

**Piano Key Mapping:**
- Map data values to specific piano keys
- Use musical scales (major, minor, pentatonic)
- Create harmonic progressions from data trends

**Example: Stock Market Symphony**
- Daily closing price → Piano key (C major scale)
- Trading volume → Note duration  
- Volatility → Chord complexity (single note vs. full chord)


<!--

Beyond Raw Sound: Musical Mapping

Moving from simple beeps and tones to sophisticated musical representations

This is where sonification gets really interesting. Instead of just mapping data to raw sound properties like pitch and volume, we can map it to musical structures that our brains are already wired to understand.

Piano key mapping is particularly powerful because it gives us discrete, recognizable notes rather than sliding tones. When you map your data to the keys of a piano, you're essentially creating a melody from your dataset.

The choice of musical scale matters a lot. A major scale tends to sound happy and optimistic, while a minor scale can sound sad or ominous. A pentatonic scale, common in Asian music, can sound more neutral or meditative.

For stock data, imagine each day's closing price maps to a specific piano key. Rising prices create ascending melodies, crashes create dramatic drops in pitch. Add trading volume as note duration, and high-volatility days could trigger complex chords instead of simple notes.
-->

---
layout: default
---

# Rhythm and Beat Mapping

**Drum Machine Data:**
- Map categorical or discrete data to different drum sounds (kick, snare, hi-hat)
- Use data frequency to control beat patterns
- Layer multiple data streams as different percussion tracks

**Example: Website Analytics Drumbeat**
- Page views → Kick drum (main beat)
- New users → Snare drum (accent beats)
- Bounce rate → Hi-hat frequency
- Error 404s → Cymbal crashes

**Result:** Your website's health becomes a rhythmic composition you can feel

<!--
Rhythm is another powerful musical dimension we can use. Instead of melody, we can turn our data into beats and rhythms.

Think of your data as driving a drum machine. Different categories of events can trigger different drum sounds. The frequency of events controls how often each drum hits.

For a website, imagine every page view triggers a kick drum - the steady heartbeat of your site. New user registrations might trigger a snare drum, creating accent points in the rhythm. High bounce rates could speed up a frantic hi-hat pattern, while 404 errors create jarring cymbal crashes.

When you listen to your website this way, you can immediately feel when something's wrong - the rhythm becomes chaotic, or certain drum sounds disappear entirely.
-->

---
layout: default
---

# Harmonic Progression Mapping

**Chord-based Sonification:**
- Map data relationships to musical harmony
- Consonant chords for stable/positive data
- Dissonant chords for unstable/negative data
- Chord progressions show data evolution

**Example: Economic Health Monitor**
- GDP growth + Low unemployment = Major chord (stable, positive)
- Recession indicators = Diminished chords (tension, uncertainty)
- Recovery periods = Chord progressions resolving to major

<!--
The most sophisticated musical mapping uses harmony - how multiple notes sound together. This is perfect for datasets with multiple related variables.

In music theory, some combinations of notes sound stable and pleasant (consonant), while others create tension and want to resolve (dissonant). We can map this directly to data relationships.

For economic data, when GDP is growing and unemployment is low, we might play a stable major chord. When recession indicators appear, we switch to tense, unresolved chords that make the listener feel the economic uncertainty. Recovery periods can be represented by chord progressions that gradually resolve the tension.

This creates an intuitive emotional response to complex, multi-dimensional data.
-->

---
layout: section
---

# Amazing Real World Examples

Let's hear some incredible sonifications in action


---
layout: center
---

# What does DNS sound like?

**DNA Sonification:**
- Map genetic sequences to musical notes
- A, T, G, C nucleotides → Different pitches or instruments
- Gene expression levels → Volume/tempo
- Mutations → Dissonant notes or rhythm changes

[An auditory display tool for DNA sequence analysis](https://link.springer.com/article/10.1186/s12859-017-1632-x) 
— Mark D. Temple, School of Science and Health, Western Sydney University


<!--
Biology generates some of the most beautiful and meaningful sonifications because living systems are inherently rhythmic and musical.

DNA sonification assigns different musical notes to the four bases - A, T, G, and C. When you play a gene as music, healthy genes often create harmonious melodies, while disease-causing mutations introduce jarring, discordant notes that interrupt the natural flow.

Protein folding creates even more complex music. As proteins fold into their functional shapes, the process can be mapped to musical development - starting simple and building complexity. Properly folded proteins sound harmonious, while misfolded proteins associated with diseases like Alzheimer's create tense, unresolved musical structures.

Perhaps most surprising is that healthy heartbeats, when sonified, create beautiful, fractal-like musical patterns. Diseased hearts lose this musicality and sound chaotic and irregular.

Let's listen to some soundbites
-->

---
layout: iframe
url: https://www.youtube-nocookie.com/embed/yPwpBbscqcY?si=Sz9Xdsy1dFU6mqUc
---

---
layout: center
---

# Gravitational Waves: The Sound of Einstein's Universe

**LIGO's Discovery (2015):**
- Detected ripples in spacetime from colliding black holes
- Signal was too faint to see, but perfect for hearing
- The "chirp" lasted 0.2 seconds and swept from 35 to 400 Hz

**The Data Mapping:**
- Gravitational wave amplitude → Volume
- Wave frequency → Audio frequency (shifted to human hearing range)
- Time compression: Billions of years → 0.2 seconds

<a href="https://www.ligo.org/detections/GW150914.php" target="_blank"> Listen to Black Holes Colliding</a>

<!--
This might be the most famous sonification ever created. In 2015, the LIGO detectors made history by detecting gravitational waves - literal ripples in the fabric of spacetime predicted by Einstein a century earlier.

The amazing thing is that this discovery was made by LISTENING, not looking. The signal was buried in noise that made it nearly impossible to see in traditional plots, but when scientists converted the data to audio, they immediately heard the distinctive "chirp" of two black holes spiraling into each other.

The mapping is beautifully direct: the gravitational wave data was shifted into the human hearing range and played as audio. The result is a sound that represents one of the most violent events in the universe - two black holes, each 30 times more massive than our Sun, colliding at half the speed of light.

What you hear is the last few moments of a cosmic dance that lasted billions of years, compressed into a fifth of a second of audio.
-->

---
layout: iframe
url: https://www.youtube-nocookie.com/embed/QyDcTbR-kEA?si=5zRHrvwYUPTVuQMx
---



---
layout: two-cols
---

# The Sound of Space: NASA's Cosmic Symphony

**🌌 From Image to Music:**
NASA's "Hearing Hubble" transforms telescope images into interactive soundscapes

**Brightness → Pitch**
- Brighter stars/regions = Higher notes
- Darker space = Lower tones
- Creates natural melodic contours


::right::

**Color → Frequency**
- Red light (cooler) = Lower frequencies
- Blue light (hotter) = Higher frequencies
- Follows the physics of stellar temperature


**Interactive Controls:**
- **Harmony:** Choose musical scales (major, minor, exotic)
- **Soundwave:** From smooth (nebulae) to sharp (point sources)
- **Instruments:** Different sounds for stars vs. galaxies


**Try it yourself:**
[Hearing Hubble Interactive Tool](https://science.nasa.gov/mission/hubble/multimedia/online-activities/hearing-hubble/)


<!--
Now for some real-world examples. And you can't get much more "out there" than this.

NASA deals with mind-boggling amounts of data from its telescopes, and a lot of it isn't even in the visible spectrum. They are pioneers in using sonification to both understand their data and share it with the public.

This example is a sonification of the center of our own Milky Way galaxy. What you're looking at is a composite image from three different telescopes, each capturing a different type of light.

The sonification translates this image into a symphony of sound. They took the image and scanned it from left to right.
- The highest-energy light, the X-rays seen by the Chandra observatory, are represented by a glockenspiel. These are often point-like sources, so you'll hear them as distinct, bell-like notes.
- The visible light from Hubble, which includes stars and filaments, is played as a violin.
- And the infrared data from the Spitzer telescope, which shows us clouds of dust and gas, is represented by a soft piano.

The position of the sound in your headphones corresponds to its position in the image, and the brightness of the light determines the volume.

When you listen to it, you can hear the dense, bright core of the galaxy as a crescendo of all three instruments. It's a beautiful and surprisingly effective way to experience the cosmos.
-->

---
layout: center
---

# The Sound of a Pandemic

Data journalists have also used sonification to tell powerful human stories.

**Sonification of UK COVID-19 Deaths:**
- **Data:** Daily death statistics in the UK.
- **Mapping:**
    - One day of data is compressed into 30 seconds of audio.
    - Each individual death is represented by a single, soft piano note.
    - The pitch of the notes varies to create a soundscape rather than a cacophony.


<!--
Sonification isn't just for science; it can be a powerful tool for data storytelling, especially when you want to evoke an emotional response.

During the COVID-19 pandemic, we were all inundated with charts and numbers. It was easy to become numb to what those numbers actually represented: human lives.

The data sonification podcast "Loud Numbers" created this piece to re-humanize the statistics. They took the daily death tolls from the UK and turned them into sound.

The mapping is simple but incredibly effective. Each single death is one piano note. As the days go by in the audio, you hear the number of notes swell from a sparse scattering to a dense, overwhelming cascade of sound during the peaks of the waves.

Listening to this is a very different experience from looking at a line chart. The sheer volume of notes makes the scale of the loss tangible and personal. It's a somber, haunting piece that demonstrates the unique emotional power of sonification. It forces you to confront the reality behind the data points.
-->

---
layout: iframe
url: https://player.vimeo.com/video/571217327?h=21098203b9
---


---
layout: default
---

# Let's Make Some Data Music!

**Follow-along notebooks:**
1. [Web Audio Sonification](https://observablehq.com/d/82abaf25db447f7f?collection=@datavizstudio/the-art-of-data-visualization/2)]
2. [Time-Series Data Sonification](https://observablehq.com/@datavizstudio/time-series-data-sonification?collection=@datavizstudio/the-art-of-data-visualization/2)
3. [Data Sonification Multi Dimension](https://observablehq.com/@datavizstudio/data-sonification-multi-dimension25?collection=@datavizstudio/the-art-of-data-visualization/2)


---
layout: section
---

# The Ethics of Data Sonification

What responsibilities come with making data heard?

---
layout: two-cols
---

# Sonification Ethics

**Accessibility vs. Aesthetics:**
- Prioritize clarity over musical beauty
- Consider hearing-impaired users (vibration, visual accompaniment)
- Avoid overwhelming or potentially harmful frequencies

**Cultural Sensitivity:**
- Musical scales carry cultural meanings
- Western major/minor scales aren't universal
- Consider your audience's musical context

::right::

**Emotional Manipulation:**
- Sound is deeply emotional - use this power responsibly  
- Minor keys can make neutral data sound ominous
- Fast tempos can artificially create urgency

**Example:** A sonification of crime statistics using minor keys and dissonant chords might unfairly bias listeners against certain neighborhoods.

<!--
As we've seen, sonification is incredibly powerful, and with great power comes great responsibility. Sound affects us emotionally in ways that visuals often don't, so we need to be thoughtful about how we use this tool.

The tension between accessibility and aesthetics is real. A sonification that sounds beautiful might not be the clearest way to convey the data. We need to prioritize understanding over entertainment, though ideally we can achieve both.

Cultural sensitivity is crucial. Musical scales aren't universal - what sounds happy in Western music might sound very different to someone from another musical tradition. A pentatonic scale might sound neutral to Western ears but deeply meaningful to someone from an Asian musical background.

The emotional manipulation aspect is perhaps most important. We can make the same dataset sound optimistic or ominous just by changing the musical mapping. A sonification of crime statistics using scary, dissonant sounds might reinforce harmful stereotypes about certain neighborhoods, even if the data itself is neutral.

We have a responsibility to be transparent about our mapping choices and honest about the stories our sonifications tell.
-->

---
layout: intro
---

# Keep Listening!

**Resources to Explore:**
- [**Loud Numbers Podcast**](https://www.loudnumbers.net/) - Data stories through sound
- **NASA Sonification Projects** 
    - [Hearing Hubble](https://science.nasa.gov/mission/hubble/multimedia/online-activities/hearing-hubble/)  
    - [From Data to Melody: Data Sonification and Its Role in Open Science](https://www.earthdata.nasa.gov/news/blog/from-data-melody-data-sonification-its-role-open-science)
- [**Data Sonification Archive**](https://sonification.design/) - Academic research collection

**Assignment:**
Sonify a dataset of your choice --> Final project 


<!--
As we wrap up today, I want to leave you with some resources and a challenge.

The Loud Numbers podcast creates monthly data-driven audio stories that are both informative and beautiful. NASA's sonification projects continue to push boundaries in making space data accessible and awe-inspiring.

For those interested in diving deeper, there's a growing academic community around sonification research, and creative coding communities are increasingly incorporating data sonification into art projects.

Your final assignment is to create a 30-second sonification that tells a story you care about. It could be personal data, social issues, environmental concerns, or pure artistic exploration. The constraint of 30 seconds will force you to focus on the essential story and the most effective mapping.

Remember, we're not just creating pretty sounds - we're developing a new language for understanding and communicating with data. The future of data science isn't just about what we can see, but what we can hear, feel, and experience with all our senses.
<!--
So, we've taken a quick journey into the world of data sonification. We've learned that it's a powerful tool for accessibility, for finding patterns, and for telling emotional stories with data.

While it's not as common as visualization yet, it's a field that's rapidly growing. As we move into worlds with more data, like VR and AR, and as our devices get smarter, the ability to get information without being glued to a screen will become even more important. From data-driven music to new forms of scientific analysis, the future of data is multisensory/multimodality.

Sonification is a growing field with huge potential in:
- **Real-time data monitoring**
- **Virtual and Augmented Reality**
- **Data art and music**
- **Scientific discovery**

-->