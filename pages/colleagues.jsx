import Layout from "../components/Layout";

const CY = "#00D4D4";
const BG2 = "#1F2638";
const TX = "#F2F4F7";
const T2 = "rgba(242,244,247,0.62)";
const T3 = "rgba(242,244,247,0.35)";
const BD = "rgba(0,212,212,0.2)";
const BD2 = "rgba(242,244,247,0.08)";

const testimonials = [
  {
    name: "Former Direct Manager",
    title: "VP, Customer Success · Enterprise SaaS",
    company: "VMware",
    quote: "Justin has a rare ability to take a complex, multi-stakeholder program and make it feel manageable. He doesn't just track the work — he builds the structure that makes everyone else's work more effective. During the acquisition, that was exactly what we needed.",
  },
  {
    name: "Cross-Functional Peer",
    title: "Director, Revenue Operations",
    company: "VMware",
    quote: "What Justin does better than anyone I've worked with is translate ambiguity into structure without losing the people in it. He'd walk into a steering committee with competing priorities from four business units and walk out with a clear path forward. Every time.",
  },
  {
    name: "Former Stakeholder",
    title: "Senior Director, Finance",
    company: "IBM",
    quote: "Justin built the forecasting and reporting infrastructure that Finance had been asking for for years. He understood the business problem before he designed the solution — and the result was something our team actually trusted and used.",
  },
];

export default function Colleagues() {
  return (
    <Layout>
      <div style={{ marginBottom:48 }}>
        <p style={{ fontFamily:"'DM Mono',monospace", fontSize:9, color:T3, letterSpacing:".22em", textTransform:"uppercase", marginBottom:12 }}>Social Proof</p>
        <h1 style={{ fontFamily:"'Playfair Display',serif", fontSize:"clamp(32px,5vw,56px)", fontWeight:800, color:TX, marginBottom:16, lineHeight:1.1 }}>
          Colleagues
        </h1>
        <p style={{ fontSize:15, color:T2, lineHeight:1.75, fontWeight:300, maxWidth:580 }}>
          From people who've worked alongside me across VMware, IBM, and enterprise transformation programs.
        </p>
      </div>

      <div style={{ display:"flex", flexDirection:"column", gap:20, marginBottom:64 }}>
        {testimonials.map((t, i) => (
          <div key={i} style={{ background:BG2, border:`1px solid ${BD2}`, padding:"36px 40px" }}>
            <p style={{ fontFamily:"'Playfair Display',serif", fontSize:"clamp(16px,2vw,20px)", fontWeight:500, lineHeight:1.7, color:TX, fontStyle:"italic", marginBottom:28 }}>
              "{t.quote}"
            </p>
            <div style={{ display:"flex", alignItems:"center", gap:16, borderTop:`1px solid ${BD2}`, paddingTop:20 }}>
              <div style={{ width:40, height:40, background:`rgba(0,212,212,0.1)`, border:`1px solid ${BD}`, display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}>
                <span style={{ color:CY, fontSize:14, fontWeight:700 }}>{t.name[0]}</span>
              </div>
              <div>
                <p style={{ fontWeight:700, color:TX, fontSize:13, marginBottom:3 }}>{t.name}</p>
                <p style={{ fontSize:11, color:T3 }}>{t.title} · {t.company}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div style={{ background:BG2, border:`1px solid ${BD}`, padding:"32px 36px", textAlign:"center" }}>
        <p style={{ fontFamily:"'Playfair Display',serif", fontSize:20, fontWeight:700, color:TX, marginBottom:10 }}>
          Want to talk to someone I've worked with?
        </p>
        <p style={{ fontSize:14, color:T2, lineHeight:1.75, fontWeight:300, maxWidth:440, margin:"0 auto 20px" }}>
          References available upon request. I'm happy to connect you with former managers, peers, and stakeholders.
        </p>
        <a href="mailto:jneal@justintneal.com" style={{ background:CY, color:"#1A1F2E", padding:"11px 28px", fontWeight:700, fontSize:12, letterSpacing:".1em", textTransform:"uppercase", display:"inline-block" }}>
          Request References
        </a>
      </div>
    </Layout>
  );
}
