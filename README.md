# Urraan Online Training - Task 03: Red Card 2018 UI Conversion

## 📌 Project Overview
This project contains the complete HTML5 and CSS3 solution for **Task 03**, converting the two reference designs (`screen1.png` and `screen2.png`) for the **Red Card 2018 - China Digital Football Awards** by Mailman into clean, semantic, pixel-accurate, and fully responsive web pages.

---

## 🎨 Design & Layout Details

### 📝 Screen 1: Submission Portal (`screen1.png` / `screen1.html`)
Accurately recreates the nomination entry form:
1. **Header Section**:
   - Clean white background header with Red Card brand badge logo (`images/logo.png`).
2. **Main Crimson / Maroon Section**:
   - Distinctive angled slant (clip-path) on the bottom-right corner.
   - **Left Column**:
     - Large bold title: `Submission`
     - Private and confidential data disclaimer copy
     - Prominent application closing notice: `Applications will close on the 15th December 2017`
     - Floating white accent dots matching the visual design
   - **Right Column (Interactive Form)**:
     - Bordered transparent text inputs for **Name**, **Email Address**, and **Organisation**
     - Section header: `Which Award` with instructions subtext
     - Five award categories with custom checkboxes, category labels, right-aligned indicator squares, and description textareas (`max. 150 words`):
       1. Best Livestream *(checked by default as depicted in `screen1.png`)*
       2. Best Tour Campaign
       3. Best Sponsor Activation
       4. Best Use of Technology
       5. Best Online Campaign
     - High-fidelity `✓ Submission Successful` badge and interactive submission validation.

---

### 🏆 Screen 2: Awards & Report Showcase (`screen2.png` / `screen2.html`)
Accurately recreates the annual digital report and award showcase:
1. **Maroon Hero Header**:
   - Circular framed Red Card insignia (`images/logo.png`)
   - Headline: `RED CARD 2018`
   - Subtitle: `China Digital Football Awards`
   - Two-paragraph comprehensive overview of the Red Card report, industry expert judging panel, and China digital strategy.
   - Signature diagonal cut-off corner at the bottom right.
2. **Awards Body**:
   - Five award category sections (`BEST CLUBS`)
   - Red triangle category indicator (`images/icon_awards.png`)
   - Horizontal grid cards featuring club insignia (`1.png`), crimson `Lorem ipsum`, and black `Lorem` labels.
   - **Dual Display Modes**:
     - **Pixel-Perfect Mockup Mode**: Exactly mirrors `screen2.png` (5x Borussia Dortmund cards).
     - **Full Nominees Mode**: Showcases all provided club, league, and player assets (`1.png` Dortmund, `3.png` Chelsea, `4.png` PSG, `5.png` Arsenal, `2.png` Bundesliga, `premier.png` Premier League, `ronaldo.png` Cristiano Ronaldo).
3. **Announcement Banner**:
   - Bold maroon announcement: `RED CARD 2019 WINNERS AND REPORT TO BE LAUNCHED ON 24TH JANUARY 2019.`
   - Diagonal cut-off corner matching branding.
4. **Graphic Skyline Footer**:
   - Textured Shanghai football skyline (`images/footer.jpg` / `images/header.jpg`) with copyright and credits.

---

## 🛠️ Key Technical Highlights
- **Pure Semantic HTML5**: Uses `<header>`, `<main>`, `<section>`, `<article>`, `<nav>`, `<form>`, `<label>`, `<input>`, `<textarea>`, and `<footer>`.
- **Vanilla CSS3 Architecture**: No heavy CSS frameworks. Utilizes CSS custom properties (variables), modern flexbox, CSS grid, and `clip-path: polygon(...)` for the diagonal branding slants.
- **Responsive Typography**: Loaded with Google Fonts **Montserrat** (weights 400 to 900) and **Poppins** (weights 300 to 700).
- **Interactive JavaScript Controller**:
  - Live screen switcher tab bar (`index.html`) allowing seamless instant switching between Screen 1 and Screen 2.
  - Standalone dedicated pages (`screen1.html` and `screen2.html`) for grading flexibility.
  - Interactive form validation with dynamic feedback.
  - Mobile frame toggle for Screen 2 mobile mockup viewing.
- **Accessibility & SEO**: Accessible labels, descriptive alt tags, contrast compliance, and unique descriptive IDs.

---

## 📁 Project Structure
```
Task 03/
├── images/
│   ├── 1.png               # Borussia Dortmund logo
│   ├── 2.png               # Bundesliga logo
│   ├── 3.png               # Chelsea FC logo
│   ├── 4.png               # Paris Saint-Germain logo
│   ├── 5.png               # Arsenal FC logo
│   ├── premier.png         # Premier League logo
│   ├── ronaldo.png         # Cristiano Ronaldo illustration
│   ├── logo.png            # Red Card circular brand logo
│   ├── logo0.png           # Red Card alternate monochrome logo
│   ├── icon_awards.png     # Red triangle section indicator
│   ├── header.jpg          # Shanghai skyline football graphic
│   ├── footer.jpg          # Shanghai skyline football graphic
│   ├── screen1.png         # Reference design for Screen 1
│   └── screen2.png         # Reference design for Screen 2
├── index.html              # Unified responsive portal with screen switcher
├── screen1.html            # Dedicated standalone page for Screen 1 (Submission)
├── screen2.html            # Dedicated standalone page for Screen 2 (Awards)
├── style.css               # Complete responsive CSS stylesheet
├── script.js               # Interactive controller for switching and modes
└── README.md               # Project documentation
```

---

## 🚀 How to View Locally
1. Open the `Task 03` folder in **VS Code**.
2. Right-click on `index.html` (or `screen1.html` / `screen2.html`) and select **"Open with Live Server"** (or double-click to open in any web browser).
3. Use the top navigation bar to switch between screens or toggle display modes.
