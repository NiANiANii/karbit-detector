'use client';

import { useState } from "react";
import KarakterForm from "./components/KarakterForm";
import HasilKarbit from "./components/HasilKarbit";
import NotFound from "./components/NotFound";
import { classifyKarbit } from "./utils/classifyKarbit";

function App() {
  const [loading, setLoading] = useState(false);
  const [karakter, setKarakter] = useState(null);
  const [kelas, setKelas] = useState("");
  const [notFound, setNotFound] = useState(false);

  const handleCariKarakter = async (nama) => {
    setLoading(true);
    setKarakter(null);
    setKelas("");
    setNotFound(false);

    try {
      const res = await fetch(
        `https://api.jikan.moe/v4/characters?q=${encodeURIComponent(nama)}`
      );
      const data = await res.json();
      if (data.data && data.data.length > 0) {
        const karakterData = data.data[0];
        setKarakter(karakterData);
        setKelas(classifyKarbit(karakterData.favorites));
      } else {
        setNotFound(true);
      }
    } catch {
      setNotFound(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary/30">
      {/* Header - Tenshi Kaiwai Style */}
      <header className="sticky top-0 z-50 border-b border-primary/20 bg-background/85 backdrop-blur-2xl shadow-sm">
        <div className="flex h-16 items-center justify-between px-4 sm:px-6 max-w-6xl mx-auto w-full">
          <div className="flex items-center gap-3">
            <div className="relative group">
              <span className="absolute -top-1 -right-1 text-lg animate-sparkle">✨</span>
            </div>
            <div>
              <h1 className="text-2xl font-black text-gradient-tenshi">
                Karbit Detector
              </h1>
              <p className="text-xs text-muted-foreground font-semibold">Tenshi Kaiwai Edition</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="p-4 sm:p-6 lg:p-8 max-w-5xl mx-auto space-y-6 sm:space-y-8">
        {/* Welcome Section */}
        <section className="relative">
          <div className="bg-gradient-tenshi-soft rounded-[2.5rem] p-8 sm:p-10 lg:p-12 border-2 border-primary/40 shadow-2xl relative overflow-hidden backdrop-blur-md">
            {/* Decorative Background Elements */}
            <div className="absolute inset-0 opacity-15">
              <div className="absolute top-0 left-0 w-72 h-72 bg-secondary rounded-full blur-3xl" />
              <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary rounded-full blur-3xl" />
            </div>
            
            {/* Floating Sparkles - Tenshi Theme */}
            <div className="absolute top-8 right-8 text-4xl opacity-50 animate-sparkle pointer-events-none">✨</div>
            <div className="absolute bottom-8 left-8 text-3xl opacity-40 animate-sparkle pointer-events-none" style={{animationDelay: '1s'}}>⭐</div>
            <div className="absolute top-1/2 left-12 text-2xl opacity-35 animate-float pointer-events-none" style={{animationDelay: '0.5s'}}>💫</div>
            <div className="absolute top-1/3 right-16 text-3xl opacity-35 animate-float pointer-events-none" style={{animationDelay: '1.5s'}}>🌟</div>
            <div className="absolute bottom-1/3 right-8 text-2xl opacity-30 animate-sparkle pointer-events-none" style={{animationDelay: '2s'}}>✨</div>
            
            <div className="relative z-10">
              {/* Hero Content */}
              <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
                {/* Left Side - Text */}
                <div className="flex-1 text-center lg:text-left space-y-6">
                  <div className="inline-block lg:block">
                    <div className="inline-flex items-center gap-2 px-5 py-3 bg-accent/95 backdrop-blur-sm rounded-full shadow-lg mb-4 border border-primary/30">
                      <span className="text-lg animate-sparkle">⭐</span>
                      <span className="text-sm font-bold text-foreground">Anime Character Classifier</span>
                    </div>
                  </div>
                  
                  <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-foreground leading-tight">
                    Selamat Datang di
                    <span className="block text-gradient-tenshi animate-gradient-shift">
                      Karbit Detector ✨
                    </span>
                  </h2>
                  
                  <p className="text-foreground/70 text-lg sm:text-xl max-w-2xl leading-relaxed font-medium">
                    Temukan seberapa <span className="font-bold text-primary">KARBIT</span> kamu berdasarkan karakter anime favorit dengan sistem ethereal kami
                  </p>
                  
                  <div className="flex gap-3 justify-center lg:justify-start pt-4 flex-wrap">
                    <div className="group px-5 py-3 bg-accent/90 backdrop-blur-sm rounded-2xl shadow-lg border-2 border-secondary/40 hover:border-secondary hover:shadow-xl transition-all cursor-default hover:-translate-y-1">
                      <div className="flex items-center gap-2">
                        <span className="text-2xl group-hover:scale-110 transition-transform">🎌</span>
                        <span className="font-bold text-foreground">Anime</span>
                      </div>
                    </div>
                    <div className="group px-5 py-3 bg-accent/90 backdrop-blur-sm rounded-2xl shadow-lg border-2 border-primary/40 hover:border-primary hover:shadow-xl transition-all cursor-default hover:-translate-y-1">
                      <div className="flex items-center gap-2">
                        <span className="text-2xl group-hover:scale-110 transition-transform">💫</span>
                        <span className="font-bold text-foreground">Kawaii</span>
                      </div>
                    </div>
                    <div className="group px-5 py-3 bg-accent/90 backdrop-blur-sm rounded-2xl shadow-lg border-2 border-secondary/40 hover:border-secondary hover:shadow-xl transition-all cursor-default hover:-translate-y-1">
                      <div className="flex items-center gap-2">
                        <span className="text-2xl group-hover:scale-110 transition-transform">🎀</span>
                        <span className="font-bold text-foreground">#BitKarbit</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Right Side - Mascot */}
                <div className="flex-shrink-0">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-tenshi rounded-full blur-3xl opacity-40 animate-glow-soft" />
                    <div className="relative bg-accent/95 backdrop-blur-md rounded-full p-8 shadow-2xl border-4 border-primary/30 animate-float">
                      <span className="text-8xl sm:text-9xl drop-shadow-2xl">👼</span>
                    </div>
                    {/* Floating Elements Around Mascot */}
                    <div className="absolute -top-6 -right-6 text-5xl animate-sparkle">✨</div>
                    <div className="absolute -bottom-6 -left-6 text-4xl animate-float" style={{animationDelay: '0.5s'}}>💫</div>
                    <div className="absolute top-1/4 -left-10 text-3xl animate-sparkle" style={{animationDelay: '1s'}}>⭐</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Form Section */}
        <KarakterForm onSubmit={handleCariKarakter} loading={loading} />
        
        {/* Results */}
        {notFound && <NotFound />}
        {karakter && !notFound && (
          <HasilKarbit karakter={karakter} klasifikasi={kelas} />
        )}
      </main>
    </div>
  );
}

export default App;
