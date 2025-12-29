import emailjs from "@emailjs/browser";
import React, { useState } from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

const Contact = () => {
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const validate = (data) => {
    const e = {};
    if (!data.name || data.name.trim().length <= 2)
      e.name = "Please enter your name";
    if (!data.email) e.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email))
      e.email = "Invalid email address";
    if (data.phone && !/^\d{5,15}$/.test(data.phone))
      e.phone = "Invalid phone number";
    return e;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      phone: e.target.phone.value,
      message: e.target.message.value,
    };

    const v = validate(formData);
    setErrors(v);
    if (Object.keys(v).length) return;

    setLoading(true);

    try {
      // email to parthsinghal23.cs@gmail.com
      await emailjs.send(
        "Portfolio",
        "Portfolio-notification",
        formData,
        "uvLUWEICCX5CUYrZ4"
      );

      // email to the viewer
      await emailjs.send(
        "Portfolio",
        "viewer-notification",
        formData,
        "uvLUWEICCX5CUYrZ4"
      );

      alert("Message sent ✅");
      e.target.reset();
      setErrors({});
    } catch (error) {
      console.error(error);
      alert("Failed to send message ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <hr className="w-full border-2 border-lime-400" />
      <section
        id="contact"
        className="relative min-h-screen bg-[#181818] text-white px-6 lg:px-16 py-20 overflow-hidden"
      >
        <div className="absolute top-[10%] -right-40 w-[500px] h-[500px] bg-lime-400/10 blur-[160px]" />
        <div className="absolute top-[70%] -left-40 w-[500px] h-[500px] bg-lime-400/10 blur-[160px]" />

        <div className="relative max-w-7xl mx-auto space-y-24">
          <div className="text-center space-y-6">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-normal">
              Let’s build something{" "}
              <span className="text-lime-400">meaningful</span>
            </h2>

            <p className="text-white/60 max-w-xl mx-auto text-lg">
              Have an idea, a project, or just want to connect? I’m always open
              to meaningful conversations.
            </p>

            <div className="flex justify-center gap-6 text-4xl pt-4">
              {[
                { Icon: IoIosMail, href: "mailto:parthsinghal23.cs@gmail.com" },
                {
                  Icon: FaLinkedin,
                  href: "https://www.linkedin.com/in/dev-parth23/",
                },
                { Icon: FaGithub, href: "https://github.com/dev-Parth23" },
                {
                  Icon: FaInstagram,
                  href: "https://www.instagram.com/pxrth_who/",
                },
                { Icon: FaWhatsapp, href: "https://wa.me/919368353165" },
              ].map(({ Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-white/60 hover:text-lime-400 transition"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>
          <div className="flex justify-center">
            <div
              className="
                w-full max-w-xl
                rounded-3xl
                bg-white/[0.08]
                backdrop-blur-2xl
                p-8 sm:p-10
                border border-white/10
                shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)]
              "
            >
              <form onSubmit={handleSubmit} className="space-y-7" noValidate>
                <FloatingInput
                  name="name"
                  label="Your Name"
                  error={errors.name}
                />
                <FloatingInput
                  name="email"
                  label="Email Address"
                  error={errors.email}
                />
                <FloatingInput
                  name="phone"
                  label="Phone Number "
                  error={errors.phone}
                />
                <div className="relative">
                  <textarea
                    name="message"
                    rows="4"
                    placeholder=" "
                    className="
                      peer
                      w-full
                      bg-transparent
                      border-b border-white/20
                      py-3
                      text-white
                      resize-none
                      outline-none
                      focus:border-lime-400
                      transition
                    "
                  />
                  <label
                    className="
                      absolute
                      left-0
                      top-3
                      text-sm
                      text-white/50
                      transition-all

                      peer-focus:-top-3
                      peer-focus:text-xs
                      peer-focus:text-lime-400

                      peer-[&:not(:placeholder-shown)]:-top-3
                      peer-[&:not(:placeholder-shown)]:text-xs
                    "
                  >
                    Your Message
                  </label>
                  {errors.message && (
                    <p className="text-xs text-red-400 mt-1">
                      {errors.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="
                    w-full
                    mt-6
                    py-3.5
                    rounded-xl
                    bg-lime-400
                    text-black
                    font-medium
                    hover:bg-lime-300
                    transition
                    disabled:opacity-50
                  "
                >
                  {loading ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

const FloatingInput = ({ name, label, error }) => (
  <div className="relative">
    <input
      name={name}
      placeholder=" "
      className="
        peer
        w-full
        bg-transparent
        border-b border-white/20
        py-3
        text-white
        outline-none
        focus:border-lime-400
        transition
      "
    />
    <label
      className="
        absolute
        left-0
        top-3
        text-sm
        text-white/50
        transition-all

        peer-focus:-top-3
        peer-focus:text-xs
        peer-focus:text-lime-400

        peer-[&:not(:placeholder-shown)]:-top-3
        peer-[&:not(:placeholder-shown)]:text-xs
      "
    >
      {label}
    </label>
    {error && <p className="text-xs text-red-400 mt-1">{error}</p>}
  </div>
);

export default Contact;