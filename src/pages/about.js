import React from 'react';
import { Link } from 'react-router-dom';
import {HiInformationCircle} from "react-icons/hi";
import {RiStackOverflowLine} from "react-icons/ri";
import {GiBattleGear} from 'react-icons/gi';
import {BsFlagFill} from 'react-icons/bs';
import {BsGithub} from 'react-icons/bs';
import Tutorial from '../components/Tutorial';
import data from '../components/dataTutoriale';

const About = () => {
    let iconStyles = { color: "black", fontSize: "1.5em", fontWeight: "bold"};
    const tutoriale = data.map(item => {
        return (
            <Tutorial
            key = {item.id}
            {...item}
            />
        )
    })

       
return (
    
     <><div
        style={{
            display: 'flex',
            justifyContent: 'Center',
            alignItems: 'Center',
            marginTop: '200px',
            padding: '25px 20px',
            /*border: '1px solid blac'*/ 
        }}
    >
        <h1>Oleacă profesor</h1>
    </div><div style={{
        display: 'flex',
        justifyContent: 'Center',
        alignItems: 'Center',
        padding: '20px 20px',
        /*border: '1px solid black'*/
    }}
    >
            <h2>Ce-i asta?</h2>
        </div><p style={{
            display: 'flex',
            justifyContent: 'Center',
            alignItems: 'Center',
            padding: '25px 20px',
            /*border: '1px solid black'*/
        }}>“asta” e o încercare de-a mea să explic cât de bine pot câteva din lucrurile pe care le știu (sau nu).<br />Astfel, pot să învăț și eu, și cei care citesc.
            <br /> P.S. până când aici cam bate vântul, dar cu timpul o să mai adaug lucruri interesante 😉</p>
            
            <div className="teme">
              {tutoriale}
            </div>
    </>
);
};

export default About;
