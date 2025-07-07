import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, Phone, MapPin, Github, MessageCircle } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="hero-text">Contact Me</span>
          </h1>
          <p className="text-xl text-muted-foreground">Let's connect and discuss opportunities</p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="card-hover">
              <CardHeader>
                <CardTitle className="text-2xl">Get In Touch</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-muted-foreground">
                  I'm always open to discussing new opportunities, collaborations, or just having a chat about technology and AI/ML. Feel free to reach out!
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-primary" />
                    <a 
                      href="mailto:harshitpanchal060@gmail.com"
                      className="hover:text-primary transition-colors"
                    >
                      harshitpanchal060@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-primary" />
                    <a 
                      href="tel:+916375318991"
                      className="hover:text-primary transition-colors"
                    >
                      +91 6375318991
                    </a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MessageCircle className="w-5 h-5 text-primary" />
                    <a 
                      href="https://wa.me/916375318991" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      WhatsApp: +91 6375318991
                    </a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-primary" />
                    <span>Kota, Rajasthan, India</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Github className="w-5 h-5 text-primary" />
                    <a 
                      href="https://github.com/Yuno-San-HENTAI" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      github.com/Yuno-San-HENTAI
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader>
                <CardTitle className="text-xl">What I'm Looking For</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-muted-foreground">
                  <li>• Entry-level AI/ML positions</li>
                  <li>• Internship opportunities</li>
                  <li>• Collaborative projects</li>
                  <li>• Learning opportunities</li>
                  <li>• Mentorship connections</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader>
                <CardTitle className="text-xl">Preferred Communication</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  I prefer direct communication through the channels listed above. Feel free to reach out via:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• <strong>Email</strong> for formal inquiries and detailed discussions</li>
                  <li>• <strong>WhatsApp</strong> for quick questions and immediate responses</li>
                  <li>• <strong>Phone</strong> for urgent matters or scheduled calls</li>
                  <li>• <strong>GitHub</strong> for technical discussions and code reviews</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;