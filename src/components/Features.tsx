import { Card } from "@/components/ui/card";
import { GraduationCap, Clock, BookOpen } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: GraduationCap,
      title: "Expert Tutors",
      description: "Learn from qualified educators with years of teaching experience and subject expertise."
    },
    {
      icon: Clock,
      title: "Flexible Learning",
      description: "Study at your own pace with 24/7 access to courses and personalized learning schedules."
    },
    {
      icon: BookOpen,
      title: "Interactive Content",
      description: "Engage with multimedia lessons, quizzes, and hands-on projects for better retention."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Why Choose EduSphere?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover the advantages that make our platform the perfect choice for your learning journey.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="p-8 text-center card-shadow hover:scale-105 transition-transform duration-300 feature-gradient border-0">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <feature.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;