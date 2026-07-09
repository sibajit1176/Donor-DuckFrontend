import LoginIllustration from "../../auth/LoginIllustration";
import RegisterForm from "../../auth/RegisterForm";

const Register = () => {
    return (
        <section className="bg-gray-50 h-[calc(100vh-80px)] flex items-center">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center px-6">

                <LoginIllustration />

                <RegisterForm />

            </div>
        </section>
    );
};

export default Register;