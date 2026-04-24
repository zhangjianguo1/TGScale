// app/[locale]/questionnaire/layout.tsx
export const runtime = 'edge'; // questionnaire 下的所有页面都继承

export default function QuestionnaireLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}