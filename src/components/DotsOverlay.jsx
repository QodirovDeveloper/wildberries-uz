const DotsOverlay = () => {
  return (
    <div className="lg:mt-[59px]"
      style={{
        position: "fixed",
        top: "110px",
        left: 0,
        width: "100%",
        height: "40px",
        backgroundImage:
          "radial-gradient(rgba(0,0,0,0.8) 1.1px, transparent 1.1px)",
        backgroundSize: "4px 4px",
        backgroundRepeat: "repeat",
        WebkitMaskImage:
          "linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0))",
        maskImage:
          "linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0))",
        backdropFilter: "blur(5px)",
        WebkitBackdropFilter: "blur(5px)",
        pointerEvents: "none",
        opacity: 1,
        zIndex: 999999,
      }}
    ></div>
  );
};

export default DotsOverlay;
