import { FaqList } from "../types/faqs";
export const useBusinessFaqs = ():FaqList=>{
    return [
        {
            question: 'What is Hizo for Business?',
            answer: `Hizo for Business is a specialized platform designed to cater to the unique needs
            of businesses operating within and outside Nigeria. It offers streamlined international
            payment solutions and multi-currency accounts for efficient cross-border transactions.`,
            active: false
        },
        {
            question: 'How can it benefit my business?',
            answer: `Hizo for Business simplifies your international payments, optimizes currency conversions,
            and provides competitive exchange rates, saving your business time and money.
            It also offers transparency, security, and dedicated support to ensure a seamless financial experience.`,
            active: false
        },
        {
            question: 'Is Hizo for Business secure? ',
            answer: `Yes, Hizo for Business prioritizes the security and privacy of your business and financial information.
            It employs robust security measures, encryption protocols, and complies with relevant regulations to ensure
            the protection of your data.`,
            active: false
        },
        {
            question: 'How do I open an account?',
            answer: `Opening a Hizo for Business account is easy. Simply download the app on Google Play Store or iOS App Store,
            select the "Business" option during the registration process, and follow the steps to set up your account.`,
            active: false
        },
        {
            question: 'Can I manage multiple currencies with my account? ',
            answer: `Absolutely! Hizo for Business offers multi-currency accounts,
            allowing you to manage funds in Naira and the local currencies of other African countries. `,
            active: false
        },
        {
            question: 'What level of customer support is available for users?',
            answer: `We provide dedicated customer support to assist businesses with their inquiries and concerns.
            Our knowledgeable support team is available 24/7 via Live chat to address any questions and provide prompt assistance.`,
            active: false
        },
        {
            question: 'Can I use the app on multiple devices? ',
            answer: `Yes, you can access Hizo for Business on multiple devices, including smartphones and tablets.
            Simply download the app and log in with your account credentials to access your business account from any supported device.`,
            active: false
        }
    ]
}