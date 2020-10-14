
export class Modal extends React.Component{

    render() {
        const { children } = this.props
    return(
        
            <div className={ `modal-wrapper ${(this.props.show) ? '' : 'hide'}` }  >
                <div className="modal-content" onClick={ (ev) => ev.stopPropagation() }>
                   
                       {children}
                </div>
            </div >
        )
    
}
    }                      