import React, {useState, useEffect} from 'react'
import "../styles/Team.css"
import Member from "./Member"




const Team = ()=> {
    const [members, setMembers] = useState([])

    useEffect(()=>{
       fetch('https://randomuser.me/api/?results=8')
        .then(res=>res.json())
        .then(data=>{ 
            setMembers(data.results)})
    },[])

    return (
        <div className="team section">
            <h2>About the team</h2>
            <p>We are experts in what we do, let us help you.</p>
            <div className="d-flex team__members">

            {members.map((member)=>
                <Member key={member.cell} name={member.name.first} img={member.picture.large}/>
            )}
            </div>
        </div>
    )

}

export default Team