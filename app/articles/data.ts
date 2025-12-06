export interface Article {
    id: number;
    title: string;
    excerpt: string;
    category: string;
    author: string;
    date: string;
    readTime: string;
    image: string;
    slug: string;
    content?: string;
}

export const articles: Article[] = [
    {
        id: 1,
        title: "The Ultimate Guide to Strength Training",
        excerpt: "Learn the fundamentals of building muscle and increasing strength with our comprehensive guide for beginners.",
        category: "workout",
        author: "Vikram Singh",
        date: "Dec 5, 2024",
        readTime: "8 min read",
        image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80",
        slug: "ultimate-guide-strength-training",
        content: `
            <p>Strength training is one of the most effective ways to improve your overall health and fitness. Whether you're looking to build muscle, lose weight, or simply feel stronger in your daily life, incorporating resistance training into your routine is essential.</p>
            
            <h2>Why Strength Training Matters</h2>
            <p>Building lean muscle mass helps increase your metabolism, meaning you burn more calories even at rest. It also improves bone density, joint health, and posture.</p>

            <h2>Getting Started</h2>
            <p>If you're new to lifting weights, start with compound movements like squats, deadlifts, bench presses, and overhead presses. These exercises work multiple muscle groups simultaneously, giving you the most bang for your buck.</p>
            
            <h2>Consistency is Key</h2>
            <p>Aim for 3-4 strength training sessions per week. Focus on progressive overload – gradually increasing the weight, reps, or sets over time to challenge your muscles.</p>
        `
    },
    {
        id: 2,
        title: "Nutrition Myths Debunked",
        excerpt: "Separating fact from fiction: What you really need to know about protein, carbs, and fats.",
        category: "nutrition",
        author: "Sarah Jones",
        date: "Dec 3, 2024",
        readTime: "5 min read",
        image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&q=80",
        slug: "nutrition-myths-debunked",
        content: `
            <p>There is so much conflicting information out there about nutrition. Let's clear up some common misconceptions.</p>
            
            <h2>Myth 1: Carbs make you fat</h2>
            <p>Carbohydiates are your body's primary energy source. It's not carbs that make you gain weight, it's eating more calories than you burn. Focus on complex carbs like whole grains, fruits, and vegetables.</p>
            
            <h2>Myth 2: You need huge amounts of protein</h2>
            <p>While protein is improved for muscle repair, most people get enough from a balanced diet. Aim for 1.6-2.2g of protein per kg of body weight if you are training intensely.</p>
        `
    },
    {
        id: 3,
        title: "Importance of Sleep for Recovery",
        excerpt: "Why getting quality sleep is just as important as your workout routine for maximum gains.",
        category: "recovery",
        author: "Dr. Alex Chen",
        date: "Nov 28, 2024",
        readTime: "6 min read",
        image: "https://images.unsplash.com/photo-1541781777-c30029cf8291?w=800&q=80",
        slug: "importance-of-sleep",
        content: `
            <p>You hit the gym hard, nourish your body, but are you sleeping enough? Sleep is when your body repairs itself.</p>
            
            <h2>The Science of Sleep and Muscle Growth</h2>
            <p>During deep sleep, your body releases growth hormone, which is crucial for muscle recovery and repair. Lack of sleep can increase cortisol levels, leading to muscle breakdown.</p>
            
            <h2>Tips for Better Sleep</h2>
            <ul>
                <li>Stick to a consistent sleep schedule.</li>
                <li>Create a relaxing bedtime routine.</li>
                <li>Avoid screens before bed.</li>
                <li>Keep your bedroom cool and dark.</li>
            </ul>
        `
    },
    {
        id: 4,
        title: "Yoga for Weightlifters",
        excerpt: "How incorporating yoga into your routine can improve flexibility and prevent injuries.",
        category: "workout",
        author: "Priya Patel",
        date: "Nov 25, 2024",
        readTime: "7 min read",
        image: "https://images.unsplash.com/photo-1599447421405-0c1741427447?w=800&q=80",
        slug: "yoga-for-weightlifters",
        content: `
            <p>Many weightlifters neglect flexibility, leading to stiffness and limited range of motion. Yoga is the perfect complement to heavy lifting.</p>
            
            <h2>Benefits of Yoga</h2>
            <p>Yoga improves mobility, which allows you to perform exercises with better form. It also speeds up recovery by increasing blood flow to muscles.</p>
            
            <h2>Key Poses for Lifters</h2>
            <p>Try incorporating Downward Dog, Pigeon Pose, and Cat-Cow into your post-workout routine to stretch tight muscles.</p>
        `
    },
    {
        id: 5,
        title: "Healthy Meal Prep Ideas",
        excerpt: "Save time and eat healthy with these delicious and easy high-protein meal prep recipes.",
        category: "nutrition",
        author: "Sarah Jones",
        date: "Nov 20, 2024",
        readTime: "10 min read",
        image: "https://images.unsplash.com/photo-1543355520-380152eb1bea?w=800&q=80",
        slug: "healthy-meal-prep",
        content: `
            <p>Meal prep is the secret weapon for staying on track with your nutrition goals. Here are some easy ideas.</p>
            
            <h2>Chicken and Roasted Veggies</h2>
            <p>Sheet pan meals are a lifesaver. Toss chicken breast, broccoli, bell peppers, and sweet potatoes in olive oil and spices, then roast until cooked.</p>
            
            <h2>Overnight Oats</h2>
            <p>Combine oats, protein powder, chia seeds, and almond milk in a jar. Let it sit overnight for a quick and nutritious breakfast.</p>
        `
    },
    {
        id: 6,
        title: "Mental Toughness in Sports",
        excerpt: "Strategies to build mental resilience and push through physical barriers during training.",
        category: "lifestyle",
        author: "Coach Arjun",
        date: "Nov 15, 2024",
        readTime: "4 min read",
        image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=80",
        slug: "mental-toughness",
        content: `
            <p>Your mind gives up before your body does. Training your brain is just as important as training your muscles.</p>
            
            <h2>Visualization</h2>
            <p>Visualize yourself succeeding in your workouts. See yourself lifting that heavy weight or finishing that run.</p>
            
            <h2>Positive Self-Talk</h2>
            <p>Replace negative thoughts with positive affirmations. Instead of "I can't," tell yourself "I am strong, I can do this."</p>
        `
    }
];
