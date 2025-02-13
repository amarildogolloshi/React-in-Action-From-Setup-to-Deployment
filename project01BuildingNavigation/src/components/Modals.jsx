
const Modals = ({member, handleClose}) => {

    return(
        (
            member &&
            <dialog open>
                <article>
                    <header>
                        <button
                            aria-label="close"
                            rel="prev"
                            onClick={handleClose}
                        >
                        </button>
                    </header>
                    <hgroup>
                    <div style={{
                        display:'flex',
                        gap: '1rem'
                    }}>
                        
                        <img
                            style={{
                                width:'200px'
                            }} 
                            src={`images/${member.slug}.svg`} alt={member.name}/>
                        <hgroup>
                            <h1>{member.name}</h1>
                            <h1>{member.bio}</h1>
                        </hgroup>
                    </div>
                    </hgroup>
                </article>
            </dialog>

    )
    )
}

export default Modals;