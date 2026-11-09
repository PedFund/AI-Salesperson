import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";

export const metadata: Metadata = {
  title: "ВайбМайнд — внедрение ИИ в организациях",
  description:
    "ВайбМайнд — социально ответственная белорусская компания: обучаем, консультируем и сопровождаем внедрение ИИ. Готовые AI-решения и виртуальные сотрудники + корпоративный курс по нейросервисам и ИИ.",
  openGraph: {
    type: "website",
    title: "ВайбМайнд — внедрение ИИ в организациях",
    description:
      "Обучаем, консультируем и сопровождаем цифровую трансформацию рабочих процессов. Готовые AI-решения и корпоративный курс.",
    images: ["/images/vibemind-icon.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body>
        {children}
        <Script id="yandex-metrika" strategy="afterInteractive">{`
          (function(m,e,t,r,i,k,a){
            m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
            m[i].l=1*new Date();
            k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a);
          })(window,document,"script","https://mc.yandex.ru/metrika/tag.js","ym");
          ym(114145936, "init", { clickmap:true, trackLinks:true, accurateTrackBounce:true, webvisor:true });
          (function(){
            function page(){ return location.pathname + location.search; }
            var previous=page();
            function track(){
              var current=page();
              if(current!==previous){ previous=current; ym(114145936,"hit",location.href); }
            }
            var push=history.pushState;
            history.pushState=function(){ var result=push.apply(this,arguments); track(); return result; };
            var replace=history.replaceState;
            history.replaceState=function(){ var result=replace.apply(this,arguments); track(); return result; };
            addEventListener("popstate",track);
          })();
        `}</Script>
      </body>
    </html>
  );
}
