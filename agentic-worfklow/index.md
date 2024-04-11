---
marp: true
theme: custom
title: Introduction to LLMs
description: Talk to introduce Agents, multi-agent systems and how the future could be based ont them
author: Aldrin Jenson
keywords: [Agents, Introduction, LLM, GenAI]
paginate: true
size: 16:9
class: dark
footer: "[@aldrinjenson](https://www.aldrinjenson.com)"
---

<!-- start with current workflow -->
<!-- look at the problems -->
<!-- see how agents can solve them -->
<!-- look at their limitations -->

# Agentic Systems

---

<!-- # what do we already know -->

<!-- --- -->

## LLMs

<!-- large language models -->

<!-- chatGPT is not an LLM -->
<!-- gpt3.5 is -->
<!-- claude2 is an llm -->
<!-- evi is not -->

<!-- in llm, you take in text and you get text output -->

---

## Flows we know

---

### 1. GPT-Wrapper

```python

prompt = f"""
Write me a campaign plan for my product :${super_toothpaste}
"""

answer = llm.predict(prompt)

```

---

## 2. RAG

```python
user_query = input("Enter your question")

similar_chunks = vector_db.retrieve(user_query, k=4)

prompt = f"""You are a question answering agent.
Here is some context:

{json.dumps(similar_chunk)}

Based on the above, answer the question: {user_query}"""

answer = llm.predict(prompt)
```

---

## Limitations

---

1. You **always** have to perform Vector search

![w:700](image.png)

<!-- even if i say hello, you still do RAG -->

---

2. Handling Multiple retrievers.

![w:600](image-3.png)

<!-- How to decide and choose -->

---

3. Error prone : No validation

![w:900](image-2.png)

https://medium.com/pinterest-engineering/how-we-built-text-to-sql-at-pinterest-30bad30dabff

<!-- Oky for just text to sql -->

---

#### 4. Very limited functionality

> Escalating my chat to human

> Cancel my order

<br>

<!-- can only give input and output -->

<!-- customer service agent. how to escalate to human-->

---

#### 4. Quality of response is limited

- Cannot solve Complex tasks
- Has Reasoning issues

> (system 1 v/s system2 thinking)

> Transformers architecture

---

## Improving stuff

---

1. You **always** have to perform Vector search

2. Handling Multiple retrievers

![w:500](image-1.png)

---

Still another problem: Vague user query inputs

![alt text](image-8.png)

---

![h:600](image-9.png)

<!-- ![w:600](image-1.png) -->

---

![h:600](image-10.png)

---

Combine with multiple retrievers

---

![w:600](image-11.png)

---

Now also add looping 🙂

---

Complexity ++

---

4. Error prone : No validation

```python
answer = llm.predict(prmopt)

validation_prompt = f"Based on the question {question}, this was the answer given:
{answer}.
Is this corerct? if not fix it."

final_answer = llm.predict(validation_prompt)
```

---

```python
answer = llm.predict(prmopt)

data, error = execute_sql(answer)

if error:
    validation_prompt = f"""Based on the question {question},
    this was the sql generated. {answer}.
    Got this error on running it: {error}.
    Write corrected sql.
    """

    final_answer = llm.predict(validation_prompt)

    execute_sql(final_answer)
```

---

5. Complex task / Reasoning issues

![w:700](image-5.png)

---

![w:1300](image-6.png)

---

Pause

---

## Emergence

Reasoning + Acting = ReAct

---

![w:700](image-7.png)

---

![w:750](image-12.png)

---

![w:750](image-13.png)

---

# Agents

---

## Why?

- Use LLMs as reasoning engines
- Non-deterministic sequence of actions

---

Improving Quality

![w:800](image-15.png)

<!-- ![w:800](image-14.png) -->

---

![w:850](image-16.png)

> Gpt3.5 with agentic workflow outperforms Gpt4

---

![w:900](image-17.png)

---

![w:950](image-18.png)

---

![w:1000](image-19.png)

---

Q: Duh, Can't I just resuse the same LLM with a different prompt?

---

<!-- ![w:900](image-4.png) -->

![w:1000](image-21.png)

---

![w:900](image-20.png)

---

![w:900](image-22.png)

---

### Some characterestics

- Iterative
- Tool Usage
- Reasoning
- Automated Action

---

## Multi Agent Systems

Image Optimizer Demo

https://youtu.be/C94pTaKoLbU?si=5e8XntCK0gV43KYv&t=2040

---

### Main Potential usecases

- For Complex problems(Not necessariliy difficult ones)
- When the steps are not pre-determined

---

### Popular frameworks

---

![w:850 ](image-23.png)

---

![w:850](image-24.png)

---

![w:850](image-25.png)

---

![w:700](image-27.png)

---

## Conclusion

---

# Referneces

- https://youtu.be/sal78ACtGTc?si=5KGmg8KXc9nqLaT7
- https://www.youtube.com/watch?v=DWUdGhRrv2c
- https://www.promptingguide.ai/techniques/react
- https://arxiv.org/abs/2210.03629
- https://arxiv.org/pdf/2201.11903.pdf

---

# Thank You!

## **@aldrinjenson**

<u>aldrinjenson.com</u>

<br/>
<p style="font-size:29px;">This presentation was built using Free Software!</p>

---

![w:700](image-26.png)
