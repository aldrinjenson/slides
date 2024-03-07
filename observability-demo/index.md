---
marp: true
theme: custom
title: GPT Function Calling
description: Short PPT on what AI function calling is and how you can get started with it. This talk goes on to explain function calling from a foundational level and show how you can implement it on your own
author: Aldrin Jenson
keywords: [AI, LLM, GPT]
paginate: true
size: 16:9
---

# LLM **Observability**

Unlocking Insights, Enhancing Control

<!-- Good evening -->
<!-- Let's learn about something new today! -->

---

<!--
## Problem

- LLMs represent a new paradigm in software.

- LLM calls are probabilistic
  - Substantial latency and cost.
- Applications use LLMs in new ways via advanced prompting, embedding-based retrieval, chains, and agents with tools.
- Teams building production-grade LLM applications have new product analytics and monitoring needs:

--- -->

![w:1100](image-8.png)

---

## Few good questions we could answer

- How helpful are my LLM app's outputs?
- What is my LLM API spend by customer?
- What do latencies look like across geographies and steps of LLM chains?
- Did the quality of the application improve in newer versions? - What was the impact of switching from zero-shotting GPT4 to using few-shotted Llama calls?"

---

**LLMs**

### take in text input

and

### returns text as output

---

<!-- ## LLMS -->

Good at what?

---

### **Understanding Text**

---

![h:600](image-10.png)

---

JSON Mode

![h:600](image-9.png)

---

Using Function prototypes

![h:600](image-11.png)

---

### Pause....

---

## Why do we do this?

##### Limitation of LLMs

<!-- no access to dynamic data -->

---

![h:600](image-5.png)

---

### What if

we could use **tools** to supplement

---

![h:600](image-4.png)

---

**LLMs**

### take in text input

and

### returns text as output

---

![w:1200](image-6.png)

---

## Open source Options

<br/>

https://github.com/ShishirPatil/gorilla

---

# Thank You✨

<div class="columns">
<div style="margin-right:55px;">

### Resources

<ul clas="left-align">
  <li class="small-text"> platform.openai.com/docs/guides/function-calling </li> 
  <li class="small-text"> github.com/aldrinjenson/aJent </li>
  <li class="small-text"> github.com/Sentdex/ChatGPT-API-Basics/blob/main/function_calling.ipynb </li>
  <li class="small-text"> python.langchain.com/docs/modules/agents/quick_start </li>
</ul>
</div>
<hr >

<div >
<br/>

<!-- <div>

### Jarvis Lessgoo

</div> -->

</div>
</div>
<br/>
<!-- <p style="font-size:29px;">This presentation was built using Free Software 🤗</p> -->
