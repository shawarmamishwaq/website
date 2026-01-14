# How to Add Your Google Maps Location

## Step-by-Step Instructions

### Method 1: Get Embed Code from Google Maps (Easiest - No API Key Required)

1. **Open Google Maps** in your browser
   - Go to: https://www.google.com/maps

2. **Search for your restaurant location**
   - Type: "Shawarma Mishwaq" or your exact address in Muscat, Oman
   - Click on your location when it appears

3. **Get the embed code**
   - Click the **"Share"** button (or the three dots menu)
   - Select **"Embed a map"** tab
   - Choose your map size (Medium is recommended)
   - Click **"Copy HTML"**

4. **Update your website**
   - Open `index.html`
   - Find the `<iframe>` tag in the location section (around line 203)
   - Replace the `src` attribute with your copied embed URL

### Method 2: Create Custom Embed URL

If you know your exact coordinates or address:

1. **Get your coordinates** (latitude, longitude)
   - Right-click on your location in Google Maps
   - Click the coordinates to copy them (e.g., `23.6139, 58.5922`)

2. **Create embed URL**
   ```
   https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d[ZOOM]!2d[LONGITUDE]!3d[LATITUDE]!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z[COORDINATES]!5e0!3m2!1sen!2som!4v[TIMESTAMP]!5m2!1sen!2som
   ```

3. **Or use the simple search method**:
   ```
   https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=Shawarma+Mishwaq+Muscat+Oman
   ```
   (This requires a Google Maps API key - see Method 3)

### Method 3: Using Google Maps JavaScript API (Advanced - More Control)

If you want interactive features like custom markers, directions, etc.:

1. **Get a Google Maps API Key**
   - Go to: https://console.cloud.google.com/
   - Create a new project or select existing
   - Enable "Maps Embed API" and "Maps JavaScript API"
   - Create credentials → API Key
   - Restrict the API key to your domain (recommended)

2. **Add the API script to your HTML**
   ```html
   <script async defer src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap"></script>
   ```

3. **Add JavaScript to initialize the map**
   ```javascript
   function initMap() {
     const location = { lat: 23.6139, lng: 58.5922 }; // Your coordinates
     const map = new google.maps.Map(document.getElementById("map"), {
       zoom: 15,
       center: location,
     });
     const marker = new google.maps.Marker({
       position: location,
       map: map,
     });
   }
   ```

## Current Implementation

The website currently uses **Method 1** (iframe embed) which is the simplest and doesn't require an API key.

### To Update Your Location:

1. Get your embed code from Google Maps (see Method 1 above)
2. Open `index.html`
3. Find this line (around line 203):
   ```html
   <iframe src="https://www.google.com/maps/embed?pb=..." ...></iframe>
   ```
4. Replace the `src` URL with your actual embed code URL
5. Also update the "Open in Google Maps" button link:
   ```html
   <a href="https://www.google.com/maps/search/?api=1&query=YOUR+EXACT+ADDRESS" ...>
   ```

## Example: Complete Location Section

After updating, your location section should look like this:

```html
<div class="map-card">
  <div class="map-container">
    <iframe
      src="YOUR_GOOGLE_MAPS_EMBED_URL_HERE"
      width="100%"
      height="300"
      style="border:0;"
      allowfullscreen=""
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
      title="Shawarma Mishwaq Location"
    ></iframe>
  </div>
  <a
    href="https://www.google.com/maps/search/?api=1&query=Shawarma+Mishwaq+Muscat+Oman"
    class="btn full-width"
    target="_blank"
    rel="noopener"
    data-i18n="mapButton"
  >
    Open in Google Maps
  </a>
</div>
```

## Tips

- ✅ The iframe method (Method 1) works immediately - no setup needed
- ✅ Make sure your location is searchable on Google Maps first
- ✅ Test the embed URL in a new browser tab before adding to your site
- ✅ The map is responsive and will work on mobile devices
- ✅ Update both the iframe `src` and the button `href` for consistency

## Need Help?

If you're having trouble:
1. Make sure your business is listed on Google Maps
2. Verify the address is correct
3. Try searching for your location in Google Maps first
4. Use the "Share" → "Embed a map" option for the easiest setup
