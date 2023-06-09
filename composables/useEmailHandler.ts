export const useEmailHandler = ()=>{
    const email = useState<string>('email',()=>'')
    const mailIsSending = useState<boolean>('mailIsSending',()=>false)
    const mailIsValid = computed(():boolean=>{
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailRegex.test(email.value)
    })
    const sendMail = async()=>{
        mailIsSending.value = true
        return await (new Promise((resolve,reject)=>{
            setTimeout(()=>{
                mailIsSending.value = false
                return resolve(true)
            },1000)
        }))
    }
    return {
        email,
        mailIsValid,
        mailIsSending,
        sendMail
    }
}