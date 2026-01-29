'use client';

import { useState } from "react";

export default function KarakterForm({ onSubmit, loading }) {
  const [nama, setNama] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (nama.trim() === "") return;
    onSubmit(nama.replace(/\s/g, ""));
  };

  return (
    <div className="relative">
      <div className="bg-gradient-tenshi-soft rounded-[2.5rem] p-8 sm:p-10 border-2 border-primary/40 shadow-2xl hover:shadow-primary/40 hover:-translate-y-1 transition-all duration-300 backdrop-blur-md relative overflow-hidden">
        {/* Decorative Background */}
        <div className="absolute top-0 right-0 w-40 h-40 bg-secondary/25 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary/20 rounded-full blur-3xl" />
        
        {/* Sparkle Decorations */}
        <div className="absolute top-6 right-6 text-3xl opacity-40 animate-sparkle pointer-events-none">✨</div>
        <div className="absolute bottom-6 left-6 text-2xl opacity-35 animate-sparkle pointer-events-none" style={{animationDelay: '1s'}}>⭐</div>
        
        <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
          {/* Header with Icon */}
          <div className="text-center space-y-5">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-tenshi rounded-2xl shadow-lg mb-4 animate-float">
              <span className="text-3xl">🔍</span>
            </div>
            
            <h3 className="text-3xl sm:text-4xl font-black text-gradient-tenshi">
              Cek Karbit-mu Sekarang
            </h3>
            
            <p className="text-foreground/60 text-base sm:text-lg max-w-md mx-auto font-medium">
              Masukkan nama karakter anime favorit kamu dan temukan tingkat karbit-mu! 
            </p>
          </div>

          <div className="space-y-5">
            {/* Input with Enhanced Design */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-tenshi rounded-[1.5rem] blur opacity-25 group-hover:opacity-40 transition-opacity" />
              <input
                type="text"
                className="relative w-full px-6 py-5 rounded-[1.5rem] border-2 border-primary/40 bg-accent/95 backdrop-blur-sm text-foreground text-lg
                         focus:outline-none focus:ring-4 focus:ring-primary/40 focus:border-primary/60
                         focus:shadow-2xl focus:shadow-primary/30 transition-all 
                         placeholder:text-foreground/40 font-medium
                         disabled:opacity-60 disabled:cursor-not-allowed
                         hover:border-primary/60 hover:shadow-lg"
                placeholder="Contoh: Sagiri Izumi, Nezuko, Rem..."
                value={nama}
                onChange={(e) => setNama(e.target.value)}
                disabled={loading}
                autoFocus
              />
              <div className="absolute right-5 top-1/2 -translate-y-1/2 flex items-center gap-2">
                <span className="text-2xl transition-transform group-focus-within:scale-125 group-focus-within:rotate-12">🔍</span>
              </div>
            </div>

            {/* Submit Button with Enhanced Design */}
            <button
              type="submit"
              disabled={loading || !nama.trim()}
              className="w-full bg-gradient-tenshi text-foreground font-black py-5 px-8 
                       rounded-[1.5rem] shadow-xl hover:shadow-2xl hover:shadow-primary/40
                       hover:-translate-y-2 hover:scale-[1.02] transition-all duration-300 
                       disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:scale-100
                       active:scale-[0.98] text-lg
                       relative overflow-hidden group border-2 border-primary/30"
            >
              {/* Animated Background */}
              <span className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-primary opacity-0 group-hover:opacity-40 transition-opacity duration-500" />
              
              {/* Button Content */}
              <span className="relative z-10 flex items-center justify-center gap-3">
                {loading ? (
                  <>
                    <span className="inline-block w-5 h-5 border-3 border-foreground/30 border-t-foreground rounded-full animate-spin" />
                    <span>Mencari karakter...</span>
                    <span className="animate-pulse">🔮</span>
                  </>
                ) : (
                  <>
                    <span className="text-2xl group-hover:scale-110 transition-transform">✨</span>
                    <span>Cek Karbit Sekarang</span>
                    <span className="text-2xl group-hover:scale-110 transition-transform">✨</span>
                  </>
                )}
              </span>
              
              {/* Shimmer Effect */}
              {!loading && (
                <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-foreground/20 to-transparent" />
              )}
            </button>
          </div>

          {/* Info Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4">
            <div className="flex items-center gap-2 px-4 py-3 bg-accent/90 backdrop-blur-sm rounded-xl shadow-md border border-primary/30 hover:border-primary/50 hover:shadow-lg transition-all hover:-translate-y-1">
              <span className="text-2xl">⚡</span>
              <div className="text-left">
                <p className="text-xs text-foreground/60 font-semibold">Cepat</p>
                <p className="text-sm font-bold text-foreground">Instant Result</p>
              </div>
            </div>
            <div className="flex items-center gap-2 px-4 py-3 bg-accent/90 backdrop-blur-sm rounded-xl shadow-md border border-secondary/40 hover:border-secondary/60 hover:shadow-lg transition-all hover:-translate-y-1">
              <span className="text-2xl">🎯</span>
              <div className="text-left">
                <p className="text-xs text-foreground/60 font-semibold">Akurat</p>
                <p className="text-sm font-bold text-foreground">100% Valid</p>
              </div>
            </div>
            <div className="flex items-center gap-2 px-4 py-3 bg-accent/90 backdrop-blur-sm rounded-xl shadow-md border border-primary/30 hover:border-primary/50 hover:shadow-lg transition-all hover:-translate-y-1">
              <span className="text-2xl">🎉</span>
              <div className="text-left">
                <p className="text-xs text-foreground/60 font-semibold">Fun</p>
                <p className="text-sm font-bold text-foreground">For Everyone</p>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
