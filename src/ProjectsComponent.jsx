import './ProjectsComponent.css';

const ProjectsComponent = ({title, desc, tech, img}) => {
    return (
        <div className='projectComponent'>
            {/* <h1>{title}</h1>
            <p>{desc}</p>
            <img src={img} width='200px'/>
            <p>Technologies Used: {tech}</p> */}

            
            <div className="flip-card">
                <div className="flip-card-inner">
                    <div className="flip-card-front">
                        <h1>{title}</h1>
                        <img className="pcimg" src={img} width="200px"/>
                    </div>
                    <div className="flip-card-back">
                        <p>{desc}</p>
                        <p>Technologies Used: {tech}</p>
                    </div>
                </div>
            </div> 

        </div>

    )
}

export default ProjectsComponent;