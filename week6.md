---
theme: apple-basic
layout: intro
---

# Week 6
## Data Sonification: Hearing the Story
12/08/2025

<!-- 
Welcome, everyone, to our final topic of the course: Data Sonification.

So far, we've spent all our time exploring how to represent data visually. We've learned about charts, maps, colors, and shapes. But what if I told you that you could also *listen* to data?

Today, we're diving into the world of sonification, which is all about turning data into sound. It might sound a bit strange at first, but it's a powerful technique that can reveal patterns you'd never see and tell stories in a completely different way. We'll explore what it is, why it's useful, and listen to some amazing examples from fields like astronomy and public health.
-->

---
layout: default
---

# What is Data Sonification?

**Data sonification** is the use of non-speech audio to convey information or perceptualize data.

It's the auditory equivalent of data visualization.

- **Visualization:** Maps data to visual properties (color, shape, size).
- **Sonification:** Maps data to auditory properties (pitch, volume, tempo).

<br>
<p class="text-sm">
Think of a Geiger counter: the faster it clicks, the more radiation it's detecting. That's a simple, effective form of data sonification.
</p>

<!--
So what exactly is data sonification? The formal definition is "the use of non-speech audio to convey information."

Let's break that down. "Non-speech audio" means we're not talking about a computer reading numbers out loud. We're talking about sounds—notes, tones, textures of sound.

The simplest way to think about it is as a direct counterpart to data visualization. In visualization, we take a dataset and map its values to visual properties. For example, a higher value might become a darker color, a larger circle, or a taller bar.

In sonification, we do the same thing, but with sound. A higher value might become a higher-pitched note, a louder sound, or a faster tempo.

The Geiger counter is the classic, real-world example that everyone knows, even if they don't think of it as "sonification." It maps a single data variable—radiation level—to a single auditory variable—the rate of clicks. It's intuitive, it's immediate, and it works without you ever having to look at a screen. That's the core idea we're going to explore today.
-->

---
layout: default
---

# Why Listen to Data?

1.  **Accessibility:** Provides access to data for visually impaired individuals.
2.  **Eyes-Free Monitoring:** Allows monitoring of data while performing other tasks (e.g., a surgeon monitoring vital signs, a pilot monitoring engine status).
3.  **Pattern Detection:** The human ear is excellent at detecting patterns, anomalies, and changes over time. Sometimes you can hear a trend that's difficult to spot in a noisy visual chart.
4.  **Multidimensionality:** Adds another channel for conveying data. You can show two variables on a 2D chart and sonify a third or fourth variable.

<!--
You might be wondering, "Why bother? We have charts, and they work just fine." And that's a fair question. But sonification offers some unique advantages.

First and foremost is accessibility. For people with visual impairments, sonification isn't just a novelty; it's a gateway to understanding data that would otherwise be inaccessible. This is a huge and growing area of research.

Second is "eyes-free" monitoring. Imagine a surgeon in the middle of an operation. They can't afford to look away at a monitor, but an auditory tone that changes with a patient's blood pressure can provide constant, crucial information without demanding their visual attention. The same goes for pilots, factory workers, or even just driving your car. Those beeps and chimes are simple sonifications.

Third, our ears are incredible pattern-detection machines. Think about how you can instantly recognize a song from just a few notes, or how you can pick out a friend's voice in a crowded room. We can use that ability to hear trends, cycles, and outliers in data that might be hidden in a complex visualization.

Finally, it adds more dimensions to our data displays. A standard scatterplot shows us two variables on the X and Y axes. We can add a third with color or size. But with sound, we can add even more. Imagine each point on the scatterplot also has a pitch representing a fourth variable and a volume representing a fifth. It can get complex, but it opens up new possibilities for exploration.
-->

---
layout: two-cols
---

# Auditory "Visual" Variables

Just as we have visual variables, we have auditory ones. We can map data dimensions to these properties of sound.

::right::

| Auditory Property | Description | Example Mapping |
|---|---|---|
| **Pitch** | The highness or lowness of a sound. | Higher temperature = higher pitch |
| **Loudness** | The perceived volume of a sound. | Larger sales volume = louder sound |
| **Tempo** | The speed or rate of sounds. | Higher website traffic = faster tempo |
| **Timbre** | The quality or "color" of a sound. | Different instruments for categories |
| **Panning** | The position of a sound in stereo space. | Data from East = right speaker |

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
layout: default
---

# Example: The Sound of Space

