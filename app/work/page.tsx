import { Metadata } from 'next';
import { SectionHeader } from '@/components/SectionHeader';
import { WorkCaseCard } from '@/components/WorkCaseCard';
import { experience, alliancesPartners } from '@/content/experience';

export const metadata: Metadata = {
  title: 'Work & Impact',
  description:
    'Case studies and impact across Vibe Connect, Six Flags, Welbilt, Middleby, and earlier startups.',
};

const CASE_STUDY_ORDER = [
  'Vibe Connect',
  'Six Flags Entertainment Corporation',
  'Welbilt (Ali Group)',
  'The Middleby Corporation',
];

export default function WorkPage() {
  const caseStudyCompanies = new Set(CASE_STUDY_ORDER);
  const caseStudies = CASE_STUDY_ORDER.map((company) =>
    experience.find((e) => e.company === company)
  ).filter(Boolean) as typeof experience;
  const otherRoles = experience.filter(
    (e) => !caseStudyCompanies.has(e.company) && e.company !== 'Risk Ops AI'
  );

  return (
    <div className="mx-auto max-w-4xl px-6 py-16 md:py-24">
      <SectionHeader
        title="Work & impact"
        subtitle="Leadership and outcomes across theme parks, food service IoT, and community platforms."
        className="mb-14"
      />

      <div className="space-y-12">
        {caseStudies.map((role, index) => (
          <WorkCaseCard key={`${role.company}-${role.dates}`} role={role} index={index} />
        ))}
      </div>

      {otherRoles.length > 0 && (
        <section className="mt-16">
          <h2 className="font-heading text-xl font-semibold text-ink">
            Earlier roles
          </h2>
          <ul className="mt-6 space-y-4">
            {otherRoles.map((role) => (
              <li
                key={`${role.company}-${role.dates}`}
                className="rounded-xl border border-border bg-surface p-4"
              >
                <h3 className="font-heading font-medium text-ink">{role.company}</h3>
                <p className="text-sm text-teal">{role.title} · {role.dates}</p>
                <p className="mt-2 text-sm text-muted line-clamp-2">{role.bullets[0]}</p>
              </li>
            ))}
          </ul>
        </section>
      )}

      <section className="mt-20">
        <h2 className="font-heading text-xl font-semibold text-ink">
          Alliances & partnerships
        </h2>
        <p className="mt-3 text-muted">
          Built and led the largest digital alliances in the theme park and
          food service industries—co-investing in frontier tech and innovation
          with global partners.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          {alliancesPartners.map((p) => (
            <span
              key={p.name}
              className="rounded-lg border border-border bg-surface px-4 py-2 text-sm font-medium text-muted"
            >
              {p.name}
            </span>
          ))}
        </div>
      </section>
    </div>
  );
}
