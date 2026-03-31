import { useState } from "react";
import Link from "next/link";
import Layout from "../components/Layout";

const CY = "#00D4D4";
const BG2 = "#1F2638";
const TX = "#F2F4F7";
const T2 = "rgba(242,244,247,0.62)";
const T3 = "rgba(242,244,247,0.35)";
const BD = "rgba(0,212,212,0.2)";
const BD2 = "rgba(242,244,247,0.08)";

const cases = [
  {
    id: "path7",
    co: "PE-Backed Enterprise SaaS Co.",
    dates: "2025–Present",
    role: "Principal Program Manager, Enterprise AI Transformation",
    tag: "AI Transformation · CX Retention · 5-Pillar Enterprise Program",
    flagship: true,
    headline: "Building the AI-Enabled Infrastructure That Makes Enterprise Transformation Land",
    situation: "A PE-backed enterprise SaaS company had five critical retention risks operating in complete isolation — AI shelfware, M&A-driven churn, MSP ecosystem instability, strategic account attrition, and billing errors. No governance. No cross-functional accountability. No unified view of what was at risk. The program I built didn't just connect the workstreams — it converted each one from a manual, fragmented operation into an AI-enabled workflow with measurable impact.",
    contributions: [
      "Built AI-powered billing reconciliation tool identifying gaps across disparate systems — eliminating 15 hrs/week of manual work and surfacing hidden ARR exposure",
      "Designed AI revenue forecasting model pulling live data across CRM, Finance, and Support — recovering 40 hrs/week previously lost to manual reporting",
      "Implemented automated expansion, adoption, and renewal signal monitoring — giving CS leadership real-time dashboards replacing 10 hrs/week of manual tracking",
      "Led cross-functional AI tools enablement program moving org from ad hoc experimentation to structured AI-first workflows",
      "Built customer-facing AI adoption program from scratch — narrative, metrics, adoption plans — enabling the org to formally speak to and track AI outcomes",
      "Used AI to identify MSP partner process gaps — resulting in formalized playbooks and repeatable enablement model",
    ],
    outcomes: [
      "COO-visible program with SVP executive sponsorship across 6+ cross-functional stakeholders",
      "AI pillar running ahead of schedule",
      "15 hrs/week eliminated in billing reconciliation",
      "40 hrs/week recovered in forecasting cycles",
      "10 hrs/week recovered in CS leadership reporting",
      "Customer AI adoption program launched for the first time",
    ],
    metrics: [{ v:"5", l:"Pillars" }, { v:"65+", l:"Hrs/Week\nRecovered" }, { v:"COO", l:"Visibility" }],
    takeaway: "The program infrastructure isn't the overhead. It's what converts an AI initiative from a slide deck into organizational change. Every hour recovered and every risk surfaced started with building the governance layer first.",
  },
  {
    id: "vmware",
    co: "VMware (Broadcom)",
    dates: "2021–2024",
    role: "Senior Manager, Program Management",
    tag: "Post-Acquisition Integration · Governance Design · $61B Transaction",
    headline: "Designing Program Governance for a $61B Acquisition — 12,000+ Enterprise Accounts",
    situation: "When Broadcom acquired VMware in one of the largest tech acquisitions in history, the post-sales organization had no unified program structure. 12,000+ enterprise accounts needed migration across 4 global regions simultaneously — with no playbook, no governance model, and leadership under intense pressure to maintain revenue continuity. Every business unit was operating independently.",
    contributions: [
      "Designed governance model across 8 parallel workstreams spanning 4 global regions",
      "Built executive alignment framework and steering committee cadence for VP and C-suite",
      "Owned master program plan, RAID log, and escalation protocols throughout peak disruption",
      "Coordinated Sales, Finance, Product, and post-sales teams under a single program structure",
      "Designed predictive health and churn segmentation models influencing $25M+ in at-risk ARR",
      "Built joint CX–Finance NRR/GRR forecasting and portfolio review cadence",
      "Presented VMware's digital program toolkit at Gainsight Pulse 2023",
    ],
    outcomes: [
      "12,000+ enterprise accounts transitioned across 4 global regions",
      "8 parallel workstreams coordinated without program breakdown",
      "$25M+ in at-risk ARR influenced through predictive health models",
      "Revenue continuity maintained through peak organizational disruption",
    ],
    metrics: [{ v:"$61B", l:"Acquisition\nScale" }, { v:"12K+", l:"Enterprise\nAccounts" }, { v:"$25M+", l:"At-Risk ARR\nInfluenced" }],
    takeaway: "The hardest part of post-acquisition program management isn't the complexity — it's the absence of authority. The job is building the structure everyone can work within before they realize they needed it.",
  },
  {
    id: "ibm",
    co: "IBM",
    dates: "2018–2020",
    role: "Program Manager, CX Systems & SaaS Operations",
    tag: "SaaS Transformation · Lifecycle Design · AI-Enabled Customer Engagement",
    headline: "Transforming IBM's Customer Operating Model Across 9 Business Units, 250+ Products",
    situation: "IBM's SaaS portfolio had 9 business units and 250+ products operating with disconnected customer data, inconsistent lifecycle practices, and no unified health scoring model. Leadership had no reliable view of churn risk or expansion opportunity across the portfolio. The program needed to build the infrastructure from scratch — across one of the most complex enterprise technology organizations in the world.",
    contributions: [
      "Co-led IBM's global SaaS Value Delivery Program across 9 business units",
      "Designed and operationalized Gainsight architecture enabling health scoring and journey orchestration",
      "Built lifecycle and segmentation models surfacing churn, adoption, and expansion signals",
      "Implemented unified KPIs across BI, CS, and Salesforce for the first time",
      "Led digital transformation of 12 product lines to SaaS subscription models",
      "Retained $15M+ in ARR through proactive account management infrastructure",
    ],
    outcomes: [
      "30% improvement in at-risk account visibility",
      "$15M+ in retained ARR through proactive program infrastructure",
      "Unified health scoring model deployed across 9 business units",
      "Gainsight GameChanger Award 2020 — Experience Maker category",
    ],
    metrics: [{ v:"9", l:"Business\nUnits" }, { v:"250+", l:"Products" }, { v:"$15M+", l:"ARR\nRetained" }],
    takeaway: "At IBM scale, the problem is never the data — it's the absence of a unified system to act on it. The program infrastructure is what turns signals into interventions before the customer is already gone.",
  },
];

