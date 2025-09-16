import React, { useState } from 'react';
import { 
  Phone, 
  Upload, 
  MessageSquare, 
  CheckCircle, 
  Wrench, 
  Truck, 
  Heart, 
  HardHat, 
  Car, 
  ChefHat,
  Play,
  Pause,
  Shield,
  FileCheck,
  ChevronDown
} from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 py-4">
      <button
        className="flex justify-between items-center w-full text-left"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span className="font-medium text-gray-900">{question}</span>
        <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      {isOpen && (
        <div className="mt-3 text-gray-600">
          {answer}
        </div>
      )}
    </div>
  );
};

const AudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const totalTime = 180; // 3 minutes

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
    if (!isPlaying) {
      // Simulate playback
      const interval = setInterval(() => {
        setCurrentTime(prev => {
          if (prev >= totalTime) {
            setIsPlaying(false);
            clearInterval(interval);
            return 0;
          }
          return prev + 1;
        });
      }, 1000);
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 max-w-md mx-auto">
      <div className="flex items-center justify-between mb-4">
        <h4 className="font-semibold text-gray-900">Live Demo</h4>
        <span className="text-sm text-gray-500">{formatTime(currentTime)} / {formatTime(totalTime)}</span>
      </div>
      
      <div className="bg-gray-200 rounded-full h-2 mb-6">
        <div 
          className="bg-[#7258D8] h-2 rounded-full transition-all duration-300"
          style={{ width: `${(currentTime / totalTime) * 100}%` }}
        ></div>
      </div>
      
      <button
        onClick={togglePlay}
        className="w-full bg-[#7258D8] text-white py-3 px-6 rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-[#6147c7] transition-colors"
      >
        {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
        {isPlaying ? 'Pause Demo' : 'Play Demo'}
      </button>
    </div>
  );
};

