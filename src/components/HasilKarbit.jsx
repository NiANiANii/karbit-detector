'use client'

export default function HasilKarbit({ karakter, klasifikasi }) {
  return (
    <div className="relative animate-in fade-in slide-in-from-bottom-6 duration-700">
      <div className="bg-gradient-tenshi-soft rounded-[2.5rem] p-8 sm:p-10 border-2 border-primary/40 shadow-2xl hover:shadow-primary/40 transition-all duration-500 backdrop-blur-md relative overflow-hidden">
        {/* Decorative Background */}
        <div className="absolute inset-0 opacity-15">
          <div className="absolute top-0 right-0 w-72 h-72 bg-secondary rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary rounded-full blur-3xl" />
        </div>
        
        {/* Floating Decorations */}
        <div className="absolute top-8 right-8 text-4xl opacity-45 animate-sparkle pointer-events-none">✨</div>
        <div className="absolute bottom-8 left-8 text-3xl opacity-40 animate-sparkle pointer-events-none" style={{animationDelay: '1s'}}>⭐</div>
        <div className="absolute top-1/3 left-12 text-2xl opacity-30 animate-float pointer-events-none" style={{animationDelay: '0.5s'}}>💫</div>
        <div className="absolute bottom-1/3 right-12 text-3xl opacity-30 animate-sparkle pointer-events-none" style={{animationDelay: '1.5s'}}>🌟</div>
        
        <div className="relative z-10 space-y-10">
          {/* Success Banner */}
          <div className="text-center">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-accent/95 backdrop-blur-sm rounded-full shadow-lg border-2 border-primary/40 mb-6 animate-glow-soft">
              <span className="text-2xl animate-bounce">🎉</span>
              <span className="font-black text-foreground text-lg">Karakter Ditemukan!</span>
              <span className="text-2xl animate-bounce" style={{animationDelay: '0.1s'}}>🎉</span>
            </div>
          </div>
          
          {/* Character Image Section */}
          <div className="flex justify-center">
            <div className="relative group">
              {/* Glow Effect */}
              <div className="absolute -inset-6 bg-gradient-tenshi rounded-full blur-3xl opacity-35 group-hover:opacity-55 animate-glow-soft transition-all duration-500" />
              
              {/* Image Container */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-tenshi rounded-full blur-md opacity-30" />
                <img
                  src={karakter.images?.webp?.image_url || karakter.images?.jpg?.image_url}
                  alt={karakter.name}
                  className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-full border-4 border-accent shadow-2xl object-cover ring-8 ring-primary/25 group-hover:ring-primary/45 group-hover:scale-105 transition-all duration-300"
                />
              </div>
              
              {/* Floating Decorations Around Image */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 text-4xl animate-sparkle pointer-events-none drop-shadow-lg">✨</div>
              <div className="absolute -bottom-4 -right-4 text-3xl animate-float pointer-events-none drop-shadow-lg" style={{animationDelay: '0.5s'}}>💫</div>
              <div className="absolute -top-4 -left-4 text-2xl animate-sparkle pointer-events-none drop-shadow-lg" style={{animationDelay: '1s'}}>⭐</div>
              <div className="absolute bottom-8 -left-6 text-2xl animate-float pointer-events-none drop-shadow-lg" style={{animationDelay: '1.5s'}}>🌟</div>
            </div>
          </div>

          {/* Character Info Card */}
          <div className="bg-accent/95 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-xl border-2 border-primary/40">
            <div className="text-center space-y-5">
              <div>
                <h3 className="text-4xl sm:text-5xl font-black text-foreground leading-tight mb-4">
                  {karakter.name}
                </h3>
                <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20 rounded-full border-2 border-secondary/50 shadow-lg hover:shadow-xl hover:scale-105 transition-all cursor-default animate-glow-soft">
                  <span className="text-2xl">⭐</span>
                  <div className="text-left">
                    <p className="text-xs text-foreground/60 font-bold uppercase">Total Favorit</p>
                    <p className="text-lg font-black text-foreground">
                      {karakter.favorites.toLocaleString()}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Classification Result - Enhanced */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-tenshi rounded-3xl blur-lg opacity-40" />
            <div className="relative bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20 rounded-3xl p-8 sm:p-10 border-2 border-primary/40 shadow-xl">
              <div className="text-center space-y-6">
                <div className="flex items-center justify-center gap-3">
                  <span className="text-3xl animate-sparkle">✨</span>
                  <p className="text-foreground/70 text-lg font-black uppercase tracking-wider">
                    Kategori Karbit-mu:
                  </p>
                  <span className="text-3xl animate-sparkle" style={{animationDelay: '0.5s'}}>✨</span>
                </div>
                
                <div className="relative inline-block group">
                  <div className="absolute inset-0 bg-gradient-tenshi rounded-3xl blur opacity-50 group-hover:opacity-70 transition-opacity" />
                  <div className="relative bg-gradient-tenshi text-foreground px-10 py-6 rounded-3xl font-black text-3xl sm:text-4xl shadow-2xl hover:shadow-primary/50 transition-all transform hover:scale-110 cursor-default border-4 border-primary/30 animate-glow-soft">
                    <span className="drop-shadow-lg">{klasifikasi}</span>
                  </div>
                </div>
                
                {/* Fun Reactions */}
                <div className="flex justify-center gap-4 pt-4">
                  <div className="px-4 py-2 bg-accent/90 backdrop-blur-sm rounded-full shadow-md border border-primary/30 hover:scale-110 transition-transform cursor-default hover:-translate-y-1">
                    <span className="text-2xl">🎯</span>
                  </div>
                  <div className="px-4 py-2 bg-accent/90 backdrop-blur-sm rounded-full shadow-md border border-secondary/40 hover:scale-110 transition-transform cursor-default hover:-translate-y-1">
                    <span className="text-2xl">💯</span>
                  </div>
                  <div className="px-4 py-2 bg-accent/90 backdrop-blur-sm rounded-full shadow-md border border-primary/30 hover:scale-110 transition-transform cursor-default hover:-translate-y-1">
                    <span className="text-2xl">🔥</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <a
              href={karakter.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 px-6 py-4 bg-gradient-tenshi text-foreground font-bold rounded-[1.5rem] shadow-lg hover:shadow-xl hover:shadow-primary/40 hover:-translate-y-1 transition-all border-2 border-primary/40"
            >
              <span className="text-xl">🔗</span>
              <span>Lihat di MyAnimeList</span>
              <span className="group-hover:translate-x-2 transition-transform text-xl">→</span>
            </a>
            
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="group inline-flex items-center gap-3 px-6 py-4 bg-accent/90 backdrop-blur-sm text-foreground font-bold rounded-[1.5rem] shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all border-2 border-primary/40 hover:border-primary/60"
            >
              <span className="text-xl">🔄</span>
              <span>Cek Karakter Lain</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
