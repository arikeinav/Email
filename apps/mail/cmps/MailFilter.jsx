export function MailFilter({filterBy,onSetFilter}) {
    return <section className="mail-filter">
      
  
<span className="fas fa-search"></span>
        <input type="text" className="search-input" placeholder="Serch email" onChange={(ev)=>{
            filterBy=ev.target.value
            onSetFilter(filterBy)
        }}/>
    </section>
}