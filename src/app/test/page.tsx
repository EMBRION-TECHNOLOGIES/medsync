export default function TestPage() {
  return (
    <div className="min-h-screen bg-white p-8">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-zinc-900 mb-6">
          MedSync Test Page
        </h1>
        
        <div className="grid gap-6 md:grid-cols-2">
          <div className="bg-white border rounded-lg p-6 shadow-sm">
            <h2 className="text-2xl font-semibold text-zinc-900 mb-4">Font Test</h2>
            <p className="text-zinc-600 mb-4">
              This is a test of the Nunito Sans font. If you can see this text properly styled, 
              the font is working correctly.
            </p>
            <p className="text-sm text-zinc-500">
              Font weights: <span className="font-light">Light 300</span>, 
              <span className="font-normal"> Normal 400</span>, 
              <span className="font-medium"> Medium 500</span>, 
              <span className="font-semibold"> Semibold 600</span>, 
              <span className="font-bold"> Bold 700</span>
            </p>
          </div>
          
          <div className="bg-white border rounded-lg p-6 shadow-sm">
            <h2 className="text-2xl font-semibold text-zinc-900 mb-4">Brand Colors</h2>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-[#0094FF] rounded"></div>
                <span className="text-zinc-600">Primary Blue</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-[#42B867] rounded"></div>
                <span className="text-zinc-600">Secondary Green</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-[#FFD166] rounded"></div>
                <span className="text-zinc-600">Accent Yellow</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-8">
          <button className="ms-gradient text-white px-6 py-3 rounded-lg shadow-md hover:opacity-90 transition-opacity">
            Test Gradient Button
          </button>
        </div>
      </div>
    </div>
  );
}
