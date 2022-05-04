import React from 'react'
import Tech from './Tech'

function Skills() {
    const skill = [
        {
            "title": "PROGRAMMING LANGUAGE",
            "tech": ["C", "C++", "JAVA", "PYTHON"]
        },
        {
            "title": "WEB DEVELOPMENT",
            "tech": ["HTML", "CSS", "JAVASCRIPT", "TYPESCRIPT"]
        },
        {
            "title": "FRAMEWORKS/LIBRARIES",
            "tech": ["REACT", "ANGULAR", "NODE", "EXPRESS"]
        },
        {
            "title": "DATABASES",
            "tech": ["MYSQL", "MONGODB", "FIREBASE"]
        },
        {
            "title": "UI/UX",
            "tech": ["FIGMA", "CANVA"]
        }
    ]
    return (
        <>
            <div className="container tech-list flex m-auto p-4 items-center flex-wrap justify-evenly">
                {skill.map(e => <Tech key={e.title} tech={e} />)}
            </div>
        </>
    )
}

export default Skills