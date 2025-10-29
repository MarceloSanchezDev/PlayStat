const SectionForm = ({ children }) => {
  return (
    <section className="flex flex-col items-center text-center mt-16 pt-8 border rounded-2xl bg-white shadow border-gray-100 sectionAnimated">
      {children}
    </section>
  );
};

export default SectionForm;
