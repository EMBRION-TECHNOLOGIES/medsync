import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import Typography from '@/components/ui/Typography';

export const metadata = {
  title: 'Test Page',
  description: 'TeraSync test page for development and debugging.',
};

export default function TestPage() {
  return (
    <main className="min-h-screen">
      <NavBar />
      
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-ms-blue/5 to-ms-green/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-tr from-ms-green/5 to-ms-yellow/5 rounded-full blur-3xl"></div>
        </div>

        <div className="container relative z-10">
          <div className="text-center max-w-[64rem] mx-auto">
            <Typography variant="h1" className="mb-8 text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="text-gradient block">TeraSync Test Page</span>
              <span className="text-slate-900 block text-3xl md:text-4xl lg:text-5xl font-semibold mt-4">
                Development & Debugging
              </span>
            </Typography>
            <Typography variant="bodyLarge" className="text-xl md:text-2xl text-slate-600 leading-relaxed content-narrow">
              Test page for development, debugging, and component validation.
            </Typography>
          </div>
        </div>
      </section>

      {/* Test Content */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="max-w-[72rem] mx-auto">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {/* Font Test Card */}
              <div className="card card-elevated p-8 animate-fade-in-up">
                <Typography variant="h3" className="mb-6 text-2xl font-semibold">
                  Font Test
                </Typography>
                <Typography variant="body" className="text-slate-600 mb-6">
                  This is a test of the Nunito Sans font. If you can see this text properly styled, 
                  the font is working correctly.
                </Typography>
                <div className="space-y-2 text-sm">
                  <div className="font-light">Light 300</div>
                  <div className="font-normal">Normal 400</div>
                  <div className="font-medium">Medium 500</div>
                  <div className="font-semibold">Semibold 600</div>
                  <div className="font-bold">Bold 700</div>
                </div>
              </div>
              
              {/* Brand Colors Card */}
              <div className="card card-elevated p-8 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                <Typography variant="h3" className="mb-6 text-2xl font-semibold">
                  Brand Colors
                </Typography>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 bg-ms-blue rounded-lg shadow-sm"></div>
                    <div>
                      <div className="font-semibold text-slate-900">Primary Blue</div>
                      <div className="text-sm text-slate-600">#0094FF</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 bg-ms-green rounded-lg shadow-sm"></div>
                    <div>
                      <div className="font-semibold text-slate-900">Secondary Green</div>
                      <div className="text-sm text-slate-600">#42B867</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 bg-ms-yellow rounded-lg shadow-sm"></div>
                    <div>
                      <div className="font-semibold text-slate-900">Accent Yellow</div>
                      <div className="text-sm text-slate-600">#FFD166</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Button Test Card */}
              <div className="card card-elevated p-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                <Typography variant="h3" className="mb-6 text-2xl font-semibold">
                  Button Test
                </Typography>
                <div className="space-y-4">
                  <button className="btn btn-primary w-full">
                    Primary Button
                  </button>
                  <button className="btn btn-outline w-full">
                    Outline Button
                  </button>
                  <button className="btn btn-ghost w-full">
                    Ghost Button
                  </button>
                  <button className="ms-gradient text-white px-6 py-3 rounded-lg shadow-md hover:opacity-90 transition-opacity w-full">
                    Gradient Button
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
