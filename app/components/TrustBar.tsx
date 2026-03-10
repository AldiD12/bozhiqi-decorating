import { reviews } from '@/app/data/reviews';

export default function TrustBar() {
  return (
    <div className="bg-oxford text-white py-2.5 px-4">
      <div className="max-w-content mx-auto text-center text-label font-semibold flex flex-wrap justify-center gap-x-4 gap-y-1 uppercase tracking-wider">
        <span className="text-brass">{reviews.google.short} on Google</span>
        <span className="hidden sm:inline text-white/60">|</span>
        <span>{reviews.checkatrade.score}/10 on Checkatrade <span className="text-brass">({reviews.checkatrade.count} reviews)</span></span>
        <span className="hidden sm:inline text-white/60">|</span>
        <span>Fully Insured</span>
        <span className="hidden sm:inline text-white/60">|</span>
        <span>{reviews.yearsExperience} Years Experience</span>
      </div>
    </div>
  );
}
