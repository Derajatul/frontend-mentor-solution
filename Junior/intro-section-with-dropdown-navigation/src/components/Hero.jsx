const Hero = () => {
  return (
    <picture>
      <source media='(max-width: 1024px)' srcSet='./image-hero-mobile.png' alt="hero mobile" />
      <img src='./image-hero-desktop.png' alt='hero desktop' className="h-4/5 mx-auto"/>
    </picture>
  );
};

export default Hero;
