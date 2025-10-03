"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();
  const router = useRouter();

  const [showPassword, setShowPassword] = useState(false);

  const userLogin = async (data) => {
    const { email, password } = data;

    const result = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    if (!result.error) {
      router.push("/dashboard");
      toast.success("Login Successful");
    } else {
      toast.error("Invalid credentials");
    }
  };

  return (
    <div className="w-full min-h-screen bg-[#f3f4f6] text-white50">
      <form
        onSubmit={handleSubmit(userLogin)}
        className="w-80 sm:w-[35rem] p-3 sm:p-6 md:p-10 flex flex-col gap-3 m-auto items-start rounded-lg border border-gray-200 bg-white"
      >
        <div className="w-full mx-auto text-center">
          <h2 className="text-xl md:text-3xl font-semibold">
            Login to Your Account
          </h2>
          <p className="text-sm text-offWhite50 mt-3">
            Enter your detail below
          </p>
        </div>

        {/* email */}
        <div className="w-full">
          <p>Email</p>
          <input
            placeholder="admin@example.com"
            className="border border-gray-200 rounded w-full p-2 mt-1 outline-primary placeholder:text-gray-400/80"
            {...register("email", {
              minLength: {
                value: 9,
                message: "enter a valid email.",
              },
            })}
            type="email"
            required
          />
          {errors.email && (
            <p className="text-red-400 text-xs mt-2">{errors.email.message}</p>
          )}
        </div>

        {/* password */}
        <div className="w-full">
          <p>Password</p>
          <div className="relative">
            <input
              placeholder="admin123"
              className="border border-gray-200 rounded w-full p-2 mt-1 outline-primary placeholder:text-gray-400/80"
              {...register("password", {
                minLength: {
                  value: 2,
                  message: "valid pass.",
                },
              })}
              type={showPassword ? "text" : "password"}
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="p-2 absolute top-2 right-1 text-gray-400 cursor-pointer"
            >
              {showPassword ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 640 640"
                >
                  <path
                    d="M73 39.1C63.6 29.7 48.4 29.7 39.1 39.1C29.8 48.5 29.7 63.7 39 73.1L567 601.1C576.4 610.5 591.6 610.5 600.9 601.1C610.2 591.7 610.3 576.5 600.9 567.2L504.5 470.8C507.2 468.4 509.9 466 512.5 463.6C559.3 420.1 590.6 368.2 605.5 332.5C608.8 324.6 608.8 315.8 605.5 307.9C590.6 272.2 559.3 220.2 512.5 176.8C465.4 133.1 400.7 96.2 319.9 96.2C263.1 96.2 214.3 114.4 173.9 140.4L73 39.1zM208.9 175.1C241 156.2 278.1 144 320 144C385.2 144 438.8 173.6 479.9 211.7C518.4 247.4 545 290 558.5 320C544.9 350 518.3 392.5 479.9 428.3C476.8 431.1 473.7 433.9 470.5 436.7L425.8 392C439.8 371.5 448 346.7 448 320C448 249.3 390.7 192 320 192C293.3 192 268.5 200.2 248 214.2L208.9 175.1zM390.9 357.1L282.9 249.1C294 243.3 306.6 240 320 240C364.2 240 400 275.8 400 320C400 333.4 396.7 346 390.9 357.1zM135.4 237.2L101.4 203.2C68.8 240 46.4 279 34.5 307.7C31.2 315.6 31.2 324.4 34.5 332.3C49.4 368 80.7 420 127.5 463.4C174.6 507.1 239.3 544 320.1 544C357.4 544 391.3 536.1 421.6 523.4L384.2 486C364.2 492.4 342.8 496 320 496C254.8 496 201.2 466.4 160.1 428.3C121.6 392.6 95 350 81.5 320C91.9 296.9 110.1 266.4 135.5 237.2z"
                    fill="#343C54"
                  />
                </svg>
              ) : (
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 25 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  transform="rotate(0 0 0)"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12.0234 7.625C9.60719 7.625 7.64844 9.58375 7.64844 12C7.64844 14.4162 9.60719 16.375 12.0234 16.375C14.4397 16.375 16.3984 14.4162 16.3984 12C16.3984 9.58375 14.4397 7.625 12.0234 7.625ZM9.14844 12C9.14844 10.4122 10.4356 9.125 12.0234 9.125C13.6113 9.125 14.8984 10.4122 14.8984 12C14.8984 13.5878 13.6113 14.875 12.0234 14.875C10.4356 14.875 9.14844 13.5878 9.14844 12Z"
                    fill="#343C54"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12.0234 4.5C7.71145 4.5 3.99772 7.05632 2.30101 10.7351C1.93091 11.5375 1.93091 12.4627 2.30101 13.2652C3.99772 16.9439 7.71145 19.5002 12.0234 19.5002C16.3353 19.5002 20.049 16.9439 21.7458 13.2652C22.1159 12.4627 22.1159 11.5375 21.7458 10.7351C20.049 7.05633 16.3353 4.5 12.0234 4.5ZM3.66311 11.3633C5.12472 8.19429 8.32017 6 12.0234 6C15.7266 6 18.922 8.19429 20.3836 11.3633C20.5699 11.7671 20.5699 12.2331 20.3836 12.6369C18.922 15.8059 15.7266 18.0002 12.0234 18.0002C8.32017 18.0002 5.12472 15.8059 3.66311 12.6369C3.47688 12.2331 3.47688 11.7671 3.66311 11.3633Z"
                    fill="#343C54"
                  />
                </svg>
              )}
            </button>
          </div>
          {errors.password && (
            <p className="text-red-400 text-xs mt-2">
              {errors.password.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-3 px-6 mt-5 font-semibold text-sm text-white bg-[#1f2937] rounded-lg ease-out duration-200 hover:bg-primary disabled:bg-primary/70"
        >
          {isSubmitting ? "Logging in..." : "Log in"}
        </button>
      </form>
    </div>
  );
};

export default Register;
