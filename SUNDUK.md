# SUNDUK

## Core Concept

A hyper-casual mobile game where you shake treasure chests to get coins out through a slot. Simple two-button controls, satisfying animations, and the eternal "almost got it!" loop.

## Controls

The screen is held horizontally. Two buttons on the sides — your two hands gripping the chest.

- **Tap left button** — rotate chest one position left
- **Tap right button** — rotate chest one position right
- **Hold both buttons** — shake the chest (the character shakes it in-world; no device shaking)

Rotation is **discrete** — 24 positions around a full circle (15° each). Each tap clicks the chest one position, like a combination lock. The chest snaps between positions with a satisfying click.

This creates two distinct input modes:
- **Tapping** = precise, deliberate positioning (click-click-click)
- **Holding both** = sustained, violent shaking

The skill is knowing *which position* to be at (reading telegraphs), then shaking at the right moment. Like a safecracker who knows the combination.

## Core Mechanic: Telegraph System

The game is built around **telegraphing** — the environment hints when and where to shake. Mastery comes from learning to read these signals.

### How It Works

Like lockpicking, but inverted:
- **Rotate** to find the sweet spot where a telegraph appears
- **Shake** within the timing window to release the coin

Miss the telegraph? You can still bruteforce (shake N times), but it's slow and resets after each coin — forcing you to rotate and start over.

### Dual-Signal Telegraphs

Each telegraph carries **two bits of information**:
1. **Shake now** — this is the moment
2. **Rotate this direction next** — where the next coin awaits

Example: candle flame bends **left** and flickers = shake now, then rotate left for the next opportunity.

This creates a continuous flow:
- Beginners catch "shake now" and search for the next spot manually
- Intermediates catch both signals, chaining actions smoothly
- Masters read telegraphs in peripheral vision, never breaking rhythm

The direction hint **lingers slightly** after the shake — if you miss it in the action moment, you get a brief window to catch it. Miss that too? Bruteforce penalty applies.

One signal, two decisions. The compression is the game.

### Telegraph Sources

The entire scene communicates:

**The Mimic (Living Chest):**

The chest is alive — a mimic that swallowed treasure and can't help but react. It *wants* to keep the coins, but its body betrays it.

*Eyes:*
- Glance left/right = rotate that direction next
- Widen = shake now
- Squint = wrong direction, go back
- Roll upward = coin is close to the slot

*Tongue:*
- Licks toward one side = rotate that way
- Flicks out = shake moment
- Drools when coins are near the slot
- Curls in disappointment when you miss

*Body:*
- Involuntary shivers when coins shift inside
- Grimaces when you find the right angle
- Teeth chatter near the sweet spot

The mimic reframes the game: you're not shaking a box, you're wrestling treasure out of a reluctant creature. Telegraphs become tells it can't hide.

**The Chest (Inanimate Alternative):**
- Keyhole glows when something's aligned inside
- Wood grain pulses where it's weakest
- Lock rattles when it's vulnerable

**The Environment:**
- Candles flicker toward the shake direction
- Shadows shift to point at the weak spot
- Dust motes swirl near the active crack
- Background creaks in rhythm with the opportunity

**The Character:**
- Eyes glance at the right spot
- Posture shifts toward the opening
- Hands reposition before the moment

### Diegetic UI

No button prompts. No glowing outlines. The world itself teaches you. Players who pay attention get rewarded.

### Skill Curve

1. **Obvious** — Candles flare dramatically, fingers tap loudly
2. **Subtle** — Just a shadow shift, a quiet creak
3. **Layered** — Multiple telegraphs combine for the ONE right moment
4. **Layered deception** — Some telegraphs are traps, learn which sources to trust (future feature)

### Bruteforce Fallback

Miss all telegraphs? Shake N times and the coin still drops. But:
- Shake count **resets after each coin**
- Forces rotation to start again
- Slow, tedious, but always possible
- Drains mimic patience faster (see below)

This means:
- **No player is ever stuck** — progress is always possible
- **Skill is rewarded, not required** — casual players finish, attentive players excel
- **The gap IS the game** — difference between 10 shakes and 1 shake is the mastery

### Mimic Patience

The mimic has an invisible **patience meter** that determines when it snaps shut, keeping remaining coins.

- **Successful telegraph reads** barely drain patience (the mimic barely notices)
- **Bruteforce shakes** drain patience fast (the mimic gets irritated)
- **Missed telegraphs** drain some patience (wasted opportunity annoys it)
- When patience runs out, the mimic **clamps shut** — remaining coins are lost (or saved for a return visit)

This creates the core tension:
- Skilled players keep the mimic docile, extract all coins at their own pace
- Unskilled players still make progress, but the chest locks before they finish
- The pressure is organic and thematic — not a raw timer, but a creature fighting back
- Replay incentive: come back with better skills (or upgraded heroes) to get the rest

