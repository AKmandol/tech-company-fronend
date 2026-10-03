import { ShieldCheck } from 'lucide-react';

import LegalLayout from '@/components/legal/LegalLayout';
import { COMPANY } from '@/components/legal/config';

const sections = [
    {
        id: 'introduction',
        title: 'Introduction',
        content: [
            `${COMPANY.name} ("we", "us", "our") respects your privacy. This policy explains what personal information we collect, how we use it and the choices you have when you visit our website or use our services.`,
        ],
    },
    {
        id: 'information-we-collect',
        title: 'Information we collect',
        content: [
            'We may collect the following types of information:',
            {
                list: [
                    'Contact details you give us, such as your name, email address, phone number and company',
                    'Messages and project details you send through our contact form, email or job applications',
                    'Technical data such as IP address, browser type, device and pages visited',
                    'Business information needed to deliver and invoice our services',
                ],
            },
            'We do not knowingly collect sensitive personal information through our website.',
        ],
    },
    {
        id: 'how-we-use',
        title: 'How we use your information',
        content: [
            'We use personal information to:',
            {
                list: [
                    'Respond to your enquiries and provide the services you request',
                    'Plan, deliver, support and invoice our projects',
                    'Review and process job applications',
                    'Improve our website, services and security',
                    'Send updates or newsletters, only where you have agreed to receive them',
                    'Meet our legal and accounting obligations',
                ],
            },
        ],
    },
    {
        id: 'cookies',
        title: 'Cookies and analytics',
        content: [
            'Our website may use cookies and similar technologies to remember your preferences (such as light or dark theme) and to understand how the site is used.',
            'You can control or delete cookies in your browser settings. Disabling some cookies may affect how parts of the website work.',
        ],
    },
    {
        id: 'sharing',
        title: 'Sharing your information',
        content: [
            'We do not sell your personal information. We share it only when needed, with:',
            {
                list: [
                    'Service providers who help us run our business, such as hosting, email and analytics tools',
                    'Professional advisers such as accountants and lawyers',
                    'Authorities, when we are legally required to do so',
                ],
            },
            'Anyone who handles your information on our behalf must protect it and use it only for the agreed purpose.',
        ],
    },
    {
        id: 'security',
        title: 'Data security',
        content: [
            'We use reasonable technical and organizational measures to protect personal information, including access controls, encrypted connections and regular updates. No system is completely secure, but we work to keep your data safe and to act quickly if something goes wrong.',
        ],
    },
    {
        id: 'retention',
        title: 'How long we keep data',
        content: [
            'We keep personal information only for as long as we need it for the purposes above or as required by law. For example, enquiries are normally deleted after they are resolved, and project and invoice records are kept for the period required for accounting and tax.',
        ],
    },
    {
        id: 'your-rights',
        title: 'Your rights',
        content: [
            'Depending on where you live, you may have the right to:',
            {
                list: [
                    'Request a copy of the personal information we hold about you',
                    'Ask us to correct information that is inaccurate',
                    'Ask us to delete your information',
                    'Object to or restrict certain uses of your information',
                    'Withdraw consent for marketing emails at any time',
                ],
            },
            `To make a request, email us at ${COMPANY.email}. We may need to confirm your identity before we respond.`,
        ],
    },
    {
        id: 'third-party-links',
        title: 'Third-party links',
        content: [
            'Our website may link to other websites. We are not responsible for their content or privacy practices, so please read their policies before sharing personal information.',
        ],
    },
    {
        id: 'children',
        title: 'Children’s privacy',
        content: [
            'Our website and services are not directed at children under 16, and we do not knowingly collect their personal information. If you believe a child has given us information, please contact us and we will delete it.',
        ],
    },
    {
        id: 'international',
        title: 'International transfers',
        content: [
            'We work with clients and providers in different countries, so your information may be processed outside your own country. When this happens, we take steps to make sure it remains protected.',
        ],
    },
    {
        id: 'changes',
        title: 'Changes to this policy',
        content: [
            'We may update this policy from time to time. The latest version will always be on this page, together with its revision date.',
        ],
    },
    {
        id: 'contact',
        title: 'Contact us',
        content: [
            `For any privacy questions or requests, contact ${COMPANY.name} at ${COMPANY.email} or write to us at ${COMPANY.address}.`,
        ],
    },
];

export default function Privacy() {
    return (
        <LegalLayout
            icon={ShieldCheck}
            eyebrow="Legal"
            title="Privacy Policy"
            intro={`Your privacy matters to us. This policy explains how ${COMPANY.shortName} collects, uses and protects your personal information.`}
            sections={sections}
            otherPage={{ path: '/terms', label: 'Read our Terms & Conditions' }}
        />
    );
}