NASA's Chandra X-ray Observatory data is often sonified to explore cosmic structures. This makes the data accessible and reveals new details.

**Sonification of the Galactic Center:**
- **Data:** X-rays (Chandra), visible light (Hubble), and infrared (Spitzer).
- **Mapping:**
    - Chandra's X-rays (highest energy) are mapped to a **glockenspiel**.
    - Hubble's visible light is mapped to a **plucky violin**.
    - Spitzer's infrared data is mapped to a **soft piano**.
    - Panning moves from left to right across the image.
    - Brighter light is mapped to louder sound.

<a href="https://www.youtube.com/watch?v=4yB23tq2l4g" target="_blank">Listen to the Galactic Center</a>

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
layout: default
---

# Example: The Sound of a Pandemic

Data journalists have also used sonification to tell powerful human stories.

**Sonification of UK COVID-19 Deaths:**
- **Data:** Daily death statistics in the UK.
- **Mapping:**
    - One day of data is compressed into 30 seconds of audio.
    - Each individual death is represented by a single, soft piano note.
    - The pitch of the notes varies to create a soundscape rather than a cacophony.

The result is a haunting and deeply humanizing representation of the scale of the tragedy.

<a href="https://www.loudnumbers.net/episodes/episode-1-the-sound-of-covid" target="_blank">Listen to the Loud Numbers Sonification</a>

<!--
Sonification isn't just for science; it can be a powerful tool for data storytelling, especially when you want to evoke an emotional response.

During the COVID-19 pandemic, we were all inundated with charts and numbers. It was easy to become numb to what those numbers actually represented: human lives.

The data sonification podcast "Loud Numbers" created this piece to re-humanize the statistics. They took the daily death tolls from the UK and turned them into sound.

The mapping is simple but incredibly effective. Each single death is one piano note. As the days go by in the audio, you hear the number of notes swell from a sparse scattering to a dense, overwhelming cascade of sound during the peaks of the waves.

Listening to this is a very different experience from looking at a line chart. The sheer volume of notes makes the scale of the loss tangible and personal. It's a somber, haunting piece that demonstrates the unique emotional power of sonification. It forces you to confront the reality behind the data points.
-->

---
layout: default
---

# Let's Make Some Noise!

You can create your own data sonifications without writing any code.

**TwoTone.io** is a free, web-based tool that lets you upload a dataset (like a CSV file) and map its columns to different auditory properties.

**Your task:**
1. Go to [twotone.io](https://twotone.io/).
2. Download a simple dataset (e.g., stock prices, temperature data).
3. Upload it and experiment!
    - Map the date to the x-axis (time).
    - Map the temperature or price to the **pitch**.
    - Map another variable to **volume** or **panning**.

What story can you hear in your data?

<!--
Now that you've heard what's possible, it's time for you to try it yourself.

You don't need to be a programmer or a musician to get started. There's a fantastic free tool called TwoTone that runs right in your browser. It was designed specifically to make sonification accessible to everyone.

The process is simple: you find a dataset, often just a simple CSV file with a few columns, and upload it to the site. From there, you get a simple interface that lets you map your data columns to auditory properties, just like we discussed.

I want you all to take a few minutes to try this. Find a simple time-series dataset online—historical stock prices for a company or daily weather data for a city are great places to start.

Upload it to TwoTone. Map the time column to the playback timeline. Then, map the main data column—the stock price or the temperature—to pitch. Listen to it. Can you hear the daily fluctuations? Can you hear the overall trend?

Then, play around. What happens if you map it to tempo instead? Or what if you have another data column, like trading volume, and you map that to loudness? This is your chance to experiment and become a data musician.
-->

---
layout: outro
---

# The Future is Heard

Sonification is a growing field with huge potential in:
- **Real-time data monitoring**
- **Virtual and Augmented Reality**
- **Data art and music**
- **Scientific discovery**

Thank you!

<!--
So, we've taken a quick journey into the world of data sonification. We've learned that it's a powerful tool for accessibility, for finding patterns, and for telling emotional stories with data.

While it's not as common as visualization yet, it's a field that's rapidly growing. As we move into worlds with more data, like VR and AR, and as our devices get smarter, the ability to get information without being glued to a screen will become even more important. From data-driven music to new forms of scientific analysis, the future of data is not just seen, but also heard.

Thank you for a great semester. I hope this course has inspired you to look at data in a whole new way—and now, to listen to it, too.
-->