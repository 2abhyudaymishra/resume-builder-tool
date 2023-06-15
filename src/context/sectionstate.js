import { useState } from "react";
import Sectioncontext from "./sectioncontext";
    
const Sectionstate = (props) => {
    const [sections,setSections]= useState([
        {
            id:"1",
            heading: "Profile Summary",
            description: "A concise summary highlighting key skills, experiences, and career goals to give employers an overview of your professional profile.",
            checked:true
        },
        {
            id:"2",
            heading: "Academic and Cocurricular Achievements",
            description: "List of academic accomplishments, such as scholarships, awards, honors, and notable extracurricular activities, showcasing your dedication and talents beyond the classroom.",
            disabled:true,
            checked:true
        },
        {
            id:"3",
            heading: "Summer Internship Experience",
            description: "Details about relevant internships completed during summer breaks, including the companies or organizations worked for, the roles undertaken, and the skills developed.",
            disabled:true,
            checked:false
        },
        {
            id:"4",
            heading: "Work Experience",
            description: "A comprehensive overview of your professional work history, highlighting positions held, job responsibilities, achievements, and notable contributions made in each role.",
            checked:true
        },
        {
            id:"5",
            heading: "Projects",
            description: "Description of notable projects undertaken, including personal, academic, or professional projects, showcasing your problem-solving skills, creativity, and ability to deliver results.",
            checked:false
        },
        {
            id:"6",
            heading: "Certifications",
            description: "A list of certifications earned, such as industry-specific certifications, online courses, or training programs, demonstrating your expertise in specific areas.",
            checked:true
        },
        {
            id:"7",
            heading: "Leadership Positions",
            description: "Highlighting any leadership roles held, such as team leader, club president, or community organizer, demonstrating your ability to lead and manage others effectively.",
            checked:true
        },
        {
            id:"8",
            heading: "Extracurricular",
            description: "Details about involvement in extracurricular activities, such as sports, clubs, volunteer work, or community service, showcasing your diverse interests and well-roundedness.",
            checked:true
        },
        {
            id:"9",
            heading: "Education",
            description: "Information about your educational background, including degrees earned, educational institutions attended, relevant coursework, and academic achievements.",
            checked:true
        }

    ])

    const saveedit=(index,title)=>{
        let newsection = [...sections];
        newsection[index].title=title;
        setSections(newsection);
    }
    const handletoggle=(index)=>{
        let newsection = [...sections];
        newsection[index].checked = !newsection[index].checked ;
        setSections(newsection);
    }
    const ondragend = (params)=>{
        const di = params.destination.index
        const si = params.source.index
        const newitems  = [...sections];
        const removedsection = newitems.splice(si,1)[0];
        newitems.splice(di,0,removedsection)
        setSections(newitems);
        
    }

    const [editingsection,seteditingsection] = useState(false);

    return (
        <Sectioncontext.Provider value={{sections,saveedit,handletoggle,editingsection,seteditingsection,setSections,ondragend}} >
            {props.children}
        </Sectioncontext.Provider>
    )
}
export default Sectionstate;