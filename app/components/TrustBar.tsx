import { reviews } from '@/app/data/reviews';

export default function TrustBar() {
  return (
    <div className="bg-[#0f172a] text-white py-3 px-4 border-b border-[#b8860b]/20">
      <div className="max-w-content mx-auto text-center text-sm font-semibold flex flex-wrap justify-center gap-x-6 gap-y-2">
        <span className="text-[#b8860b] flex items-center gap-1">
          <span className="text-[#b8860b]">★★★★★</span>
          <span className="text-white">{reviews.google.short}</span>
        </span>
        <span className="hidden sm:inline text-white/40">|</span>
        <span className="flex items-center gap-1">
          <span className="text-[#b8860b]">★★★★★</span>
          <span className="text-white">{reviews.checkatrade.score}/10 Checkatrade</span>
          <span className="text-[#b8860b]">({reviews.checkatrade.count} reviews)</span>
        </span>
        <span className="hidden sm:inline text-white/40">|</span>
        <span className="text-white/90">Fully Insured</span>
        <span className="hidden sm:inline text-white/40">|</span>
        <span className="text-white/90">{reviews.yearsExperience} Years Experience</span>
      </div>
    </div>
  );
}
