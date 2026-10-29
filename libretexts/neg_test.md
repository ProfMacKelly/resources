### When is there a duty?

1. **Foreseeability**  
 
 - Common law duty to avoid causing foreseeable harm to others

2. **On the Premises**
   - Owners/Possessors of a premises owe special duty to warn

3. **Special Relationships**
   - Special duties owed to certain relationship counterparts

4. **Creation of Risk**
   - Duty created when person creates a risk to others

5. **Assumption of Duty**
   - Duty exists when person assumes a duty that didn't previously exist

6. **Contract**
   - Contracts create duties between the contracting parties

---

Overview Flowchart
<br>

```mermaid 
flowchart TB 
    start["**START HERE**"] --> du["**Element: Duty**<br>Did D owe a<br/>**legal duty** to P?"]
    du -- **No** --> not_liab["**STOP:<br>Not Liable**"]
    du -- **Yes** --> da["**Element: Damages**<br>Did P suffer **damages** (aka harm, injury, loss)?"]
    click du "/presenter/6/" "Go to Duty"
    da -- **No** --> not_liab
    da -- **Yes** --> br["**Element: Breach**<br>Did D **breach** their duty?"]
    br -- **No** --> not_liab
    br -- **Yes** --> ca["**Element: Causation**<br>Did D's conduct **cause** P's harm?"]
    ca -- **No** --> not_liab
    ca -- **Yes** --> pf(["**The D has a _prima_ facie case for negligence**"])
    pf --> def[Does D have an **affirmative defense**?]
    def -- **No** --> liable["**D is liable**"]
    def -- **Yes** --> not_liab

    start@{ shape: terminal}
    not_liab@{ shape: terminal}
    style start stroke-width:2.5px,stroke-dasharray: 2,fill:#fafafa,stroke:#000000
    style not_liab stroke-width:2.5px,fill:#FFF8F8,stroke:#880101
    liable@{ shape: diamond}
    style liable stroke-width:2.5px,fill:#ebf5eb,stroke:#2c5e36
    style pf stroke-width:2.5px,fill:#e1f5fe,stroke:#01579b
```