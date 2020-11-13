import React, { useEffect } from 'react'
/*global chrome*/

export default function Indicator() {

    const [percentageMEM,setPercentageMEM] = React.useState(0)
    const [percentageCPU,setPercentageCPU] = React.useState(0)

    let usageMEM = () => {
        var total = 0;
        var available = 0
        chrome.system.memory.getInfo((e) => {
            total = e.capacity
            available = e.availableCapacity
            var result = ~~((total - available) * 100 / total)
            setPercentageMEM(result)
        }) 
    }


    // const handleChange = () => {
    //     console.log(usageCPU)
    //     setPercentage(usageCPU)
    // }

    useEffect(() => {
        const usagemem = setInterval(usageMEM, 50)
        return () => clearInterval(usagemem)
    });

    return (
        <div className="container">
        <div className="row">
            <h1 style={{fontWeight: "100"}}>
                System Usage
                <br/><small>by SystemLead</small>
            </h1>
            <div style={{borderTop: + "2px solid black", marginBottom: "0px"}} className="col">
                <label>
                    CPU Usage
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
                        {percentageMEM} %
                    </small>
                </label>
                <progress value={percentageMEM} max="100"></progress><br/><br/>
                </div>
            </div>
            <a target="_blank" href="https://github.com/jack5341" style={{float: "right", marginTop: "-9%", marginRight: "5%", borderBottom: "2px solid #ffb074", color: "black"}}>
                developed by jack5341
            </a>
        </div>
    )
}