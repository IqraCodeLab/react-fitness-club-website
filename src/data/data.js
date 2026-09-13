export const img = (id, w = 1200) =>
  `https://images.unsplash.com/${id}?w=${w}&q=80&auto=format&fit=crop`;

export const brand = {
  name: 'IRONFORGE',
  full: 'IronForge Fitness',
  tagline: 'Forge Your Strongest Self',
  phone: '+92 300 1234567',
  email: 'info@ironforgefitness.com',
  address: '123 Fitness Avenue, Karachi, Pakistan',
  hours: 'Monday - Sunday · 5:00 AM - 12:00 AM',
  social: {
    facebook: '#',
    instagram: '#',
    twitter: '#',
    youtube: '#',
  },
};

export const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Programs', path: '/programs' },
  { name: 'Trainers', path: '/trainers' },
  { name: 'Membership', path: '/membership' },
  { name: 'Schedule', path: '/schedule' },
  { name: 'Blog', path: '/blog' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Contact', path: '/contact' },
];

export const stats = [
  { value: 10, suffix: '+', label: 'Years Experience' },
  { value: 25, suffix: 'K+', label: 'Happy Members' },
  { value: 40, suffix: '+', label: 'Expert Trainers' },
  { value: 50, suffix: '+', label: 'Weekly Classes' },
];

export const aboutStats = [
  { value: 12, suffix: '+', label: 'Years of Excellence' },
  { value: 25, suffix: 'K+', label: 'Active Members' },
  { value: 40, suffix: '+', label: 'Certified Trainers' },
  { value: 98, suffix: '%', label: 'Member Satisfaction' },
];

export const whyChooseUs = [
  {
    icon: 'award',
    title: 'Certified Trainers',
    text: 'Internationally certified coaches with years of hands-on experience guiding athletes of every level.',
  },
  {
    icon: 'equipment',
    title: 'Modern Equipment',
    text: 'Premium strength machines, free weights and cardio zones from the world’s leading brands.',
  },
  {
    icon: 'target',
    title: 'Personalized Programs',
    text: 'Every plan is built around your body, your goals and your schedule — never one-size-fits-all.',
  },
  {
    icon: 'card',
    title: 'Flexible Membership',
    text: 'Simple, transparent plans with no hidden fees. Pause, upgrade or cancel whenever you like.',
  },
  {
    icon: 'apple',
    title: 'Nutrition Guidance',
    text: 'Work with nutrition coaches to build eating habits that fuel performance and recovery.',
  },
  {
    icon: 'clock',
    title: '24/7 Gym Access',
    text: 'Forge ahead on your own time. Elite members enjoy round-the-clock access to the floor.',
  },
];

export const programCategories = ['All', 'Strength', 'Fitness', 'Specialized'];

