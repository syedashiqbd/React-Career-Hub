/* eslint-disable react/prop-types */
const SectionTitle = ({ sectionTitle, titleDescription }) => {
  return (
    <div className="w-10/12 md:w-9/12 mx-auto mt-28">
      <h1 className="text-4xl text-center font-bold">{sectionTitle}</h1>
      <p className="text-center">{titleDescription}</p>
    </div>
  );
};

export default SectionTitle;
