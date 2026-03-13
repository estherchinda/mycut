import { dealData } from "../../data/deal";

export default function LifecycleTimeline() {
  return (
    <div className="space-y-3 w-2/5 m-6">
      <h4 className="uppercase text-[#9A9A9A] text-xs font-semibold tracking-widest">
        Deal Lifecycle
      </h4>
      <div className="border border-[#E4E2DC] bg-white rounded-lg p-6">
        {dealData.lifecycle.map(l => (
            <div key={l.id} className="instrument">
                <div className="space-y-1">
                    <p className="text-[#1A1A1A] font-semibold text-sm">{l.label}</p>
                    <p className="text-xs text-[#9A9A9A]">{l.date} · {l.subtitle}</p>
                </div>
            </div>
        ))}
      </div>
    </div>
  );
}
