# MedSync Landing Page

A fast, SEO-optimized landing page for MedSync - a healthcare app that helps patients manage prescriptions, appointments, and reminders.

## Features

- 🚀 **Fast Performance** - Built with Next.js 15 and optimized for speed
- 📱 **Responsive Design** - Mobile-first approach with Tailwind CSS
- 🎨 **Modern UI** - Beautiful components using shadcn/ui
- 📧 **Contact Form** - Working contact form with Resend email integration
- 🔍 **SEO Optimized** - Proper metadata and structured content
- 📄 **Multiple Pages** - Home, About, Features, Pricing, FAQ, and Contact

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Forms**: React Hook Form + Zod validation
- **Email**: Resend
- **Deployment**: Vercel (recommended)

## Getting Started

### Prerequisites

- Node.js 18+ 
- pnpm (recommended) or npm

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   pnpm install
   ```

3. Copy environment variables:
   ```bash
   cp env.example .env.local
   ```

4. Update `.env.local` with your configuration:
   ```env
   NEXT_PUBLIC_SITE_URL=http://localhost:3000
   RESEND_API_KEY=your_resend_api_key_here
   ```

5. Run the development server:
   ```bash
   pnpm dev
   ```

6. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── api/              # API routes
│   ├── about/            # About page
│   ├── contact/          # Contact page
│   ├── features/         # Features page
│   ├── pricing/          # Pricing page
│   ├── faq/              # FAQ page
│   ├── globals.css       # Global styles
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Home page
├── components/            # React components
│   ├── ui/               # shadcn/ui components
│   ├── NavBar.tsx        # Navigation component
│   ├── Hero.tsx          # Hero section
│   ├── FeatureGrid.tsx   # Features grid
│   ├── HowItWorks.tsx    # How it works section
│   ├── Pricing.tsx       # Pricing section
│   ├── Testimonials.tsx  # Testimonials
│   ├── FAQ.tsx           # FAQ section
│   └── Footer.tsx        # Footer component
└── data/                 # Content data
    └── landing.ts        # Landing page content
```

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Set environment variables in Vercel dashboard
4. Deploy automatically on push

### Other Platforms

The project can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `NEXT_PUBLIC_SITE_URL` | Your site's URL | Yes |
| `RESEND_API_KEY` | Resend API key for email | Yes |
| `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` | Plausible analytics domain | No |

## Customization

### Content

Update the content in `src/data/landing.ts` to match your business needs.

### Styling

Modify `src/app/globals.css` and component styles to match your brand colors and design preferences.

### Components

All components are modular and can be easily modified or extended in the `src/components/` directory.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

## Support

For support or questions, please contact the development team or create an issue in the repository.
