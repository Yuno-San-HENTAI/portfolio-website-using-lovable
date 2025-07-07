import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Brain, Code, Users, Zap } from 'lucide-react';

const About = () => {
  const traits = [
    {
      icon: Brain,
      title: 'Quick Learner',
      description: 'Always eager to take on new challenges and expand my knowledge in AI/ML'
    },
    {
      icon: Code,
      title: 'Problem Solver',
      description: 'Love tackling complex problems with innovative technological solutions'
    },
    {
      icon: Users,
      title: 'Team Player',
      description: 'Strong communication skills and enjoy collaborating with others'
    },
    {
      icon: Zap,
      title: 'Hardworking',
      description: 'Dedicated to continuous improvement and professional growth'
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="hero-text">About Me</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get to know more about my journey, interests, and what drives me in the world of technology
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-3 gap-12 mb-16">
          {/* Personal Story */}
          <div className="lg:col-span-2">
            <Card className="card-hover h-full">
              <CardHeader>
                <CardTitle className="text-2xl">My Story</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  I am a 20-year-old BCA student at Parul University with a strong academic foundation 
                  from Kota, Rajasthan. My journey in technology began during my higher secondary education 
                  at MB Public Sr Sec School, where I first discovered my passion for programming and 
                  problem-solving.
                </p>
                
                <p className="text-muted-foreground leading-relaxed">
                  Currently, I have a keen interest in Artificial Intelligence and Machine Learning, 
                  which has led me to actively participate in hackathons and coding competitions. 
                  These experiences have not only enhanced my technical skills but also taught me 
                  the value of innovation and teamwork.
                </p>
                
                <p className="text-muted-foreground leading-relaxed">
                  I consider myself a hardworking and quick learner, always eager to take on new 
                  challenges and expand my knowledge. I am currently seeking an entry-level opportunity 
                  where I can apply my skills, gain hands-on experience, and grow as a professional 
                  in the AI/ML and development fields.
                </p>

                <div className="pt-4">
                  <h3 className="text-lg font-semibold mb-4">Current Focus Areas</h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Artificial Intelligence</Badge>
                    <Badge variant="secondary">Machine Learning</Badge>
                    <Badge variant="secondary">Web Development</Badge>
                    <Badge variant="secondary">Blockchain Technology</Badge>
                    <Badge variant="secondary">Python Programming</Badge>
                    <Badge variant="secondary">Data Analysis</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Profile Image Placeholder */}
          <div className="lg:col-span-1">
            <Card className="card-hover">
              <CardContent className="p-8 text-center">
                <div className="w-48 h-48 mx-auto rounded-full bg-gradient-to-r from-primary to-primary-glow flex items-center justify-center text-white text-6xl font-bold shadow-lg mb-6">
                  HP
                </div>
                <h3 className="text-xl font-semibold mb-2">Harshit Panchal</h3>
                <p className="text-muted-foreground mb-4">AI/ML Enthusiast</p>
                <Badge className="bg-primary text-primary-foreground">Available for Opportunities</Badge>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Key Traits */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">What Defines Me</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {traits.map((trait, index) => (
              <Card key={index} className="card-hover text-center">
                <CardContent className="p-8">
                  <trait.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-3">{trait.title}</h3>
                  <p className="text-muted-foreground text-sm">{trait.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Goals & Aspirations */}
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="card-hover">
            <CardHeader>
              <CardTitle className="text-xl">Short-term Goals</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Complete my current AI/ML internship at IBM SkillsBuild successfully
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Build more practical AI/ML projects to strengthen my portfolio
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Secure an entry-level position in AI/ML development
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Continue learning advanced AI/ML techniques and frameworks
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="card-hover">
            <CardHeader>
              <CardTitle className="text-xl">Long-term Vision</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Become a skilled AI/ML engineer contributing to innovative solutions
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Lead development of AI applications that solve real-world problems
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Pursue advanced studies or certifications in specialized AI fields
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Contribute to open-source AI projects and research communities
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default About;