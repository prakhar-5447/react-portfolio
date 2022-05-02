import React, { useState } from 'react'
import "../style/card.css"

function Card(props) {
    const [Content, setContent] = useState(true);

    return (
        <div className="flex flex-col text-center h-auto rounded-lg anime justify-between block m-10 rounded-lg bg-black rounded-b-xl ring-1 ring-slate-900/5 shadow-lg space-y-3">
            <div className='w-60'>
                <div className="flex justify-center">
                    <img className='rounded-t-lg' src={props.project.image} alt="no_image" width="100%" />
                </div>
                <div className="flex flex-col px-4 text-white mt-5">
                    <div className='m-auto'>
                        <h3 className="text-sm font-semibold">{props.project.title}</h3>
                        <p className="text-xs text-slate-300">{props.project.desc}</p>
                    </div>
                    <div className='h-24 flex justify-center items-center text-xs'>
                        {Content ?
                            <div>
                                {props.project.tech.map(e => <h6 key={e} className="anime inline-block bg-gray-200 cursor-pointer rounded-full px-2 font-semibold text-gray-700 m-1 hover:bg-sky-500">{e}</h6>)}
                            </div> :
                            <div>
                                <a className='anime inline-block bg-gray-200 cursor-pointer rounded-full px-2 font-semibold mr-2 mb-2 text-gray-700 hover:bg-sky-500' href={props.project.link} target="_blank" rel="noreferrer">GITHUB LINK</a>
                                <a className={`anime inline-block bg-gray-200 cursor-pointer rounded-full px-2  font-semibold mr-2 mb-2 ${props.project.host ? "" : "hidden"} text-gray-700 hover:bg-sky-500`} href={props.project.host} target="_blank" rel="noreferrer">WEBSITE</a>
                            </div>
                        }
                    </div>
                </div>
            </div>
            <div className="flex justify-around">
                <button className={`text-xs font-semibold p-2 rounded-bl-lg w-1/2 ${Content ? "text-white bg-black" : "text-black bg-white"}`} onClick={() => { setContent(true) }}>PROJECT</button>
                <button className={`text-xs font-semibold p-2 rounded-br-lg w-1/2 ${Content ? "text-black bg-white" : "text-white bg-black"}`} onClick={() => { setContent(false) }}>LINK</button>
            </div>
        </div>
    )
}

export default Card