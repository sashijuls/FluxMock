import "./HowItWorks.css";
import { UserPlus, LinkIcon, Target, CheckCircle } from "lucide-react";
import Badge from "@/components/ui/Badge";
import ScrollReveal from "@/components/ui/ScrollReveal";

const steps = [
  {
    number: "01",
    icon: UserPlus,
    title: "Create your account",
    desc: "Sign up in 3 minutes with your student ID, passport, and Indonesian phone number. KYC is fast.",
    badge: "Students & Parents",
    gradient: "bg-flux-primary",
  },
  {
    number: "02",
    icon: LinkIcon,
    title: "Link parent account",
    desc: "Parents create a Flux parent account in Indonesia. Link with a simple QR code — visibility both ways.",
    badge: "Family Mode",
    gradient: "bg-flux-cyan",
  },
  {
    number: "03",
    icon: Target,
    title: "Set FluxSnipe target",
    desc: "Parent sets a target FX rate. Flux watches the market and automatically sends when ready.",
    badge: "Smart FX",
    gradient: "bg-flux-orange",
  },
  {
    number: "04",
    icon: CheckCircle,
    title: "Money arrives, spend freely",
    desc: "Student receives into FluxWallet. Pay tuition, top up transit, shop at campus — zero friction.",
    badge: "Instant",
    gradient: "bg-flux-green",
  },
];

export default function HowItWorks() {
  const iconGradients = ["purple", "cyan", "orange", "green"];

  return (
    <section className="how-it-works">
      <div className="how-it-works__container">
        <ScrollReveal className="how-it-works__heading">
          <Badge variant="dark">Simple by design</Badge>
          <h2 className="how-it-works__title gradient-text-white">
            From Jakarta to Hsinchu
            <br />
            <span className="gradient-text-purple">in 4 steps.</span>
          </h2>
        </ScrollReveal>

        <div className="how-it-works__steps">
          {steps.map((step, i) => {
            const Icon = step.icon;
            const gradientClass = iconGradients[i % iconGradients.length];
            return (
              <ScrollReveal key={step.number} delay={i * 150} style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div className="how-it-works__step-header">
                  <div className={`how-it-works__step-icon how-it-works__step-icon--${gradientClass}`}>
                    <Icon style={{ width: '20px', height: '20px' }} />
                  </div>
                  <span className="how-it-works__step-number">{step.number}</span>
                </div>
                <div className="how-it-works__step-body">
                  <Badge variant="dark" style={{ fontSize: '10px', alignSelf: 'flex-start' }}>{step.badge}</Badge>
                  <h3 className="how-it-works__step-title">{step.title}</h3>
                  <p className="how-it-works__step-description">{step.desc}</p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
