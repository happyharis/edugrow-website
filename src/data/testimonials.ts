export interface Testimonial {
  id: number;
  name: string;
  role: string;
  imageUrl: string;
  content: string;
  business?: string;
  impact?: {
    metric: string;
    value: string;
  };
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Deric Yee",
    role: "Founder",
    imageUrl: "/testimonial-photos/deric.jpg",
    content: "Been a pleasure working with Haris. He helped me understand what it means to work with a rockstar.",
    business: "Sigma School",
    impact: {
      metric: "Revenue",
      value: "6 to 7 Figures in 1 year"
    }
  },
  {
    id: 2,
    name: "Haris Samingan",
    role: "Founder",
    imageUrl: "/testimonial-photos/haris.jpg",
    content: "I have implemeted the strategies and I got more income than I expected.",
    business: "Next Level Academy",
    impact: {
      metric: "Profit",
      value: "1.5x profit"
    }
  },

  {
    id: 3,
    name: "Shermin",
    role: "Founder",
    business: "Montessori Garden Singpoare",
    imageUrl: "/testimonial-photos/shermin.jpg",
    content: "I like that Haris is very personable and organized in his thinking. Nothing is a problem in his eyes. Very easy to talk to and comfortable to share, ,gives alot of confidence to clients.",
    impact: {
      metric: "Rated Coaching Session",
      value: "8.5 ⭐️"
    }
  },
  {
    id: 4,
    name: "Gina",
    role: "Founder",
    business: "Private Tutor",
    imageUrl: "/testimonial-photos/gina.jpg",
    content: "The fact that (Haris) you are able to give me tangible suggestions as to what I can go ahead and do things that I can apply immediately, not something you have to go and learn and research, you know? Yeah, so it's applicable",
    impact: {
      metric: "Rated Coaching Session",
      value: "9 ⭐️"
    },
  },

  {
    id: 5,
    name: "Olive",
    role: "Founder",
    business: "Olively English",
    imageUrl: "/testimonial-photos/olive.jpg",
    content: "I'm thankful & grateful that Haris listens to me and gave actionable and practical tips.",
    impact: {
      metric: "Rated Coaching Session",
      value: "9 ⭐️"
    },
  },
  {
    id: 6,
    name: "Jason",
    role: "Founder",
    business: "Private Tutor",
    imageUrl: "/testimonial-photos/jason.jpg",
    content: "I like that you ask very thought provoking questions.",
    impact: {
      metric: "Rated Coaching Session",
      value: "9 ⭐️"
    },
  },
  {
    id: 7,
    name: "Rajiv",
    role: "Founder",
    business: "Ministry of Physics",
    imageUrl: "/testimonial-photos/rajiv.jpg",
    content: "Haris gave a lot of flowing of ideas which helps & a clearer picture on what needs to be done",
    impact: {
      metric: "Rated Coaching Session",
      value: "10 ⭐️"
    }
  },
  {
    id: 8,
    name: "Bryan",
    role: "Founder",
    business: "Physics Academy | MindQuest Learning",
    imageUrl: "/testimonial-photos/bryan.png",
    content: "I like how he gave good insights",
    impact: {
      metric: "Rated Coaching Session",
      value: "10 ⭐️"
    }
  },

]; 