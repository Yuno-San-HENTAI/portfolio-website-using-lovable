import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Code, Brain, Users, Zap, MessageCircle, Trophy } from 'lucide-react';

const Skills = () => {
  const technicalSkills = [
    { name: 'Python', level: 85, category: 'Programming', description: 'ML/AI development, data analysis, scripting' },
    { name: 'Machine Learning', level: 80, category: 'AI/ML', description: 'Scikit-learn, model training, evaluation' },
    { name: 'Data Analysis', level: 75, category: 'AI/ML', description: 'Pandas, NumPy, statistical analysis' },
    { name: 'JavaScript', level: 70, category: 'Web Dev', description: 'Frontend development, web applications' },
    { name: 'HTML/CSS', level: 85, category: 'Web Dev', description: 'Responsive design, modern layouts' },
    { name: 'Blockchain', level: 65, category: 'Emerging Tech', description: 'Algorand, decentralized applications' },
    { name: 'Supabase', level: 70, category: 'Backend', description: 'Database management, authentication' },
    { name: 'Git/Version Control', level: 75, category: 'Tools', description: 'Code collaboration, project management' }
  ];

  const softSkills = [
    { 
      name: 'Problem Solving', 
      icon: Brain, 
      description: 'Analytical thinking and creative solutions to complex challenges',
      examples: ['Hackathon participation', 'Algorithm design', 'Debugging complex issues']
    },
    { 
      name: 'Communication', 
      icon: MessageCircle, 
      description: 'Clear verbal and written communication across technical and non-technical audiences',
      examples: ['Project presentations', 'Technical documentation', 'Team collaboration']
    },
    { 
      name: 'Teamwork', 
      icon: Users, 
      description: 'Collaborative approach to problem-solving and project development',
      examples: ['Hackathon teams', 'Study groups', 'Peer programming']
    },
    { 
      name: 'Quick Learning', 
      icon: Zap, 
      description: 'Rapidly acquiring new technologies and adapting to changing requirements',
      examples: ['Self-taught technologies', 'Internship adaptation', 'New framework adoption']
    }
  ];

  const certifications = [
    {
      name: 'Artificial Intelligence Fundamentals',
      issuer: 'IBM SkillsBuild',
      date: '2025',
      description: 'Core AI concepts, ethical considerations, basic ML models, and practical implementation strategies',
      skills: ['AI Fundamentals', 'Machine Learning', 'Ethics in AI', 'Model Implementation']
    },
    {
      name: 'Generative AI, AI Agents & Prompt Engineering Essentials',
      issuer: 'Parul University (CDOE)',
      date: '2025',
      description: 'Foundational concepts in generative AI, AI agents, and prompt engineering using real-world applications and tools',
      skills: ['Generative AI', 'AI Agents', 'Prompt Engineering', 'Real-world Applications']
    }
  ];

  const tools = [
    { name: 'MS Office', category: 'Productivity', level: 90 },
    { name: 'Jupyter Notebook', category: 'Development', level: 80 },
    { name: 'VS Code', category: 'Development', level: 85 },
    { name: 'Netlify', category: 'Deployment', level: 75 },
    { name: 'GitHub', category: 'Version Control', level: 80 }
  ];

  const getCategoryColor = (category: string) => {
    const colors = {
      'Programming': 'bg-blue-100 text-blue-800',
      'AI/ML': 'bg-purple-100 text-purple-800',
      'Web Dev': 'bg-green-100 text-green-800',
      'Emerging Tech': 'bg-orange-100 text-orange-800',
      'Backend': 'bg-red-100 text-red-800',
      'Tools': 'bg-gray-100 text-gray-800',
      'Productivity': 'bg-yellow-100 text-yellow-800',
      'Development': 'bg-indigo-100 text-indigo-800',
      'Deployment': 'bg-pink-100 text-pink-800',
      'Version Control': 'bg-teal-100 text-teal-800'
    };
    return colors[category as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="hero-text">Skills</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive overview of my technical expertise and soft skills
          </p>
        </div>

        {/* Technical Skills */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Technical Skills</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {technicalSkills.map((skill, index) => (
              <Card key={index} className="card-hover">
                <CardContent className="p-6">
                  <div className="flex justify-between items-center mb-3">
                    <div className="flex items-center space-x-3">
                      <h3 className="font-semibold text-lg">{skill.name}</h3>
                      <Badge className={getCategoryColor(skill.category)}>
                        {skill.category}
                      </Badge>
                    </div>
                    <span className="text-sm font-medium text-muted-foreground">{skill.level}%</span>
                  </div>
                  <Progress value={skill.level} className="mb-3" />
                  <p className="text-sm text-muted-foreground">{skill.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Soft Skills */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Soft Skills</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {softSkills.map((skill, index) => (
              <Card key={index} className="card-hover">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <skill.icon className="w-8 h-8 text-primary" />
                    <CardTitle className="text-xl">{skill.name}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{skill.description}</p>
                  <div>
                    <h4 className="font-medium mb-2">Examples:</h4>
                    <ul className="space-y-1">
                      {skill.examples.map((example, exampleIndex) => (
                        <li key={exampleIndex} className="flex items-start">
                          <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span className="text-sm text-muted-foreground">{example}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Certifications</h2>
          <div className="space-y-6">
            {certifications.map((cert, index) => (
              <Card key={index} className="card-hover">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-xl mb-2">{cert.name}</CardTitle>
                      <div className="flex items-center space-x-4 text-muted-foreground">
                        <span className="font-medium">{cert.issuer}</span>
                        <span>•</span>
                        <span>{cert.date}</span>
                      </div>
                    </div>
                    <Trophy className="w-8 h-8 text-primary" />
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{cert.description}</p>
                  <div>
                    <h4 className="font-medium mb-2">Skills Covered:</h4>
                    <div className="flex flex-wrap gap-2">
                      {cert.skills.map((skill, skillIndex) => (
                        <Badge key={skillIndex} variant="outline">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Tools & Technologies */}
        <div>
          <h2 className="text-3xl font-bold mb-8">Tools & Technologies</h2>
          <Card className="card-hover">
            <CardHeader>
              <CardTitle className="text-xl">Development & Productivity Tools</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                {tools.map((tool, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center space-x-2">
                        <span className="font-medium">{tool.name}</span>
                        <Badge variant="outline" className={getCategoryColor(tool.category)}>
                          {tool.category}
                        </Badge>
                      </div>
                      <span className="text-sm text-muted-foreground">{tool.level}%</span>
                    </div>
                    <Progress value={tool.level} />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Skills Summary */}
        <div className="mt-16">
          <Card className="card-hover">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Skills Summary</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-4 gap-8 text-center">
                <div>
                  <Code className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Programming</h3>
                  <p className="text-sm text-muted-foreground">
                    Proficient in Python, JavaScript, and web technologies
                  </p>
                </div>
                
                <div>
                  <Brain className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">AI/ML</h3>
                  <p className="text-sm text-muted-foreground">
                    Machine learning, data analysis, and AI application development
                  </p>
                </div>
                
                <div>
                  <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Collaboration</h3>
                  <p className="text-sm text-muted-foreground">
                    Strong teamwork and communication skills
                  </p>
                </div>
                
                <div>
                  <Trophy className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Continuous Learning</h3>
                  <p className="text-sm text-muted-foreground">
                    Certified professional with commitment to growth
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Skills;