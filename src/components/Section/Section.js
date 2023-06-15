import React, { useState, useContext,useRef ,useEffect } from 'react'
import { Edit2, Menu } from 'react-feather'
import Aboutsvg from './about.svg';
import "./Section.css"
import Sectioncontext from '../../context/sectioncontext';
import Description from '../decription/Description';
import Toggle from '../togglebutton/Toggle';
import { Draggable } from 'react-beautiful-dnd';
function Section(props) {
	const { section, index } = props;

	const sectioncontext = useContext(Sectioncontext);
	const { saveedit, editingsection, seteditingsection } = sectioncontext;

	const [showdescription, setshowdecription] = useState(false);
	const [title, setTitle] = useState(section.heading)

	const [edit, setedit] = useState(true);
	const toggleedit = () => {
		if (edit === true) {
			setedit(false);
			seteditingsection(true);
		}
		else {
			setedit(true);
			saveedit(index, title);
			seteditingsection(false)
		}
	}

	const textareaRef = useRef(null);
	useEffect(() => {
		if (textareaRef.current) {
		  textareaRef.current.style.height = '0'; // Reset the height to auto
		  textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`; // Set the height to the scrollHeight
		}
	  }, [title]);

	const onChange = (e) => {
		setTitle(e.target.value);
	}
	return (
		<Draggable draggableId={`draggable-${section.id}`} index={index}>
			{(provided) => (
				<div
					ref={provided.innerRef}
					{...provided.draggableProps}
				>
					<button className={`Section ${editingsection && edit ? "grey" : ""}`}>
						<div className="drag" {...provided.dragHandleProps} ><Menu /></div>
						<div className="description" onMouseOver={() => setshowdecription(true)} onMouseOut={() => setshowdecription(false)}>
							<img src={Aboutsvg} alt="About svg" height={"25px"} style={{ zIndex: "2" }} />
							{showdescription && <Description description={section.description} />}
						</div>
						<div className="heading">
							<textarea wrap='soft' type="text" className={`${edit ? "noborder" : ""} title`}  disabled={edit}  value={title}  onChange={onChange} ref={textareaRef} ></textarea>
						</div>
						<div className="edit" >
							{edit ? <Edit2 onClick={() => { if (!editingsection) { toggleedit() } }} /> : <input type="button" value="Save" onClick={() => toggleedit()}  />}
						</div>

						<div className="toggle"> <Toggle checked={section.checked} index={index} /> </div>
					</button>
					<hr />
				</div>
			)}
		</Draggable>




	)
}

export default Section
