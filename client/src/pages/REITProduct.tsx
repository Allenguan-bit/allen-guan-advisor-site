import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, ExternalLink, CheckCircle } from "lucide-react";
import { useLocation } from "wouter";

export default function REITProduct() {
  const [, navigate] = useLocation();

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      {/* Header */}
      <header className="border-b border-border bg-white sticky top-0 z-50">
        <div className="container py-4 flex items-center justify-between">
          <Button 
            variant="ghost" 
            className="gap-2 text-primary hover:bg-secondary"
            onClick={() => navigate('/')}
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Button>
          <a href="https://www.enochwm.ca/" target="_blank" rel="noopener noreferrer" className="text-sm text-accent hover:underline flex items-center gap-1">
            Enoch Wealth <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary to-primary/80 text-white py-16">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold mb-4">Real Estate Investment Trusts (REITs)</h1>
            <p className="text-lg text-white/90">
              Diversified real estate investments with monthly distributions and tax advantages
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container max-w-3xl">
          {/* Overview */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-primary mb-6">What are REITs?</h2>
            <p className="text-foreground/80 mb-4">
              Real Estate Investment Trusts (REITs) allow investors to participate in real estate ownership without directly purchasing properties. REITs generate income through rental payments and property appreciation, distributing returns to investors regularly.
            </p>
            <p className="text-foreground/80">
              Our featured REIT focuses on multi-unit residential properties with conservative leverage, providing stable cash flows and tax-efficient income.
            </p>
          </div>

          {/* Key Metrics */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="text-sm text-muted-foreground">Average Annual Return</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold text-accent">8.63%</p>
                <p className="text-xs text-muted-foreground mt-2">5-year average (as of Jan 2026)</p>
              </CardContent>
            </Card>
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="text-sm text-muted-foreground">Distribution Frequency</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold text-accent">Monthly</p>
                <p className="text-xs text-muted-foreground mt-2">Consistent cash flow</p>
              </CardContent>
            </Card>
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="text-sm text-muted-foreground">Leverage</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold text-accent">Low</p>
                <p className="text-xs text-muted-foreground mt-2">Conservative structure</p>
              </CardContent>
            </Card>
          </div>

          {/* Investment Highlights */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-primary mb-6">Investment Highlights</h2>
            <div className="space-y-4">
              <div className="flex gap-4">
                <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Monthly Distributions</h3>
                  <p className="text-foreground/70">Receive regular income payments directly to your account</p>
                </div>
              </div>
              <div className="flex gap-4">
                <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Tax Advantages</h3>
                  <p className="text-foreground/70">Benefit from tax-efficient distribution structures</p>
                </div>
              </div>
              <div className="flex gap-4">
                <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Diversified Portfolio</h3>
                  <p className="text-foreground/70">Exposure to multiple multi-unit residential properties</p>
                </div>
              </div>
              <div className="flex gap-4">
                <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Conservative Structure</h3>
                  <p className="text-foreground/70">Low leverage reduces risk and enhances stability</p>
                </div>
              </div>
            </div>
          </div>

          {/* Product Details */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-primary mb-6">Product Details</h2>
            <Card className="border-border">
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="flex justify-between py-3 border-b border-border">
                    <span className="text-foreground/70">Product Name</span>
                    <span className="font-semibold">iCapital Franklin Clarion REIT</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-border">
                    <span className="text-foreground/70">Asset Class</span>
                    <span className="font-semibold">Real Estate (Multi-unit Residential)</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-border">
                    <span className="text-foreground/70">Investment Type</span>
                    <span className="font-semibold">Exempt Market Security</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-border">
                    <span className="text-foreground/70">Minimum Investment</span>
                    <span className="font-semibold">Contact for details</span>
                  </div>
                  <div className="flex justify-between py-3">
                    <span className="text-foreground/70">Distribution Frequency</span>
                    <span className="font-semibold">Monthly</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Risk Disclosure */}
          <div className="mb-12 p-6 bg-secondary/50 rounded-lg border border-border">
            <h3 className="font-semibold text-foreground mb-3">Important Considerations</h3>
            <p className="text-sm text-foreground/70">
              This is an exempt market security and is not suitable for all investors. Past performance is not indicative of future results. All investments carry risk, including potential loss of principal. Before investing, please review the offering documents carefully and consult with a qualified financial advisor to determine if this investment is appropriate for your financial situation and investment objectives.
            </p>
          </div>

          {/* CTA */}
          <div className="flex gap-4">
            <Button 
              className="flex-1 bg-primary hover:bg-primary/90 text-white"
              onClick={() => window.location.href = 'mailto:allenguan@enochwm.ca?subject=REIT%20Investment%20Inquiry'}
            >
              Request More Information
            </Button>
            <Button 
              variant="outline" 
              className="flex-1"
              onClick={() => window.open('https://www.enochwm.ca/', '_blank')}
            >
              Visit Enoch Wealth
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-white py-12 border-t border-primary/20 mt-16">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="font-bold mb-4">Allen Guan</h3>
              <p className="text-white/80 text-sm">
                Private Market Investment Product Sales Consultant
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="/" className="text-white/80 hover:text-white transition">Home</a></li>
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
          <div className="border-t border-white/20 pt-8 text-sm text-white/70">
            <p>&copy; 2026 Allen Guan. Enoch Wealth is a registered Exempt Market Dealer.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
