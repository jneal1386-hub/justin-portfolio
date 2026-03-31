import Link from "next/link";
import { useRouter } from "next/router";

const CY = "#00D4D4";
const BG = "#1A1F2E";
const TX = "#F2F4F7";
const T3 = "rgba(242,244,247,0.35)";
const BD2 = "rgba(242,244,247,0.08)";

const links = [
  { href: "/", label: "HOME" },
  { href: "/work", label: "WORK" },
  { href: "/voice", label: "THOUGHT LEADERSHIP" },
  { href: "/awards", label: "AWARDS" },
  { href: "/colleagues", label: "COLLEAGUES" },
  { href: "/about", label: "ABOUT" },
];

export default function Layout({ children }) {
  const router = useRouter();
  return (
    <div style={{ background: BG, color: TX, minHeight: "100vh", fontFamily: "'Inter',sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800&family=Inter:wght@300;400;500;600;700&family=DM+Mono:wght@400;500&display=swap');
        html,body{background:#1A1F2E!important;color:#F2F4F7!important;margin:0;padding:0}
        *{box-sizing:border-box}a{text-decoration:none;color:inherit}
        @media(max-width:700px){.nav-links{display:none!important}.page-inner{padding:48px 20px!important}}
      `}</style>

      <nav style={{ display:"flex", justifyContent:"space-between", alignItems:"center", padding:"18px 48px", borderBottom:`1px solid ${BD2}`, position:"sticky", top:0, zIndex:100, background:"rgba(26,31,46,0.97)", backdropFilter:"blur(16px)" }}>
        <Link href="/" style={{ fontFamily:"'Playfair Display',serif", fontSize:16, fontWeight:800, color:CY, lineHeight:1.1 }}>
          JUSTIN<br/>NEAL
        </Link>
        <div className="nav-links" style={{ display:"flex", gap:28 }}>
          {links.slice(1).map(l => (
            <Link key={l.href} href={l.href} style={{ fontSize:11, fontWeight:500, letterSpacing:".12em", color: router.pathname === l.href ? CY : T3, borderBottom: router.pathname === l.href ? `1px solid ${CY}` : "none", paddingBottom:2 }}>
              {l.label}
            </Link>
          ))}
        </div>
        <a href="mailto:jneal@justintneal.com" style={{ background:CY, color:BG, fontSize:11, fontWeight:700, letterSpacing:".1em", textTransform:"uppercase", padding:"9px 18px" }}>
          GET IN TOUCH
        </a>
      </nav>

      <main className="page-inner" style={{ maxWidth:1060, margin:"0 auto", padding:"64px 48px" }}>
        {children}
      </main>

      <footer style={{ borderTop:`1px solid ${BD2}`, padding:"28px 48px", display:"flex", justifyContent:"space-between", alignItems:"center", background:BG }}>
        <div>
          <p style={{ fontFamily:"'Playfair Display',serif", fontSize:14, fontWeight:700, color:CY, marginBottom:5 }}>JUSTIN T. NEAL</p>
          <p style={{ fontSize:11, color:T3 }}>Principal Program Manager · Enterprise AI Transformation · Holly Springs, NC</p>
          <a href="mailto:jneal@justintneal.com" style={{ fontSize:11, color:CY, marginTop:6, display:"block" }}>jneal@justintneal.com</a>
        </div>
        <div style={{ display:"flex", gap:20 }}>
          <a href="https://linkedin.com/in/justintneal" target="_blank" rel="noreferrer" style={{ fontSize:11, color:T3 }}>LinkedIn</a>
          <a href="https://www.toptal.com" target="_blank" rel="noreferrer" 
<a href="/JustinNeal_Resume.pdf" target="_blank" style={{ fontSize:11, color:"#00D4D4" }}>Download Resume</a>style={{ fontSize:11, color:T3 }}>Toptal</a>
        </div>
      </footer>
    </div>
  );
}
