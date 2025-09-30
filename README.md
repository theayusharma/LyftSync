# LyftSync Website

A modern demo website for LyftSync - a peer-to-peer ride-sharing app designed for intra-city hitchhiking. Built with Next.js 14, TypeScript, Tailwind CSS, and shadcn/ui components.

## 🚗 About LyftSync

LyftSync connects everyday drivers and riders for casual, fuel-efficient, and community-driven travel within the city. The app focuses on:

- 👥 Real-time connections between drivers and riders
- 📍 Intra-city ride sharing
- 💬 In-app ride confirmations
- 🌱 Eco-friendly commuting and fuel-sharing

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Package Manager**: Bun
- **Deployment**: Ready for Vercel

## 🎨 Features

- **Modern Design**: Clean, responsive design with gradient backgrounds
- **Component Library**: Built with shadcn/ui for consistent styling
- **Centered Video Section**: Placeholder for demo video (easily replaceable)
- **Feature Showcase**: Highlight key app features with icons
- **Tech Stack Display**: Show the technologies used
- **Call-to-Action**: Encourage user engagement
- **Mobile Responsive**: Optimized for all device sizes

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ or Bun
- Git

### Installation

1. Clone the repository:
\`\`\`bash
git clone <repository-url>
cd lyftsyncWebsite
\`\`\`

2. Install dependencies:
\`\`\`bash
bun install
\`\`\`

3. Run the development server:
\`\`\`bash
bun run dev
\`\`\`

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📹 Adding Your Demo Video

To add your YouTube demo video:

1. Navigate to \`src/app/page.tsx\`
2. Find the "Demo Video Section" (around line 50)
3. Replace the placeholder content with your YouTube embed:

\`\`\`tsx
<iframe
  className="w-full h-full"
  src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
  title="LyftSync Demo"
  frameBorder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowFullScreen
/>
\`\`\`

## 🎯 Project Structure

\`\`\`
src/
├── app/
│   ├── globals.css      # Global styles with Tailwind and CSS variables
│   ├── layout.tsx       # Root layout component
│   └── page.tsx         # Main homepage component
├── components/
│   └── ui/
│       └── button.tsx   # shadcn/ui Button component
└── lib/
    └── utils.ts         # Utility functions (cn helper)
\`\`\`

## 🎨 Customization

### Colors and Theming

The website uses a modern color scheme with:
- Primary: Blue (#2563eb)
- Secondary: Green (#16a34a)
- Gradients: Blue to Green transitions

To customize colors, update the CSS variables in \`src/app/globals.css\`.

### Content Updates

- **Hero Section**: Update the main heading and description in \`src/app/page.tsx\`
- **Features**: Modify the features grid to highlight your app's capabilities
- **Tech Stack**: Update the technology information
- **Links**: Replace GitHub links and social media references

## 📱 Responsive Design

The website is fully responsive with:
- Mobile-first approach
- Flexible grid layouts
- Responsive typography
- Touch-friendly navigation

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms

The website is a standard Next.js app and can be deployed to:
- Netlify
- AWS Amplify
- Railway
- Render

## 🔗 Links

- [Original LyftSync Repository](https://github.com/theayusharma/lyftSync)
- [Next.js Documentation](https://nextjs.org/docs)
- [shadcn/ui Documentation](https://ui.shadcn.com)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---

Built with ❤️ for the LyftSync community