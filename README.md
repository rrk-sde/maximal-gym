# Maximal Gym - Fitness Management System

A modern, premium gym management system built with Next.js 16, featuring a stunning dark theme landing page and comprehensive admin panel.

## 🚀 Features

### Landing Page
- **Hero Section** - Eye-catching headline with gradient text and floating stats cards
- **Stats Section** - Key metrics display with icons
- **Goals Section** - Feature showcase with image grid
- **Levels Section** - Three-tier membership programs (Beginner, Intermediate, Advanced)
- **Workouts Section** - Gamification features with interactive elements
- **Team Section** - Trainer profiles with hover effects
- **Testimonials** - Member reviews with ratings
- **FAQ** - Interactive accordion for common questions
- **Footer** - Comprehensive footer with CTA, links, and contact info

### Admin Panel
- **Dashboard** - Overview with key statistics
- **Members Management** - Track and manage gym members
- **Classes Management** - Schedule and organize classes
- **Trainers Management** - Manage trainer profiles and schedules
- **Settings** - Configure gym preferences
- **Responsive Sidebar** - Mobile-friendly navigation
- **Breadcrumb Navigation** - Easy navigation tracking

## 🎨 Design

- **Color Scheme**: Dark theme with vibrant orange (#FF4D00) accents
- **Typography**: Inter font family for modern, clean text
- **Animations**: Smooth fade-in, slide-in, and scale effects
- **Glass Effects**: Modern glassmorphism for cards and overlays
- **Responsive**: Fully responsive on all device sizes

## 🛠️ Tech Stack

- **Framework**: Next.js 16.0.1
- **React**: 19.2.0
- **TypeScript**: Type-safe development
- **Styling**: Tailwind CSS 4
- **State Management**: Redux Toolkit
- **UI Components**: Radix UI primitives
- **Icons**: Lucide React
- **Notifications**: Sonner
- **Tables**: TanStack React Table

## 📦 Installation

\`\`\`bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
\`\`\`

## 🌐 URLs

- **Landing Page**: http://localhost:3000
- **Admin Panel**: http://localhost:3000/admin

## 📁 Project Structure

\`\`\`
maximal-gym/
├── app/
│   ├── admin/               # Admin panel
│   │   ├── layout.tsx       # Admin layout with sidebar
│   │   └── page.tsx         # Admin dashboard
│   ├── components/
│   │   ├── admin/           # Admin components
│   │   │   ├── Sidebar.tsx
│   │   │   └── Topbar.tsx
│   │   ├── layout/          # Layout components
│   │   │   └── Header.tsx
│   │   └── sections/        # Landing page sections
│   │       ├── Hero.tsx
│   │       ├── Stats.tsx
│   │       ├── Goals.tsx
│   │       ├── Levels.tsx
│   │       ├── Workouts.tsx
│   │       ├── Team.tsx
│   │       ├── Testimonials.tsx
│   │       ├── FAQ.tsx
│   │       └── Footer.tsx
│   ├── store/               # Redux store
│   │   └── storeProvider.tsx
│   ├── globals.css          # Global styles and theme
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Landing page
├── public/                  # Static assets
├── package.json
├── tsconfig.json
└── next.config.ts
\`\`\`

## 🎯 Key Features Implemented

### Landing Page
- ✅ Fixed header with navigation
- ✅ Dark theme with orange accents
- ✅ Gradient text effects
- ✅ Glass morphism cards
- ✅ Hover lift animations
- ✅ Responsive design
- ✅ Mobile menu
- ✅ Interactive FAQ accordion
- ✅ Social media links
- ✅ CTA sections

### Admin Panel  
- ✅ Sidebar navigation (inspired by Prepca-Blog)
- ✅ Topbar with breadcrumbs
- ✅ Responsive mobile sidebar
- ✅ Dashboard with stats
- ✅ User badge display
- ✅ Logout functionality
- ✅ Clean, professional design

## 🔧 Customization

### Colors
Edit `app/globals.css` to change the orange accent color:
\`\`\`css
--primary: 255 77 0; /* Change to your brand color in RGB */
\`\`\`

### Content
- Update trainer profiles in `app/components/sections/Team.tsx`
- Modify membership levels in `app/components/sections/Levels.tsx`
- Customize FAQ questions in `app/components/sections/FAQ.tsx`

## 📝 Notes

- This project uses the same architecture as Prepca-Blog for consistency
- Admin panel structure is ready for backend integration
- Redux store is configured for state management
- All images are from Unsplash (replace with your own)

## 🚀 Next Steps

1. **Backend Integration**: Connect to your API
2. **Authentication**: Add login/register functionality
3. **Database**: Set up database for members, trainers, classes
4. **Payment**: Integrate payment gateway for memberships
5. **Analytics**: Add dashboard analytics and charts
6. **Notifications**: Implement real-time notifications

## 📄 License

MIT License - feel free to use this for your gym project!

---

Built with ❤️ using Next.js and Tailwind CSS
# maximal-gym