export const programs = [
  {
    id: 'strength-training',
    category: 'Strength',
    title: 'Strength Training',
    icon: 'dumbbell',
    image: 'photo-1583454110551-21f2fa2afe61',
    difficulty: 'Intermediate',
    duration: '60 min',
    excerpt:
      'Build raw, functional strength through progressive barbell, dumbbell and machine work.',
    description:
      'Strength Training at IronForge is built on the fundamentals: progressive overload, flawless technique and consistent programming. Our coaches break down the big lifts and build you up safely, whether you are picking up a barbell for the first time or chasing a new personal record.',
    benefits: [
      'Increase raw lifting strength',
      'Improve bone density and joint health',
      'Master the five core barbell lifts',
      'Track progress with structured cycles',
    ],
    trainer: 'Alex Carter',
  },
  {
    id: 'powerlifting',
    category: 'Strength',
    title: 'Powerlifting',
    icon: 'barbell',
    image: 'photo-1541534741688-6078c6bfb5c5',
    difficulty: 'Advanced',
    duration: '90 min',
    excerpt: 'Specialized squat, bench and deadlift programming for serious lifters.',
    description:
      'Our Powerlifting track is competition-driven, focusing on the squat, bench press and deadlift. Expect periodized programming, technical skill work, and meet-day preparation from coaches who have competed at national level.',
    benefits: [
      'Periodized strength cycles',
      'Competition & meet prep',
      'One-on-one technique coaching',
      'Peaking protocols for your goals',
    ],
    trainer: 'Ryan Brooks',
  },
  {
    id: 'muscle-building',
    category: 'Strength',
    title: 'Muscle Building',
    icon: 'muscle',
    image: 'photo-1550345332-09e3ac987658',
    difficulty: 'Intermediate',
    duration: '60 min',
    excerpt: 'Hypertrophy-focused training to add lean, dense muscle mass.',
    description:
      'The Muscle Building program uses body-part splits, supersets and volume manipulation to maximize hypertrophy. Combine it with our nutrition coaching to add lean mass while keeping body fat in check.',
    benefits: [
      'Add lean muscle mass',
      'Volume-based hypertrophy training',
      'Sculpt balanced proportions',
      'Nutrition support for growth',
    ],
    trainer: 'Alex Carter',
  },
  {
    id: 'hiit',
    category: 'Fitness',
    title: 'HIIT',
    icon: 'flame',
    image: 'photo-1538805060514-97d9cc17730c',
    difficulty: 'Beginner',
    duration: '30 min',
    excerpt: 'High-intensity intervals that torch calories and build conditioning.',
    description:
      'Short, savage and effective. HIIT sessions alternate intense work bursts with short recovery to spike your heart rate, burn fat and build explosive conditioning in just 30 minutes.',
    benefits: [
      'Burn maximum calories fast',
      'Boost cardiovascular capacity',
      'Build explosive power',
      'No long sessions required',
    ],
    trainer: 'Sophia Williams',
  },
  {
    id: 'cardio',
    category: 'Fitness',
    title: 'Cardio & Endurance',
    icon: 'heart',
    image: 'photo-1576678927484-cc907957088c',
    difficulty: 'Beginner',
    duration: '45 min',
    excerpt: 'Steady-state and interval cardio to build a powerful engine.',
    description:
      'Build a strong aerobic engine with treadmills, rowers, bikes and sled work. Our cardio classes blend steady-state endurance with interval challenges to keep your heart and lungs ahead of the game.',
    benefits: [
      'Improve heart & lung health',
      'Increase endurance capacity',
      'Accelerate fat loss',
      'Recover faster between sets',
    ],
    trainer: 'Emma Davis',
  },
  {
    id: 'functional-training',
    category: 'Fitness',
    title: 'Functional Training',
    icon: 'move',
    image: 'photo-1574680096145-d05b474e2155',
    difficulty: 'Intermediate',
    duration: '50 min',
    excerpt: 'Kettlebells, ropes and sleds to build real-world athletic movement.',
    description:
      'Move the way life demands. Using kettlebells, battle ropes, sleds and bodyweight flow, Functional Training develops mobility, coordination and total-body strength that transfers to everything you do.',
    benefits: [
      'Improve mobility & balance',
      'Build core strength',
      'Train in multiple planes',
      'Reduce injury risk',
    ],
    trainer: 'Daniel Wilson',
  },
  {
    id: 'crossfit',
    category: 'Fitness',
    title: 'CrossFit',
    icon: 'bolt',
    image: 'photo-1517963879433-6ad2b056d712',
    difficulty: 'Advanced',
    duration: '60 min',
    excerpt: 'Constantly varied, high-intensity functional workouts.',
    description:
      'CrossFit combines gymnastics, weightlifting and conditioning into constantly varied workouts. Every session is scalable, so athletes of every level get a brutal, rewarding training day.',
    benefits: [
      'Full-body conditioning',
      'Constantly varied workouts',
      'Community-driven intensity',
      'Scalable for every level',
    ],
    trainer: 'Ryan Brooks',
  },
  {
    id: 'boxing',
    category: 'Specialized',
    title: 'Boxing',
    icon: 'glove',
    image: 'photo-1549719386-74dfcbf7dbed',
    difficulty: 'Intermediate',
    duration: '60 min',
    excerpt: 'Footwork, combinations and pads — learn to fight and stay sharp.',
    description:
      'Learn proper stance, footwork, punch technique and defensive movement from our boxing coach. Pad rounds, heavy bag work and conditioning drills make this the most addictive class in the gym.',
    benefits: [
      'Learn real striking technique',
      'Sharpened reflexes & coordination',
      'Elite-level conditioning',
      'Stress relief that hits back',
    ],
    trainer: 'Daniel Wilson',
  },
  {
    id: 'personal-training',
    category: 'Specialized',
    title: 'Personal Training',
    icon: 'target',
    image: 'photo-1571902943202-507ec2618e8f',
    difficulty: 'All Levels',
    duration: '60 min',
    excerpt: 'One-on-one coaching tailored 100% to you and your goals.',
    description:
      'Private, fully customized sessions with a dedicated coach. From fat loss to competition prep, your trainer designs every workout, monitors every rep and keeps you accountable every single week.',
    benefits: [
      'Fully customized programming',
      'Undivided coaching attention',
      'Accountability & results tracking',
      'Adaptable to any goal',
    ],
    trainer: 'Sophia Williams',
  },
  {
    id: 'weight-loss',
    category: 'Specialized',
    title: 'Weight Loss',
    icon: 'scale',
    image: 'photo-1518310383802-640c2de311b2',
    difficulty: 'Beginner',
    duration: '45 min',
    excerpt: 'Training and nutrition combined for sustainable fat loss.',
    description:
      'Sustainable fat loss is a science. Our Weight Loss program pairs metabolic strength training with nutrition coaching to help you drop fat, keep muscle and build habits that last long after the scale moves.',
    benefits: [
      'Sustainable fat loss',
      'Metabolic training protocols',
      'Personal nutrition plan',
      'Ongoing habit coaching',
    ],
    trainer: 'Sophia Williams',
  },
  {
    id: 'athlete-performance',
    category: 'Specialized',
    title: 'Athlete Performance',
    icon: 'rocket',
    image: 'photo-1518459031867-a89b944bffe4',
    difficulty: 'Advanced',
    duration: '90 min',
    excerpt: 'Speed, power and agility development for competitive athletes.',
    description:
      'Built for competitive athletes who want an edge. Plyometrics, sprint mechanics, strength-speed work and sport-specific conditioning — programmed in phases around your season.',
    benefits: [
      'Improve speed & agility',
      'Explosive power development',
      'Sport-specific conditioning',
      'Injury-prevention screening',
    ],
    trainer: 'Alex Carter',
  },
];

