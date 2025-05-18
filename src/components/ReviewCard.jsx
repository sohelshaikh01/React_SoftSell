
const ReviewCard = ({
    name = "Reviewer Name",
    role = "Reviewer Role",
    company = "Company Name",
    review = "This is review",
    className="",
}) => {
  return (
    <div className="flex flex-col items-center flex-wrap  md:p-6 border border-gray-500 w-full bg-white dark:bg-[#1E1E1E] text-black dark:text-white rounded-xl shadow-md dark:shadow-lg p-6 hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
      
        <p className="text-lg mb-1"> {`"${review}"`}</p>
        <h3 className="text-xl mb-[2px] font-semibold"> {name} </h3>
        <p className="text-base "> {role} - {company}</p>
    </div>
  )
}

export default ReviewCard;
