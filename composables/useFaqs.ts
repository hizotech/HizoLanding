
import { FaqList } from "../types/faqs";
export const useFaqs = ():FaqList=>{
    return [
        {
            question: "What is Hizo?",
            answer: "Hizo is a finance app that enables Nigerians to use their naira outside Nigeria. With the app, you can make purchases, send, and receive cash in various African countries, using your naira.",
            active: false
        },
        {
            question: "How does Hizo work?",
            answer: `Hizo is simple to use. Here’s how it works in steps: <br>
            Download the app, Sign up for an account, Verify your account, Fund your wallet, Transfer funds by selecting destination country, channel, destination bank account, and amount. ` ,
            active: false
        },
        {
            question: "Is Hizo available for both iOS and Android devices?",
            answer: "Yes, Hizo is optimized for both iOS and Android devices.",
            active: false
        },
        {
            question: "What countries does Hizo work in?",
            answer: "Hizo is currently functioning in Ghana, South Africa, Kenya, and Rwanda. With time, all of Africa will be Hizo-ed!",
            active: false
        },
        {
            question: "Can I use Hizo to withdraw cash from ATMs in the supported countries?",
            answer: "Hizo only aids the transfer of funds between you and your chosen recipient. Hence, you cannot withdraw cash from an ATM using the app.",
            active: false
        },
        {
            question: "How can I convert my naira to another African currency on the Hizo app?",
            answer: "You do not have to go through the hassle of converting your cash before transacting. Simply fund your Hizo account and select the destination country you wish to transfer funds to, transfer channel, bank account, and amount. Your chosen amount will be converted automatically to show the naira equivalent. Then you can click send.",
            active: false
        },
        {
            question: "Are there any fees or charges associated with using Hizo?",
            answer: "Yes. However, Hizo charges a significantly low fee whenever you make a transaction using the app. ",
            active: false
        },
        {
            question: "How do I fund my Hizo account with Naira?",
            answer: "After signing up on the Hizo app, a virtual account will be assigned to you. You can fund that account by transferring cash directly from your Nigerian bank account into your Hizo virtual account",
            active: false
        },
        {
            question: "Is my personal and financial information safe with Hizo?",
            answer: "Yes. Hizo uses end-to-end encryption, SSL certificates and two-factor authentication to keep your personal and financial data safe. Additionally, the app uses biometric authentication to ensure that only verified users can get access.",
            active: false
        },
        {
            question: "What happens if I encounter an issue or have a question while using the app?",
            answer: "You can find the answer to most questions in our Frequently Asked Questions section. However, if you encounter a unique problem or need technical assistance, our 24/7 customer support is available to help you quickly and efficiently solve the issue.",
            active: false
        },
        {
            question: "Are there any limits on the amount of Naira I can convert and spend using Hizo?",
            answer: "There are no limits to how much naira you can spend using Hizo. ",
            active: false
        },
    ]
}