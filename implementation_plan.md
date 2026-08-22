# Implementation Plan - Expand LearnAIQ to Class 4 & Class 5

Expand the LearnAIQ curriculum, class selector, pricing structure ($25/mo for Class 4, $30/mo for Class 5), registration modal, and dual-language translation engine to support Class 4 and Class 5.

## Proposed Changes

### Core Workspace Files (`c:/Users/Dasari Shiva prasad/hackathon/frontend/`)

#### [MODIFY] [index.html](file:///c:/Users/Dasari%20Shiva%20prasad/hackathon/frontend/index.html)
- Add Class 4 and Class 5 cards to the Class Selector grid (`#classes`).
- Add Class 4 ($25/mo) and Class 5 ($30/mo) to the Pricing section (`#pricing`).
- Add Class 4 and Class 5 options to the Student Registration modal dropdown (`#regClassSelect`).

#### [MODIFY] [style.css](file:///c:/Users/Dasari%20Shiva%20prasad/hackathon/frontend/style.css)
- Support 5-column or flexible responsive grid layout for classes and pricing plans.
- Add badges and styling for Class 4 and Class 5 cards.

#### [MODIFY] [script.js](file:///c:/Users/Dasari%20Shiva%20prasad/hackathon/frontend/script.js)
- Extend `CURRICULUM_DATA` with Class 4 & Class 5 Maths & Science chapters in English and Telugu.
- Extend `TRANSLATIONS` with Class 4 and Class 5 descriptions and pricing labels.
- Update `selectClass` and AI Tutor knowledge base for Class 4 & Class 5 topics.
