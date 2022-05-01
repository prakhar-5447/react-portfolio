import React, { useState } from 'react'
import "../style/card.css"
import p1 from "../images/p1.jpg"

function Card(props) {
    const [Content, setContent] = useState(true);

    return (
        <div className="flex flex-col text-center h-auto rounded-lg justify-between block max-w-xs mx-auto rounded-lg bg-black rounded-b-xl ring-1 ring-slate-900/5 shadow-lg space-y-3">
            <div>
                <div className="flex justify-center">
                    <img className='rounded-t-lg' src={p1} alt="no_image" width="100%" />
                </div>
                <div className="flex flex-col text-white py-5 px-10">
                    <div className='h-10 mt-4'>
                        <h3 className="text-sm font-semibold">{props.project.title}</h3>
                        <p>{props.project.desc}</p>
                    </div>
                    <div className='h-40 pt-10 mb-10'>
                        {Content ?
                            <div>
                                {props.project.tech.map(e => <h6 key={e} className="inline-block bg-gray-200 cursor-pointer rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:bg-sky-500">{e}</h6>)}
                            </div> :
                            <div>
                                <a className='inline-block bg-gray-200 cursor-pointer rounded-full px-3 py-1 text-sm font-semibold mb-4 text-gray-700 hover:bg-sky-500 ' href={props.project.link} target="_blank" rel="noreferrer">{props.project.link}</a>
                                <a className='inline-block bg-gray-200 cursor-pointer rounded-full px-3 py-1 text-sm font-semibold mb-4 text-gray-700 hover:bg-sky-500 ' href={props.project.link} target="_blank" rel="noreferrer">{props.project.host}</a>
                            </div>
                        }
                    </div>
                </div>
            </div>
            <div className="flex justify-around">
                <button className="text-xl bg-white font-semibold hover:bg-violet-600 p-2 rounded-bl-lg text-black w-1/2" onClick={() => { setContent(true) }}>photo</button>
                <button className="text-xl bg-white font-semibold hover:bg-violet-600 p-2 rounded-br-lg text-black w-1/2" onClick={() => { setContent(false) }}>content</button>
            </div>
        </div>
    )
}

export default Card