export const trainers = [
  {
    id: 'alex-carter',
    name: 'Alex Carter',
    role: 'Strength & Conditioning',
    image: 'photo-1594381898411-846e7d193883',
    experience: '12+ years',
    certification: 'NSCA-CSCS · ACE CPT',
    bio: 'Former national-level powerlifter turned coach. Alex has built strength programs for hundreds of athletes and is obsessed with perfecting the big three lifts.',
    quote: 'Strength is a skill. Train it every day.',
    specialties: ['Powerlifting', 'S&C', 'Athletic Performance'],
  },
  {
    id: 'sophia-williams',
    name: 'Sophia Williams',
    role: 'Nutrition & Weight Loss',
    image: 'photo-1589156280159-27698a70f29e',
    experience: '10+ years',
    certification: 'ISSN-SNS · Precision Nutrition L1',
    bio: 'Sophia blends evidence-based nutrition with practical coaching. She has guided thousands of members to transform their body composition without extremes.',
    quote: 'Fuel the body you are building.',
    specialties: ['Fat Loss', 'Nutrition', 'Body Recomposition'],
  },
  {
    id: 'ryan-brooks',
    name: 'Ryan Brooks',
    role: 'CrossFit Coach',
    image: 'photo-1567013127542-490d757e51fc',
    experience: '9+ years',
    certification: 'CrossFit L2 · USAW L1',
    bio: 'Competitive CrossFit athlete and coach. Ryan brings relentless energy to every class and knows exactly how to scale a workout for any member.',
    quote: 'The WOD never lies. Show up anyway.',
    specialties: ['CrossFit', 'Olympic Lifting', 'Gymnastics'],
  },
  {
    id: 'emma-davis',
    name: 'Emma Davis',
    role: 'Personal Trainer',
    image: 'photo-1573496359142-b8d87734a5a2',
    experience: '8+ years',
    certification: 'NASM-CPT · CPR/AED',
    bio: 'Emma specializes in corrective exercise and mobility. She helps members move better, lift pain-free and build confidence in the gym.',
    quote: 'Strong muscles start with healthy movement.',
    specialties: ['Corrective Exercise', 'Hypertrophy', 'Posture'],
  },
  {
    id: 'daniel-wilson',
    name: 'Daniel Wilson',
    role: 'Boxing Coach',
    image: 'photo-1500648767791-00dcc994a43e',
    experience: '11+ years',
    certification: 'IABBF Coach · UK Boxing L3',
    bio: 'A former amateur champion, Daniel has coached boxers from first-timers to title fights. His pad work is legendary and his classes sell out weekly.',
    quote: 'Keep your hands up. Keep moving forward.',
    specialties: ['Boxing', 'Kickboxing', 'Conditioning'],
  },
  {
    id: 'olivia-smith',
    name: 'Olivia Smith',
    role: 'Yoga & Mobility',
    image: 'photo-1571019614242-c5c5dee9f50b',
    experience: '7+ years',
    certification: 'RYT-500 · FRC Mobility',
    bio: 'Olivia bridges the gap between intense training and smart recovery. Her yoga and mobility sessions keep IronForge athletes flexible, balanced and injury-free.',
    quote: 'Flexibility is strength at full range.',
    specialties: ['Yoga', 'Mobility', 'Recovery'],
  },
];

