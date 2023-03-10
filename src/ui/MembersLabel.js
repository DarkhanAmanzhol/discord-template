const MembersLabel = ({ label }) => {
  return (
    <div className='text-grey text-xs mt-5 ml-2'>
      <span>{label?.toUpperCase() || ""}</span>
    </div>
  );
};

export default MembersLabel;
