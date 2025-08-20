import React from 'react';
import { useNavigate } from 'react-router-dom';
export default function FindPath(){
    const navigate = useNavigate();
    function showForm(){
        navigate('/form');
    }

    return(
        <div className='main'>
            <div className="find-path">
            <h2>Discover your path, shape your future</h2>
            <p>CareerAI is a smart career guide designed for students and young professionals. By combining your skills and interests with the latest industry trends, CareerAI suggests career paths, provides resources, and helps you make informed choices about your future.</p>
            <button onClick={showForm}>Start Now</button>
        </div>
        </div>
    )
}