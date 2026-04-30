"use client";
import { useRef } from "react";
import { useTranslations } from "next-intl";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { counterItems } from "@/constants";

gsap.registerPlugin(ScrollTrigger);

const AnimatedCounter = () => {
  const t = useTranslations("counter");
  const labels = (t.raw("items") as Array<{ label: string }>).map((i) => i.label);

  const counterRef = useRef<HTMLDivElement>(null);
  const countersRef = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(() => {
    countersRef.current.forEach((counter, index) => {
      if (!counter) return;
      const numberElement = counter.querySelector<HTMLElement>(".counter-number");
      const item = counterItems[index];
      if (!numberElement) return;

      gsap.set(numberElement, { innerText: "0" });

      gsap.to(numberElement, {
        innerText: item.value,
        duration: 2.5,
        ease: "power2.out",
        snap: { innerText: 1 },
        scrollTrigger: {
          trigger: "#counter",
          start: "top center",
        },
        onComplete: () => {
          numberElement.textContent = `${item.value}${item.suffix}`;
        },
      });
    });
  }, []);

  return (
    <div id="counter" ref={counterRef} className="padding-x-lg xl:mt-0 mt-32">
      <div className="mx-auto grid-4-cols">
        {counterItems.map((item, index) => (
          <div
            key={index}
            ref={(el) => { if (el) countersRef.current[index] = el; }}
            className="bg-zinc-900 rounded-lg p-10 flex flex-col justify-center"
          >
            <div className="counter-number text-white-50 text-5xl font-bold mb-2">
              0{item.suffix}
            </div>
            <div className="text-white-50 text-lg">{labels[index]}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnimatedCounter;
