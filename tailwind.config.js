/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        warmBg: '#F5F1EB',
        warmSection: '#EFE7DC',
        secondaryBg: '#EFE7DC',
        cardBg: '#EAE3D9',
        accent: '#C8A97E',
        secondaryAccent: '#BFA181',
        gold: '#C8A97E',
        softGold: '#D4B08A',
        richBlack: '#2C2C2C',
        textPrimary: '#2C2C2C',
        textSecondary: '#6B6B6B',
      },
      fontFamily: {
        playfair: ['Playfair Display', 'serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

