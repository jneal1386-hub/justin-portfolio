import Layout from "../components/Layout";

const CY = "#00D4D4";
const BG2 = "#1F2638";
const TX = "#F2F4F7";
const T2 = "rgba(242,244,247,0.62)";
const T3 = "rgba(242,244,247,0.35)";
const BD = "rgba(0,212,212,0.2)";
const BD2 = "rgba(242,244,247,0.08)";

const awards = [
  { year:"2020", title:"Gainsight GameChanger Award", sub:"Experience Maker Category · IBM", desc:"Recognized for transforming IBM's customer operating model across 9 business units." },
  { year:"2022", title:"Manager's Choice Award", sub:"VMware", desc:"Recognized for cross-functional program leadership during the Broadcom acquisition transition." },
  { year:"2019", title:"Manager's Choice Award", sub:"IBM", desc:"Recognized for SaaS lifecycle program design and execution." },
];

const speaking = [
  { year:"2026", event:"All Things AI Conference", loc:"Durham, NC", topic:"Enterprise AI Transformation" },
  { year:"2025", event:"Matik Digital + CS Summit", loc:"Virtual", topic:"AI-Enabled Program Design" },
  { year:"2025", event:"Success Panda LinkedIn Live", loc:"Virtual", topic:"CS to PM Transition & Transformation" },
  { year:"2023", event:"Gainsight Pulse", loc:"Digital Strategies Track", topic:"VMware's Digital Program Toolkit" },
];

