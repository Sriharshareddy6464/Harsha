const services = [
  {
    title: "UI/UX Design",
    points: [
      "Intuitive and modern interfaces",
      "User flows and wireframes",
      "Responsive design for all devices",
      "Prototyping and user testing",
    ],
  },
  {
    title: "Web Development",
    points: [
      "Full-stack web applications (Next.js, React)",
      "API integration and backend logic",
      "Performance optimization",
      "Deployment & CI/CD (Vercel, Netlify)",
    ],
  },
  {
    title: "DevOps",
    points: [
      "Cloud infrastructure setup (AWS, Azure)",
      "CI/CD pipelines",
      "Containerization (Docker)",
      "Monitoring & automation",
    ],
  },
  {
    title: "AI & Machine Learning",
    points: [
      "Custom AI/ML solutions",
      "Natural Language Processing (NLP)",
      "Computer Vision projects",
      "Model deployment & integration",
    ],
  },
];

export default function HowICanHelp() {
  return (
    <section className="py-16 bg-white dark:bg-gray-900" id="how-i-can-help">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">How I Can Help</h2>
        <div className="grid md:grid-cols-4 gap-8">
          {services.map((service) => (
            <div key={service.title} className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 shadow">
              <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
              <ul className="space-y-2">
                {service.points.map((point) => (
                  <li key={point} className="flex items-start">
                    <span className="mr-2 text-blue-500">•</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 