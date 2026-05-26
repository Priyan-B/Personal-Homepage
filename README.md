# Personal Homepage

My personal homepage for CS5610 (Web Development) at Northeastern. Built with HTML, CSS and JavaScript.

**Live site:** [https://priyan-b.github.io/Personal-Homepage/](https://priyan-b.github.io/Personal-Homepage/)

---

## About me

I'm Priyan Baskar, an MS Computer Science student at Northeastern's Khoury College. Before grad school I worked at Hitachi Energy as a software developer in Chennai for about a year and a half, mostly building backend services in Java and Groovy.

- **Email:** priyanbas48@gmail.com
- **GitHub:** [Priyan-B](https://github.com/Priyan-B)
- **LinkedIn:** [priyan-baskar-a1263227a](https://www.linkedin.com/in/priyan-baskar-a1263227a/)

---

## What this project is

A three-page personal website:

1. **Home** - Quick intro, work timeline, and the friendship quiz I built (more on that below)
2. **Portfolio** - Projects I've worked on with various tech stacks
3. **Fun Facts** - AI-generated content (with a disclosure note), kept separate from my "real" pages

---

## The creative addition

The fun part of this project is a quiz called **"Are You Cool Enough to Be Friends with Priyan?"** It sits on my home page. Five questions, four options each, and at the end you get a score out of 5 with a personalized message.

The questions are based on my actual preferences (pineapple on pizza, Python > everything else, FC Barcelona, etc.). It's built as its own ES6 module that exports an init function — the main script imports it and only loads the quiz on the home page where the container exists.

---

## Tech stack

- HTML5 (semantic tags everywhere, no `<div>`)
- CSS3 (Grid + Flexbox, custom properties, no )
- JavaScript ES6+ (modules, import/export, template literals)
- ESLint + Prettier for code quality
- http-server for local dev
- GitHub Pages for hosting


## How to run it locally

You need Node.js installed (any version above 18 should be fine).

```bash
git clone https://github.com/Priyan-B/Personal-Homepage.git
cd Personal-Homepage
npm install
npm start
```

This opens the site at `http://localhost:8080`. You **have** to use a local server (or VS Code's Live Server extension) — opening `index.html` directly with `file://` won't work because ES6 modules need a real HTTP server.

### Other useful commands

```bash
npm run format    # Format everything with Prettier
npm run lint      # Run ESLint on the JS files
```


## Use of generative AI

I used **Claude (Anthropic)** as an assistant during this project, mostly for things like getting unstuck on bugs and brainstorming ideas.

### What AI helped with

1. **Initial scaffolding** - I described what I wanted (dark theme, three pages, ES6 modules) and Claude generated a starting structure I could build on.
2. **The Fun Facts page** - This page is intentionally AI-generated as part of the project requirement. Claude drafted the 8 cards based on stuff I told it about my interests. I edited each one so they actually sound like me.
3. **Quiz question ideas** - I knew I wanted a "friendship quiz" but Claude helped brainstorm specific questions. The final answers and "correct" choices are all mine.
4. **Debugging** - When ESLint refused to install, when my CSS file path was wrong, when GitHub Pages threw a 404, Claude helped me figure out what was going on faster than Googling each one.
5. **README and design doc drafting** - Claude wrote initial drafts based on my project, then I edited them heavily to match my voice and remove the corporate-sounding stuff.

### Sample prompts I used

- *"I want to build a personal homepage with HTML, CSS, and ES6 modules. Dark theme, three pages. What's a creative interactive feature I could add?"*
- *"I want a dark themed background with a light green themed texts and styles, recoment me the best contrasting colours to acheive it."*
- *"My CSS isn't loading on GitHub Pages even though it works locally. Here's my folder structure — what's wrong?"*

The bottom line: Claude was a tool, like Stack Overflow or a tutor. I made the choices and shipped the code. This made me understand the concepts of HTML, CSS and Javascript and I am far more knowledgeble than how I was when starting of this project.

### What I did myself

- All the real personal info (resume, work history, project descriptions)
- All design decisions (colors, fonts, layout choices, what to include)
- Final wording on everything that ships
- All the testing, debugging, and deploying
- The actual logic of what the quiz tests and how it scores
- Picking what stays and what gets cut

---

### Screenshots

<img width="1440" height="733" alt="image" src="https://github.com/user-attachments/assets/3a527eb4-4545-4514-9c06-ceb349c324bb" />

<img width="1440" height="777" alt="image" src="https://github.com/user-attachments/assets/033b45eb-dc88-408a-bd19-3c79d000039e" />

<img width="1439" height="777" alt="image" src="https://github.com/user-attachments/assets/2fbf0b13-4d44-479f-98e1-4c8dbc29cdb4" />

<img width="1439" height="776" alt="image" src="https://github.com/user-attachments/assets/f9c7807e-a2d9-4e20-a529-4eef9be867f5" />

<img width="1440" height="777" alt="image" src="https://github.com/user-attachments/assets/c572cfed-7f81-4703-9a57-82e7ade98cf4" />



## License

MIT — see the [LICENSE](./LICENSE) file.

---