export default function About() {
  return (
    <Layout>
      <div style={{ marginBottom:48 }}>
        <p style={{ fontFamily:"'DM Mono',monospace", fontSize:9, color:T3, letterSpacing:".22em", textTransform:"uppercase", marginBottom:12 }}>About</p>
        <h1 style={{ fontFamily:"'Playfair Display',serif", fontSize:"clamp(32px,5vw,56px)", fontWeight:800, color:TX, marginBottom:24, lineHeight:1.1 }}>
          Justin T. Neal
        </h1>
        <p style={{ fontFamily:"'DM Mono',monospace", fontSize:10, color:CY, letterSpacing:".16em", textTransform:"uppercase", marginBottom:0 }}>
          Principal Program Manager · Enterprise AI Transformation
        </p>
<img src="/jtnheadshot.jpeg" alt="Justin T. Neal" style={{ width:140, height:140, borderRadius:"50%", objectFit:"cover", border:"3px solid #00D4D4", marginTop:16, marginBottom:32, display:"block" }}/>
      </div>

      {/* BIO */}
      <div style={{ display:"grid", gridTemplateColumns:"3fr 2fr", gap:64, marginBottom:72, alignItems:"start" }}>
        <div>
          <p style={{ fontSize:15, color:T2, lineHeight:1.9, fontWeight:300, marginBottom:20 }}>
            I build the program infrastructure that makes enterprise AI transformation actually land. Not the strategy — the operating system underneath it. The governance, the cross-functional accountability, the adoption cadence, and the AI-enabled workflows that convert an initiative from a slide deck into measurable organizational change.
          </p>
          <p style={{ fontSize:15, color:T2, lineHeight:1.9, fontWeight:300, marginBottom:20 }}>
            I've been doing this work for 15 years — I just didn't always have the right name for it. At VMware, I built the governance structure for a $61B acquisition. At IBM, I ran transformation programs across 9 business units and 250+ products. Now at Egnyte, I'm leading Path to 7% — a live, COO-visible, five-pillar AI transformation program that's converting five fragmented business functions into AI-enabled workflows with real, measurable impact.
          </p>
          <p style={{ fontSize:15, color:T2, lineHeight:1.9, fontWeight:300, marginBottom:20 }}>
            I attended All Things AI 2026 in Durham last week. A speaker described the core failure pattern of enterprise AI initiatives from stage: companies start with the technology instead of the friction. They ask "what AI tools should we buy?" instead of "where are people working slow, fragile, dependent on heroics?" That's the exact problem I built Path to 7% to solve — before anyone said it from a stage.
          </p>
          <p style={{ fontSize:15, color:T2, lineHeight:1.9, fontWeight:300 }}>
            I'm based in Holly Springs, NC. MBA candidate at NC State (Poole College of Management, STEM-designated, Digital Transformation focus). Vetted by Toptal for enterprise program management engagements.
          </p>
        </div>

        <div>
          <div style={{ background:BG2, border:`1px solid ${BD}`, padding:"28px 24px", marginBottom:16 }}>
            <p style={{ fontFamily:"'DM Mono',monospace", fontSize:8, color:CY, letterSpacing:".2em", textTransform:"uppercase", marginBottom:16 }}>Core Competencies</p>
            {[
              "Enterprise AI Transformation",
              "Program Governance & Workstream Design",
              "AI-Enabled Workflow Infrastructure",
              "Post-Acquisition Integration",
              "Executive Operating Cadence",
              "Cross-functional Change Management",
              "NRR/GRR Forecasting",
              "RAID Management",
              "Lifecycle Segmentation",
              "Agile / Scrum (CSM)",
            ].map(s => (
              <div key={s} style={{ display:"flex", alignItems:"center", gap:8, marginBottom:8 }}>
                <span style={{ color:CY, fontSize:10 }}>·</span>
                <span style={{ fontSize:12, color:T2, fontWeight:300 }}>{s}</span>
              </div>
            ))}
          </div>

          <div style={{ background:BG2, border:`1px solid ${BD2}`, padding:"24px" }}>
            <p style={{ fontFamily:"'DM Mono',monospace", fontSize:8, color:CY, letterSpacing:".2em", textTransform:"uppercase", marginBottom:16 }}>Tools & Platforms</p>
            <p style={{ fontSize:12, color:T2, lineHeight:1.9, fontWeight:300 }}>
              Jira · Confluence · Gainsight (Certified) · Salesforce · SQL · Power BI · Tableau · Outreach · HubSpot
            </p>
          </div>
        </div>
      </div>

      {/* AWARDS */}
      <div style={{ marginBottom:72 }}>
        <p style={{ fontFamily:"'DM Mono',monospace", fontSize:9, color:T3, letterSpacing:".22em", textTransform:"uppercase", marginBottom:32 }}>Recognition</p>
        <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:16 }}>
          {awards.map(a => (
            <div key={a.title} style={{ background:BG2, border:`1px solid ${BD2}`, padding:"24px" }}>
              <span style={{ fontFamily:"'DM Mono',monospace", fontSize:9, color:CY, display:"block", marginBottom:10 }}>{a.year}</span>
              <p style={{ fontWeight:700, color:TX, fontSize:14, marginBottom:6, lineHeight:1.3 }}>{a.title}</p>
              <p style={{ fontFamily:"'DM Mono',monospace", fontSize:9, color:T3, marginBottom:10 }}>{a.sub}</p>
              <p style={{ fontSize:12, color:T2, lineHeight:1.7, fontWeight:300 }}>{a.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* SPEAKING */}
      <div style={{ marginBottom:72 }}>
        <p style={{ fontFamily:"'DM Mono',monospace", fontSize:9, color:T3, letterSpacing:".22em", textTransform:"uppercase", marginBottom:32 }}>Speaking & Thought Leadership</p>
        <div style={{ display:"flex", flexDirection:"column", gap:1, background:BD2 }}>
          {speaking.map(s => (
            <div key={s.event} style={{ background:BG2, padding:"18px 24px", display:"flex", justifyContent:"space-between", alignItems:"center", gap:20, flexWrap:"wrap" }}>
              <div>
                <span style={{ fontFamily:"'DM Mono',monospace", fontSize:8, color:CY, marginRight:12 }}>{s.year}</span>
                <span style={{ fontSize:14, fontWeight:600, color:TX }}>{s.event}</span>
                <span style={{ fontSize:12, color:T3, marginLeft:10 }}>{s.loc}</span>
              </div>
              <span style={{ fontFamily:"'DM Mono',monospace", fontSize:9, color:T3, letterSpacing:".06em" }}>{s.topic}</span>
            </div>
          ))}
        </div>
      </div>

      {/* EDUCATION */}
      <div style={{ marginBottom:56 }}>
        <p style={{ fontFamily:"'DM Mono',monospace", fontSize:9, color:T3, letterSpacing:".22em", textTransform:"uppercase", marginBottom:32 }}>Education</p>
        <div style={{ display:"flex", flexDirection:"column", gap:12 }}>
          {[
            { deg:"MBA (In Progress, exp. 2027)", school:"NC State University, Poole College of Management", note:"STEM-Designated · Digital Transformation Focus" },
            { deg:"M.S. Data Marketing Communications", school:"West Virginia University", note:"" },
            { deg:"B.S. Communications – Public Relations", school:"East Carolina University", note:"" },
          ].map(e => (
            <div key={e.deg} style={{ background:BG2, border:`1px solid ${BD2}`, padding:"18px 24px" }}>
              <p style={{ fontWeight:700, color:TX, fontSize:14, marginBottom:4 }}>{e.deg}</p>
              <p style={{ fontSize:12, color:T2, fontWeight:300 }}>{e.school}</p>
              {e.note && <p style={{ fontFamily:"'DM Mono',monospace", fontSize:9, color:T3, marginTop:6 }}>{e.note}</p>}
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div style={{ background:BG2, border:`1px solid ${BD}`, padding:"36px 40px", textAlign:"center" }}>
        <p style={{ fontFamily:"'Playfair Display',serif", fontSize:22, fontWeight:700, color:TX, marginBottom:12 }}>
          Building enterprise AI transformation infrastructure?
        </p>
        <p style={{ fontSize:14, color:T2, lineHeight:1.75, fontWeight:300, maxWidth:520, margin:"0 auto 24px" }}>
          I'd welcome a conversation about what you're building and where the execution layer gets hard.
        </p>
        <a href="mailto:jneal@justintneal.com" style={{ background:CY, color:"#1A1F2E", padding:"13px 32px", fontWeight:700, fontSize:12, letterSpacing:".1em", textTransform:"uppercase", display:"inline-block" }}>
          Get In Touch
        </a>
      </div>
    </Layout>
  );
}