export const plans = [
  {
    id: 'basic',
    name: 'Basic',
    price: 29,
    tagline: 'Perfect for getting started',
    features: [
      'Gym floor access',
      'Locker room access',
      'Cardio & strength zones',
      '1 group class per week',
      'Fitness assessment',
    ],
    featured: false,
    cta: 'START BASIC',
  },
  {
    id: 'pro',
    name: 'Pro',
    price: 59,
    tagline: 'Our most popular plan',
    features: [
      'Everything in Basic',
      'Unlimited group classes',
      '2 personal training sessions',
      'Custom training program',
      'Nutrition starter guide',
      'Sauna & recovery zone',
    ],
    featured: true,
    cta: 'GO PRO',
  },
  {
    id: 'elite',
    name: 'Elite',
    price: 99,
    tagline: 'Full experience, zero limits',
    features: [
      'Everything in Pro',
      'Unlimited personal training',
      '24/7 gym access',
      'Full nutrition coaching',
      'Physio & massage priority',
      'Guest passes every month',
    ],
    featured: false,
    cta: 'GO ELITE',
  },
];

export const planComparison = [
  { feature: 'Gym floor access', basic: true, pro: true, elite: true },
  { feature: 'Cardio & strength zones', basic: true, pro: true, elite: true },
  { feature: 'Locker & shower access', basic: true, pro: true, elite: true },
  { feature: 'Group classes', basic: '1 / week', pro: true, elite: true },
  { feature: 'Personal training', basic: false, pro: '2 sessions', elite: true },
  { feature: 'Custom training program', basic: false, pro: true, elite: true },
  { feature: 'Nutrition coaching', basic: false, pro: 'Starter', elite: true },
  { feature: '24/7 access', basic: false, pro: false, elite: true },
  { feature: 'Recovery & sauna', basic: false, pro: true, elite: true },
  { feature: 'Guest passes', basic: false, pro: false, elite: '2 / month' },
];

export const scheduleDays = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
];

export const schedule = [
  {
    day: 'Monday',
    classes: [
      { time: '6:00 AM', name: 'HIIT', trainer: 'Sophia Williams', level: 'All Levels' },
      { time: '8:00 AM', name: 'Strength', trainer: 'Alex Carter', level: 'Intermediate' },
      { time: '5:00 PM', name: 'Boxing', trainer: 'Daniel Wilson', level: 'Intermediate' },
      { time: '7:00 PM', name: 'Zumba', trainer: 'Emma Davis', level: 'Beginner' },
    ],
  },
  {
    day: 'Tuesday',
    classes: [
      { time: '6:00 AM', name: 'CrossFit', trainer: 'Ryan Brooks', level: 'Advanced' },
      { time: '9:00 AM', name: 'Yoga', trainer: 'Olivia Smith', level: 'All Levels' },
      { time: '5:00 PM', name: 'Functional Training', trainer: 'Daniel Wilson', level: 'Intermediate' },
      { time: '7:00 PM', name: 'Cardio', trainer: 'Emma Davis', level: 'Beginner' },
    ],
  },
  {
    day: 'Wednesday',
    classes: [
      { time: '6:00 AM', name: 'Strength', trainer: 'Alex Carter', level: 'Intermediate' },
      { time: '8:00 AM', name: 'HIIT', trainer: 'Sophia Williams', level: 'All Levels' },
      { time: '5:00 PM', name: 'CrossFit', trainer: 'Ryan Brooks', level: 'Advanced' },
      { time: '7:00 PM', name: 'Boxing', trainer: 'Daniel Wilson', level: 'Intermediate' },
    ],
  },
  {
    day: 'Thursday',
    classes: [
      { time: '6:00 AM', name: 'Zumba', trainer: 'Emma Davis', level: 'Beginner' },
      { time: '9:00 AM', name: 'Functional Training', trainer: 'Daniel Wilson', level: 'Intermediate' },
      { time: '5:00 PM', name: 'Yoga', trainer: 'Olivia Smith', level: 'All Levels' },
      { time: '7:00 PM', name: 'Strength', trainer: 'Alex Carter', level: 'Intermediate' },
    ],
  },
  {
    day: 'Friday',
    classes: [
      { time: '6:00 AM', name: 'CrossFit', trainer: 'Ryan Brooks', level: 'Advanced' },
      { time: '8:00 AM', name: 'Cardio', trainer: 'Emma Davis', level: 'Beginner' },
      { time: '5:00 PM', name: 'HIIT', trainer: 'Sophia Williams', level: 'All Levels' },
      { time: '7:00 PM', name: 'Boxing', trainer: 'Daniel Wilson', level: 'Intermediate' },
    ],
  },
  {
    day: 'Saturday',
    classes: [
      { time: '7:00 AM', name: 'Functional Training', trainer: 'Daniel Wilson', level: 'Intermediate' },
      { time: '9:00 AM', name: 'CrossFit', trainer: 'Ryan Brooks', level: 'Advanced' },
      { time: '11:00 AM', name: 'Zumba', trainer: 'Emma Davis', level: 'Beginner' },
      { time: '4:00 PM', name: 'Yoga', trainer: 'Olivia Smith', level: 'All Levels' },
    ],
  },
  {
    day: 'Sunday',
    classes: [
      { time: '7:00 AM', name: 'Yoga', trainer: 'Olivia Smith', level: 'All Levels' },
      { time: '9:00 AM', name: 'Strength', trainer: 'Alex Carter', level: 'Intermediate' },
      { time: '11:00 AM', name: 'HIIT', trainer: 'Sophia Williams', level: 'All Levels' },
      { time: '5:00 PM', name: 'Boxing', trainer: 'Daniel Wilson', level: 'Intermediate' },
    ],
  },
];

