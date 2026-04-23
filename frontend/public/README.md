# Custom Timber Buildings - Pure HTML/CSS/JS Website

## 📁 Project Structure

```
/app/frontend/public/
│
├── index.html              # Homepage
├── contact.html            # Contact form page
├── sheds.html             # Garden sheds page
├── garages.html           # (Create similar to sheds.html)
├── stables.html           # (Create similar to sheds.html)
├── field-shelters.html    # (Create similar to sheds.html)
├── garden-rooms.html      # (Create similar to sheds.html)
├── summer-houses.html     # (Create similar to sheds.html)
├── workshops.html         # (Create similar to sheds.html)
├── beach-huts.html        # (Create similar to sheds.html)
├── gallery.html           # (Create gallery page)
│
├── css/
│   └── styles.css         # All CSS styles
│
└── js/
    └── script.js          # All JavaScript functions
```

## ✅ Completed Files

1. **index.html** - Full homepage with:
   - Hero section
   - Features bar
   - About section
   - Products grid (8 products)
   - Why custom section
   - Customer reviews
   - CTA section
   - Footer

2. **contact.html** - Contact page with:
   - Contact information cards
   - Working contact form (mock submission)
   - Business hours
   - Why choose us section

3. **sheds.html** - Product page template

4. **css/styles.css** - Complete stylesheet with:
   - Header & navigation (responsive)
   - Hero sections
   - Product cards
   - Forms
   - Footer
   - Mobile menu
   - All responsive breakpoints

5. **js/script.js** - JavaScript functionality:
   - Mobile menu toggle
   - Contact form submission
   - Notification system
   - Smooth scrolling

## 🎨 Design Features

- **Color Scheme:**
  - Dark Green: #2d5016
  - Lime Green: #8fbe00
  - White & Gray accents

- **Layout:**
  - Sticky header with navigation
  - Responsive grid system
  - Mobile-first design
  - Smooth transitions

- **Components:**
  - Product cards with hover effects
  - Contact form with validation
  - Review cards
  - Feature lists with checkmarks
  - CTA buttons

## 🚀 How to Use

### Option 1: Open Directly
Just open `index.html` in any web browser

### Option 2: Local Server (Recommended)
```bash
cd /app/frontend/public
python3 -m http.server 8000
```
Then visit: http://localhost:8000

### Option 3: Deploy
Upload all files to any web host:
- Keep folder structure intact
- Upload css/ and js/ folders
- Upload all .html files

## 📝 To Complete Remaining Pages

Each product page (garages, stables, etc.) should follow the same structure as `sheds.html`:

1. Copy sheds.html
2. Change the title and hero image
3. Update the h1 and description
4. Modify the content section text
5. Keep the same header and footer

## 🖼️ Images Used

All images from Unsplash (free to use):
- Timber buildings
- Workshops
- Stables
- Garages
- Garden structures

## 📱 Mobile Responsive

- Mobile menu toggle
- Responsive grid layouts
- Touch-friendly buttons
- Optimized for all screen sizes

## ✨ Features

✅ Pure HTML/CSS/JS (no frameworks)
✅ Fully responsive design
✅ Working contact form (frontend)
✅ Mobile navigation
✅ Smooth animations
✅ SEO-friendly structure
✅ Fast loading
✅ Easy to customize

## 🔧 Customization

### Change Colors:
Edit `css/styles.css` and find:
- `#2d5016` (dark green)
- `#8fbe00` (lime green)

### Add More Pages:
1. Copy an existing page
2. Update content
3. Add link to navigation menu

### Modify Form:
Edit `contact.html` form fields and
Update `handleContactSubmit()` in `js/script.js`

## 📞 Contact Information

- Phone: 01935 891195
- Email: info@customtimberbuildings.co.uk
- Location: Yeovil, Somerset, UK

---

**Note:** All form submissions are currently MOCKED (frontend only). To make them functional, you'll need to add backend processing (PHP, Node.js, or similar).
