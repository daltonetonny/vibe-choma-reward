**VibeLoyalty - Kenyan Eatery Loyalty Rewards Platform**

Project Overview

VibeLoyalty is an ultra-modern, fully functional web platform designed for Kenyan eateries (nyama choma joints, kibandas, Swahili cafes) to reward loyal customers with real-time points and monetary balances. Built for the Vibe Coding Hackathon 2025, it features a vibrant, indirectly girlish aesthetic (soft pinks, corals, lavenders blended with Kenyan flag colors), Kenyan cultural elements (Swahili slang, Maasai patterns, nyama choma imagery), UrbanTone background music (e.g., “Kifo Cha Mende”), relevant imagery, a playful logo, 12 engaging pages, a world-class live demo, and an investor-ready pitch deck. The app leverages Supabase, TailwindCSS, GSAP, Lottie, and Chart.js to deliver real-time analytics, gamification, and a joyful user experience, deployable to Netlify/GitHub Pages.
Project URL: https://lovable.dev/projects/6718f9fa-2f5b-4fd7-a408-26fa6130094a

_Key Features_

Real-Time Points & Balance: Customers earn 10 Choma Points/visit and KSh 100 equivalent, updated live with confetti and sound at 5 visits (free meal).
Live Demo: Immersive demo on track.html with real-time updates, GSAP animations, and global appeal (multilingual hints, world map pulse).
Pitch Deck: Investor-ready pitch.html with GSAP-animated slides (Problem, Solution, Market, Business Model, Traction, Team).
Analytics: Chart.js graphs (visits/day, retention) and heatmaps (eatery popularity).
Gamification: Daily challenges, streaks, badges, leaderboard.
Kenyan Vibe: Swahili slang (“Vibe na Choma!”), Maasai shuka patterns, nyama choma/ugali imagery.
UrbanTone Music: Background hits (e.g., “Kifo Cha Mende”) with play/pause toggle.
Imagery: Mock nyama choma, ugali, Kenyan market images.
Logo: Playful fork-and-knife heart with girlish/Kenyan colors, GSAP bounce.
12 Pages: Engaging, interactive pages for customers and admins.
Chatbot: JS-based for eatery-specific help.
Easter Eggs: Type “choma” or “ugali” for animations.
Dark/Light Mode: “Savanna Light” and “Nairobi Night” themes.

Hackathon Alignment

Prompt Engineering (25%): Modular Lovable.ai prompt with clear instructions for 12 pages, analytics, and demo, hosted at the project URL.
Aesthetic Appeal (20%): Girlish palette, Kenyan gradients, Maasai patterns, UrbanTone music, vibrant imagery.
Technical Creativity (20%): Real-time Supabase, Chart.js, gamification, live demo, pitch deck.
Rapid Prototyping (15%): Low-code tools (Supabase, Tailwind) for speed.
Security (10%): Kenyan phone validation, input sanitization.
Presentation (10%): Animated pitch.html for investors.

Tech Stack

Frontend: HTML, TailwindCSS (CDN), JavaScript, GSAP, Lottie, Chart.js.
Backend: Supabase for real-time data.
Media: HTML5 audio for UrbanTone songs, mock images in images/.
Development: Lovable.ai (see project URL).
Deployment: Netlify/GitHub Pages.

File Structure
vibeloyalty/
├── index.html              # Landing page with hero, music toggle
├── track.html              # Live demo for points/balance
├── rewards.html            # Dashboard with points, balance, analytics
├── pitch.html              # Investor-ready pitch deck
├── analytics.html          # Advanced analytics with charts, heatmaps
├── profile.html            # Customer dashboard with badges, sharing
├── eatery.html             # Eatery-specific analytics
├── challenges.html         # Daily challenges, streaks
├── leaderboard.html        # Animated leaderboard
├── social.html             # Social sharing hub
├── faq.html                # Interactive FAQ with Swahili slang
├── easter-egg.html         # Hidden dancing ugali animation
├── style.css               # Girlish, Kenyan-inspired styles
├── script.js               # Core JavaScript logic
├── supabase.js             # Supabase real-time logic
├── analytics.js            # Chart.js analytics logic
├── music.js                # Background music logic
├── confetti.json           # Lottie animation for rewards
├── reward.mp3              # Placeholder sound description
├── logo.png                # Playful logo
├── images/                 # Mock images (nyama_choma.jpg, ugali.jpg, market.jpg, shuka.jpg)
│   ├── nyama_choma.jpg     # Grilled meat with kachumbari
│   ├── ugali.jpg           # Ugali bowl with stew
│   ├── market.jpg          # Vibrant Kenyan market
│   ├── shuka.jpg           # Maasai shuka pattern
└── README.md               # Project documentation

