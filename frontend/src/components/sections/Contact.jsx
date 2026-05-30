import { useState } from "react";
import axios from "axios";
import { Mail, MapPin, Phone, Send, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { portfolioData as d } from "@/data/portfolioData";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
// Si pas de backend configuré (ex: déploiement statique GitHub Pages),
// le formulaire ouvre le client mail de l'utilisateur en mailto:
const USE_MAILTO_FALLBACK = !BACKEND_URL;
const API = BACKEND_URL ? `${BACKEND_URL}/api` : null;

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [loading, setLoading] = useState(false);

  const onChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const sendViaMailto = () => {
    const subject = encodeURIComponent(
      form.subject?.trim() || `Contact portfolio — ${form.name}`
    );
    const body = encodeURIComponent(
      `Bonjour Ennadhir,\n\n${form.message}\n\n—\n${form.name}\n${form.email}`
    );
    window.location.href = `mailto:${d.contact.email}?subject=${subject}&body=${body}`;
    toast.success("Ouverture de votre client mail…");
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast.error("Merci de remplir au moins le nom, l'email et le message.");
      return;
    }

    if (USE_MAILTO_FALLBACK) {
      sendViaMailto();
      return;
    }

    setLoading(true);
    try {
      await axios.post(`${API}/contact`, form);
      toast.success("Message envoyé ! Je reviendrai vers vous rapidement.");
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      // Si le backend est down/inaccessible, on bascule en mailto pour ne pas perdre le message
      toast.message("Backend indisponible — ouverture du mail…");
      sendViaMailto();
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      data-testid="contact-section"
      className="relative py-20 sm:py-28 lg:py-32 px-5 sm:px-6 md:px-10 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto relative">
        <div className="reveal max-w-3xl">
          <span className="section-label">
            <Mail size={12} />
            Contact
          </span>
          <h2 className="font-display mt-5 text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            <span className="hover-title">
              Discutons d'un <span className="gradient-violet-text">projet</span>.
            </span>
          </h2>
          <p className="mt-4 text-[hsl(var(--text-secondary))]">
            Une question, une opportunité de stage, une remarque sur ce portfolio ? Le formulaire
            ci-dessous m'envoie directement votre message.
          </p>
        </div>

        <div className="mt-14 grid lg:grid-cols-[1fr_1.4fr] gap-10">
          {/* Infos */}
          <div className="reveal space-y-4">
            {[
              { Icon: Mail, label: "Email", value: d.contact.email, href: `mailto:${d.contact.email}` },
              { Icon: Phone, label: "Téléphone", value: d.contact.phone, href: `tel:${d.contact.phone.replace(/\s/g, "")}` },
              { Icon: MapPin, label: "Localisation", value: d.contact.location },
            ].map(({ Icon, label, value, href }) => {
              const inner = (
                <div className="hover-card flex items-start gap-4 p-5 gradient-violet-border rounded-2xl glow-violet">
                  <span className="w-11 h-11 rounded-xl gradient-violet-bg grid place-items-center text-white shrink-0">
                    <Icon size={18} />
                  </span>
                  <div className="min-w-0">
                    <p className="text-xs font-mono uppercase tracking-wider text-[hsl(var(--violet-300))]">
                      {label}
                    </p>
                    <p className="text-white font-medium mt-0.5 truncate">{value}</p>
                  </div>
                </div>
              );
              return href ? (
                <a key={label} href={href} className="block" data-testid={`contact-info-${label.toLowerCase()}`}>
                  {inner}
                </a>
              ) : (
                <div key={label} data-testid={`contact-info-${label.toLowerCase()}`}>
                  {inner}
                </div>
              );
            })}
          </div>

          {/* Form */}
          <form
            onSubmit={onSubmit}
            data-testid="contact-form"
            className="hover-card reveal gradient-violet-border rounded-3xl p-6 sm:p-9 glow-violet-strong space-y-5"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <Label htmlFor="c-name" className="text-[hsl(var(--text-secondary))] mb-2 block text-sm">
                  Nom complet
                </Label>
                <Input
                  id="c-name"
                  name="name"
                  data-testid="contact-input-name"
                  value={form.name}
                  onChange={onChange}
                  placeholder="Jean Dupont"
                  className="bg-[hsl(var(--bg-base))] border-[hsl(var(--violet-500)/0.3)] text-white placeholder:text-[hsl(var(--text-muted))] focus-visible:ring-[hsl(var(--violet-500))] h-11"
                  required
                />
              </div>
              <div>
                <Label htmlFor="c-email" className="text-[hsl(var(--text-secondary))] mb-2 block text-sm">
                  Email
                </Label>
                <Input
                  id="c-email"
                  name="email"
                  type="email"
                  data-testid="contact-input-email"
                  value={form.email}
                  onChange={onChange}
                  placeholder="vous@exemple.com"
                  className="bg-[hsl(var(--bg-base))] border-[hsl(var(--violet-500)/0.3)] text-white placeholder:text-[hsl(var(--text-muted))] focus-visible:ring-[hsl(var(--violet-500))] h-11"
                  required
                />
              </div>
            </div>
            <div>
              <Label htmlFor="c-subject" className="text-[hsl(var(--text-secondary))] mb-2 block text-sm">
                Sujet
              </Label>
              <Input
                id="c-subject"
                name="subject"
                data-testid="contact-input-subject"
                value={form.subject}
                onChange={onChange}
                placeholder="Proposition de stage, question…"
                className="bg-[hsl(var(--bg-base))] border-[hsl(var(--violet-500)/0.3)] text-white placeholder:text-[hsl(var(--text-muted))] focus-visible:ring-[hsl(var(--violet-500))] h-11"
              />
            </div>
            <div>
              <Label htmlFor="c-message" className="text-[hsl(var(--text-secondary))] mb-2 block text-sm">
                Message
              </Label>
              <Textarea
                id="c-message"
                name="message"
                data-testid="contact-input-message"
                value={form.message}
                onChange={onChange}
                placeholder="Votre message…"
                rows={6}
                className="bg-[hsl(var(--bg-base))] border-[hsl(var(--violet-500)/0.3)] text-white placeholder:text-[hsl(var(--text-muted))] focus-visible:ring-[hsl(var(--violet-500))] resize-none"
                required
              />
            </div>
            <Button
              type="submit"
              disabled={loading}
              data-testid="contact-submit-btn"
              className="w-full sm:w-auto gradient-violet-bg text-white border-0 rounded-full px-7 h-12 font-medium hover:opacity-90"
            >
              {loading ? (
                <>
                  <Loader2 size={16} className="mr-2 animate-spin" />
                  Envoi en cours…
                </>
              ) : (
                <>
                  <Send size={16} className="mr-2" />
                  {USE_MAILTO_FALLBACK ? "Ouvrir mon mail" : "Envoyer le message"}
                </>
              )}
            </Button>
            {USE_MAILTO_FALLBACK && (
              <p
                className="text-xs font-mono text-[hsl(var(--text-muted))] pt-2"
                data-testid="contact-mailto-notice"
              >
                ⓘ Ce formulaire ouvre votre client mail (le portfolio est hébergé en statique).
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
