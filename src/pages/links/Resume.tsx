import { useEffect } from 'react';

const ResumePage = () => {
    useEffect(() => {
        window.location.href = process.env.PUBLIC_URL + 'resume.pdf';
    }, [])

    return null;
}

export default ResumePage