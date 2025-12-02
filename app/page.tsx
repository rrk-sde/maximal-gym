import Hero from "./components/sections/Hero";
import Stats from "./components/sections/Stats";
import Goals from "./components/sections/Goals";
import Levels from "./components/sections/Levels";
import Workouts from "./components/sections/Workouts";
import Team from "./components/sections/Team";
import Testimonials from "./components/sections/Testimonials";
import FAQ from "./components/sections/FAQ";
import Footer from "./components/sections/Footer";
import Header from "./components/layout/Header";

export default function HomePage() {
    return (
        <main className="min-h-screen bg-[rgb(var(--background))]">
            <Header />
            <Hero />
            <Stats />
            <Goals />
            <Levels />
            <Workouts />
            <Team />
            <Testimonials />
            <FAQ />
            <Footer />
        </main>
    );
}