export const testimonials = [
  {
    name: 'Hamza Raza',
    role: 'Member since 2021',
    image: 'photo-1507003211169-0a1dd7228f2d',
    rating: 5,
    text: 'I joined IronForge at my heaviest. Eight months later I have lost 30kg, hit PRs I never imagined, and actually enjoy training. The coaches here genuinely care about your progress.',
  },
  {
    name: 'Ayesha Khan',
    role: 'Elite Member',
    image: 'photo-1494790108377-be9c29b29330',
    rating: 5,
    text: 'The 24/7 access changed everything for my schedule. The equipment is world-class, always clean, and the trainers know you by name. Best gym decision I have ever made.',
  },
  {
    name: 'Daniel Mendez',
    role: 'Member since 2019',
    image: 'photo-1544005313-94ddf0286df2',
    rating: 5,
    text: 'From the moment you walk in, the energy is different. The CrossFit community is unreal and Ryan pushes me every single session. This place is my second home.',
  },
  {
    name: 'Sara Ali',
    role: 'Member since 2022',
    image: 'photo-1573496359142-b8d87734a5a2',
    rating: 4,
    text: 'Started with personal training sessions with Sophia. Her nutrition coaching completely changed how I eat and train. I feel stronger and more confident than ever before.',
  },
  {
    name: 'James Okafor',
    role: 'Athlete Member',
    image: 'photo-1500648767791-00dcc994a43e',
    rating: 5,
    text: 'As a competitive athlete, the Performance program is exactly what I needed. Speed, power and recovery work all structured around my season. Elite coaching, elite facility.',
  },
  {
    name: 'Fatima Noor',
    role: 'Member since 2023',
    image: 'photo-1589156280159-27698a70f29e',
    rating: 5,
    text: 'I was terrified of the gym, but the beginner-friendly classes and amazing staff made me feel welcome from day one. Now I train five days a week and love every minute.',
  },
];

export const galleryCategories = ['All', 'Gym', 'Training', 'Equipment', 'Events', 'Members'];

