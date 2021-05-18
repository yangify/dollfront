export const LinkNav = ({ tools }) => {

    const dormant = "nav-link";
    const active = dormant + " active";

    return (
        <nav>
            <div className="nav nav-pills nav-fill" role="tablist">
                {
                    tools.map((tool, index) => (
                        <button key={index} className={ index === 0 ? active : dormant } data-bs-toggle="tab" data-bs-target={ "#" + tool } >
                            { tool.charAt(0).toUpperCase() + tool.slice(1) }
                        </button>
                    ))
                }
            </div>
        </nav>
    );
}
