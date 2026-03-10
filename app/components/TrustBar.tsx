import { reviews } from '@/app/data/reviews';

export default function TrustBar() {
  return (
    <div className="bg-[#1a1a2e] text-[#faf8f5] py-2.5 px-4">
      <div className="max-w-content mx-auto text-center text-sm font-semibold flex flex-wrap justify-center gap-x-4 gap-y-1">
        <span className="text-[#b8860b]">{reviews.google.short} on Google</span>
        <span className="hidden sm:inline text-[#e8e4df]">|</span>
        <span>{reviews.checkatrade.score}/10 on Checkatrade <span className="text-[#b8860b]">({reviews.checkatrade.count} reviews)</span></span>
        <span className="hidden sm:inline text-[#e8e4df]">|</span>
        <span>Fully Insured</span>
        <span className="hidden sm:inline text-[#e8e4df]">|</span>
        <span>{reviews.yearsExperience} Years Experience</span>
      </div>
    </div>
  );
}