export const galleryItems = [
  { id: 1, category: 'Gym', image: 'photo-1534438327276-14e5300c3a48', title: 'Main Training Floor' },
  { id: 2, category: 'Training', image: 'photo-1583454110551-21f2fa2afe61', title: 'Barbell Squat Session' },
  { id: 3, category: 'Equipment', image: 'photo-1581009146145-b5ef050c2e1e', title: 'Free Weights Zone' },
  { id: 4, category: 'Training', image: 'photo-1517963879433-6ad2b056d712', title: 'CrossFit WOD' },
  { id: 5, category: 'Gym', image: 'photo-1517836357463-d25dfeac3438', title: 'Evening on the Floor' },
  { id: 6, category: 'Events', image: 'photo-1526506118085-60ce8714f8c5', title: 'Group Challenge Day' },
  { id: 7, category: 'Members', image: 'photo-1550345332-09e3ac987658', title: 'Member Spotlight' },
  { id: 8, category: 'Equipment', image: 'photo-1574680096145-d05b474e2155', title: 'Kettlebell Rack' },
  { id: 9, category: 'Training', image: 'photo-1549719386-74dfcbf7dbed', title: 'Boxing Pad Work' },
  { id: 10, category: 'Members', image: 'photo-1571902943202-507ec2618e8f', title: 'Personal Training' },
  { id: 11, category: 'Events', image: 'photo-1518459031867-a89b944bffe4', title: 'Athlete Testing Day' },
  { id: 12, category: 'Gym', image: 'photo-1540497077202-7c8a3999166f', title: 'Battle Rope Corner' },
];

