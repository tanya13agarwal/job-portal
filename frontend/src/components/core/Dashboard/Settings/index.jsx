import ChangeProfilePicture from "./ChangeProfilePicture"
import DeleteAccount from "./DeleteAccount"
import EditProfessional from "./EditProfessional"
import EditProfile from "./EditProfile"
import UpdatePassword from "./UpdatePassword"

export default function Settings() {
  return (
    <>
      <h1 className="mb-14 text-3xl text-black font-medium ">
        Edit Profile
      </h1>
      {/* Change Profile Picture */}
      <ChangeProfilePicture />
      {/* Profile */}
      <EditProfile />
      {/* Professional */}
      <EditProfessional/>
      {/* Password */}
      <UpdatePassword />
      {/* Delete Account */}
      <DeleteAccount />
    </>
  )
}