Patience is **not displayed** as a UI bar — the mimic's behavior telegraphs it: calm → twitchy → agitated → snap. Another signal to learn to read.

### Combo System

Consecutive successful telegraph reads let you chain shakes without re-rotating:
- 1 telegraph = 1 shake = 1 coin
- 2 combo = 2 shakes = 2 coins
- 3 combo = 3 shakes = 3 coins, etc.

Miss a telegraph or bruteforce? Combo resets, back to rotate-shake-rotate.

During a combo, the mimic is "stunned" — telegraphs fire at your current angle, no rotation needed. The **direction hint** (signal #2) is irrelevant during a combo, but becomes critical when the combo breaks: it tells you where to rotate next to start a new chain. Masters note the direction hint even mid-combo, so when the chain inevitably ends, they already know where to go.

### Mastery Loop

```
First run:  2:34 — got 6/15 coins (bruteforcing)
Fifth run:  1:12 — got 12/15 coins (catching some telegraphs)
Tenth run:  0:47 — got 15/15 coins (perfect, every telegraph)
```

Each chest is a language to learn. Master players spin the chest like safecrackers hitting known numbers.

### Each Chest = New Language

Different chests have different telegraph systems:
- Pirate chest: water drips, rope creaks
- Wizard chest: crystal hums, rune glows
- Ancient chest: wind whispers, stone grinding

Mastering one doesn't mean you've mastered another.

### Scoring

- ⭐ Got all coins (bruteforce OK)
- ⭐⭐ Under time limit (need some telegraphs)
- ⭐⭐⭐ Perfect run (every coin on first shake)

Leaderboards per chest. Personal bests. The satisfaction of *knowing* a chest completely.

## Progression Loop

1. Find a chest in the dungeon
2. Learn its telegraph language
3. Optimize your run for speed/completion
4. Move deeper into the dungeon
5. Repeat with new chest configurations

## The Chest

Each chest is a scripted puzzle — no real physics simulation. **Coins are never visible inside the chest.** The player reads the chest through sound and telegraphs alone.

- The chest is opaque — you hear coins shift, clink, and slide, but never see them
- A slot somewhere on the chest (position varies)
- Internal "coin state" tracks how close each coin is to the slot
- Rotation nudges coin states toward or away from the slot based on scripted rules
- Shaking triggers coin release when conditions are met (telegraph or bruteforce count)
- Sound design is the primary feedback: clinking tells you coins are moving, tone changes tell you they're near the slot, silence means nothing's happening
- Telegraphs (visual tells from mimic/environment) are the secondary feedback

The slot position defines the strategy:
- **Slot on top** — mostly shaking, rotation less useful
- **Slot on the side** — rotate to gather coins, shake to push them out
- **Slot on bottom** — flip and hold upside down, shake carefully
- **Diagonal slot** — time your shakes with rotation phase
- **Multiple slots** — coins fall out where you don't want them
- **Narrow slot** — only small coins fit through

## Coin Types

- Small coins: easy to shake out, low value
- Medium coins: balanced
- Large coins: valuable, tend to require more shakes
- Gold, silver, copper: visual hierarchy
- Special coins: gems, artifacts (rare, very valuable)

Coins are invisible during gameplay — the player never sees inside the chest. All feedback comes through **sound** (clinking, sliding, jingling based on coin count, shake intensity, and rotation) and **telegraphs** (visual tells from the mimic and environment). No physics engine involved.

## Progression

### Dungeon Narrative

Your party ventures through a dungeon, room by room. Each room may contain a chest. The deeper you go, the trickier the chests but the better the loot.

### Chest Variety

Visual and mechanical progression:
- Wooden chests (simple)
- Iron chests (heavier, different shake feel)
- Ornate chests (complex internal geometry)
- Ancient chests (mysterious slot positions)
- Cursed chests (special rules)

### Party System

Recruit and upgrade heroes. Each provides a passive bonus:
- **Warrior** — stronger shakes
- **Rogue** — highlights valuable coins
- **Mage** — slow motion ability
- **Bard** — bonus coins
- **Engineer** — reveals chest internals

Upgrade heroes with collected gold.

## Special Chests

- **Mimic** — bites if you take too long, lose coins
- **Cursed chest** — some coins must stay inside (avoid shaking them out)
- **Fragile chest** — breaks if shaken too hard
- **Locked chest** — solve mini-puzzle first
- **Bottomless chest** — coins keep spawning, maximize within time limit

## Monetization (F2P)

### Loot System

- Each chest contains a fixed loot pool (coins + rare items)
- Better performance = more loot extracted before mimic's patience runs out
- Missed coins stay in the chest — come back later with better skills or upgraded heroes
- Creates natural replay incentive without hard timers
- Chests may contain potions (gameplay boosts) and cosmetics (skins, effects)

### IAP Options

- Unlock heroes early
- Cosmetic bundles (chest skins, coin effects, hand skins)
- Premium dungeon runs (better loot)

### Ads

- Watch ad for hint (best shake rhythm)
- Rewarded ads for bonus coins

## MVP Scope

Version 1.0:
- One chest type
- Two buttons (rotate left, rotate right, both = shake)
- Faked coin behavior with satisfying animated responses and sound
- Single slot position
- Basic telegraph system (1-2 obvious tells: keyhole glow, finger tap)
- Basic UI (coin counter, simple scoring)
- Core loop playable: rotate → read telegraph → shake → coins out

Everything else is iteration.

## Technical Implementation

### Stack
- **PixiJS** — 2D rendering (primary renderer for all gameplay, UI, environment)
- **Three.js** — 3D particle effects only (coin bursts, combo confetti, chest-empty celebration); loaded as a thin overlay, not used for gameplay
- No physics engine — all coin behavior is scripted/animated

### Coin Simulation Approach
Coins are not physically simulated. Instead:
- Each coin has a state (position bucket, proximity to slot, "loose" vs "stuck")
- Rotation input shifts coin states toward or away from the slot
- Shaking checks telegraph/bruteforce conditions, then triggers coin-out animation
- Visual coin movement inside the chest is procedural animation (noise-based jiggle, gravity-responding drift) — looks physical, costs nothing
- This keeps performance trivial and behavior fully designable/tunable

### Orientation
**Landscape only** — Screen held horizontally, two-hand grip on sides. Matches the "holding a chest" metaphor.

### PC Controls (for prototyping)
- `A` or `←` — rotate chest left
- `D` or `→` — rotate chest right
- Both keys simultaneously — shake the chest

Maps 1:1 to mobile two-button concept. Gamepad support (triggers) possible later.

### Audio
- **Howler.js** or **Tone.js** for sound management
- Coin sounds triggered by input events (rotation, shake) — pitch/volume scaled by intensity
- Different tones for coin types (copper = dull, gold = bright, gems = sparkle)
- Chest material affects sound (wood = soft thud, iron = metallic ring)
- Layered audio on shake = satisfying "treasure rattling" sound (pre-mixed or procedurally layered)
- Coin-out-of-slot sound = rewarding "cha-ching"

## Visual Progression: The Sunduk Grows

Your collected coins accumulate in your own sunduk — a persistent chest that visually evolves with your wealth.

**Progression stages:**
- Empty → sad leather pouch
- Some coins → small wooden box
- More → proper wooden chest
- Wealthy → iron-bound chest
- Rich → ornate carved chest
- Treasure hoard → gilded sunduk with gems

Your sunduk IS your save file made visible. Opening the game shows your chest in its current form. The goal shifts from "shake coins out" to "fill MY chest."

**Mimic visual decay (in-level):**
As you drain a mimic, its disguise slips:
- Full mimic = perfect chest illusion
- Half-empty = cracks show, wood grain looks off
- Nearly empty = hinges become joints, keyhole becomes eye
- Empty = sad creature, no longer hiding

Rewards skilled play with visual transformation. The better you read telegraphs, the faster you see the true mimic.

## Visual Style

**The rule: 2D is the game, 3D is the confetti.**

### Camera / Perspective

**First-person side view.** The player looks straight at the chest from the front. The player's own hands are visible gripping the chest from each side. The environment (dungeon room, candles, shadows) fills the background behind and around the chest.

This is the "holding a chest in front of your face" perspective — intimate, embodied, focused entirely on the chest and its tells.

### Rendering Split

Core gameplay is flat — the chest, hands, environment all rendered in 2D (PixiJS). But when coins drop out, when you hit a combo, when you empty a chest — 3D particles burst out of the screen (Three.js overlay). Confetti, sparkles, coin showers that feel like they're flying toward you.

The contrast makes rewards visceral. 2D keeps the gameplay readable and the art style consistent. 3D celebration makes every success feel like breaking through a barrier.

### Hands
Visible hands gripping the chest from each side:
- Left hand on left edge, right hand on right edge
- Hands rotate with the chest (attached to it)
- Grip tightens/animates when pressing corresponding button
- Shake animation when both buttons pressed
- Adds embodiment — player sees "their" hands holding the treasure

## Game Feel

Since coins are invisible, **feel IS the game.** Every input must produce a response the player can sense — through their hands, ears, and eyes. If any moment feels hollow or disconnected, the illusion breaks.

### Principle: Nothing Is Silent

Every player action gets at least two feedback channels simultaneously:

| Action | Visual | Audio | Haptic (mobile) |
|---|---|---|---|
| Hold rotate | Chest turns with momentum, hands grip | Creaking wood, coins sliding inside | Low constant rumble |
| Rotate near sweet spot | — | Clinking intensifies, pitch rises | Rumble intensifies |
| Rotate away from sweet spot | — | Sound fades to silence | Rumble fades |
| Shake | Chest jitters violently, hands strain | Rattling, thuds, coins bouncing | Sharp burst pulses |
| Telegraph appears | Keyhole glows, finger taps | Subtle chime/tap sound | Single tick |
| Successful shake (telegraph) | Coin flies out of slot, flash | Cha-ching, bright ring | Strong snap |
| Bruteforce shake (no telegraph) | Chest shudders weakly | Dull thud, no reward tone | Weak buzz |
| Combo hit | Screen flash, escalating glow | Rising pitch per combo step | Escalating snap |
| Combo break | Flash dies | Descending tone | Nothing (absence is the feedback) |
| Mimic agitated | Chest trembles on its own, eyes widen | Growling, creaking intensifies | Irregular pulses |
| Mimic snap | Screen shakes hard, chest clamps | Loud snap/bite sound | Hard single buzz |

### Principle: Weight and Momentum

The chest is heavy. Rotation has **inertia** — it accelerates slowly, decelerates when released, overshoots if you're careless. The player should feel like they're wrestling a real object, not spinning a UI element.

- **Rotation curve**: slow start → steady speed → overshoot on release
- **Shake force**: not instant — builds over ~100ms, peaks, then the chest settles
- **Coin-out arc**: the coin doesn't just appear — it tumbles out of the slot with weight, arcs downward, then the 3D celebration layer catches it

### Principle: The Gap Between Actions

The transition from rotate to shake (releasing one button, pressing both) is a **dead moment**. This gap must feel intentional, not laggy:
- Releasing a rotate button → chest decelerates (momentum carries it slightly)
- Both buttons pressed → brief grip-tighten animation (~50ms) → shake begins
- This tiny pause is the "inhale before the hit" — it creates rhythm

### Principle: Audio Tells a Story

Sound is the primary information channel. The player should be able to close their eyes and still feel progress:

**Rotation soundscape:**
- Coins shift like pebbles in a jar — many small coins = high-pitched tinkling, few heavy coins = low clunking
- As coins approach the slot: tone brightens, frequency increases, like a Geiger counter
- Past the sweet spot: tone dulls, frequency drops — "you went too far"
- Full rotation with nothing near the slot: near-silence, just wood creaking

**Shake soundscape:**
- Each shake = a burst of coin rattling
- Pitch/volume scales with how many coins are "loose" near the slot
- Empty shakes (nothing near slot) = dull thud, chest sounds hollow
- Near-miss shakes (close but not telegraphed) = promising rattle, coins almost fell

**Coin-out moment:**
- Distinct per coin type: copper = chunky thud, silver = bright ring, gold = resonant bell
- Layered with a universal "success" tone (slot sound)
- Brief silence after (~200ms) before the world resumes — lets the reward breathe

### Principle: The Mimic Breathes

Even when the player does nothing, the mimic is alive:
- Subtle idle animation: chest rises/falls slightly (breathing)
- Occasional unprompted sounds: a grumble, a sigh, teeth clicking
- Eyes blink, drift, refocus on the player
- This ambient life makes the telegraphs feel like involuntary reactions, not mechanical signals

### Principle: Escalation Through Feel

Combos don't just change a number — they change the *texture* of the game:
- **1x**: Normal — standard shake, standard reward
- **2x**: Slightly faster response, brighter coin sound, small screen pulse
- **3x**: Shake feels more violent, coin flies out faster, environment reacts (candles flare)
- **5x+**: Everything intensifies — rapid-fire coins, screen vibrating, audio layering into a crescendo, the mimic visibly panicking
- **Combo break**: Everything snaps back to calm. The contrast is the punishment.

## Why It Works

Same principles as the classic water ring toss game:
- Simple action, indirect control
- Apparent physics (faked, but feels weighty and unpredictable)
- Clear goal, hard to achieve
- "Almost!" moments that keep you trying
- Satisfying when it finally works
- No pressure, play at your own pace (until F2P kicks in)

The two-hand control adds embodiment — you're physically holding the chest. The dungeon wrapper adds purpose and progression.

---

## Guide / Manual

In-universe zine styled as an adventurer's field guide: "So You've Found a Mimic: A Handbook for Treasure Extraction." Framed as guild-issued documentation for handling mimics, with the telegraph system presented as "tells" the creature can't hide. Potential for handwritten margin notes, safety disclaimers, anatomical diagrams.

Cover: illustration of a chest, elegant cursive beneath — *"Ceci n'est pas un coffre"*

Tone references: Terry Pratchett (deadpan footnotes, bureaucratic absurdity) + Dungeon Meshi (practical monster ecology, treating fantasy creatures as real biology)

---

*SUNDUK: Shake the loot.*
