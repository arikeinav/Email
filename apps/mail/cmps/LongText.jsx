export function LongText ({text,subject}) {
    const textToShow =(text.length <= 40)? text : text.substr(0, 40).trim() + '...';
        
        return(
            <div className="mail-budy-prev-txt">
            <p >{subject+'-'}
                  
            </p>
            <p>{textToShow}</p>
            </div>
        )
      
}