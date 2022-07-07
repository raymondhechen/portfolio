import { useEffect } from 'react';

const CalendlyPage = () => {
    useEffect(() => {
        window.location.href = "https://calendly.com/raymondhechen/30min";
    }, [])

    return null;
}

export default CalendlyPage