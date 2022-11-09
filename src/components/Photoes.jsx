import './Photoes.css'

function Photoes(props) {
    const { title, onFlowClick } = props
    return (
        <div className='app-grid-item'>
            <img src={title.flowUrl} onClick={()=>{onFlowClick(title)}}/>
            <h4>{title.title}</h4>
        </div>
    )
}
export default Photoes