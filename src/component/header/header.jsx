import { Menu}  from "./menu";
import { Logo } from "./logo";
import { LoginButton } from "./login_button";
import { SignupButton } from "./signup_button";

export const Header = () => {
    return (
        <header className="p-3 bg-dark text-white">
            <div className="container">
                <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                    <Logo />
                    <Menu />
                    <div className="text-end">
                        <LoginButton />
                        <SignupButton />
                    </div>
                </div>
            </div>
        </header>
    );
}
