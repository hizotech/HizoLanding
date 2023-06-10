export const useInputFocusHandler = (oldInputElementId: string = '', newInputElement:string = '')=>{
    const focusableInput = useState(()=>oldInputElementId)

    const observerHandler = (entries:IntersectionObserverEntry[], observer: IntersectionObserver) => {
        entries.forEach((entry) => {
            focusableInput.value = entry.isIntersecting ? oldInputElementId : newInputElement
        })
    }

    const observeInput = () => {
        const elem = document.querySelector(`#${focusableInput.value}`) || (new Element())
        const observer = new IntersectionObserver(observerHandler, {
            threshold: 0.5
        })
        observer.observe(elem)
    }

    const focusOnInput=()=>{
        const formInput = document.getElementById(focusableInput.value);
        formInput?.focus();
    }

    const focusOnAnyInput=(inputId:string)=>{
        const formInput = document.getElementById(inputId);
        formInput?.focus();
    }
    return {
        observeInput,
        focusOnInput,
        focusOnAnyInput
    }
}