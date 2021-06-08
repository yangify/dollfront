import { Menu}  from "./menu";
import { Logo } from "./logo";
import { LoginButton } from "./login_button";
import { SignupButton } from "./signup_button";

export const Header = () => {
    return (
        <>
            <nav className="px-4 py-3 bg-dark text-white">
                <div className="container-fluid d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                    <Logo />
                    <Menu />
                    <div className="text-end">
                        <LoginButton />
                        <SignupButton />
                    </div>
                </div>
            </nav>
            <nav className="px-5 py-2 bg-light text-dark rounded shadow">
                <div className="container-fluid d-flex justify-content-between text-center">
                    <div className="h4 text-dark mt-2">Test</div>
                    <button type="button" className="px-3 btn btn-warning shadow-none">Add</button>
                </div>
            </nav>
        </>
    );
}
