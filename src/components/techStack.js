import React, {useState} from 'react'
import {technologies } from '../mockdata/mock'
import { Tooltip } from 'reactstrap';

export default function TechStack() {


    const [tooltipOpen, setTooltipOpen] = useState(false);

    const toggle = () => setTooltipOpen(!tooltipOpen);

    return (
        <section className="commom-section textstack-wrapper">
                
                <ul className="list-wrapper">
                    {
                       technologies.map( (item,index) => {
                           return <li id={`TooltipExample${index}`}>
                                        <span href="#" >{item.component}</span>
                                        <Tooltip placement="left" isOpen={tooltipOpen} target={`TooltipExample${index}`} toggle={toggle}>
                                            {item.name}
                                        </Tooltip>
                                   </li>
                       }) 
                    }
                </ul>
        </section>
    )
}
