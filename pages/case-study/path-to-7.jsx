import Layout from "../../components/Layout";

const CY = "#00D4D4";
const BG2 = "#1F2638";
const TX = "#F2F4F7";
const T2 = "rgba(242,244,247,0.62)";
const T3 = "rgba(242,244,247,0.35)";
const BD = "rgba(0,212,212,0.2)";
const BD2 = "rgba(242,244,247,0.08)";

const SectionLabel = ({ children }) => (
  <div style={{ display:"flex", alignItems:"center", gap:12, marginBottom:32 }}>
    <span style={{ fontFamily:"'DM Mono',monospace", fontSize:9, color:T3, letterSpacing:".26em", textTransform:"uppercase" }}>{children}</span>
    <div style={{ flex:1, height:1, background:BD2 }}/>
  </div>
);

const Pull = ({ children }) => (
  <p style={{ fontFamily:"'Playfair Display',serif", fontSize:"clamp(18px,2.2vw,24px)", fontWeight:700, lineHeight:1.45, color:TX, borderLeft:`4px solid ${CY}`, paddingLeft:24, margin:"36px 0" }}>
    {children}
  </p>
);

const Metric = ({ value, label }) => (
  <div style={{ textAlign:"center", padding:"20px 28px", border:`1px solid ${BD}`, background:BG2 }}>
    <span style={{ fontFamily:"'Playfair Display',serif", fontSize:36, fontWeight:800, color:CY, display:"block", marginBottom:6, lineHeight:1 }}>{value}</span>
    <span style={{ fontFamily:"'DM Mono',monospace", fontSize:9, color:T3, textTransform:"uppercase", letterSpacing:".1em", lineHeight:1.5, whiteSpace:"pre-line" }}>{label}</span>
  </div>
);

const Bullet = ({ children }) => (
  <li style={{ display:"flex", gap:12, fontSize:14, fontWeight:300, color:T2, lineHeight:1.8, marginBottom:12 }}>
    <span style={{ color:CY, flexShrink:0, marginTop:2 }}>→</span>
    <span>{children}</span>
  </li>
);

const OutcomeBullet = ({ children }) => (
  <li style={{ display:"flex", gap:12, fontSize:14, fontWeight:300, color:T2, lineHeight:1.8, marginBottom:12 }}>
    <span style={{ color:CY, flexShrink:0, marginTop:2 }}>✓</span>
    <span>{children}</span>
  </li>
);

const PillarCard = ({ title, what, impact }) => (
  <div style={{ background:BG2, border:`1px solid ${BD2}`, padding:"24px 28px", marginBottom:16 }}>
    <p style={{ fontFamily:"'DM Mono',monospace", fontSize:9, color:CY, letterSpacing:".14em", textTransform:"uppercase", marginBottom:10 }}>{title}</p>
    <p style={{ fontSize:14, color:T2, lineHeight:1.8, fontWeight:300, marginBottom: impact ? 16 : 0 }}>{what}</p>
    {impact && (
      <div style={{ background:"rgba(0,212,212,0.06)", borderLeft:`3px solid ${CY}`, padding:"10px 14px" }}>
        <p style={{ fontFamily:"'DM Mono',monospace", fontSize:8, color:CY, letterSpacing:".16em", textTransform:"uppercase", marginBottom:6 }}>Impact</p>
        <p style={{ fontSize:13, color:TX, lineHeight:1.7, fontWeight:400 }}>{impact}</p>
      </div>
    )}
  </div>
);