export const blogPosts = [
  {
    id: 1,
    title: 'How to Build Muscle: The Complete Guide',
    category: 'Training',
    date: 'March 12, 2026',
    readTime: '8 min read',
    image: 'photo-1541534741688-6078c6bfb5c5',
    author: 'Alex Carter',
    authorImage: 'photo-1594381898411-846e7d193883',
    excerpt:
      'Muscle growth is a science. Here is exactly what you need to do in the gym and the kitchen to build lean mass that lasts.',
    content: [
      {
        heading: 'The Law of Progressive Overload',
        text: 'Building muscle comes down to one simple law: muscles adapt to the demands you place on them. To keep growing, you must keep adding tension — more weight, more reps, or more sets over time. This is called progressive overload, and it is the engine of every successful muscle-building program.',
      },
      {
        heading: 'Train with Intent',
        text: 'How you train matters as much as what you lift. Perform each rep with control, take the muscle through a full range of motion, and push close to failure on your working sets. Aim for 3-4 sets of 6-12 reps on the main lifts, and prioritize form over ego.',
      },
      {
        heading: 'Protein is Non-Negotiable',
        text: 'Muscle is built from protein. Aim for roughly 1.6-2.2 grams of protein per kilogram of bodyweight each day, spread across 4-5 meals. Pair your protein with whole-food carbohydrates to fuel training and support recovery.',
      },
      {
        heading: 'Recovery Builds the Muscle',
        text: 'You do not grow in the gym — you grow while you rest. Sleep 7-9 hours a night, keep stress manageable, and give each muscle group 48 hours before training it hard again. Recovery is where the results happen.',
      },
    ],
  },
  {
    id: 2,
    title: 'The Complete Beginner Gym Guide',
    category: 'Guides',
    date: 'March 2, 2026',
    readTime: '6 min read',
    image: 'photo-1521805103424-d8f8430e8933',
    author: 'Emma Davis',
    authorImage: 'photo-1573496359142-b8d87734a5a2',
    excerpt:
      'Walking into a gym for the first time is intimidating. This guide walks you through everything — from what to bring to your first full-body workout.',
    content: [
      {
        heading: 'Start with a Simple Plan',
        text: 'Your first goal is not to have the perfect program — it is to build the habit. Start with a simple full-body routine two to three times per week, focusing on big compound movements: squat, hinge, push, pull and carry.',
      },
      {
        heading: 'Learn the Big Five',
        text: 'The squat, hip hinge, overhead press, push-up and row are the foundation of every good program. Spend your first few weeks learning these patterns with light weight and perfect form before adding load.',
      },
      {
        heading: 'What to Bring',
        text: 'A pair of training shoes, a water bottle, a towel and comfortable clothes are all you need to start. Leave the ego at the door — everyone at the gym is focused on their own workout, not yours.',
      },
      {
        heading: 'Consistency Beats Intensity',
        text: 'The single biggest predictor of your results will be showing up. It is far better to train lightly twice a week consistently than to crush yourself once and disappear for a month.',
      },
    ],
  },
  {
    id: 3,
    title: 'Best Pre-Workout Meals for Maximum Energy',
    category: 'Nutrition',
    date: 'February 20, 2026',
    readTime: '5 min read',
    image: 'photo-1490645935967-10de6ba17061',
    author: 'Sophia Williams',
    authorImage: 'photo-1589156280159-27698a70f29e',
    excerpt:
      'What you eat before training determines how hard you can go. These meal ideas will fuel your sessions without weighing you down.',
    content: [
      {
        heading: 'Timing Matters',
        text: 'Aim to eat your pre-workout meal 60-90 minutes before training. This gives your body time to digest so energy is available when you hit the floor, without the sluggishness of a full stomach.',
      },
      {
        heading: 'Carbs Are Your Fuel',
        text: 'Carbohydrates are the body’s preferred fuel for intense training. Combine fast-digesting carbs with a moderate amount of protein — think banana with peanut butter, oats with berries, or rice cakes with honey.',
      },
      {
        heading: 'Keep Fats and Fiber Low',
        text: 'Heavy fats and large amounts of fiber slow digestion and can cause cramping mid-workout. Keep the pre-workout meal simple and light, and save the big meals for after training.',
      },
      {
        heading: 'Hydrate First',
        text: 'Performance drops quickly when you are dehydrated. Sip water steadily through the day and drink 300-500ml in the 30 minutes before your session.',
      },
    ],
  },
  {
    id: 4,
    title: 'Fat Loss Tips That Actually Work',
    category: 'Weight Loss',
    date: 'February 8, 2026',
    readTime: '7 min read',
    image: 'photo-1571731956672-f2b94d7dd0cb',
    author: 'Sophia Williams',
    authorImage: 'photo-1589156280159-27698a70f29e',
    excerpt:
      'Forget the fad diets. These are the evidence-backed habits that create real, sustainable fat loss over time.',
    content: [
      {
        heading: 'A Calorie Deficit Is the Base',
        text: 'Fat loss happens when you consistently consume fewer calories than you burn. Everything else is secondary. Build a moderate deficit of 300-500 calories per day rather than starving yourself.',
      },
      {
        heading: 'Protect Your Protein',
        text: 'In a deficit, protein is your shield. High protein intake preserves lean muscle, keeps you full and raises the energy cost of digestion. Prioritize protein at every single meal.',
      },
      {
        heading: 'Strength Train to Keep Muscle',
        text: 'Cardio burns calories, but strength training protects the muscle that keeps your metabolism high. Combine both: lift weights three times a week and add low-intensity steps on top.',
      },
      {
        heading: 'Track, Sleep, Repeat',
        text: 'Track your food for at least a few weeks to build awareness. Prioritize sleep — poor sleep raises hunger hormones. And remember: consistency across weeks beats perfection in a single day.',
      },
    ],
  },
  {
    id: 5,
    title: 'Strength Training Basics Every Lifter Needs',
    category: 'Training',
    date: 'January 28, 2026',
    readTime: '6 min read',
    image: 'photo-1574680096145-d05b474e2155',
    author: 'Alex Carter',
    authorImage: 'photo-1594381898411-846e7d193883',
    excerpt:
      'Master the fundamentals of strength training — bracing, bar path and progression — and every lift you do will get better.',
    content: [
      {
        heading: 'Brace Before You Lift',
        text: 'A strong lift starts with a strong core. Take a big breath into your belly, brace your abs as if about to take a punch, and hold that tension through the entire lift. This protects your spine and transmits force.',
      },
      {
        heading: 'Own the Bar Path',
        text: 'Every lift has an optimal bar path. Pull the bar over the mid-foot on the deadlift, press straight up from the shoulders, and keep the bar over your mid-foot in the squat. Film yourself and clean up the small errors.',
      },
      {
        heading: 'Progress by Small Steps',
        text: 'Add a small amount of weight each week — 2.5kg on the bar, not 10kg. This keeps technique intact and gives you a steady, compounding runway of progress.',
      },
      {
        heading: 'Warm Up to Perform',
        text: 'Five minutes of general movement, then ramp into working weight with 3-5 build-up sets. A proper warm-up is not optional; it is what lets you train heavy safely.',
      },
    ],
  },
  {
    id: 6,
    title: 'Why Recovery Is the Secret to Bigger Gains',
    category: 'Recovery',
    date: 'January 15, 2026',
    readTime: '5 min read',
    image: 'photo-1544367567-0f2fcb009e0b',
    author: 'Olivia Smith',
    authorImage: 'photo-1571019614242-c5c5dee9f50b',
    excerpt:
      'Training breaks the muscle down; recovery builds it back stronger. Here is how to sleep, stretch and fuel your way to better results.',
    content: [
      {
        heading: 'Sleep Is Your Anabolic Window',
        text: 'During deep sleep your body releases growth hormone and repairs damaged muscle tissue. Seven to nine hours per night is not a luxury — it is the most powerful recovery tool you have.',
      },
      {
        heading: 'Move Daily, Train Hard Occasionally',
        text: 'Light daily movement — walking, mobility work, easy yoga — keeps joints healthy and blood flowing between hard sessions. Recovery is not about doing nothing; it is about moving smart.',
      },
      {
        heading: 'Fuel the Repair Process',
        text: 'After training, aim for protein within two hours and plenty of whole-food carbs to restock glycogen. Match your calories to your goals: building, maintaining or losing.',
      },
      {
        heading: 'Listen to Your Body',
        text: 'Soreness is normal; sharp pain is a warning. If performance is dropping across multiple sessions, take a deload week. Resting now protects you from months out injured later.',
      },
    ],
  },
];

