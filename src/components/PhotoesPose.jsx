import './PhotoesPose.css';

function PhotoesPose(props) {
    const { flowers, onBgClick } = props
    return (
        <div className="phoesto-pose">
            <div className="photoes-post-bg" onClick={onBgClick}></div>
            <div className="photoes-post-content">
                <img src={flowers.flowUrl} />
                <h4>{flowers.title}</h4>
            </div>
        </div>
    )
}
export default PhotoesPose