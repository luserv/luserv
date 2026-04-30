"use client";
import dynamic from "next/dynamic";
import { useRef, useState } from "react";
import { useTranslations } from "next-intl";
import emailjs from "@emailjs/browser";
import TitleHeader from "@/components/TitleHeader";

const HeroExperience = dynamic(
  () => import("@/components/models/hero_models/HeroExperience"),
  { ssr: false }
);

const Contact = () => {
  const t = useTranslations("contact");
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formRef.current!,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("EmailJS Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader title={t("title")} sub={t("sub")} />
        <div className="grid-12-cols mt-16">
          <div className="xl:col-span-5">
            <div className="flex-center card-border rounded-xl p-10">
              <form ref={formRef} onSubmit={handleSubmit} className="w-full flex flex-col gap-7">
                <div>
                  <label htmlFor="name">{t("nameLabel")}</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder={t("namePlaceholder")}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email">{t("emailLabel")}</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder={t("emailPlaceholder")}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message">{t("messageLabel")}</label>
                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder={t("messagePlaceholder")}
                    rows={5}
                    required
                  />
                </div>
                <button type="submit">
                  <div className="cta-button group">
                    <div className="bg-circle" />
                    <p className="text">{loading ? t("sending") : t("send")}</p>
                    <div className="arrow-wrapper">
                      <img src="/images/arrow-down.svg" alt="arrow" />
                    </div>
                  </div>
                </button>
              </form>
            </div>
          </div>
          <div className="xl:col-span-7 min-h-96">
            <div className="bg-[#0a0a1a] w-full h-full hover:cursor-grab rounded-3xl overflow-hidden">
              <HeroExperience />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
