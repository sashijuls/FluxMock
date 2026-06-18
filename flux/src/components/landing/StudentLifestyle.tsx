import "./StudentLifestyle.css";
import Badge from "@/components/ui/Badge";
import GlassCard from "@/components/ui/GlassCard";
import ScrollReveal from "@/components/ui/ScrollReveal";

const moments = [
  { emoji: "🎓", title: "Tuition day",          desc: "Pay NTHU, NTU, or NCKU tuition instantly from FluxWallet. No bank queues, no wire fees.", tag: "Payments" },
  { emoji: "🧋", title: "Afternoon boba run",   desc: "Split the bill with roommates via FluxPay. QR scan, tap, done. Even in 7-Eleven.", tag: "Daily spend" },
  { emoji: "🚇", title: "Weekend Taipei trip",  desc: "Load MRT card automatically when balance drops. Never get stuck at the gate.", tag: "Transit" },
  { emoji: "✈️", title: "Going home for break", desc: "Book flights with Premium cashback. Save 3% on AirAsia, Lion Air, and Batik Air.", tag: "Travel perks" },
  { emoji: "📦", title: "Allowance arrives",    desc: "Parents send with one tap. You receive in seconds. No more waiting, no more worry.", tag: "Remittance" },
  { emoji: "🏠", title: "Dorm fee deadline",    desc: "Pay dorm deposits directly through Flux. Receipts saved, parents can see it instantly.", tag: "Campus life" },
];

export default function StudentLifestyle() {
  return (
    <section className="student-lifestyle">
      <div className="student-lifestyle__container">
        <ScrollReveal className="student-lifestyle__heading">
          <Badge variant="orange">Student life</Badge>
          <h2 className="student-lifestyle__title">
            <span className="gradient-text-white">Built for</span>
            <br />
            <span className="gradient-text-warm">every moment abroad.</span>
          </h2>
          <p className="student-lifestyle__description">
            From the first week of orientation to graduation day — Flux is the financial layer
            beneath every chapter of student life in Taiwan.
          </p>
        </ScrollReveal>

        <div className="student-lifestyle__moments">
          {moments.map(({ emoji, title, desc, tag }, i) => (
            <ScrollReveal key={title} delay={i * 80}>
              <GlassCard variant="solid-dark" className="border-dark-border" style={{
                padding: '28px',
                display: 'flex',
                flexDirection: 'column',
                gap: '20px',
                height: '100%',
                transition: 'all 0.3s ease'
              }}>
                <div className="student-lifestyle__moment-header">
                  <div className="student-lifestyle__moment-emoji">
                    {emoji}
                  </div>
                  <div style={{ transition: 'all 0.2s ease' }}>
                    <Badge variant="dark">{tag}</Badge>
                  </div>
                </div>
                <div className="student-lifestyle__moment-body">
                  <h3 className="student-lifestyle__moment-title">{title}</h3>
                  <p className="student-lifestyle__moment-description">{desc}</p>
                </div>
              </GlassCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
