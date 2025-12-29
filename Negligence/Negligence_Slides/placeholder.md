---
theme: default
# random image from a curated Unsplash collection by Anthony
# like them? see https://unsplash.com/collections/94734566/slidev
background: none
# some information about your slides (markdown enabled)
title: Negligence
info: |
  ## Slidev Starter Template
  Presentation slides for developers.

  Learn more at [Sli.dev](https://sli.dev)
# apply UnoCSS classes to the current slide
class: text-center
# https://sli.dev/features/drawing
drawings:
  persist: false
# slide transition: https://sli.dev/guide/animations.html#slide-transitions
transition: slide-left
# enable MDC Syntax: https://sli.dev/features/mdc
mdc: true
hideArrow: false
layout: center
---
# test slide

---

layout: center
alias: step_duty
decision: true
question: "Duty?"
yesTarget: step_breach
noTarget: outcome_no
--------------------

# Element 1: Duty

Did D have a duty to P?

```mermaid {scale: 0.5}
graph TD
    z1["**START HERE**"] --> du["Did D owe a<br/>**legal duty** to P?"]
    du -- **No** --> z2["**STOP:<br>Not Liable**"]
    du -- **Yes** --> da["Did P suffer damages (aka harm, injury, loss)?"]
    da -- **No** --> z2
    da -- **Yes** --> b["Did D breach their duty?"]
    b -- **No** --> z2
    b -- **Yes** --> ca@{ label: "Did D's conduct cause P's harm?" }
    ca -- **No** --> z2
    ca -- **Yes** --> p["**The D has a prima facie case for negligence**"]
    p --> aa[Is there an **affirmative defense**?]
    aa -- **No** --> l["**D is liable**"]
    aa -- **Yes** --> z2
```

---

layout: center
class: text-center
alias: outcome_no
-----------------

# Outcome

Without having a duty to P, D cannot be liable.

---

layout: center
alias: step_breach
decision: true
question: "Breach?"
yesTarget: step_causation
noTarget: outcome_no
--------------------

# Element 2: Breach

Did D breach the duty to P?

```mermaid
graph TD
    Q2{Breach?}
    Q2 -->|Yes| Next[Go to Causation]
    Q2 -->|No| End[No Liability]
    style Q2 stroke-width:4px,stroke:#4ade80
```

---

layout: center
alias: step_causation
decision: true
question: "Causation?"
yesTarget: step_damages
noTarget: outcome_no
--------------------

# Element 3: Causation

Did the defendant's breach cause harm?

```mermaid
graph TD
    Q3{Causation?}
    Q3 -->|Yes| Next[Go to Damages]
    Q3 -->|No| End[No Liability]
    style Q3 stroke-width:4px,stroke:#4ade80
```

---

foo: bar
dragPos:
square: 527,93,167,_,-16
------------------------

# Draggable Elements

Double-click on the draggable elements to edit their positions.

<br>

###### Directive Usage

```md
<img v-drag="'square'" src="https://sli.dev/logo.png">
```

<br>

###### Component Usage

```md
<v-drag text-3xl>
  <div class="i-carbon:arrow-up" />
  Use the `v-drag` component to have a draggable container!
</v-drag>
```

<v-drag pos="95,281,839,_,-15">
  <div text-center text-3xl border border-main rounded>
    Double-click me!
  </div>
</v-drag>

<img v-drag="'square'" src="https://sli.dev/logo.png">

###### Draggable Arrow

```md
<v-drag-arrow two-way />
```

<v-drag-arrow pos="303,393,213,-202" two-way op70 />

---

layout: center
--------------

```mermaid
graph TD
    Q3{Causation?}
    Q3 -->|Yes| Next[Go to Damages]
    Q3 -->|No| End[No Liability]
    style Q3 stroke-width:4px,stroke:#4ade80
```

---

# Slidev

> Hello **world**

<style>
blockquote {
  strong {
    --uno: 'text-teal-500 dark:text-teal-400';
  }
}
</style>

<style>
/* Style for the Roman Numerals */
.legal-list {
  list-style-type: upper-roman !important;
  margin-left: 20px;
  line-height: 1.5;
}

/* Style for the Alpha (A, B, C) */
.alpha-list {
  list-style-type: upper-alpha !important;
  margin-left: 25px;
  line-height: 1.5;
}

/* Style for the Note */
.note {
  font-size: 0.85rem;
  opacity: 0.8;
  color: #3b82f6; /* Blue color */
  margin-left: 1.5rem;
  margin-bottom: 0.5rem;
  font-style: italic;
  line-height: 1.2;
}
</style>