import './ImageComponentStyles.css';

const ImageComponent = ({url, className, title, desc}) => {
    return (
        <div className={`image-container ${className || ''}`}>
            <div className="htext">
                <h1>{title}</h1>
                <p dangerouslySetInnerHTML={{__html: desc}}></p>
            </div>
            <img src={url} height="300px"/>
        </div>
    );
}

export default ImageComponent;