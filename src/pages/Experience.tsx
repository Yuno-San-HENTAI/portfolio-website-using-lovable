import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CalendarDays, Building, MapPin } from 'lucide-react';

const Experience = () => {
  return (
    <div className="min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="hero-text">Experience</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            My professional journey and hands-on experience in AI/ML development
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 h-full w-0.5 bg-border"></div>

          {/* Current Experience */}
          <div className="relative mb-12">
            <div className="flex items-center mb-8">
              <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background z-10"></div>
              <div className="ml-12 md:ml-0 md:w-1/2 md:pr-8">
                <Card className="card-hover">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-xl mb-2">
                          Artificial Intelligence & Machine Learning Intern
                        </CardTitle>
                        <div className="flex items-center text-muted-foreground mb-2">
                          <Building className="w-4 h-4 mr-2" />
                          <span className="font-medium">IBM SkillsBuild</span>
                        </div>
                        <div className="flex items-center text-muted-foreground mb-4">
                          <CalendarDays className="w-4 h-4 mr-2" />
                          <span>2025 - Present</span>
                        </div>
                      </div>
                      <Badge className="bg-green-100 text-green-800 border-green-200">
                        Current
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <p className="text-muted-foreground">
                        Participating in a comprehensive 6-week AI/ML internship program focused on 
                        practical applications of machine learning technologies.
                      </p>
                      
                      <div>
                        <h4 className="font-semibold mb-3">Key Responsibilities & Achievements:</h4>
                        <ul className="space-y-2 text-muted-foreground">
                          <li className="flex items-start">
                            <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            Developing practical machine learning applications and models
                          </li>
                          <li className="flex items-start">
                            <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            Working on "Income Predictor" project - building a model to predict income based on skills, experience, and other relevant factors
                          </li>
                          <li className="flex items-start">
                            <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            Learning industry-standard AI/ML tools and frameworks
                          </li>
                          <li className="flex items-start">
                            <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            Gaining hands-on experience with data preprocessing, model training, and evaluation
                          </li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-3">Current Project:</h4>
                        <Card className="bg-muted/50">
                          <CardContent className="p-4">
                            <h5 className="font-medium mb-2">Income Predictor Model</h5>
                            <p className="text-sm text-muted-foreground mb-3">
                              Developing a machine learning model that predicts income levels based on various factors including skills, experience, education, and other demographic variables.
                            </p>
                            <div className="flex flex-wrap gap-2">
                              <Badge variant="outline" className="text-xs">Python</Badge>
                              <Badge variant="outline" className="text-xs">Scikit-learn</Badge>
                              <Badge variant="outline" className="text-xs">Pandas</Badge>
                              <Badge variant="outline" className="text-xs">NumPy</Badge>
                              <Badge variant="outline" className="text-xs">Data Analysis</Badge>
                            </div>
                          </CardContent>
                        </Card>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-3">Skills Being Developed:</h4>
                        <div className="flex flex-wrap gap-2">
                          <Badge variant="secondary">Machine Learning</Badge>
                          <Badge variant="secondary">Data Science</Badge>
                          <Badge variant="secondary">Python Programming</Badge>
                          <Badge variant="secondary">Statistical Analysis</Badge>
                          <Badge variant="secondary">Model Evaluation</Badge>
                          <Badge variant="secondary">Data Visualization</Badge>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          {/* Academic Projects & Experience */}
          <div className="relative mb-12">
            <div className="flex items-center">
              <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 w-4 h-4 bg-muted-foreground rounded-full border-4 border-background z-10"></div>
              <div className="ml-12 md:ml-0 md:w-1/2 md:pl-8 md:ml-auto">
                <Card className="card-hover">
                  <CardHeader>
                    <CardTitle className="text-xl mb-2">
                      Academic Projects & Self-Learning
                    </CardTitle>
                    <div className="flex items-center text-muted-foreground mb-2">
                      <Building className="w-4 h-4 mr-2" />
                      <span className="font-medium">Parul University & Personal Projects</span>
                    </div>
                    <div className="flex items-center text-muted-foreground mb-4">
                      <CalendarDays className="w-4 h-4 mr-2" />
                      <span>2023 - Present</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <p className="text-muted-foreground">
                        Actively engaged in self-directed learning and practical application of 
                        programming concepts through various academic and personal projects.
                      </p>
                      
                      <div>
                        <h4 className="font-semibold mb-3">Key Activities:</h4>
                        <ul className="space-y-2 text-muted-foreground">
                          <li className="flex items-start">
                            <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            Participating in hackathons and coding competitions
                          </li>
                          <li className="flex items-start">
                            <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            Building personal projects to explore new technologies
                          </li>
                          <li className="flex items-start">
                            <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            Self-studying AI/ML concepts and frameworks
                          </li>
                          <li className="flex items-start">
                            <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            Contributing to open-source learning initiatives
                          </li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-3">Technologies Explored:</h4>
                        <div className="flex flex-wrap gap-2">
                          <Badge variant="secondary">Python</Badge>
                          <Badge variant="secondary">JavaScript</Badge>
                          <Badge variant="secondary">HTML/CSS</Badge>
                          <Badge variant="secondary">Blockchain</Badge>
                          <Badge variant="secondary">Web Development</Badge>
                          <Badge variant="secondary">Problem Solving</Badge>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Summary */}
        <div className="mt-16">
          <Card className="card-hover">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Professional Skills Summary</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🤖</span>
                  </div>
                  <h3 className="font-semibold mb-2">AI/ML Development</h3>
                  <p className="text-sm text-muted-foreground">
                    Practical experience with machine learning models, data analysis, and AI applications
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">💻</span>
                  </div>
                  <h3 className="font-semibold mb-2">Programming</h3>
                  <p className="text-sm text-muted-foreground">
                    Strong foundation in Python, web technologies, and blockchain development
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🎯</span>
                  </div>
                  <h3 className="font-semibold mb-2">Problem Solving</h3>
                  <p className="text-sm text-muted-foreground">
                    Experience from hackathons, coding competitions, and project development
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

export default Experience;