function App() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm border-b border-gray-100 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-[#7258D8] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">V</span>
              </div>
              <span className="text-xl font-bold text-gray-900">Voira</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection('how-it-works')} className="text-gray-600 hover:text-gray-900 transition-colors">How it Works</button>
              <button onClick={() => scrollToSection('benefits')} className="text-gray-600 hover:text-gray-900 transition-colors">Benefits</button>
              <button onClick={() => scrollToSection('demo')} className="text-gray-600 hover:text-gray-900 transition-colors">Demo</button>
              <button onClick={() => scrollToSection('faq')} className="text-gray-600 hover:text-gray-900 transition-colors">FAQ</button>
            </div>
            
            <button className="bg-[#7258D8] text-white px-6 py-2 rounded-lg font-semibold hover:bg-[#6147c7] transition-colors">
              Try Voira
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              <div>Voira</div>
              <div className="text-gray-600">The new voice era</div>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 mb-8 leading-relaxed">
              Your expert on the phone. Upload your docs. Call Voira. Get hands-free, step-by-step guidance while you work.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button className="bg-[#7258D8] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#6147c7] transition-colors transform hover:scale-105">
                Try Voira
              </button>
              <button className="border border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold text-lg hover:border-gray-400 transition-colors transform hover:scale-105">
                Watch 60-sec demo
              </button>
            </div>
            
            {/* Hero Illustration */}
            <div className="relative max-w-2xl mx-auto">
              <div className="p-8">
                <div className="flex items-center justify-center">
                  {/* Animated Voice Waveform */}
                  <div className="flex items-center justify-center space-x-1">
                    {[...Array(20)].map((_, i) => (
                      <div
                        key={i}
                        className="bg-gradient-to-t from-[#7258D8] to-[#6CC3FF] rounded-full animate-pulse"
                        style={{
                          width: '4px',
                          height: `${Math.random() * 40 + 10}px`,
                          animationDelay: `${i * 0.1}s`,
                          animationDuration: `${0.8 + Math.random() * 0.4}s`
                        }}
                      ></div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who it's for */}
      <section id="who-its-for" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Who Voira is for</h2>
          <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Anyone who needs hands-free access to expert knowledge while working. Here are some of our most common use cases:
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {[
              { icon: Wrench, title: 'Field Technicians', subtitle: '& Maintenance' },
              { icon: Truck, title: 'Logistics', subtitle: '& Warehousing' },
              { icon: Heart, title: 'Healthcare', subtitle: '& Clinics' },
              { icon: HardHat, title: 'Construction', subtitle: '& Trades' },
              { icon: Car, title: 'Drivers', subtitle: '& Couriers' },
              { icon: ChefHat, title: 'Kitchens', subtitle: '& F&B Ops' },
            ].map((item, index) => (
              <div key={index} className="text-center group cursor-pointer">
                <div className="w-16 h-16 bg-white rounded-xl shadow-sm flex items-center justify-center mx-auto mb-4 group-hover:shadow-md transition-shadow">
                  <item.icon className="w-8 h-8 text-[#7258D8]" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.subtitle}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem -> Solution */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Work stops when you need to read a manual.
              </h2>
              <div className="w-24 h-1 bg-red-400 mx-auto lg:mx-0 mb-6"></div>
              <p className="text-lg text-gray-600">
                Fumbling with paperwork, squinting at screens, or stopping to search through documents kills productivity and increases errors.
              </p>
            </div>
            
            <div className="text-center lg:text-left">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Call Voira. She cites your SOPs and walks you through.
              </h2>
              <div className="w-24 h-1 bg-[#7258D8] mx-auto lg:mx-0 mb-6"></div>
              <p className="text-lg text-gray-600">
                Natural voice conversation with your expert knowledge base. Get precise guidance with citations while keeping your hands free.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">How it works in 3 steps</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Upload,
                step: '1. Ingest',
                title: 'Upload PDFs/URLs/MD → private knowledge base',
                description: 'Simply upload your documents, SOPs, and manuals to create a secure knowledge base'
              },
              {
                icon: Phone,
                step: '2. Call',
                title: 'Phone/WhatsApp, natural voice, barge-in',
                description: 'Call Voira anytime through phone or WhatsApp using natural conversation'
              },
              {
                icon: MessageSquare,
                step: '3. Guide',
                title: 'Step-by-step with citations, then SMS/Slack checklist',
                description: 'Get precise guidance with source citations followed by digital checklists'
              }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-[#7258D8] rounded-xl flex items-center justify-center mx-auto mb-6">
                  <item.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.step}</h3>
                <h4 className="font-semibold text-gray-900 mb-3">{item.title}</h4>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section id="benefits" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Your expert on the line</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Hands-free guidance',
                description: 'Works anywhere without screens'
              },
              {
                title: 'Grounded answers with direct citations',
                description: 'Every answer cites your documents'
              },
              {
                title: 'Personal memory of your equipment & process',
                description: 'Learns your specific workflows'
              },
              {
                title: 'Works anywhere (no screen)',
                description: 'Perfect for field work and busy environments'
              }
            ].map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-[#6CC3FF]/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-6 h-6 text-[#7258D8]" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Live Demo */}
      <section id="demo" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Hear it in action</h2>
          
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="lg:sticky lg:top-8">
              <AudioPlayer />
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6 max-h-96 overflow-y-auto">
              <h3 className="font-semibold text-gray-900 mb-4">Demo Transcript</h3>
              <div className="space-y-4 text-sm">
                <div className="flex gap-3">
                  <span className="font-medium text-[#7258D8]">You:</span>
                  <p className="text-gray-700">I have in front of me a GE GE9X turbine. I need to replace an access panel latch—can you guide me?</p>
                </div>
                <div className="flex gap-3">
                  <span className="font-medium text-[#6CC3FF]">Voira:</span>
                  <p className="text-gray-700">Sure—using your GE9X Quick Tasks – Panel Latch. First: engine cool, area clear, PPE on. Good to go?</p>
                </div>
                <div className="flex gap-3">
                  <span className="font-medium text-[#7258D8]">You:</span>
                  <p className="text-gray-700">Good.</p>
                </div>
                <div className="flex gap-3">
                  <span className="font-medium text-[#6CC3FF]">Voira:</span>
                  <p className="text-gray-700">Open the panel and support it so it doesn't swing down.</p>
                </div>
                <div className="flex gap-3">
                  <span className="font-medium text-[#7258D8]">You:</span>
                  <p className="text-gray-700">Done.</p>
                </div>
                <div className="flex gap-3">
                  <span className="font-medium text-[#6CC3FF]">Voira:</span>
                  <p className="text-gray-700">Remove the old latch and keep the washers in order.</p>
                </div>
                <div className="flex gap-3">
                  <span className="font-medium text-[#7258D8]">You:</span>
                  <p className="text-gray-700">Removed.</p>
                </div>
                <div className="flex gap-3">
                  <span className="font-medium text-[#6CC3FF]">Voira:</span>
                  <p className="text-gray-700">Fit the new latch in the same orientation. Hand-tighten.</p>
                </div>
                <div className="flex gap-3">
                  <span className="font-medium text-[#7258D8]">You:</span>
                  <p className="text-gray-700">They're in. What next?</p>
                </div>
                <div className="flex gap-3">
                  <span className="font-medium text-[#6CC3FF]">Voira:</span>
                  <p className="text-gray-700">Gently close to check alignment. If it's clean, open and tighten to the spec. Want me to text the spec line?</p>
                </div>
                <div className="flex gap-3">
                  <span className="font-medium text-[#7258D8]">You:</span>
                  <p className="text-gray-700">Yes</p>
                </div>
                <div className="flex gap-3">
                  <span className="font-medium text-[#6CC3FF]">Voira:</span>
                  <p className="text-gray-700">Sent. Close the panel and give it a light pull—feel solid?</p>
                </div>
                <div className="flex gap-3">
                  <span className="font-medium text-[#7258D8]">You:</span>
                  <p className="text-gray-700">Solid.</p>
                </div>
                <div className="flex gap-3">
                  <span className="font-medium text-[#6CC3FF]">Voira:</span>
                  <p className="text-gray-700">Great. I'll log the change and send a short recap with the page I used.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Privacy */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Trust & Privacy by Design</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-[#7258D8]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Shield className="w-6 h-6 text-[#7258D8]" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Per-Tenant Security</h3>
                <p className="text-gray-600">Isolated per-user vector store, end-to-end encryption, opt-in memory, and one-click data deletion.</p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-[#7258D8]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <FileCheck className="w-6 h-6 text-[#7258D8]" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Full Audit Trail</h3>
                <p className="text-gray-600">Complete transcript and citation tracking for every call. Track usage and verify guidance accuracy.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Integrates with your workflow</h2>
          <p className="text-center text-gray-600 mb-12">Telephony: SIP/VOIP • Output: Slack, SMS, Email</p>
          
          <div className="flex justify-center items-center space-x-12 opacity-60">
            <div className="text-2xl font-bold text-gray-400">SIP</div>
            <div className="text-2xl font-bold text-gray-400">VOIP</div>
            <div className="text-2xl font-bold text-gray-400">Slack</div>
            <div className="text-2xl font-bold text-gray-400">SMS</div>
            <div className="text-2xl font-bold text-gray-400">Email</div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Frequently Asked Questions</h2>
          <div className="space-y-0">
            <FAQItem 
              question="What are the offline options?"
              answer="While Voira requires internet connectivity for the AI processing, we're developing offline capabilities for critical procedures. Currently, you can download transcripts and checklists for offline reference."
            />
            <FAQItem 
              question="How are documents loaded and updated?"
              answer="Upload PDFs, URLs, or Markdown files through our web interface. Documents are processed automatically and updates to your knowledge base are reflected immediately in conversations."
            />
            <FAQItem 
              question="How do citations work?"
              answer="Every answer includes specific citations from your uploaded documents, including page numbers and section references. This ensures full traceability and compliance."
            />
            <FAQItem 
              question="What languages and accents are supported?"
              answer="Voira supports multiple languages and is trained to understand various accents and technical terminology specific to industrial environments."
            />
            <FAQItem 
              question="How does it handle noisy environments?"
              answer="Voira includes push-to-talk (PTT) functionality and advanced noise cancellation to work reliably in loud industrial environments."
            />
            <FAQItem 
              question="How is my data protected?"
              answer="Your data is encrypted in transit and at rest, stored in isolated per-tenant databases, and never used to train our models. You maintain full control with one-click deletion options."
            />
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#7258D8]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Upload your docs. Call Voira. Get to work.
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Ready to transform how your team accesses expertise in the field?
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-[#7258D8] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors transform hover:scale-105">
              Start now
            </button>
            <button className="border border-white/30 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:border-white/50 transition-colors transform hover:scale-105">
              Book a demo
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 bg-gray-900">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-8 h-8 bg-[#7258D8] rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">V</span>
            </div>
            <span className="text-xl font-bold text-white">Voira</span>
          </div>
          <div className="text-gray-400 space-y-1">
            <p>© 2025 Voira. The new voice era.</p>
            <p className="text-sm">A product by <a href="https://8882.co" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 transition-colors">8882.co</a></p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;