export const faqs = [
  {
    question: 'How much does a membership cost?',
    answer:
      'Our plans start at $29/month for Basic, $59/month for Pro and $99/month for Elite. There are no hidden fees, and you can pause or cancel your membership at any time. Visit the Membership page for full details.',
  },
  {
    question: 'Do you offer personal training?',
    answer:
      'Yes. Our certified personal trainers design fully customized programs for your goals. Pro members get two sessions included, while Elite members get unlimited personal training.',
  },
  {
    question: 'What are the gym timings?',
    answer:
      'We are open Monday to Sunday, 5:00 AM to 12:00 AM. Elite members also enjoy 24/7 access to the gym floor with secure entry.',
  },
  {
    question: 'Can I cancel my membership anytime?',
    answer:
      'Absolutely. There are no long-term lock-in contracts. Cancel or pause your membership with 30 days notice through the front desk or your member dashboard.',
  },
  {
    question: 'What classes do you offer?',
    answer:
      'We run 50+ weekly classes including HIIT, CrossFit, Boxing, Strength, Yoga, Cardio, Functional Training and Zumba. Check the Schedule page for times and trainers.',
  },
  {
    question: 'Are your trainers certified?',
    answer:
      'Every IronForge trainer is internationally certified — NSCA, NASM, CrossFit L2, ACE and more — and many have competed at national level in their disciplines.',
  },
  {
    question: 'Is the equipment modern and well-maintained?',
    answer:
      'We invest continuously in premium strength, cardio and functional equipment. Machines are serviced weekly and the floor is cleaned throughout the day.',
  },
  {
    question: 'Do you provide nutrition guidance?',
    answer:
      'Yes. Pro members receive a nutrition starter guide, and Elite members get full one-on-one nutrition coaching from our certified nutrition specialists.',
  },
];

export const contactInfo = {
  address: '123 Fitness Avenue, Karachi, Pakistan',
  phone: '+92 300 1234567',
  email: 'info@ironforgefitness.com',
  hours: 'Monday - Sunday · 5:00 AM - 12:00 AM',
};

export const heroImages = {
  home: 'photo-1534438327276-14e5300c3a48',
  about: 'photo-1517836357463-d25dfeac3438',
  programs: 'photo-1583454110551-21f2fa2afe61',
  trainers: 'photo-1571902943202-507ec2618e8f',
  membership: 'photo-1550345332-09e3ac987658',
  schedule: 'photo-1517963879433-6ad2b056d712',
  blog: 'photo-1541534741688-6078c6bfb5c5',
  gallery: 'photo-1518459031867-a89b944bffe4',
  contact: 'photo-1576678927484-cc907957088c',
};

export const facilities = [
  { icon: 'dumbbell', title: 'Strength Zone', text: '8 squat racks, deadlift platforms and a full free weight range.' },
  { icon: 'heart', title: 'Cardio Arena', text: 'Treadmills, rowers, bikes and ski ergs with a dedicated track.' },
  { icon: 'users', title: 'Group Studio', text: 'Spacious studio for classes from HIIT and CrossFit to Zumba.' },
  { icon: 'glove', title: 'Boxing Ring', text: 'Full boxing area with bags, pads and a regulation ring.' },
  { icon: 'spa', title: 'Recovery Zone', text: 'Sauna, cold plunge and stretching area to reset after training.' },
  { icon: 'locker', title: 'Premium Lockers', text: 'Secure lockers, rainfall showers and towel service.' },
];

export const coreValues = [
  { icon: 'flame', title: 'Relentless', text: 'We push past comfort every single session and expect the same from every member.' },
  { icon: 'shield', title: 'Discipline', text: 'Consistency beats motivation. We build habits, not promises.' },
  { icon: 'users', title: 'Community', text: 'You train alone but never alone. We forge strength together.' },
  { icon: 'target', title: 'Excellence', text: 'From equipment to coaching, we refuse to accept average.' },
];
