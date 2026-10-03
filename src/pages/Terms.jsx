import { FileText } from 'lucide-react';

import LegalLayout from '@/components/legal/LegalLayout';
import { COMPANY } from '@/components/legal/config';

const sections = [
    {
        id: 'acceptance',
        title: 'Acceptance of terms',
        content: [
            `By visiting our website, contacting us or engaging ${COMPANY.name} ("we", "us", "our") for any service, you agree to these Terms and Conditions. If you do not agree, please do not use our website or services.`,
            'If you accept these terms on behalf of a company or organization, you confirm that you have the authority to bind that organization.',
        ],
    },
    {
        id: 'services',
        title: 'Our services',
        content: [
            'We provide software and technology services, including:',
            {
                list: [
                    'Web and mobile application development',
                    'UI/UX design',
                    'Cloud and DevOps services',
                    'CRM and business system development',
                    'API integration and related consulting',
                ],
            },
            'The details of each engagement, such as scope, deliverables, timeline and price, are set out in a written proposal, statement of work or agreement. If that document conflicts with these terms, the signed document applies.',
        ],
    },
    {
        id: 'client-responsibilities',
        title: 'Client responsibilities',
        content: [
            'To help us deliver on time and to a high standard, clients agree to:',
            {
                list: [
                    'Provide accurate information, content and access that we reasonably need',
                    'Give feedback and approvals within the agreed timeframes',
                    'Nominate a main point of contact for the project',
                    'Make sure that any materials you provide do not infringe the rights of others',
                ],
            },
            'Delays caused by missing information or late approvals may affect the project timeline and cost.',
        ],
    },
    {
        id: 'scope-changes',
        title: 'Project scope and changes',
        content: [
            'Work is carried out according to the agreed scope. Requests that fall outside that scope are treated as change requests.',
            'We will explain the effect of any change on cost and timeline, and work on it only after you have approved it in writing.',
        ],
    },
    {
        id: 'fees-payment',
        title: 'Fees and payment',
        content: [
            {
                list: [
                    'Fees, milestones and payment schedules are stated in the proposal or agreement',
                    'Invoices are payable within the period stated on the invoice, normally 14 days',
                    'Late payments may result in a pause of work until the balance is settled',
                    'Taxes and bank charges are the responsibility of the client unless agreed otherwise',
                ],
            },
            'Deposits and completed milestones are non-refundable unless the agreement says otherwise.',
        ],
    },
    {
        id: 'intellectual-property',
        title: 'Intellectual property',
        content: [
            'Once all fees have been paid in full, the client owns the custom code and design work created specifically for the project, as described in the agreement.',
            'We keep ownership of our pre-existing tools, frameworks, libraries and know-how, and grant the client a license to use them as part of the delivered product.',
            'Third-party and open-source components remain under their own licenses.',
            'Unless the client objects in writing, we may mention the project and display non-confidential results in our portfolio.',
        ],
    },
    {
        id: 'confidentiality',
        title: 'Confidentiality',
        content: [
            'Both parties agree to keep confidential any non-public business, technical or financial information shared during an engagement, and to use it only for the purpose of the project.',
            'This duty does not apply to information that is already public, independently developed, or required to be disclosed by law.',
        ],
    },
    {
        id: 'third-party',
        title: 'Third-party services',
        content: [
            'Projects may rely on third-party services such as hosting providers, payment gateways, APIs and software libraries. We are not responsible for their availability, pricing changes or terms. The client is responsible for any subscriptions or fees charged by these providers.',
        ],
    },
    {
        id: 'warranty',
        title: 'Warranty and disclaimer',
        content: [
            'We work with professional care and skill. Unless the agreement says otherwise, we will fix defects in delivered work that are reported within 30 days of final delivery, at no extra charge.',
            'Apart from this, our website and services are provided "as is". We do not guarantee that software will be completely error-free or uninterrupted.',
        ],
    },
    {
        id: 'liability',
        title: 'Limitation of liability',
        content: [
            'To the fullest extent permitted by law, we are not liable for indirect or consequential losses, including lost profits, lost data or loss of business.',
            'Our total liability for any claim relating to a project is limited to the amount the client paid us for that project.',
        ],
    },
    {
        id: 'termination',
        title: 'Termination',
        content: [
            'Either party may end an engagement by giving written notice as set out in the agreement. If no period is stated, 14 days of notice applies.',
            'On termination, the client will pay for all work completed up to the termination date, and each party will return or delete the other’s confidential information on request.',
        ],
    },
    {
        id: 'website-use',
        title: 'Using our website',
        content: [
            'You agree not to misuse our website. This includes attempting to gain unauthorized access, introducing malware, scraping content at scale, or using the site for unlawful purposes.',
            'All content on this website, including text, graphics and logos, belongs to us or our licensors and may not be copied without permission.',
        ],
    },
    {
        id: 'governing-law',
        title: 'Governing law',
        content: [
            `These terms are governed by the laws of ${COMPANY.country}. Any dispute will first be discussed in good faith, and if it cannot be resolved, it will be handled by the courts of ${COMPANY.country}.`,
        ],
    },
    {
        id: 'changes',
        title: 'Changes to these terms',
        content: [
            'We may update these terms from time to time. The latest version is always published on this page with its revision date. Continued use of our website or services after an update means you accept the new terms.',
        ],
    },
    {
        id: 'contact',
        title: 'Contact us',
        content: [
            `If you have any questions about these terms, contact ${COMPANY.name} at ${COMPANY.email} or write to us at ${COMPANY.address}.`,
        ],
    },
];

export default function Terms() {
    return (
        <LegalLayout
            icon={FileText}
            eyebrow="Legal"
            title="Terms & Conditions"
            intro={`These terms explain the rules for using our website and working with ${COMPANY.shortName}. Please read them carefully.`}
            sections={sections}
            otherPage={{ path: '/privacy', label: 'Read our Privacy Policy' }}
        />
    );
}
