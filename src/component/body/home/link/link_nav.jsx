export const LinkNav = ({ tools }) => {
    return (
        <nav>
            <div className="nav nav-pills nav-fill" role="tablist">
                {
                    tools.map((tool, index) => (
                        <button key={index} className={ 'nav-link ' + (index === 0 ? 'active' : '')}
                                data-bs-toggle="tab" data-bs-target={ "#" + tool } role="tab">
                            { tool.charAt(0).toUpperCase() + tool.slice(1) }
                        </button>
                    ))
                }
            </div>
        </nav>
    );
}
