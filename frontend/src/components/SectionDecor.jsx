import {
  Terminal, Wifi, Code2, KeyRound, Server, MousePointer2,
  Compass, Heart, Target, Sparkles, MapPin,
  GraduationCap, BookOpen, Calendar, Clock, Milestone, ScrollText,
  BookMarked, Award, Globe, Library,
  Briefcase, Building, Network, ShieldCheck, UserCog,
  Cpu, Cable, Database, Settings, Wrench, Router,
  FolderGit2, Code, FileCode, Layers,
  FileText, Download, FileSignature,
  Rss, Eye, Radar, Bell, Newspaper,
  Mail, Send, AtSign, MessageSquare,
} from "lucide-react";

const V = {
  hero: [
    { Icon: Terminal, x: 6, y: 18, size: 38, rot: -8, dur: 8 },
    { Icon: Wifi, x: 92, y: 12, size: 30, rot: 5, dur: 9 },
    { Icon: Code2, x: 10, y: 80, size: 42, rot: 12, dur: 7 },
    { Icon: KeyRound, x: 88, y: 82, size: 32, rot: -10, dur: 10 },
    { Icon: Server, x: 48, y: 6, size: 26, rot: 0, dur: 8 },
    { Icon: MousePointer2, x: 95, y: 50, size: 24, rot: 8, dur: 9 },
  ],
  about: [
    { Icon: Compass, x: 5, y: 18, size: 40, rot: -6, dur: 8 },
    { Icon: Heart, x: 92, y: 28, size: 30, rot: 4, dur: 9 },
    { Icon: Target, x: 8, y: 78, size: 36, rot: 10, dur: 7 },
    { Icon: Sparkles, x: 86, y: 75, size: 28, rot: -8, dur: 8 },
    { Icon: MapPin, x: 50, y: 92, size: 26, rot: 0, dur: 10 },
  ],
  parcours: [
    { Icon: GraduationCap, x: 4, y: 14, size: 42, rot: -10, dur: 8 },
    { Icon: BookOpen, x: 93, y: 22, size: 32, rot: 6, dur: 9 },
    { Icon: Calendar, x: 8, y: 60, size: 30, rot: 4, dur: 7 },
    { Icon: Clock, x: 92, y: 78, size: 34, rot: -6, dur: 10 },
    { Icon: Milestone, x: 50, y: 95, size: 28, rot: 0, dur: 8 },
    { Icon: ScrollText, x: 88, y: 50, size: 26, rot: 8, dur: 9 },
  ],
  formation: [
    { Icon: BookMarked, x: 5, y: 18, size: 42, rot: -8, dur: 9 },
    { Icon: Award, x: 93, y: 26, size: 34, rot: 6, dur: 7 },
    { Icon: Library, x: 10, y: 78, size: 38, rot: 10, dur: 8 },
    { Icon: ScrollText, x: 88, y: 78, size: 30, rot: -6, dur: 10 },
    { Icon: Globe, x: 50, y: 6, size: 24, rot: 0, dur: 8 },
  ],
  metiers: [
    { Icon: Briefcase, x: 5, y: 20, size: 42, rot: -6, dur: 8 },
    { Icon: Building, x: 93, y: 18, size: 34, rot: 8, dur: 9 },
    { Icon: Network, x: 8, y: 78, size: 38, rot: 12, dur: 7 },
    { Icon: ShieldCheck, x: 90, y: 76, size: 32, rot: -8, dur: 10 },
    { Icon: UserCog, x: 50, y: 95, size: 26, rot: 0, dur: 8 },
  ],
  competences: [
    { Icon: Cpu, x: 4, y: 16, size: 42, rot: -6, dur: 9 },
    { Icon: Cable, x: 94, y: 22, size: 32, rot: 8, dur: 7 },
    { Icon: Database, x: 8, y: 78, size: 38, rot: 10, dur: 8 },
    { Icon: Router, x: 92, y: 80, size: 32, rot: -6, dur: 10 },
    { Icon: Settings, x: 50, y: 6, size: 26, rot: 0, dur: 8 },
    { Icon: Wrench, x: 90, y: 50, size: 28, rot: -10, dur: 9 },
  ],
  realisations: [
    { Icon: FolderGit2, x: 5, y: 18, size: 42, rot: -8, dur: 8 },
    { Icon: Code, x: 93, y: 22, size: 30, rot: 6, dur: 9 },
    { Icon: FileCode, x: 9, y: 78, size: 38, rot: 10, dur: 7 },
    { Icon: Layers, x: 90, y: 78, size: 32, rot: -6, dur: 10 },
  ],
  cv: [
    { Icon: FileText, x: 6, y: 30, size: 42, rot: -8, dur: 8 },
    { Icon: Download, x: 92, y: 35, size: 32, rot: 6, dur: 9 },
    { Icon: FileSignature, x: 15, y: 75, size: 36, rot: 10, dur: 7 },
    { Icon: Award, x: 86, y: 72, size: 32, rot: -6, dur: 10 },
  ],
  veille: [
    { Icon: Rss, x: 5, y: 20, size: 40, rot: -8, dur: 8 },
    { Icon: Eye, x: 93, y: 16, size: 32, rot: 6, dur: 9 },
    { Icon: Radar, x: 10, y: 78, size: 42, rot: 10, dur: 7 },
    { Icon: Bell, x: 90, y: 76, size: 30, rot: -6, dur: 10 },
    { Icon: Newspaper, x: 50, y: 95, size: 28, rot: 0, dur: 8 },
  ],
  contact: [
    { Icon: Mail, x: 6, y: 22, size: 42, rot: -8, dur: 8 },
    { Icon: Send, x: 92, y: 22, size: 34, rot: 8, dur: 9 },
    { Icon: AtSign, x: 12, y: 78, size: 36, rot: 6, dur: 7 },
    { Icon: MessageSquare, x: 88, y: 76, size: 32, rot: -6, dur: 10 },
  ],
};

export default function SectionDecor({ variant }) {
  const icons = V[variant] || [];
  return (
    <div
      className="section-decor"
      aria-hidden="true"
      data-testid={`section-decor-${variant}`}
    >
      {icons.map((it, i) => {
        const I = it.Icon;
        return (
          <I
            key={i}
            size={it.size}
            className="deco-icon"
            style={{
              left: `${it.x}%`,
              top: `${it.y}%`,
              "--rot": `${it.rot ?? 0}deg`,
              animationDelay: `${(i * 0.9) % 5}s`,
              animationDuration: `${it.dur ?? 8}s`,
            }}
          />
        );
      })}
    </div>
  );
}
