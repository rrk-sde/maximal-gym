import Hero from "./components/sections/Hero";
import Stats from "./components/sections/Stats";
import Goals from "./components/sections/Goals";
import Levels from "./components/sections/Levels";
import Workouts from "./components/sections/Workouts";
import Team from "./components/sections/Team";
import Testimonials from "./components/sections/Testimonials";
import Contact from "./components/sections/Contact";
import FAQ from "./components/sections/FAQ";
import MembershipPlans from "./components/sections/MembershipPlans";
import ClassSchedule from "./components/sections/ClassSchedule";

export default function HomePage() {
    return (
        <main className="min-h-screen">
            <Hero />
            <Stats />
            <Goals />
            <Levels />
            <MembershipPlans />
            <ClassSchedule />
            <Workouts />
            <Team />
            <Testimonials />
            <Contact />
            <FAQ />
        </main>
    );
}