export default function PathTo7() {
  return (
    <Layout>
      {/* HERO */}
      <div style={{ marginBottom:64 }}>
        <div style={{ display:"flex", alignItems:"center", gap:10, marginBottom:20, flexWrap:"wrap" }}>
          <span style={{ fontFamily:"'DM Mono',monospace", fontSize:8, color:CY, border:`1px solid ${BD}`, padding:"3px 10px", letterSpacing:".14em", textTransform:"uppercase" }}>PE-Backed Enterprise SaaS Co.</span>
          <span style={{ fontFamily:"'DM Mono',monospace", fontSize:8, color:T3, letterSpacing:".08em" }}>2025–Present · Active Program</span>
          <span style={{ fontFamily:"'DM Mono',monospace", fontSize:7, color:CY, background:"rgba(0,212,212,0.1)", border:`1px solid ${BD}`, padding:"2px 8px", letterSpacing:".14em", textTransform:"uppercase" }}>Flagship</span>
        </div>

        <h1 style={{ fontFamily:"'Playfair Display',serif", fontSize:"clamp(32px,5vw,58px)", fontWeight:800, lineHeight:1.05, color:TX, marginBottom:20 }}>
          Path to 7%:<br/>Building the AI Infrastructure<br/>That Makes Transformation Land
        </h1>

        <p style={{ fontSize:16, color:T2, lineHeight:1.8, fontWeight:300, maxWidth:680, marginBottom:40 }}>
          A COO-visible, five-pillar enterprise AI transformation program converting fragmented, manual operations into AI-enabled workflows — with measurable impact across billing, forecasting, retention, and customer AI adoption.
        </p>

        {/* Metrics row */}
        <div style={{ display:"grid", gridTemplateColumns:"repeat(5,1fr)", gap:1, background:BD2, marginBottom:16 }}>
          {[
            { v:"5", l:"Program\nPillars" },
            { v:"6+", l:"Cross-Functional\nWorkstreams" },
            { v:"15 hrs", l:"Saved Weekly\n(Billing)" },
            { v:"40 hrs", l:"Saved Weekly\n(Forecasting)" },
            { v:"10 hrs", l:"Saved Weekly\n(CS Reporting)" },
          ].map(m => (
            <div key={m.v} style={{ background:BG2, padding:"18px 12px", textAlign:"center" }}>
              <span style={{ fontFamily:"'Playfair Display',serif", fontSize:26, fontWeight:800, color:CY, display:"block", lineHeight:1, marginBottom:6 }}>{m.v}</span>
              <span style={{ fontFamily:"'DM Mono',monospace", fontSize:8, color:T3, textTransform:"uppercase", letterSpacing:".08em", lineHeight:1.5, whiteSpace:"pre-line" }}>{m.l}</span>
            </div>
          ))}
        </div>
      </div>

      {/* THE SITUATION */}
      <div style={{ marginBottom:56 }}>
        <SectionLabel>The Situation</SectionLabel>
        <p style={{ fontSize:15, color:T2, lineHeight:1.85, fontWeight:300, marginBottom:20 }}>
          Following a significant PE investment, this enterprise SaaS company faced mounting retention pressure across five critical business functions — each operating in complete isolation. AI tooling was being deployed but not adopted. M&A activity was accelerating churn risk in key segments. The MSP partner ecosystem had no formal playbook. Strategic accounts lacked structured coverage. And $1.7M+ in billing errors had accumulated across two quarters with no coordinated remediation.
        </p>
        <p style={{ fontSize:15, color:T2, lineHeight:1.85, fontWeight:300 }}>
          The COO needed a program that didn't just connect these workstreams — but converted each one from a manual, fragmented operation into an AI-enabled workflow with real-time executive visibility and measurable business impact. That's the program I was brought in to build.
        </p>

        <Pull>
          "The problem wasn't that these teams lacked effort. It was that they had no shared infrastructure. No governance. No unified view of what was at risk. The five pillars weren't connected to each other — or to leadership."
        </Pull>
      </div>

      {/* WHAT I BUILT */}
      <div style={{ marginBottom:56 }}>
        <SectionLabel>What I Built — Pillar by Pillar</SectionLabel>

        <PillarCard
          title="Pillar 1 · AI Adoption"
          what="Designed and led the enterprise AI adoption program — building the governance framework, adoption metrics, and workflow integration infrastructure that moves the org from ad hoc AI experimentation to structured, AI-first processes. This pillar is currently running ahead of schedule."
          impact="Cross-functional AI enablement deployed across CS, Sales, and RevOps. Organization has measurable AI adoption metrics for the first time. Customer-facing AI adoption program built from scratch including narrative framework, success metrics, and formal adoption plans."
        />

        <PillarCard
          title="Pillar 2 · M&A Churn Defense"
          what="Built the monitoring and intervention infrastructure to identify and address M&A-driven churn risk in real time — creating playbooks, escalation protocols, and executive visibility into accounts at risk due to acquisition activity in customer portfolios."
          impact="Proactive churn defense program in place for M&A-affected accounts, replacing reactive firefighting with structured risk management."
        />

        <PillarCard
          title="Pillar 3 · MSP Ecosystem"
          what="Used AI to identify process gaps across the MSP partner ecosystem — analyzing data consumption patterns, forecasting accuracy, and enablement gaps. Built formalized MSP playbooks and a structured partner adoption program replacing ad hoc partner management."
          impact="Formalized MSP playbooks deployed. Improved forecast accuracy and partner data visibility. Repeatable enablement model replacing heroics."
        />

        <PillarCard
          title="Pillar 4 · Strategic Accounts"
          what="Built structured coverage and intervention framework for strategic accounts — ensuring high-value customers have clear ownership, defined success milestones, and proactive engagement at every stage of the lifecycle."
          impact="Strategic account coverage model in place with defined ownership and escalation paths at each lifecycle stage."
        />

        <PillarCard
          title="Pillar 5 · Billing & Entitlements"
          what="Built an AI-powered billing reconciliation tool that identifies gaps across disparate billing and financial systems in real time — surfacing previously invisible ARR exposure and giving Billing, Finance, and Renewals teams a single source of truth."
          impact="15 hours per week of manual cross-system reconciliation eliminated. $1.7M+ in billing errors surfaced and escalated for remediation. Finance and Renewals leadership now have unified, real-time billing visibility for the first time."
        />
      </div>

      {/* AI INFRASTRUCTURE */}
      <div style={{ marginBottom:56 }}>
        <SectionLabel>The AI Infrastructure Layer</SectionLabel>
        <p style={{ fontSize:15, color:T2, lineHeight:1.85, fontWeight:300, marginBottom:28 }}>
          Beyond the five pillars, I built the AI-enabled infrastructure that runs underneath the entire program — converting manual reporting and fragmented data into real-time intelligence for leadership.
        </p>

        <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:16 }}>
          {[
            { title:"AI Revenue Forecasting Model", desc:"Replaced fragmented spreadsheet forecasting with a live model pulling data continuously across CRM, Finance, and Support. Revenue leaders now have an always-current view that recovers 40 hours per week previously lost to manual reporting cycles." },
            { title:"AI-Powered CS Risk Dashboards", desc:"Implemented automated signal monitoring across expansion, adoption, and renewal metrics. Surfacing risk earlier and replacing 10 hours per week of manual tracking with executive-ready dashboards that update in real time." },
            { title:"Executive Decision-Support Layer", desc:"Built E-Staff dashboards connecting health scores, expansion signals, and unit economics to executive planning cycles — giving the COO and SVP real-time portfolio visibility for the first time." },
            { title:"Customer AI Adoption Program", desc:"Built the customer-facing AI adoption program from scratch — narrative, success metrics, structured adoption plans. The organization can now formally speak to AI offerings and track customer adoption outcomes." },
          ].map(card => (
            <div key={card.title} style={{ background:BG2, border:`1px solid ${BD2}`, padding:"22px 24px" }}>
              <p style={{ fontWeight:700, color:TX, fontSize:14, marginBottom:10 }}>{card.title}</p>
              <p style={{ fontSize:13, color:T2, lineHeight:1.75, fontWeight:300 }}>{card.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* OUTCOMES */}
      <div style={{ marginBottom:56 }}>
        <SectionLabel>Outcomes</SectionLabel>
        <ul style={{ listStyle:"none", padding:0 }}>
          <OutcomeBullet>COO-visible program with direct executive praise for execution quality</OutcomeBullet>
          <OutcomeBullet>SVP executive sponsorship with cross-functional accountability authority established</OutcomeBullet>
          <OutcomeBullet>AI pillar running ahead of schedule — first measurable AI adoption metrics in place</OutcomeBullet>
          <OutcomeBullet>15 hours per week eliminated in billing reconciliation; $1.7M+ in errors surfaced</OutcomeBullet>
          <OutcomeBullet>40 hours per week recovered in revenue forecasting cycles</OutcomeBullet>
          <OutcomeBullet>10 hours per week recovered in CS leadership reporting and meeting prep</OutcomeBullet>
          <OutcomeBullet>Customer AI adoption program launched — organization can formally speak to and track AI outcomes with customers for the first time</OutcomeBullet>
          <OutcomeBullet>Formalized MSP playbooks deployed; partner ecosystem moved from heroics to repeatable process</OutcomeBullet>
        </ul>
      </div>

      {/* PM LESSON */}
      <div style={{ background:"rgba(0,212,212,0.06)", border:`1px solid ${BD}`, padding:"32px 36px", marginBottom:56 }}>
        <p style={{ fontFamily:"'DM Mono',monospace", fontSize:9, color:CY, letterSpacing:".22em", textTransform:"uppercase", marginBottom:16 }}>PM Takeaway</p>
        <p style={{ fontFamily:"'Playfair Display',serif", fontSize:"clamp(18px,2.2vw,22px)", fontWeight:700, lineHeight:1.5, color:TX, marginBottom:16 }}>
          "The program infrastructure isn't the overhead. It's what converts an AI initiative from a slide deck into organizational change."
        </p>
        <p style={{ fontSize:14, color:T2, lineHeight:1.8, fontWeight:300 }}>
          Every hour recovered and every risk surfaced started with building the governance layer first — clear workstream ownership, a unified RAID log, executive operating cadence, and cross-functional accountability. The AI tools work because the program structure gives them somewhere to land. That's the lesson: you don't start with the technology. You start with the infrastructure that makes the technology stick.
        </p>
      </div>
    </Layout>
  );
}
