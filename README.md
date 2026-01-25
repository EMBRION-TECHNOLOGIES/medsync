# TeraSync Landing Page

A modern, responsive landing page for TeraSync - a healthcare management app that helps patients stay on track with medications, appointments, and health records.

## 🚀 Features

- **Responsive Design** - Mobile-first approach with Tailwind CSS
- **Modern UI** - Built with shadcn/ui components
- **SEO Optimized** - Complete meta tags, sitemap, and robots.txt
- **Contact Form** - Working contact form with Resend integration
- **Analytics Ready** - Plausible analytics integration
- **Cookie Compliance** - GDPR-compliant cookie banner
- **Blog System** - Complete blog with articles
- **App Store Integration** - Dynamic download links

## 📁 Project Structure

```
terasync/
├── src/
│   ├── app/                 # Next.js App Router pages
│   │   ├── about/          # About page
│   │   ├── blog/           # Blog system
│   │   ├── contact/        # Contact page
│   │   ├── features/       # Features page
│   │   ├── faq/           # FAQ page
│   │   ├── pricing/       # Pricing page
│   │   └── api/           # API routes
│   ├── components/         # React components
│   │   ├── ui/            # shadcn/ui components
│   │   ├── Analytics.tsx  # Analytics integration
│   │   ├── CookieBanner.tsx # Cookie compliance
│   │   ├── DownloadButtons.tsx # App store links
│   │   └── ...            # Other components
│   └── data/              # Content data
└── public/                # Static assets
```

## 🛠 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Email**: Resend
- **Analytics**: Plausible
- **Deployment**: Vercel (recommended)

## ⚙️ Environment Variables

Create a `.env.local` file with the following variables:

```env
# Site Configuration
NEXT_PUBLIC_SITE_URL=http://localhost:4000

# Email Service (Resend)
RESEND_API_KEY=your_resend_api_key_here

# Analytics (Optional)
NEXT_PUBLIC_PLAUSIBLE_DOMAIN=your_domain_here

# App Store Links (Optional)
NEXT_PUBLIC_APP_STORE_URL=https://apps.apple.com/app/terasync
NEXT_PUBLIC_GOOGLE_PLAY_URL=https://play.google.com/store/apps/details?id=com.terasync.app
```

## 🚀 Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   # or
   pnpm install
   # or
   yarn install
   ```

2. **Set up environment variables**:
   ```bash
   cp env.example .env.local
   # Edit .env.local with your actual values
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   # or
   pnpm dev
   # or
   yarn dev
   ```

4. **Open your browser**:
   Navigate to [http://localhost:4000](http://localhost:4000)

## 📧 Email Configuration

The contact form uses Resend for email delivery:

1. Sign up at [resend.com](https://resend.com)
2. Get your API key
3. Add it to your `.env.local` file
4. Update the email addresses in `src/app/api/contact/route.ts`

## 📊 Analytics Setup

Plausible analytics is integrated but optional:

1. Sign up at [plausible.io](https://plausible.io)
2. Add your domain to the `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` environment variable
3. Analytics will automatically start tracking

## 🍪 Cookie Compliance

The site includes a GDPR-compliant cookie banner that:
- Shows on first visit
- Remembers user preferences
- Links to privacy policy
- Complies with EU regulations

## 📱 App Store Integration

Download buttons automatically adapt based on environment variables:
- If `NEXT_PUBLIC_APP_STORE_URL` is set, shows iOS download button
- If `NEXT_PUBLIC_GOOGLE_PLAY_URL` is set, shows Android download button
- Falls back to contact form if no URLs are configured

## 📝 Blog System

The blog system includes:
- Blog index page (`/blog`)
- Individual blog posts (`/blog/[slug]`)
- SEO-optimized metadata
- Responsive design
- Easy content management

## 🎨 Customization

### Colors
The app uses a custom color scheme defined in `tailwind.config.js`:
- `ms-blue`: Primary blue color
- `ms-green`: Secondary green color

### Content
All content is managed in `src/data/landing.ts` for easy updates.

### Components
Components are built with shadcn/ui and can be customized in `src/components/ui/`.

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy automatically

### Other Platforms
The app can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 📈 Performance

The app is optimized for performance with:
- Static generation where possible
- Image optimization
- Font optimization
- Minimal JavaScript bundle
- SEO best practices

## 🔧 Development

### Adding New Pages
1. Create a new folder in `src/app/`
2. Add a `page.tsx` file
3. Update navigation in `src/data/landing.ts`
4. Add to sitemap in `src/app/sitemap.ts`

### Adding New Components
1. Create component in `src/components/`
2. Export from component file
3. Import where needed

### Styling
- Use Tailwind CSS classes
- Follow the design system in `src/data/landing.ts`
- Use shadcn/ui components when possible

## 📄 License

This project is licensed under the MIT License.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📞 Support

For support or questions:
- Email: support@terasync.com
- Website: [terasync.app](https://terasync.app)

---

Built with ❤️ for better healthcare management.