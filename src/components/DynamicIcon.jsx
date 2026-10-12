import {
  BarChart3,
  BookOpen,
  Building2,
  Cloud,
  Code2,
  Cpu,
  Database,
  FlaskConical,
  GraduationCap,
  Hash,
  Layers,
  LineChart,
  Sparkles,
  TableProperties,
  Terminal,
  User,
  UserCheck,
  Wrench,
} from 'lucide-react';

const iconMap = {
  UserCheck,
  Hash,
  Layers,
  GraduationCap,
  Building2,
  BookOpen,
  FlaskConical,
  Wrench,
  Sparkles,
  Database,
  BarChart3,
  TableProperties,
  LineChart,
  Terminal,
  Cpu,
  Cloud,
  Code2,
  User,
};

export default function DynamicIcon({ name, size = 20, strokeWidth = 1.8 }) {
  const IconComponent = iconMap[name] || Sparkles;
  return <IconComponent size={size} strokeWidth={strokeWidth} />;
}
