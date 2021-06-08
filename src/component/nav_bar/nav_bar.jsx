import Header from "./header/header";
import SubHeader from "./subheader/subheader";

export const NavBar = () => {
    return (
        <div className="sticky-top">
            <Header />
            <SubHeader />
        </div>
    );
};
