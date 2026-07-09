import loginImage from "../assets/login-illustration.png";

const LoginIllustration = () => {
    return (
        <div>

            <img
                src={loginImage}
                alt=""
                className="w-full"
            />

            <h2 className="text-5xl font-bold mt-10">

                Small Contribution

                <span className="text-green-600 block">

                    Big Change

                </span>

            </h2>

            <p className="text-gray-500 mt-5">

                Together we can build a better tomorrow.

            </p>

        </div>
    );
};

export default LoginIllustration;