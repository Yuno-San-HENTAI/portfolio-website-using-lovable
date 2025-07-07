import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Download, MapPin, Phone, Mail, Github } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const handleResumeDownload = () => {
    // Convert Google Drive view link to direct download link
    const driveFileId = '1gUlvLKRCppWcn6ZSEy7pIVzS4nLYhY8z';
    const downloadUrl = `https://drive.google.com/uc?export=download&id=${driveFileId}`;
    
    // Open in new tab to trigger download
    window.open(downloadUrl, '_blank');
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block mb-6">
              <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-primary to-primary-glow flex items-center justify-center text-white text-4xl font-bold shadow-lg">
                HP
              </div>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="hero-text">Harshit Panchal</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-2">
              AI/ML Enthusiast & Developer
            </p>
            
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Fresher passionate about Artificial Intelligence and Machine Learning. 
              Currently pursuing BCA at Parul University with hands-on experience in AI development.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Link to="/projects">
                <Button size="lg" className="btn-gradient text-white px-8 py-6 text-lg">
                  View My Projects
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="px-8 py-6 text-lg"
                onClick={handleResumeDownload}
              >
                <Download className="mr-2 w-5 h-5" />
                Download Resume
              </Button>
            </div>

            {/* Contact Info */}
            <div className="flex flex-wrap justify-center gap-6 text-muted-foreground">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Kota, Rajasthan</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>6375318991</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>harshitpanchal060@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Github className="w-4 h-4" />
                <a 
                  href="https://github.com/Yuno-San-HENTAI" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  GitHub Profile
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <Card className="card-hover text-center">
              <CardContent className="p-8">
                <div className="text-3xl font-bold text-primary mb-2">2+</div>
                <div className="text-muted-foreground">Years of Study</div>
              </CardContent>
            </Card>
            
            <Card className="card-hover text-center">
              <CardContent className="p-8">
                <div className="text-3xl font-bold text-primary mb-2">1</div>
                <div className="text-muted-foreground">Active Internship</div>
              </CardContent>
            </Card>
            
            <Card className="card-hover text-center">
              <CardContent className="p-8">
                <div className="text-3xl font-bold text-primary mb-2">2</div>
                <div className="text-muted-foreground">Certifications</div>
              </CardContent>
            </Card>
            
            <Card className="card-hover text-center">
              <CardContent className="p-8">
                <div className="text-3xl font-bold text-primary mb-2">1</div>
                <div className="text-muted-foreground">Major Project</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Project Preview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Featured Project</h2>
            <p className="text-xl text-muted-foreground">My latest work in blockchain healthcare</p>
          </div>
          
          <Card className="card-hover max-w-4xl mx-auto">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4">TrustRx - Blockchain Health Records</h3>
                  <p className="text-muted-foreground mb-6">
                    Developed a decentralized health record storage platform using Supabase, 
                    Algorand blockchain, and modern web technologies. Features secure patient 
                    data management and doctor consultations.
                  </p>
                  <Link to="/projects">
                    <Button>
                      Learn More
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                </div>
                <div className="bg-gradient-to-br from-primary/10 to-primary-glow/10 rounded-lg p-8 text-center">
                  <div className="w-24 h-24 mx-auto rounded-full bg-primary/20 flex items-center justify-center mb-4">
                    <span className="text-2xl">🏥</span>
                  </div>
                  <div className="text-sm text-muted-foreground">Blockchain Healthcare Solution</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Home;