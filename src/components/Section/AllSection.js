import React, { useContext } from 'react';
import Section from './Section';
import Sectioncontext from '../../context/sectioncontext';
import './allsection.css';

import { DragDropContext, Droppable } from 'react-beautiful-dnd';

function AllSection() {
    const sectioncontext = useContext(Sectioncontext);
    const { sections,ondragend} = sectioncontext;


    return (
        <div className="sections">
            <DragDropContext
                onDragEnd={(params) => ondragend(params)}
            >

                <Droppable droppableId="droppable-1" type="PERSON">
                    {(provided) => (
                        <div
                            ref={provided.innerRef}
                            {...provided.droppableProps}
                        >
                            {sections.map((element, index) => (
                                <div key={element.id}>
                                    <Section section={element} index={index} />
                                </div>
                            ))}
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>

            </DragDropContext>
        </div>
    )
}

export default AllSection;
