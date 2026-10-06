export interface PrivacySectionData {
  id: string
  title: string
  content: string
}

export const PRIVACY_SECTIONS: PrivacySectionData[] = [
  {
    id: 'commitment',
    title: 'Our commitment',
    content:
      '9jaPlus by IntarvAS, operated by IntarvAS Communications Limited, respects your privacy. This policy explains how we collect, use, and protect information when you use our website and connectivity services.',
  },
  {
    id: 'information-collected',
    title: 'Information we collect',
    content:
      'We may collect contact details, account information, transaction details, device information, and usage data that you provide or that is generated when you use our services.',
  },
  {
    id: 'how-we-use-information',
    title: 'How we use information',
    content:
      'We use information to provide airtime, data, eSIM, and calling services; process transactions; communicate service updates; improve reliability; prevent fraud; and meet legal obligations. We do not sell personal information.',
  },
  {
    id: 'sharing-and-security',
    title: 'Sharing and security',
    content:
      'We share information only with trusted providers needed to deliver our services, payment partners, network operators, or where required by law. We use reasonable technical and organizational safeguards, though no internet service is completely secure.',
  },
  {
    id: 'your-choices',
    title: 'Your choices',
    content:
      'You may request access to, correction of, or deletion of your personal information, subject to applicable law. You can also opt out of non-essential marketing communications at any time.',
  },
  {
    id: 'contact-us',
    title: 'Contact us',
    content:
      'For privacy questions or requests, please contact IntarvAS Communications Limited through the contact details provided in your 9jaPlus account or service correspondence.',
  },
]

export function PrivacySectionCard({
  section,
  index,
}: Readonly<{
  section: PrivacySectionData
  index: number
}>) {
  return (
    <article
      id={section.id}
      className="group rounded-2xl border border-[#CFE8D9] bg-white/80 p-6 sm:p-8 transition hover:border-[#008751]/50 hover:bg-white hover:shadow-sm"
    >
      <div className="flex items-center gap-3">
        <span className="flex size-7 items-center justify-center rounded-full bg-[#E6F4EC] text-xs font-semibold text-[#008751]">
          {index + 1}
        </span>
        <h2 className="text-xl sm:text-2xl font-semibold tracking-[-0.02em] text-[#005A36]">
          {section.title}
        </h2>
      </div>
      <p className="mt-4 leading-8 text-[#315E4A]">
        {section.content}
      </p>
    </article>
  )
}

export function PrivacyContent() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-12 lg:py-16 lg:px-10">
      <div className="flex flex-col gap-6">
        {PRIVACY_SECTIONS.map((section, idx) => (
          <PrivacySectionCard key={section.id} section={section} index={idx} />
        ))}
      </div>
    </div>
  )
}
