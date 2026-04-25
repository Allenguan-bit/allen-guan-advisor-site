import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Phone, Mail, ExternalLink } from "lucide-react";
import { useLocation } from "wouter";

export default function Home() {
  const [, navigate] = useLocation();

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      {/* Header */}
      <header className="border-b border-border bg-white sticky top-0 z-50">
        <div className="container py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">AG</span>
            </div>
            <div>
              <h1 className="text-lg font-bold text-primary">Allen Guan</h1>
              <p className="text-xs text-muted-foreground">Enoch Wealth Advisor</p>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#products" className="text-sm hover:text-accent transition">Products</a>
            <a href="#contact" className="text-sm hover:text-accent transition">Contact</a>
            <a href="https://www.enochwm.ca/" target="_blank" rel="noopener noreferrer" className="text-sm text-accent hover:underline flex items-center gap-1">
              Enoch Wealth <ExternalLink className="w-3 h-3" />
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary/80 text-white py-20">
        <div className="container">
          <div className="max-w-2xl">
            <h1 className="text-5xl font-bold mb-6">Private Market Investment Opportunities</h1>
            <p className="text-lg text-white/90 mb-8">
              As a Private Market Investment Product Sales Consultant at Enoch Wealth, I specialize in connecting qualified investors with alternative investment opportunities including REITs, MICs, and other exempt market securities.
            </p>
            <div className="flex gap-4">
              <Button 
                className="bg-accent text-primary hover:bg-accent/90"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Schedule Consultation
              </Button>
              <Button 
                variant="outline" 
                className="border-white text-white hover:bg-white/10"
                onClick={() => window.open('https://www.enochwm.ca/', '_blank')}
              >
                Visit Enoch Wealth
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="container max-w-3xl">
          <h2 className="text-3xl font-bold mb-6 text-primary">About Me</h2>
          <p className="text-lg text-foreground/80 mb-4">
            With a focus on alternative investments and private market opportunities, I help qualified Canadian investors diversify their portfolios beyond traditional markets. I work with Enoch Wealth, a registered Exempt Market Dealer operating across British Columbia, Alberta, and Ontario.
          </p>
          <p className="text-lg text-foreground/80">
            My expertise covers Real Estate Investment Trusts (REITs), Mortgage Investment Corporations (MICs), fixed income investments, and emerging alternative assets. I'm committed to providing thorough due diligence and helping clients understand the unique benefits and risks of each investment opportunity.
          </p>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 bg-secondary/30">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-primary">Featured Investment Products</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* REIT Card */}
            <Card className="hover:shadow-lg transition cursor-pointer border-border" onClick={() => navigate('/products/reit')}>
              <CardHeader>
                <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-accent text-xl font-bold">🏢</span>
                </div>
                <CardTitle className="text-primary">Real Estate Investment Trusts</CardTitle>
                <CardDescription>REITs</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/80 mb-6">
                  Invest in diversified real estate portfolios with monthly distributions and tax advantages. Our featured REIT offers strong historical returns and low leverage.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-accent">Learn More</span>
                  <ArrowRight className="w-4 h-4 text-accent" />
                </div>
              </CardContent>
            </Card>

            {/* MIC Card */}
            <Card className="hover:shadow-lg transition cursor-pointer border-border" onClick={() => navigate('/products/mic')}>
              <CardHeader>
                <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-accent text-xl font-bold">🏦</span>
                </div>
                <CardTitle className="text-primary">Mortgage Investment Corporations</CardTitle>
                <CardDescription>MICs</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/80 mb-6">
                  Generate consistent income from mortgage-backed investments. MICs offer attractive returns with tax benefits for non-resident investors.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-accent">Learn More</span>
                  <ArrowRight className="w-4 h-4 text-accent" />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container max-w-2xl">
          <h2 className="text-3xl font-bold mb-12 text-primary">Get in Touch</h2>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="flex gap-4">
              <Phone className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-foreground mb-1">Phone</h3>
                <a href="tel:416-857-4732" className="text-accent hover:underline">
                  416-857-4732
                </a>
              </div>
            </div>
            <div className="flex gap-4">
              <Mail className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-foreground mb-1">Email</h3>
                <a href="mailto:allenguan@enochwm.ca" className="text-accent hover:underline">
                  allenguan@enochwm.ca
                </a>
              </div>
            </div>
          </div>
          <Button 
            className="w-full bg-primary hover:bg-primary/90 text-white"
            onClick={() => window.location.href = 'mailto:allenguan@enochwm.ca'}
          >
            Send Email
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-white py-12 border-t border-primary/20">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="font-bold mb-4">Allen Guan</h3>
              <p className="text-white/80 text-sm">
                Private Market Investment Product Sales Consultant at Enoch Wealth
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#products" className="text-white/80 hover:text-white transition">Products</a></li>
                <li><a href="#contact" className="text-white/80 hover:text-white transition">Contact</a></li>
                <li><a href="https://www.enochwm.ca/" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition flex items-center gap-1">
                  Enoch Wealth <ExternalLink className="w-3 h-3" />
                </a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Contact</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="tel:416-857-4732" className="text-white/80 hover:text-white transition">416-857-4732</a></li>
                <li><a href="mailto:allenguan@enochwm.ca" className="text-white/80 hover:text-white transition">allenguan@enochwm.ca</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-white/70">
            <p>&copy; 2026 Allen Guan. All rights reserved.</p>
            <p>
              Enoch Wealth is a registered Exempt Market Dealer in BC, Alberta, and Ontario.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
