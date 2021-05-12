export const LinkContent = () => {
    return (
        <div className="tab-content" id="nav-tabContent">
            <div className="tab-pane fade show active p-2" id="apktool" role="tabpanel">
                This is some placeholder content the Contact tab's associated content. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling. You can use it with tabs, pills, and any other .nav-powered navigation.
            </div>

            <div className="tab-pane fade" id="jadx" role="tabpanel">
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">An item</li>
                    <li className="list-group-item">A second item</li>
                    <li className="list-group-item">A third item</li>
                    <li className="list-group-item">A fourth item</li>
                    <li className="list-group-item">And a fifth one</li>
                </ul>
            </div>
        </div>
    );
}
