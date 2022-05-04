import React from 'react'

function Tech(props) {
    const { title, tech } = props.tech

    return (
        <>
            <div className="flex tech-card flex-col h-24 w-96 m-2 mb-8 rounded-lg ring-1 ring-slate-900/5 shadow-lg space-y-3 text-center">
                <div className='flex h-full flex-col justify-evenly'>
                    <h2 className='tech-title'><b>{title}</b></h2>
                    <div className='flex flex-wrap items-center justify-center'>
                        {tech.map(e => <h6 key={e} className="hover-delay anime inline-block bg-gray-200 cursor-pointer rounded-full px-2 font-semibold text-gray-700 m-1 hover:bg-sky-500">{e}</h6>)}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Tech