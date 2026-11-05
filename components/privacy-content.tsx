export interface PrivacySectionData {
  id: string
  title: string
  content: string
  items?: string[]
  contactEmail?: string
}

export const PRIVACY_SECTIONS: PrivacySectionData[] = [
  {
    id: 'commitment',
    title: 'Our commitment',
    content:
      '9jaPlus by IntarvAS, operated by IntarvAS Communications Limited, respects your privacy. This policy explains how we collect, use, and protect information—as well as the device permissions required—when you use our mobile applications, website, and connectivity services, including eSIM provisioning, airtime/data top-ups, and internet calls.',
  },
  {
    id: 'app-features-and-services',
    title: 'App features and services',
    content:
      '9jaPlus provides unified connectivity services that require specific data processing to function reliably:',
    items: [
      'eSIM Provisioning & Management: Purchasing, downloading, installing (via direct carrier activation or QR code), and managing digital eSIM data profiles for local and international travel, including device compatibility and carrier status checks.',
      'Airtime & Data Top-Ups: Instant airtime recharges and mobile data bundle purchases across supported telecommunications networks, recipient phone number validation, wallet/payment processing, and digital transaction receipts.',
      'Internet Calls (VoIP & International Calling): Real-time voice calling over the internet (VoIP) and international call routing to mobile and landline numbers, in-app dialer, contact book integration, call history logs, and call credit management.',
      'Account Authentication & KYC Verification: Secure sign-in via email, Google Sign-In, or Sign in with Apple, alongside regulatory identity and biometric liveness verification powered by QoreID and FaceTec.',
    ],
  },
  {
    id: 'information-collected',
    title: 'Information we collect',
    content:
      'We collect information that you provide directly or that is generated when you access and use our services, including:',
    items: [
      'Account & Sign-In Data: Name, email address, and authentication identifiers when you register directly or sign in using Google Sign-In or Sign in with Apple.',
      'Phone Numbers & Call History: Your phone number, recipient phone numbers for airtime/data top-ups and internet calls, call history logs, call timestamps, duration, and VoIP/telecom routing metadata.',
      'eSIM & Device Identifiers: Device model, operating system, eSIM compatibility status, ICCID/EID identifiers, and mobile network state required to provision and activate eSIM profiles.',
      'IP & Location Data: IP address, approximate and device location data, time zone, and device/network identifiers used for call routing, regional eSIM availability, and security.',
      'Identity Verification (KYC) Data: Government-issued identification details and facial/biometric liveness verification data processed through our KYC partners, QoreID and FaceTec.',
      'Transaction & Usage Data: Airtime/data top-up records, eSIM purchase history, calling credit balances, payment records, device diagnostics, and app interaction logs.',
    ],
  },
  {
    id: 'required-permissions',
    title: 'Required app permissions',
    content:
      'To deliver eSIMs, airtime/data top-ups, internet calling, and identity verification, the 9jaPlus app requests the following device permissions (which you can manage at any time in your device settings):',
    items: [
      'Microphone: Required to capture and transmit your voice during active internet (VoIP) and international calls. Audio is streamed in real time and is never recorded or accessed outside active calls.',
      'Camera: Required to scan eSIM installation QR codes and to capture government ID documents and facial liveness video during KYC verification with QoreID and FaceTec.',
      'Contacts (Address Book): Optional permission used to let you select recipients directly from your phone contacts when sending airtime/data top-ups or placing internet calls.',
      'Phone, Call State & CallKit / ConnectionService: Required to manage incoming and outgoing internet calls, prevent audio conflicts with native cellular calls, and verify SIM/eSIM hardware capability.',
      'Foreground Service & Background Audio: Required to keep your active internet calls connected when you switch apps or lock your screen.',
      'Bluetooth & Audio Routing: Used to route internet call audio through connected Bluetooth headsets, earbuds, or speakerphone.',
      'Notifications (Push Notifications): Used to alert you of incoming internet calls, missed calls, successful airtime/data top-ups, eSIM activation updates, and account security alerts.',
      'Location: Used to display applicable regional eSIM plans, optimize voice routing, and satisfy telecommunications fraud-prevention and compliance requirements.',
      'Photos / Media Library (Optional): Used when you choose to upload an existing ID photo for KYC verification or save eSIM QR codes and transaction receipts to your device.',
    ],
  },
  {
    id: 'how-we-use-information',
    title: 'How we use information',
    content:
      'We use collected information to authenticate your account (including via Google and Apple sign-in); provision and activate eSIM profiles; process instant airtime and data top-ups; connect and route internet calls; maintain accurate call history and billing records; verify your identity (KYC) to meet telecom and regulatory requirements; detect and prevent fraud using IP and location signals; and provide customer support. We do not sell your personal information.',
  },
  {
    id: 'sharing-and-security',
    title: 'Sharing and security',
    content:
      'We share information only with trusted third-party providers necessary to operate our services—including telecommunications carriers and eSIM roaming partners, VoIP/voice termination providers, QoreID and FaceTec for identity and biometric KYC verification, Google and Apple for authentication, and payment processors—or where required by applicable law. We apply technical and organizational safeguards to protect your data, though no internet transmission is completely secure.',
  },
  {
    id: 'your-choices',
    title: 'Your choices',
    content:
      'You may request access to, correction of, or deletion of your personal information and account data, subject to applicable legal and regulatory retention requirements. You can grant or revoke app permissions (such as Microphone, Camera, Contacts, Location, and Notifications) at any time in your device settings, though revoking certain permissions may limit features like internet calling or KYC verification. You can also opt out of non-essential marketing communications at any time.',
  },
  {
    id: 'contact-us',
    title: 'Contact us',
    content:
      'For privacy questions, data access or deletion requests, or support inquiries, please contact IntarvAS Communications Limited directly at:',
    contactEmail: 'support@intarvas.com',
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
      {section.items && section.items.length > 0 && (
        <ul className="mt-4 list-disc space-y-2 pl-5 leading-7 text-[#315E4A]">
          {section.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      )}
      {section.contactEmail && (
        <p className="mt-3">
          <a
            href={`mailto:${section.contactEmail}`}
            className="inline-flex items-center font-semibold text-[#008751] underline underline-offset-4 transition hover:text-[#005A36]"
          >
            {section.contactEmail}
          </a>
        </p>
      )}
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
