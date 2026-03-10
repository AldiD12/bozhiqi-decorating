import { reviews } from '@/app/data/reviews';

export default function TrustBar() {
  return (
    <div className="bg-[#0f172a] text-white py-4 px-4">
      <div className="max-w-content mx-auto">
        {/* Mobile-first layout */}
        <div className="flex flex-col gap-3 md:hidden">
          {/* Top row - Star rating prominently displayed */}
          <div className="flex items-center justify-center gap-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-[#b8860b] text-xl">★</span>
              ))}
            </div>
            <span className="text-white font-bold text-lg">{reviews.google.score} GOOGLE</span>
          </div>
          
          {/* Middle row - Trust signals */}
          <div className="flex items-center justify-center gap-4 text-sm font-medium tracking-wide">
            <span className="text-white/90 uppercase">FULLY INSURED</span>
            <span className="text-white/90 uppercase">{reviews.yearsExperience} YEARS EXPERIENCE</span>
          </div>
          
          {/* Bottom row - Phone number */}
          <div className="flex items-center justify-center">
            <a 
              href="tel:07828288449" 
              className="text-white text-xl font-bold tracking-wide hover:text-[#b8860b] transition-colors"
            >
              07828 288 449
            </a>
            <div className="w-8 h-[3px] bg-[#b8860b] ml-3"></div>
          </div>
        </div>

        {/* Desktop layout */}
        <div className="hidden md:flex items-center justify-between">
          {/* Left side - Trust signals */}
          <div className="flex items-center gap-8 text-sm font-medium tracking-wide">
            <span className="text-white/80 uppercase">FULLY INSURED</span>
            <span className="text-white/80 uppercase">{reviews.yearsExperience} YEARS EXPERIENCE</span>
            <div className="flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-[#b8860b] text-lg">★</span>
                ))}
              </div>
              <span className="text-white/80 uppercase">{reviews.google.score} GOOGLE</span>
            </div>
          </div>
          
          {/* Right side - Phone number */}
          <div className="flex items-center">
            <a 
              href="tel:07828288449" 
              className="text-white text-xl font-bold tracking-wide hover:text-[#b8860b] transition-colors"
            >
              07828 288 449
            </a>
            <div className="w-12 h-[3px] bg-[#b8860b] ml-3"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
