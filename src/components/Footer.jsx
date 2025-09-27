import React from "react";

const Footer = () => {
  return (
    <section className="w-full py-8 bg-black text-gray-300 flex flex-col items-center justify-center gap-4 border-t border-white/10 backdrop-blur-md">
      <h2 className="text-2xl font-bold text-white tracking-wide">
        Sushant<span className="text-green-500">.Dev</span>
      </h2>

      <span className="text-center text-sm leading-relaxed">
        <p>
          © {new Date().getFullYear()}{" "}
          <span className="font-semibold">Sushant Nachanekar</span>. All rights
          reserved.
        </p>
        <p className="text-gray-400">Crafted with passion and precision 🚀</p>
      </span>

      {/* Optional social icons */}
    </section>
  );
};

export default Footer;
