'use client'

export default function NotFound() {
  return (
    <div className="relative animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="bg-gradient-to-br from-accent via-secondary/30 to-primary/20 rounded-[2.5rem] p-8 sm:p-10 border-2 border-destructive/30 shadow-2xl backdrop-blur-md relative overflow-hidden">
        {/* Decorative Background */}
        <div className="absolute top-0 right-0 w-56 h-56 bg-destructive/15 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/15 rounded-full blur-3xl" />
        
        {/* Sad Sparkles */}
        <div className="absolute top-6 right-6 text-3xl opacity-25 animate-float pointer-events-none">💔</div>
        <div className="absolute bottom-6 left-6 text-2xl opacity-20 animate-float pointer-events-none" style={{animationDelay: '1s'}}>💧</div>
        
        <div className="relative z-10 text-center space-y-8">
          {/* Error Icon with Animation */}
          <div className="flex justify-center">
            <div className="relative group">
              {/* Outer Glow */}
              <div className="absolute -inset-4 bg-gradient-to-r from-destructive/20 to-accent/20 rounded-full blur-2xl opacity-40 group-hover:opacity-60 transition-opacity animate-pulse" />
              
              {/* Icon Container */}
              <div className="relative">
                <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-full bg-gradient-to-br from-destructive/15 to-accent/15 flex items-center justify-center border-4 border-destructive/30 shadow-2xl backdrop-blur-sm group-hover:scale-110 transition-transform">
                  <span className="text-7xl sm:text-8xl animate-float drop-shadow-2xl">😵</span>
                </div>
                
                {/* Floating Elements */}
                <div className="absolute -top-2 -right-2 text-3xl animate-float">💫</div>
                <div className="absolute -bottom-2 -left-2 text-2xl animate-float" style={{animationDelay: '0.5s'}}>💔</div>
              </div>
            </div>
          </div>
          
          {/* Error Message Card */}
          <div className="bg-accent/95 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-xl border-2 border-destructive/30 max-w-lg mx-auto">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-destructive/15 rounded-full border border-destructive/40 mb-2">
                <span className="text-lg">❌</span>
                <span className="text-sm font-bold text-destructive uppercase">Error 404</span>
              </div>
              
              <h3 className="text-3xl sm:text-4xl font-black text-foreground">
                Karakter Tidak Ditemukan
              </h3>
              
              <p className="text-foreground/70 text-base sm:text-lg leading-relaxed font-medium">
                Oops! Sepertinya karakter yang kamu cari tidak ada di database kami. 
                Coba periksa lagi penulisan nama karakternya ya~ 
              </p>
            </div>
          </div>

          {/* Tips Section */}
          <div className="space-y-4 max-w-xl mx-auto">
            <p className="text-sm font-bold text-muted-foreground uppercase tracking-wide">Tips Pencarian:</p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="flex items-start gap-3 px-5 py-4 bg-accent/90 backdrop-blur-sm rounded-xl shadow-lg border-2 border-primary/30 hover:border-primary/50 hover:shadow-xl transition-all text-left hover:-translate-y-1">
                <span className="text-2xl flex-shrink-0">💡</span>
                <div>
                  <p className="font-bold text-foreground text-sm">Bahasa Inggris</p>
                  <p className="text-xs text-foreground/60">Gunakan nama dalam bahasa Inggris</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 px-5 py-4 bg-accent/90 backdrop-blur-sm rounded-xl shadow-lg border-2 border-secondary/40 hover:border-secondary/60 hover:shadow-xl transition-all text-left hover:-translate-y-1">
                <span className="text-2xl flex-shrink-0">✏️</span>
                <div>
                  <p className="font-bold text-foreground text-sm">Ejaan Yang Benar</p>
                  <p className="text-xs text-foreground/60">Pastikan penulisan sudah tepat</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 px-5 py-4 bg-accent/90 backdrop-blur-sm rounded-xl shadow-lg border-2 border-primary/30 hover:border-primary/50 hover:shadow-xl transition-all text-left hover:-translate-y-1">
                <span className="text-2xl flex-shrink-0">🔤</span>
                <div>
                  <p className="font-bold text-foreground text-sm">Nama Lengkap</p>
                  <p className="text-xs text-foreground/60">Coba gunakan nama lengkap</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 px-5 py-4 bg-accent/90 backdrop-blur-sm rounded-xl shadow-lg border-2 border-secondary/40 hover:border-secondary/60 hover:shadow-xl transition-all text-left hover:-translate-y-1">
                <span className="text-2xl flex-shrink-0">🎌</span>
                <div>
                  <p className="font-bold text-foreground text-sm">Karakter Populer</p>
                  <p className="text-xs text-foreground/60">Coba karakter yang lebih terkenal</p>
                </div>
              </div>
            </div>
          </div>

          {/* Retry Button */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-tenshi text-foreground font-black rounded-[1.5rem] shadow-xl hover:shadow-2xl hover:shadow-primary/40 hover:-translate-y-1 transition-all border-2 border-primary/30 text-lg"
          >
            <span className="text-2xl group-hover:rotate-180 transition-transform duration-300">🔄</span>
            <span>Coba Lagi</span>
          </button>
        </div>
      </div>
    </div>
  );
}
