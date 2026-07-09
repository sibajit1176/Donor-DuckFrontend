import LoginForm from "../../auth/LoginForm";
import LoginIllustration from "../../auth/LoginIllustration";
import Navbar from "../../components/layout/Navbar";

const Login = () => {
    return (
        <>
            <section className="bg-gray-50 h-[calc(100vh-80px)]  flex items-center">

                <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center px-6">

                    <LoginIllustration />
                    <LoginForm />
                </div>

            </section>
        </>
    );
};

export default Login;