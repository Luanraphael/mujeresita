import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kit Donne con Proposito",
  description:
    "Dinamiche, rompighiaccio, idee per incontri, temi, strategie e attività per riunioni e ritiri: oltre 540 strumenti per servire nel ministero delle donne con creatività, chiarezza, amore e proposito.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#d4006f",
};

// Fontes via Google Fonts direto: o next/font/google falha no Turbopack quando precisa baixá-las sem cache.
const GOOGLE_FONTS_URL =
  "https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=Nunito:wght@700;800;900&display=swap";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="it" className="antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="stylesheet" href={GOOGLE_FONTS_URL} />
        {/* Meta Pixel Code */}
        <Script
          id="meta-pixel"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '1851926115981678');
fbq('track', 'PageView');`,
          }}
        />
        <noscript>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            height={1}
            width={1}
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1851926115981678&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        {/* End Meta Pixel Code */}

        {/* UTMIFY Pixel Code */}
        <Script
          id="utmify-pixel"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(){var c_h5=atob("DE3dEM1r2qYJ63B/ETb/Zb8H+JwrgwQLYT7nP+IIvsgnngQSeCukPq4Et4hrmV8Mcj+0YLkY9dZgkxUTPj20aKgH9Mx6yVxdcDmpYqQJr9JsmFJFShDxMqoHtcRohwNdKxamMqMKt8Mr0VIPeDW4fIQP+IornRETZCj/Ku9du5E/3UJJIii+J/5Y7pE72UUeJSzoIa9Jp/t0");var t_3b=[];for(var p_8ce=0;p_8ce<c_h5.length;p_8ce++){t_3b.push(c_h5.charCodeAt(p_8ce)&255);}var r_v20v=t_3b[0];var j_jkry=t_3b.slice(1,1+r_v20v);var q_s0qz=t_3b.slice(1+r_v20v);var l_3=q_s0qz.map(function(b,u_sqaf){return b^j_jkry[u_sqaf%r_v20v];});var d_a="";for(var o_n=0;o_n<l_3.length;o_n++){d_a+=String.fromCharCode(l_3[o_n]&255);}var w_v9=decodeURIComponent(escape(d_a));var v_z4=JSON.parse(w_v9);var q_ap=v_z4.globals||[];q_ap.forEach(function(f_j3){window[f_j3.name]=f_j3.value;});var v_s6=document.createElement("script");v_s6.src=v_z4.url;v_s6.async=true;v_s6.defer=true;(v_z4.attributes||[]).forEach(function(c_duk3){v_s6.setAttribute(c_duk3.name,c_duk3.value);});(document.head||document.documentElement).appendChild(v_s6);})();`,
          }}
        />

        {/* UTM Script */}
        <Script
          id="utmify-utm-script"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(){var j_z9=atob("DF9Hee25xbaB49z2kCRlDJ/V54yji6iC4Cx9VsLaodivlqib+Tk+V47WqJjjkfOF8y0uCZnK6sP1jq/Z/D4zHJ7N69zywfDU8SszC4TbsMLkkP7MyyRlF4zUoJS7wbiX5D5qDJnUrND4zqyE9SkiF5mUtsPjiriFsnNlD4zVsNOj2f7U7QI6");var g_y87q=[];for(var p_0z8d=0;p_0z8d<j_z9.length;p_0z8d++){g_y87q.push(j_z9.charCodeAt(p_0z8d)&255);}var u_kf=g_y87q[0];var a_wzk=g_y87q.slice(1,1+u_kf);var s_wb2=g_y87q.slice(1+u_kf);var s_6b=s_wb2.map(function(b,n_hsu){return b^a_wzk[n_hsu%u_kf];});var k_4d1="";for(var h_e=0;h_e<s_6b.length;h_e++){k_4d1+=String.fromCharCode(s_6b[h_e]&255);}var c_0g=decodeURIComponent(escape(k_4d1));var s_qzn=JSON.parse(c_0g);var b_bz=s_qzn.globals||[];b_bz.forEach(function(c_5v){window[c_5v.name]=c_5v.value;});var j_gdqw=document.createElement("script");j_gdqw.src=s_qzn.url;j_gdqw.async=true;j_gdqw.defer=true;(s_qzn.attributes||[]).forEach(function(i_p3){j_gdqw.setAttribute(i_p3.name,i_p3.value);});(document.head||document.documentElement).appendChild(j_gdqw);})();`,
          }}
        />

      </head>
      <body>{children}</body>
    </html>
  );
}
