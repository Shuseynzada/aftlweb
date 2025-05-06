# AFTL Shipping Website

A modern, responsive website for AFTL Shipping, showcasing their maritime shipping services, company information, and career opportunities.

## Features

- Responsive design optimized for all devices
- Modern UI with smooth animations
- SEO-friendly structure
- Contact form for inquiries
- Interactive careers page with video integration
- Detailed services information
- Company information and compliance details

## Tech Stack

- Next.js 13+ (React Framework)
- TypeScript
- CSS Modules
- Modern CSS (Flexbox, Grid, Custom Properties)
- Responsive Images and Videos
- SEO Optimization

## Prerequisites

- Node.js 16.8 or later
- npm or yarn package manager

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/your-username/aftl-shipping.git
cd aftl-shipping
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Create a `.env.local` file in the root directory and add any necessary environment variables:
```env
NEXT_PUBLIC_CONTACT_EMAIL=info@aftlshipping.com
```

4. Run the development server:
```bash
npm run dev
# or
yarn dev
```

5. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
aftl-shipping/
├── src/
│   ├── app/                 # Next.js 13 app directory
│   │   ├── page.tsx        # Homepage
│   │   ├── services/       # Services page
│   │   ├── careers/        # Careers page
│   │   └── contact/        # Contact page
│   ├── components/         # Reusable components
│   └── styles/            # Global styles and CSS modules
├── public/                # Static assets
│   ├── images/
│   └── videos/
└── package.json
```

## Deployment

The website can be deployed to any hosting platform that supports Next.js applications. We recommend using Vercel for the best experience:

1. Push your code to a GitHub repository
2. Connect your repository to Vercel
3. Vercel will automatically deploy your website

## Contributing

1. Fork the repository
2. Create a new branch
3. Make your changes
4. Submit a pull request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

For any inquiries about the website, please contact:
- Email: info@aftlshipping.com
- Phone: [Your contact number]
