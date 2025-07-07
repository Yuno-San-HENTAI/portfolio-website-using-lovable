import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const Education = () => {
  return (
    <div className="min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="hero-text">Education</span>
          </h1>
          <p className="text-xl text-muted-foreground">My academic journey and achievements</p>
        </div>

        <div className="space-y-8">
          {/* Current Education */}
          <Card className="card-hover">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex items-start space-x-4">
                  <GraduationCap className="w-12 h-12 text-primary mt-2" />
                  <div>
                    <CardTitle className="text-2xl mb-2">Bachelor in Computer Applications</CardTitle>
                    <div className="space-y-2">
                      <div className="flex items-center text-muted-foreground">
                        <MapPin className="w-4 h-4 mr-2" />
                        <span className="font-medium">Parul University</span>
                      </div>
                      <div className="flex items-center text-muted-foreground">
                        <Calendar className="w-4 h-4 mr-2" />
                        <span>2025-2028</span>
                      </div>
                    </div>
                  </div>
                </div>
                <Badge className="bg-blue-100 text-blue-800">Current</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Currently pursuing Bachelor in Computer Applications with a focus on modern computing technologies, 
                programming fundamentals, and practical application development.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">Key Focus Areas:</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Computer Programming</li>
                    <li>• Data Structures & Algorithms</li>
                    <li>• Database Management</li>
                    <li>• Web Development</li>
                    <li>• Software Engineering</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Achievements:</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Strong academic foundation</li>
                    <li>• Active participation in hackathons</li>
                    <li>• Practical project development</li>
                    <li>• Focus on AI/ML specialization</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Previous Education */}
          <Card className="card-hover">
            <CardHeader>
              <div className="flex items-start space-x-4">
                <GraduationCap className="w-12 h-12 text-muted-foreground mt-2" />
                <div>
                  <CardTitle className="text-2xl mb-2">12th - Higher Secondary School</CardTitle>
                  <div className="space-y-2">
                    <div className="flex items-center text-muted-foreground">
                      <MapPin className="w-4 h-4 mr-2" />
                      <span className="font-medium">MB Public Sr Sec School</span>
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>2023</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Completed higher secondary education with a strong foundation in mathematics, science, and computer applications, 
                which sparked my interest in technology and programming.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Education;