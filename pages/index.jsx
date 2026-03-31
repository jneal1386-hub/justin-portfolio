import Link from "next/link";
import Layout from "../components/Layout";

const CY = "#00D4D4";
const BG2 = "#1F2638";
const TX = "#F2F4F7";
const T2 = "rgba(242,244,247,0.62)";
const T3 = "rgba(242,244,247,0.35)";
const BD = "rgba(0,212,212,0.2)";
const BD2 = "rgba(242,244,247,0.08)";

const stats = [
  { v: "15+", l: "Years Enterprise\nProgram Management" },
  { v: "$61B", l: "Acquisition Integration\nProgram Lead" },
  { v: "5", l: "AI Transformation\nPillars Active" },
  { v: "$25M+", l: "At-Risk ARR\nInfluenced" },
];

const pillars = [
  { icon: "⚙", label: "Program Governance", desc: "RAID management, workstream design, steering committee cadence, executive alignment." },
  { icon: "🤖", label: "AI Workflow Infrastructure", desc: "Building the AI-enabled systems underneath transformation programs — forecasting, billing intelligence, risk monitoring." },
  { icon: "📊", label: "Executive Operating Cadence", desc: "Decision-support dashboards, portfolio reviews, and planning cycles that give leadership real-time visibility." },
  { icon: "🔁", label: "Change Management at Scale", desc: "Cross-functional enablement, adoption programs, and the accountability systems that make change stick." },
];

export default function Home() {
  return (
    <Layout>
      {/* HERO */}
      <div style={{ textAlign:"center", paddingTop:32, paddingBottom:64 }}>
        <p style={{ fontFamily:"'DM Mono',monospace", fontSize:10, color:CY, letterSpacing:".22em", textTransform:"uppercase", marginBottom:20 }}>
          Principal Program Manager · Enterprise AI Transformation
        </p>
        <h1 style={{ fontFamily:"'Playfair Display',serif", fontSize:"clamp(54px,9vw,96px)", fontWeight:800, lineHeight:.93, color:TX, marginBottom:14 }}>
          Justin T. Neal
        </h1>
        <div style={{ width:52, height:2, background:CY, margin:"0 auto 22px" }}/>
        <p style={{ fontSize:"clamp(18px,2.5vw,24px)", fontWeight:300, lineHeight:1.45, color:TX, maxWidth:680, margin:"0 auto 16px" }}>
          I build the <span style={{ color:CY, fontWeight:600 }}>AI-enabled infrastructure</span> that makes enterprise transformation actually land.
        </p>
        <p style={{ fontSize:15, fontWeight:300, lineHeight:1.7, color:T2, maxWidth:560, margin:"0 auto 40px" }}>
          Not the strategy. Not the vision. The governance, operating cadence, and cross-functional accountability system underneath it — the thing that turns an AI initiative into organizational change.
        </p>
        <div style={{ display:"flex", gap:14, justifyContent:"center", flexWrap:"wrap" }}>
          <Link href="/work" style={{ background:CY, color:"#1A1F2E", padding:"13px 28px", fontWeight:700, fontSize:12, letterSpacing:".1em", textTransform:"uppercase" }}>
            View My Work
          </Link>
          <Link href="/about" style={{ border:`1px solid ${BD}`, color:CY, padding:"13px 28px", fontWeight:600, fontSize:12, letterSpacing:".1em", textTransform:"uppercase" }}>
            About Me
          </Link>
        </div>
      </div>

      {/* STATS */}
      <div style={{ display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:1, background:BD2, marginBottom:80 }}>
        {stats.map(s => (
          <div key={s.v} style={{ background:"#1F2638", padding:"28px 20px", textAlign:"center" }}>
            <span style={{ fontFamily:"'Playfair Display',serif", fontSize:40, fontWeight:800, color:CY, display:"block", marginBottom:8, lineHeight:1 }}>{s.v}</span>
            <span style={{ fontFamily:"'DM Mono',monospace", fontSize:9, color:T3, textTransform:"uppercase", letterSpacing:".1em", lineHeight:1.6, whiteSpace:"pre-line" }}>{s.l}</span>
          </div>
        ))}
      </div>

      {/* WHAT I BUILD */}
      <div style={{ marginBottom:80 }}>
        <p style={{ fontFamily:"'DM Mono',monospace", fontSize:9, color:T3, letterSpacing:".22em", textTransform:"uppercase", marginBottom:12 }}>What I Build</p>
        <h2 style={{ fontFamily:"'Playfair Display',serif", fontSize:"clamp(28px,4vw,42px)", fontWeight:800, color:TX, marginBottom:40, lineHeight:1.2 }}>
          The infrastructure layer between<br/>AI strategy and organizational adoption.
        </h2>
        <div style={{ display:"grid", gridTemplateColumns:"repeat(2,1fr)", gap:16 }}>
          {pillars.map(p => (
            <div key={p.label} style={{ background:BG2, border:`1px solid ${BD2}`, padding:"28px 24px" }}>
              <span style={{ fontSize:24, marginBottom:12, display:"block" }}>{p.icon}</span>
              <p style={{ fontWeight:700, color:TX, fontSize:15, marginBottom:8 }}>{p.label}</p>
              <p style={{ fontSize:13, color:T2, lineHeight:1.7, fontWeight:300 }}>{p.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CURRENTLY */}
      <div style={{ background:BG2, border:`1px solid ${BD}`, padding:"36px 40px", marginBottom:80 }}>
        <p style={{ fontFamily:"'DM Mono',monospace", fontSize:9, color:CY, letterSpacing:".22em", textTransform:"uppercase", marginBottom:16 }}>Currently</p>
        <h3 style={{ fontFamily:"'Playfair Display',serif", fontSize:26, fontWeight:800, color:TX, marginBottom:12 }}>
          Leading Path to 7% — a live, COO-visible enterprise AI transformation program.
        </h3>
        <p style={{ fontSize:14, color:T2, lineHeight:1.8, fontWeight:300, marginBottom:24 }}>
          Five pillars. Six cross-functional workstreams. Direct SVP executive sponsorship. Converting manual, fragmented operations into AI-enabled workflows with measurable productivity and revenue impact — including an AI billing intelligence tool saving 15 hrs/week, an AI forecasting model recovering 40 hrs/week, and a customer AI adoption program built from the ground up.
        </p>
        <Link href="/case-study/path-to-7" style={{ fontFamily:"'DM Mono',monospace", fontSize:10, color:CY, letterSpacing:".12em", textTransform:"uppercase", borderBottom:`1px solid rgba(0,212,212,0.4)`, paddingBottom:2 }}>
          Read the Full Case Study →
        </Link>
      </div>

      {/* COMPANIES */}
      <div style={{ textAlign:"center" }}>
        <p style={{ fontFamily:"'DM Mono',monospace", fontSize:9, color:T3, letterSpacing:".22em", textTransform:"uppercase", marginBottom:28 }}>Enterprise Experience</p>
        <div style={{ display:"flex", justifyContent:"center", alignItems:"center", gap:48, flexWrap:"wrap" }}>
          {["VMware", "IBM", "UKG", "SolarWinds", "Egnyte"].map(c => (
            <span key={c} style={{ fontFamily:"'Playfair Display',serif", fontSize:18, fontWeight:700, color:T3 }}>{c}</span>
          ))}
        </div>
      </div>
    </Layout>
  );
}
