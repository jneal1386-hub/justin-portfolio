import Layout from "../components/Layout";

const CY = "#00D4D4";
const BG2 = "#1F2638";
const TX = "#F2F4F7";
const T2 = "rgba(242,244,247,0.62)";
const T3 = "rgba(242,244,247,0.35)";
const BD = "rgba(0,212,212,0.2)";
const BD2 = "rgba(242,244,247,0.08)";

const posts = [
  {
    date: "March 2026",
    platform: "All Things AI 2026 · Durham, NC",
    title: "Start With Friction, Not Tools",
    body: "A speaker at All Things AI 2026 put a slide on screen that stopped me cold: 'The Wrong Question: What AI tools should we buy? The Right Focus: Identify Friction.' Most enterprise AI initiatives stall not because the technology fails — but because companies lead with the stack instead of the problem. Where are people working slow? Where are they working fragile? Where are they dependent on heroics? That's where you start. The program infrastructure you build around those friction points is what makes AI adoption stick. I know because that's exactly what Path to 7% was built to do — before anyone said it from a stage.",
    tag: "AI Transformation",
  },
  {
    date: "March 2026",
    platform: "All Things AI 2026 · Durham, NC",
    title: "Agentic AI Is a Leadership Evolution, Not a Technology Revolution",
    body: "Victoria Vojnovich opened her keynote at All Things AI with a framing I keep coming back to: 'The Agentic AI Transformation — More Than a Technology Revolution, It's a Leadership Evolution.' The companies that are winning on AI aren't the ones with the most tools. They're the ones who restructured how decisions get made, how accountability flows, and how the organization learns from what AI surfaces. That's a program management problem. And it's the most important work happening in enterprise right now.",
    tag: "AI Leadership",
  },
  {
    date: "2025",
    platform: "Matik Digital + CS Summit",
    title: "Why Most AI Adoption Programs Fail Before They Start",
    body: "The most common failure pattern I see in enterprise AI adoption: the organization buys the tooling, runs a few training sessions, and calls it a program. Then six months later, adoption is flat and leadership can't explain why. What's missing is the infrastructure layer — the governance that creates accountability, the metrics that define what adoption actually means, and the operating cadence that surfaces blockers before they become shelfware. The technology isn't the hard part. Building the system that makes people actually use it is.",
    tag: "AI Adoption",
  },
  {
    date: "2025",
    platform: "Success Panda LinkedIn Live",
    title: "The Career Reframe That Changed Everything",
    body: "I spent years calling myself a CS leader, a digital transformation lead, a CX strategist. None of those labels felt fully right — because none of them captured what I was actually doing. What I've always done is build program infrastructure. The systems and governance that make complex organizational change actually land. VMware, IBM, Egnyte — the work was always the same. I just needed the right name for it. Principal Program Manager, Enterprise AI Transformation. That's the lane.",
    tag: "Career & Positioning",
  },
];

export default function Voice() {
  return (
    <Layout>
      <div style={{ marginBottom:48 }}>
        <p style={{ fontFamily:"'DM Mono',monospace", fontSize:9, color:T3, letterSpacing:".22em", textTransform:"uppercase", marginBottom:12 }}>Thought Leadership</p>
        <h1 style={{ fontFamily:"'Playfair Display',serif", fontSize:"clamp(32px,5vw,56px)", fontWeight:800, color:TX, marginBottom:16, lineHeight:1.1 }}>
          Point of View
        </h1>
        <p style={{ fontSize:15, color:T2, lineHeight:1.75, fontWeight:300, maxWidth:580 }}>
          On enterprise AI transformation, program governance, and building the infrastructure that makes organizational change stick.
        </p>
      </div>

      <div style={{ display:"flex", flexDirection:"column", gap:24 }}>
        {posts.map((p, i) => (
          <div key={i} style={{ background:BG2, border:`1px solid ${BD2}`, padding:"32px 36px" }}>
            <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", marginBottom:16, flexWrap:"wrap", gap:8 }}>
              <div style={{ display:"flex", gap:12, alignItems:"center" }}>
                <span style={{ fontFamily:"'DM Mono',monospace", fontSize:8, color:T3, letterSpacing:".1em" }}>{p.date}</span>
                <span style={{ fontFamily:"'DM Mono',monospace", fontSize:8, color:CY, border:`1px solid ${BD}`, padding:"2px 8px", letterSpacing:".1em", textTransform:"uppercase" }}>{p.tag}</span>
              </div>
              <span style={{ fontFamily:"'DM Mono',monospace", fontSize:8, color:T3, letterSpacing:".06em" }}>{p.platform}</span>
            </div>
            <h2 style={{ fontFamily:"'Playfair Display',serif", fontSize:"clamp(18px,2.5vw,24px)", fontWeight:700, color:TX, marginBottom:16, lineHeight:1.3 }}>{p.title}</h2>
            <p style={{ fontSize:14, color:T2, lineHeight:1.85, fontWeight:300 }}>{p.body}</p>
          </div>
        ))}
      </div>
    </Layout>
  );
}