Setup Instructions

Clone the Repository:
git clone https://github.com/your-username/vibeloyalty.git
cd vibeloyalty


Supabase Setup (5 min):

Sign up at supabase.com.
Create a project with two tables:
visits: id (UUID), phone (text), visit_count (int), balance (int, e.g., KSh), updated_at (timestamp).
eateries: id (UUID), name (text), location (text).


Enable real-time subscriptions for visits.
Copy Supabase URL and anon key into supabase.js:const supabaseUrl = 'your-supabase-url';
const supabaseKey = 'your-anon-key';




Logo:

If logo.png is missing, generate with MidJourney/DALL·E:
Playful Kenyan-themed logo for VibeLoyalty, fork and knife heart, soft pink/coral/lavender with red-green-black-white gradient, gold accents, nyama choma silhouette, Poppins font, 4k resolution, animated bounce effect.




Imagery:

Ensure images/ contains mock placeholders. If missing, generate:
nyama_choma.jpg: Grilled meat on charcoal with kachumbari, 4k resolution.ugali.jpg: Ugali bowl with stew, 4k resolution.market.jpg: Vibrant Kenyan market, 4k resolution.shuka.jpg: Maasai shuka pattern, 4k resolution.




Music:

If UrbanTone songs (“Kifo Cha Mende”, “Anguka Nayo”, “Rhumba Japani”) are copyright-restricted, replace placeholders in music.js (e.g., <audio src="kifo-cha-mende.mp3">) with royalty-free UrbanTone-style music from sources like Free Music Archive.


Deploy (5 min):

Push to GitHub:git add .
git commit -m "VibeLoyalty submission"
git push origin main


Deploy to Netlify:
Drag-and-drop vibeloyalty/ folder or link GitHub repo.
Set build command: none, publish directory: ./.





Demo Instructions

Access the App:

Visit the Netlify URL (e.g., https://vibeloyalty.netlify.app) or run locally with a live server (e.g., VS Code Live Server).


Live Demo:

Navigate to track.html.
Enter a Kenyan phone number (10-digit, e.g., 0712345678).
See Choma Points (10/visit) and balance (KSh 100/visit) update live in rewards.html, profile.html.
At 5 visits, confetti, sound, and a badge appear with GSAP animations.
Global appeal: Note multilingual hints and world map pulse for a world-class experience.


Pitch Deck:

Visit pitch.html for GSAP-animated, investor-ready slides (Problem, Solution, Market, Business Model, Traction, Team).
Click the embedded demo link to revisit track.html.


Analytics:

Explore analytics.html for Chart.js graphs (visits/day, retention) and heatmaps (mock data).


Music:

Toggle play/pause on index.html for UrbanTone hits (e.g., “Kifo Cha Mende”).


Imagery:

View nyama choma, ugali, markets, shuka patterns across pages.


Engagement:

Check challenges.html for daily tasks, leaderboard.html for rankings, social.html for mock posts, faq.html for interactive FAQ, easter-egg.html for surprises.
Type “choma” or “ugali” on any page to trigger animations.



Usage

Customers:

Use track.html to log visits and earn points/balance.
View rewards, badges, and streaks on rewards.html, profile.html.
Share achievements on social.html (mock).
Complete tasks on challenges.html.


Admins:

Monitor analytics on analytics.html and eatery.html.
Review leaderboard on leaderboard.html.


Investors:

Explore pitch.html for a compelling narrative and demo.



Security

Phone Validation: Ensures 10-digit Kenyan numbers (e.g., 0712345678).
Input Sanitization: Prevents injection attacks.
Error Handling: User-friendly messages (e.g., “Sawa, invalid number, mtu wangu!”).

Future Enhancements

Integrate licensed UrbanTone songs.
Develop mobile app for iOS/Android.
Add AI-driven analytics insights.
Incorporate payment gateways for reward redemptions.

Credits

Team: Solo developer for Vibe Coding Hackathon 2025.
Tools: Lovable.ai (see project URL: https://lovable.dev/projects/6718f9fa-2f5b-4fd7-a408-26fa6130094a), Supabase, TailwindCSS, GSAP, Lottie, Chart.js.
Inspiration: Kenyan eatery culture, UrbanTone music, vibrant markets.

Contact
For questions or feedback, reach out via the hackathon submission portal, the Lovable.ai project URL, or GitHub issues.
Vibe na Choma! Let’s loyalty-up Kenyan eateries! 🇰🇪🔥
