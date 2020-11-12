import React, { useEffect } from 'react'
/*global chrome*/

export default function Indicator() {

    let usageCPU = () => {
        var os = chrome.system.memory.getInfo((e) => e) 
        return ~~((os.capacity - os.availableCapacity) * 100 / os.capacity)
    }
    
    const [percentage,setPercentage] = React.useState(0)

    const handleChange = () => {
        console.log(usageCPU)
        setPercentage(usageCPU)
    }

    useEffect(() => {
        const x = setInterval(handleChange, 500)
        return () => clearInterval(x)
    });

    return (
        <div className="container">
        <div className="row">
            <h1 style={{fontWeight: "100"}}>
                System Usage
                <br/><small>by SystemLead</small>
            </h1>
            <div style={{borderTop: + "2px solid black"}} className="col">
                <label>
                    {percentage}
                    <small id="cpuSmall">
                    </small>
                </label><br/>
                <progress max="100"></progress>
            </div>    
        </div>
        <div className="row">
            <div className="col">
                <label>
                    MEM Usage
                    <small id="memSmall">
                    </small>
                </label>
                <progress value={60} max="100"></progress><br/><br/>
                </div>
            </div>
            <a target="_blank" href="https://github.com/jack5341" style={{float: "right"}}>
                developed by jack5341
            </a>
        </div>
    )
}