export default function Work() {
  const [open, setOpen] = useState(null);

  return (
    <Layout>
      <div style={{ marginBottom:48 }}>
        <p style={{ fontFamily:"'DM Mono',monospace", fontSize:9, color:T3, letterSpacing:".22em", textTransform:"uppercase", marginBottom:12 }}>Case Studies</p>
        <h1 style={{ fontFamily:"'Playfair Display',serif", fontSize:"clamp(32px,5vw,56px)", fontWeight:800, color:TX, marginBottom:16, lineHeight:1.1 }}>
          Program Work
        </h1>
        <p style={{ fontSize:15, color:T2, lineHeight:1.75, fontWeight:300, maxWidth:580 }}>
          Enterprise programs at VMware, IBM, and Egnyte — post-acquisition integration, AI transformation, and retention operating model design at scale.
        </p>
      </div>

      <div style={{ display:"flex", flexDirection:"column", gap:16 }}>
        {cases.map(c => (
          <div key={c.id} style={{ background:BG2, border:`1px solid ${c.flagship ? BD : BD2}`, overflow:"hidden" }}>
            {/* Card Header */}
            <div
              onClick={() => setOpen(open === c.id ? null : c.id)}
              style={{ padding:"28px 32px", cursor:"pointer", display:"flex", justifyContent:"space-between", alignItems:"flex-start", gap:20 }}
            >
              <div style={{ flex:1 }}>
                <div style={{ display:"flex", alignItems:"center", gap:10, marginBottom:10, flexWrap:"wrap" }}>
                  <span style={{ fontFamily:"'DM Mono',monospace", fontSize:8, color:CY, border:`1px solid ${BD}`, padding:"3px 10px", letterSpacing:".14em", textTransform:"uppercase" }}>{c.co}</span>
                  <span style={{ fontFamily:"'DM Mono',monospace", fontSize:8, color:T3, letterSpacing:".08em" }}>{c.dates}</span>
                  {c.flagship && <span style={{ fontFamily:"'DM Mono',monospace", fontSize:7, color:CY, background:"rgba(0,212,212,0.1)", border:`1px solid ${BD}`, padding:"2px 8px", letterSpacing:".14em", textTransform:"uppercase" }}>Flagship</span>}
                </div>
                <h2 style={{ fontFamily:"'Playfair Display',serif", fontSize:"clamp(18px,2.5vw,24px)", fontWeight:700, color:TX, marginBottom:8, lineHeight:1.3 }}>{c.headline}</h2>
                <p style={{ fontFamily:"'DM Mono',monospace", fontSize:9, color:T3, letterSpacing:".08em" }}>{c.tag}</p>
              </div>
              <span style={{ color:CY, fontSize:20, flexShrink:0, marginTop:4 }}>{open === c.id ? "−" : "+"}</span>
            </div>

            {/* Expanded */}
            {open === c.id && (
              <div style={{ padding:"0 32px 32px", borderTop:`1px solid ${BD2}` }}>
                {/* Metrics */}
                <div style={{ display:"flex", gap:1, background:BD2, margin:"24px 0" }}>
                  {c.metrics.map(m => (
                    <div key={m.v} style={{ flex:1, background:BG2, padding:"16px 12px", textAlign:"center" }}>
                      <span style={{ fontFamily:"'Playfair Display',serif", fontSize:28, fontWeight:800, color:CY, display:"block", lineHeight:1, marginBottom:6 }}>{m.v}</span>
                      <span style={{ fontFamily:"'DM Mono',monospace", fontSize:8, color:T3, textTransform:"uppercase", letterSpacing:".1em", lineHeight:1.5, whiteSpace:"pre-line" }}>{m.l}</span>
                    </div>
                  ))}
                </div>

                {/* Situation */}
                <p style={{ fontFamily:"'DM Mono',monospace", fontSize:8, color:T3, letterSpacing:".2em", textTransform:"uppercase", marginBottom:10 }}>The Situation</p>
                <p style={{ fontSize:14, color:T2, lineHeight:1.8, fontWeight:300, marginBottom:28 }}>{c.situation}</p>

                {/* Contributions */}
                <p style={{ fontFamily:"'DM Mono',monospace", fontSize:8, color:T3, letterSpacing:".2em", textTransform:"uppercase", marginBottom:12 }}>What I Built</p>
                <ul style={{ listStyle:"none", padding:0, marginBottom:28 }}>
                  {c.contributions.map((b, i) => (
                    <li key={i} style={{ display:"flex", gap:12, fontSize:13, color:T2, lineHeight:1.75, marginBottom:8, fontWeight:300 }}>
                      <span style={{ color:CY, flexShrink:0 }}>→</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                {/* Outcomes */}
                <p style={{ fontFamily:"'DM Mono',monospace", fontSize:8, color:T3, letterSpacing:".2em", textTransform:"uppercase", marginBottom:12 }}>Outcomes</p>
                <ul style={{ listStyle:"none", padding:0, marginBottom:28 }}>
                  {c.outcomes.map((o, i) => (
                    <li key={i} style={{ display:"flex", gap:12, fontSize:13, color:T2, lineHeight:1.75, marginBottom:8, fontWeight:300 }}>
                      <span style={{ color:CY, flexShrink:0 }}>✓</span>
                      <span>{o}</span>
                    </li>
                  ))}
                </ul>

                {/* Takeaway */}
                <div style={{ background:"rgba(0,212,212,0.06)", borderLeft:`3px solid ${CY}`, padding:"14px 18px", marginBottom: c.flagship ? 20 : 0 }}>
                  <p style={{ fontFamily:"'DM Mono',monospace", fontSize:8, color:CY, letterSpacing:".2em", textTransform:"uppercase", marginBottom:8 }}>PM Takeaway</p>
                  <p style={{ fontSize:13, fontWeight:400, lineHeight:1.75, color:TX, fontStyle:"italic" }}>{c.takeaway}</p>
                </div>

                {c.flagship && (
                  <div style={{ display:"flex", justifyContent:"flex-end", marginTop:16 }}>
                    <Link href="/case-study/path-to-7" style={{ fontFamily:"'DM Mono',monospace", fontSize:10, color:CY, letterSpacing:".12em", textTransform:"uppercase", borderBottom:`1px solid rgba(0,212,212,0.3)`, paddingBottom:2 }}>
                      Read the Full Case Study →
                    </Link>
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </Layout>
  );
}
