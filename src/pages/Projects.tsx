import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Calendar, Users, Zap } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "TrustRx - Blockchain Health Record Web App",
      period: "2025",
      type: "Hackathon Project",
      description: "Developed a decentralized health record storage platform using cutting-edge blockchain technology to ensure secure and transparent patient data management.",
      longDescription: "A comprehensive healthcare solution that leverages blockchain technology for secure patient data storage and management. The platform allows patients to maintain control over their health records while enabling secure sharing with healthcare providers.",
      technologies: ["HTML", "CSS", "JavaScript", "Supabase", "Algorand Blockchain", "Netlify", "RevenueCat"],
      features: [
        "Secure patient data management using blockchain technology",
        "Doctor consultation booking and management system",
        "Integrated billing system with RevenueCat",
        "Decentralized storage using Algorand blockchain",
        "Real-time data synchronization with Supabase",
        "Responsive web design for all devices"
      ],
      status: "Completed",
      category: "Blockchain",
      icon: "🏥",
      highlights: [
        "Built during a hackathon with time constraints",
        "Integrated multiple complex technologies",
        "Focus on user experience and security",
        "Learning AI tools to accelerate development"
      ]
    },
    {
      title: "Income Predictor ML Model",
      period: "2025 - Present",
      type: "IBM Internship Project",
      description: "Currently developing a machine learning model to predict income levels based on skills, experience, education, and other demographic factors.",
      longDescription: "An advanced machine learning project that analyzes various socioeconomic factors to predict income levels. The model uses statistical analysis and machine learning algorithms to provide accurate predictions.",
      technologies: ["Python", "Scikit-learn", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Jupyter Notebook"],
      features: [
        "Data preprocessing and cleaning pipelines",
        "Feature engineering and selection",
        "Multiple ML algorithm implementation",
        "Model evaluation and comparison",
        "Data visualization and insights",
        "Statistical analysis of income factors"
      ],
      status: "In Progress",
      category: "Machine Learning",
      icon: "📊",
      highlights: [
        "Part of IBM SkillsBuild internship program",
        "Hands-on experience with real-world data",
        "Learning industry-standard ML practices",
        "Focus on practical machine learning applications"
      ]
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'In Progress':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Blockchain':
        return 'bg-purple-100 text-purple-800 border-purple-200';
      case 'Machine Learning':
        return 'bg-orange-100 text-orange-800 border-orange-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <div className="min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="hero-text">Projects</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore my latest work in AI/ML, blockchain technology, and web development
          </p>
        </div>

        {/* Projects Grid */}
        <div className="space-y-12">
          {projects.map((project, index) => (
            <Card key={index} className="card-hover">
              <CardHeader>
                <div className="flex items-start justify-between flex-wrap gap-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center text-2xl">
                      {project.icon}
                    </div>
                    <div>
                      <CardTitle className="text-2xl mb-2">{project.title}</CardTitle>
                      <div className="flex items-center space-x-4 text-muted-foreground mb-2">
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          <span>{project.period}</span>
                        </div>
                        <div className="flex items-center">
                          <Users className="w-4 h-4 mr-1" />
                          <span>{project.type}</span>
                        </div>
                      </div>
                      <div className="flex gap-2 mb-4">
                        <Badge className={getStatusColor(project.status)}>
                          {project.status}
                        </Badge>
                        <Badge className={getCategoryColor(project.category)}>
                          {project.category}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <p className="text-muted-foreground text-lg">{project.description}</p>
                
                <div>
                  <h4 className="font-semibold mb-3">Project Overview</h4>
                  <p className="text-muted-foreground">{project.longDescription}</p>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">Key Features</h4>
                  <div className="grid md:grid-cols-2 gap-2">
                    {project.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start">
                        <Zap className="w-4 h-4 text-primary mt-0.5 mr-2 flex-shrink-0" />
                        <span className="text-muted-foreground text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">Project Highlights</h4>
                  <div className="grid md:grid-cols-2 gap-2">
                    {project.highlights.map((highlight, highlightIndex) => (
                      <div key={highlightIndex} className="flex items-start">
                        <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span className="text-muted-foreground text-sm">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4 pt-4">
                  <Button variant="outline" className="flex items-center">
                    <Github className="w-4 h-4 mr-2" />
                    View Code
                  </Button>
                  <Button variant="outline" className="flex items-center">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Skills Used Across Projects */}
        <div className="mt-16">
          <Card className="card-hover">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Skills Demonstrated</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-4 gap-6 text-center">
                <div>
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🔗</span>
                  </div>
                  <h3 className="font-semibold mb-2">Blockchain</h3>
                  <p className="text-sm text-muted-foreground">Algorand integration, decentralized storage</p>
                </div>
                
                <div>
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🤖</span>
                  </div>
                  <h3 className="font-semibold mb-2">Machine Learning</h3>
                  <p className="text-sm text-muted-foreground">Predictive modeling, data analysis</p>
                </div>
                
                <div>
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🌐</span>
                  </div>
                  <h3 className="font-semibold mb-2">Web Development</h3>
                  <p className="text-sm text-muted-foreground">Full-stack development, responsive design</p>
                </div>
                
                <div>
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">📊</span>
                  </div>
                  <h3 className="font-semibold mb-2">Data Science</h3>
                  <p className="text-sm text-muted-foreground">Statistical analysis, visualization</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Projects;