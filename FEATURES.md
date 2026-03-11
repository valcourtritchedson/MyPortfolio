# Portfolio - Theme Toggle & Mobile Menu Implementation

## Features Implemented

### 1. **Light/Dark Theme Toggle**
- **Toggle Button**: Located in the navbar with moon/sun icons (Font Awesome)
- **Theme Persistence**: Uses localStorage to remember user preference
- **System Preference Detection**: Automatically detects system dark mode preference
- **Smooth Transitions**: All elements transition smoothly between themes (0.3s)
- **Color Variables**: CSS variables automatically update for all colors

#### Dark Theme Colors:
- **Primary**: `#5a9fff` (lighter blue)
- **Secondary**: `#e0e6f2` (light text)
- **Background**: `#0f1419` (dark)
- **Cards**: `#1a1f2e` (dark card)
- **Text**: `#e0e0e0` (light gray)
- **Accent**: `#00d4ff` (cyan - stays same)

#### Light Theme Colors:
- **Primary**: `#3c7cff` (blue)
- **Secondary**: `#1c2f5a` (dark text)
- **Background**: `#f8f9fa` (light)
- **Cards**: `#ffffff` (white)
- **Text**: `#2c2c2c` (dark gray)

### 2. **Mobile Responsive Menu**
- **Menu Button**: Circular button with hamburger icon (Font Awesome)
- **Visibility**: Only visible on screens ≤ 768px width
- **Slide-in Animation**: Mobile menu slides in from the right
- **Blur Overlay**: Content blurs out when menu is open
- **Close Options**:
  - Click the close button (X icon) in menu
  - Click on overlay
  - Click any navigation link
  - Press ESC key
- **Body Scroll Lock**: Prevents scrolling while menu is open

#### Mobile Menu Structure:
- Fixed position (right: -100% to right: 0)
- Width: 80% (max 300px)
- Height: 100vh (full viewport height)
- Flexible column layout (gap: 30px)
- Smooth transitions (0.3s ease)

### 3. **Professional Icons (Font Awesome)**
Replaced all emojis with professional Font Awesome icons:
- **Skills**:
  - Networks: `fa-globe`
  - Cybersecurity: `fa-shield-alt`
  - Web: `fa-code`
  - Linux: `fa-terminal`
- **Contact**:
  - Email: `fa-envelope`
  - Phone: `fa-phone`
- **Navigation**:
  - Menu: `fa-bars`
  - Close: `fa-times`
  - Theme: `fa-moon` / `fa-sun`

### 4. **JavaScript Functions**

#### Theme Management:
```javascript
initializeTheme()      // Sets theme on page load
setTheme(theme)        // Sets theme to 'light' or 'dark'
toggleTheme()          // Toggles between themes
```

#### Mobile Menu:
```javascript
openMenu()             // Opens mobile menu
closeMenu()            // Closes mobile menu
```

#### Auto-Close Triggers:
- Overlay click
- Close button click
- Navigation link click
- ESC key press

### 5. **CSS Updates**

#### New Selectors:
- `[data-theme="dark"]` - For dark theme styles
- `.menu-overlay` - Blur overlay backdrop
- `.menu-overlay.active` - Active overlay state
- `.theme-toggle` - Theme toggle button
- `.close-btn` - Close button in mobile menu

#### Animations:
- Theme icon rotation (360deg on toggle)
- Close button rotation on hover (90deg)
- Smooth color transitions
- Overlay fade in/out

## File Structure

```
MyPortfolio/
├── index.html         (Updated with Font Awesome, IDs, close button)
├── style.css          (Dark theme, mobile menu, overlay styles)
├── script.js          (Complete theme & menu logic)
├── images/
│   └── profil.jpeg    (Your profile picture)
└── README.md          (This file)
```

## How It Works

### Theme Toggle:
1. User clicks moon icon in navbar
2. JavaScript checks current theme
3. Switches to dark/light mode
4. Updates HTML data-theme attribute
5. CSS applies appropriate colors
6. Saves preference to localStorage

### Mobile Menu:
1. User clicks hamburger icon
2. Menu slides in from right (animation)
3. Overlay appears with blur effect
4. Body scroll is locked
5. User can close menu by:
   - Clicking X button
   - Clicking overlay
   - Clicking a link
   - Pressing ESC
6. Menu slides out, overlay disappears
7. Body scroll is unlocked

## Browser Compatibility

- Modern browsers (Chrome, Firefox, Safari, Edge)
- LocalStorage API support required
- CSS Grid and Flexbox support
- CSS Variables support
- CSS backdrop-filter support (for blur effect)

## Responsive Breakpoints

- **Desktop**: 768px and above
  - Menu button hidden
  - Navigation links visible horizontally
  - Normal layout

- **Tablet**: 600px - 768px
  - Menu button visible
  - Navigation slides in vertically
  - Adjusted font sizes

- **Mobile**: Below 600px
  - Smaller icons (40px)
  - Smaller profile picture (120px)
  - Adjusted spacing

## Customization

### Change Theme Colors:
Edit the `:root` and `[data-theme="dark"]` selectors in `style.css`

### Change Menu Animation:
Modify `transition: right 0.3s ease` in `.nav-links` media query

### Change Blur Effect:
Adjust `backdrop-filter: blur(5px)` in `.menu-overlay`

### Change Menu Width:
Update `max-width: 300px` in mobile media query

## Performance Optimizations

- Minimal repaints with CSS transitions
- Efficient event delegation
- LocalStorage instead of server calls
- Smooth 60fps animations
- No unnecessary DOM manipulations

## Accessibility Features

- Semantic HTML5
- ARIA labels on buttons
- Keyboard support (ESC to close menu)
- Focus management
- High contrast in both themes
- Font Awesome icons with proper fallbacks

---

Your portfolio is now fully equipped with a professional light/dark theme toggle and responsive mobile menu!
