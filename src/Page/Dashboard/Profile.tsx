import { useAppSelector } from "../../redux/hook";

const Profile = () => {
  const { profile: userData } = useAppSelector((state) => state.user);

  return (
    <div className="bg-white max-w-screen-md mx-auto p-6 rounded-md shadow-lg">
      <img
        src={userData.profileImage}
        alt="Profile Image"
        className="w-32 h-32 mx-auto rounded-full mb-4"
      />
      <h2 className="text-2xl font-semibold text-center mb-4">
        {userData.name.firstName} {userData.name.middleName}{" "}
        {userData.name.lastName}
      </h2>
      <p className="text-lg text-center mb-4">{userData.email}</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        <div className="bg-gray-200 p-4 rounded-md">
          <p>ID: {userData.id}</p>
          <p>Gender: {userData.gender}</p>
          <p>Date of Birth: {userData.dateOfBirth}</p>
          <p>Blood Group: {userData.bloodGroup}</p>
        </div>
        <div className="bg-gray-200 p-4 rounded-md">
          <p>Contact No: {userData.contactNo}</p>
          <p>Emergency Contact No: {userData.emergencyContactNo}</p>
          <p>Address: {userData.address}</p>
        </div>
      </div>
      <p className="text-sm text-gray-500 text-center">
        Created at: {userData.createdAt}
      </p>
    </div>
  );
};

export default Profile;
