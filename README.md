# Aimee Wirick — Portfolio

A developer & UI/UX portfolio built as a small interactive world instead of a résumé page. Each section is its own "room," reached by a hand-drawn vine that grows as you scroll.

**Live:** [aimeewirick.com](https://aimeewirick.com)

---

## The idea

How people experience your software is the real test of development. Good development builds long-term relationships through interfaces that feel safe and easy to use — and the best way to show you believe that is to build things people can actually *use*. So nothing here just sits on the page: you grow the vine by scrolling, you stir the candy jar, you play the word game. The site argues its own point.

## Rooms

- **The garden** (`index.html`) — the hub. A procedurally generated vine, drawn on an HTML canvas, grows down the page as you scroll, blooms the section cards as it reaches them, and coils around the contact footer.
- **UI Design** (`ui.html`) — a pastel dashboard room. Its centerpiece is a glass candy jar with real physics: the candies stir when you move your cursor over them, and dropping your contact card adds a candy *and* sends the card straight to my inbox. Features the Mentor Match redesign (backed by a real five-user usability study) and HomeBakes.
- **Web Applications** (`web.html`) — "the builder." Rather than claim the apps work, the room hands you one: **Breadle**, a daily five-letter baking word game. Below it are the shipped full-stack apps, HomeBakes and Mentor Match.
- **Mobile · 3D · Data** — rooms in progress.

## Built with

- Vanilla **HTML / CSS / JavaScript** — no framework, no build step
- **Canvas API** for the animated vine and the candy rendering
- **Matter.js** for the candy-jar physics
- **SVG filters** for the lipgloss text effects
- **Formspree** for the contact form
- **Google Fonts** (Spectral, Mulish, Fraunces, IBM Plex Sans, Gabarito, Plus Jakarta Sans)
- Deployed on **Vercel**, custom domain via DNS

## Run it locally

It's a static site, so there's no build step:

```bash
git clone https://github.com/aimeewirick/Resume.git
cd Resume
```

Then either open `index.html` directly in a browser, or serve the folder so the relative room links resolve cleanly:

```bash
python -m http.server 8000     # then visit http://localhost:8000
```

Keep all the files in one folder — the room-to-room navigation uses relative links.

## Contact

- **Site:** [aimeewirick.com](https://aimeewirick.com)
- **LinkedIn:** [aimee-wirick](https://www.linkedin.com/in/aimee-wirick-170765122/)
- **GitHub:** [@aimeewirick](https://github.com/aimeewirick)
- **Email:** wirickaimee@gmail.com

---

*Designed & built by Aimee Wirick.*
