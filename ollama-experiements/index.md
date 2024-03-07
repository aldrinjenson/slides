---
marp: true
theme: custom
title: Ollama Experiments
description: Short talk on some experiments with Ollama
author: Aldrin Jenson
keywords: [llm, ollama, exploration, parallel-processing]
paginate: true
size: 16:9
---

# Ollama **Experiments** ✨

<!-- Long live the Open Source revolution! -->

---

## Caveats

<!-- 1. Not much extensive testing done -->

---

## Ollama

![w:1100](image.png)

https://ollama.com/

---

## Getting started

![w:950](image-1.png)

---

![w:1150](image-11.png)

---

## Limitations

![w:900](image-2.png)

(demo)

---

![w:500](isfine.png)
For, most people this is okay.

---

## But

---

We can do better for the **BEAST**

![w:900](image-3.png)

---

![w:1100](image-4.png)

---

![w:900](image-5.png)

---

![w:1000](image-6.png)

---

![w:1100](image-7.png)

---

Docker to the rescue

---

![w:700](image-10.png)

---

## Workaround

![h:600](image-8.png)

---

---

![h:700](image-9.png)

---

![h:600](image-12.png)

config.yml

---

![w:1150](image-13.png)

test.sh

---

## Observations

---

For 6 llama2 instances

- Sequential execution :: 41+ seconds.
- Parallel execution :: 18+ seconds.

---

## Limiting factor

![alt text](image-16.png)

---

![alt text](image-17.png)

---

Still room to improve

---

# Thank You✨

<div class="columns">
<div style="margin-right:55px;">

### Resources

<ul clas="left-align">
  <li class="small-text"> www.gnu.org/gnu/manifesto.html </li> 
  <li class="small-text"> www.debian.org/ </li>
  <li class="small-text"> www.fsf.org/ </li>
  <li class="small-text"> www.youtube.com/watch?v=vwG5N8SCmZ8 </li>
  <li class="small-text"> indiafoss.net/2023 </li>
  <li class="small-text"> en.wikipedia.org/wiki/Free_software_movement </li>
  <li class="small-text"> slides.aldrinjenson.tech/introduction-to-foss/ </li>
</ul>
</div>
<hr >

<div >
<br/>

<div>

### May the **FOSS** be with you ⚔️

</div>

</div>
</div>
<br/>
<p style="font-size:29px;">This presentation was built using Free Software 🤗</p>
