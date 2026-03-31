import Layout from "../components/Layout";

const CY = "#00D4D4";
const BG2 = "#1F2638";
const TX = "#F2F4F7";
const T2 = "rgba(242,244,247,0.62)";
const T3 = "rgba(242,244,247,0.35)";
const BD = "rgba(0,212,212,0.2)";
const BD2 = "rgba(242,244,247,0.08)";

const awards = [
  {
    year:"2020",
    title:"Gainsight GameChanger Award",
    category:"Experience Maker Category",
    company:"IBM",
    desc:"Awarded by Gainsight — the leading customer success platform — for transforming IBM's customer operating model across 9 business units and 250+ products. Recognized for building the lifecycle, health scoring, and engagement infrastructure that fundamentally changed how IBM managed its SaaS customer base at global scale.",
    highlight:"One of a handful of practitioners globally recognized in this category.",
  },
  {
    year:"2022",
    title:"Manager's Choice Award",
    category:"Cross-Functional Excellence",
    company:"VMware",
    desc:"Recognized by senior leadership for exceptional cross-functional program leadership during VMware's $61B acquisition by Broadcom. Awarded during one of the most complex organizational transitions in enterprise tech history.",
    highlight:"Nominated and selected during peak acquisition complexity.",
  },
  {
    year:"2019",
    title:"Manager's Choice Award",
    category:"Program Design & Execution",
    company:"IBM",
    desc:"Recognized for SaaS lifecycle program design and execution across IBM's global product portfolio. Awarded for building the foundational program infrastructure that enabled IBM's transition to digital customer success at scale.",
    highlight:"Early recognition of the transformation approach that would define the next five years of work.",
  },
];

const speaking = [
  { year:"2026", event:"All Things AI Conference", loc:"Durham, NC", detail:"Attended and participated in sessions on agentic AI transformation and enterprise adoption infrastructure. Validated the exact program approach running at Egnyte." },
  { year:"2025", event:"Matik Digital + CS Summit", loc:"Virtual", detail:"Presented on AI-enabled program design and the infrastructure layer that makes AI adoption stick in enterprise organizations." },
  { year:"2025", event:"Success Panda LinkedIn Live", loc:"Virtual", detail:"Featured guest on CS-to-PM career transition and enterprise transformation program design." },
  { year:"2023", event:"Gainsight Pulse", loc:"Digital Strategies Track", detail:"Presented VMware's digital program toolkit — the governance and operating cadence model for managing 12,000+ enterprise accounts through post-acquisition transition." },
];

export default function Awards() {
  return (
    <Layout>
      <div style={{ marginBottom:48 }}>
        <p style={{ fontFamily:"'DM Mono',monospace", fontSize:9, color:T3, letterSpacing:".22em", textTransform:"uppercase", marginBottom:12 }}>Recognition</p>
        <h1 style={{ fontFamily:"'Playfair Display',serif", fontSize:"clamp(32px,5vw,56px)", fontWeight:800, color:TX, marginBottom:16, lineHeight:1.1 }}>
          Awards & Speaking
        </h1>
        <p style={{ fontSize:15, color:T2, lineHeight:1.75, fontWeight:300, maxWidth:580 }}>
          Industry recognition and thought leadership across enterprise program management and AI transformation.
        </p>
      </div>

      {/* AWARDS */}
      <div style={{ marginBottom:64 }}>
        <p style={{ fontFamily:"'DM Mono',monospace", fontSize:9, color:T3, letterSpacing:".22em", textTransform:"uppercase", marginBottom:28 }}>Awards</p>
        <div style={{ display:"flex", flexDirection:"column", gap:16 }}>
          {awards.map(a => (
            <div key={a.title+a.year} style={{ background:BG2, border:`1px solid ${BD2}`, padding:"32px 36px" }}>
              <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", marginBottom:16, flexWrap:"wrap", gap:12 }}>
                <div>
                  <span style={{ fontFamily:"'DM Mono',monospace", fontSize:9, color:CY, display:"block", marginBottom:8 }}>{a.year} · {a.company}</span>
                  <h2 style={{ fontFamily:"'Playfair Display',serif", fontSize:"clamp(18px,2.5vw,26px)", fontWeight:700, color:TX, lineHeight:1.2, marginBottom:4 }}>{a.title}</h2>
                  <p style={{ fontFamily:"'DM Mono',monospace", fontSize:9, color:T3, letterSpacing:".08em" }}>{a.category}</p>
                </div>
              </div>
              <p style={{ fontSize:14, color:T2, lineHeight:1.8, fontWeight:300, marginBottom:16 }}>{a.desc}</p>
              <div style={{ background:"rgba(0,212,212,0.06)", borderLeft:`3px solid ${CY}`, padding:"10px 16px" }}>
                <p style={{ fontSize:13, color:TX, lineHeight:1.6, fontStyle:"italic" }}>{a.highlight}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* SPEAKING */}
      <div>
        <p style={{ fontFamily:"'DM Mono',monospace", fontSize:9, color:T3, letterSpacing:".22em", textTransform:"uppercase", marginBottom:28 }}>Speaking & Appearances</p>
        <div style={{ display:"flex", flexDirection:"column", gap:1, background:BD2 }}>
          {speaking.map(s => (
            <div key={s.event} style={{ background:BG2, padding:"24px 28px" }}>
              <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", marginBottom:10, flexWrap:"wrap", gap:8 }}>
                <div style={{ display:"flex", gap:12, alignItems:"center" }}>
                  <span style={{ fontFamily:"'DM Mono',monospace", fontSize:9, color:CY }}>{s.year}</span>
                  <span style={{ fontSize:15, fontWeight:700, color:TX }}>{s.event}</span>
                  <span style={{ fontSize:12, color:T3 }}>{s.loc}</span>
                </div>
              </div>
              <p style={{ fontSize:13, color:T2, lineHeight:1.75, fontWeight:300 }}>{s.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
