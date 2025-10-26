import React, { useContext, useState } from 'react';
import MyContainer from '../Component/MyContainer';
import { AuthContext } from '../Provider/AuthProvider';
import { updateProfile } from 'firebase/auth';
import { toast } from 'react-toastify';
import NavImg from '../assets/user.png'
import { useLocation } from 'react-router';

const Profile = () => {

    const { user, setUser } = useContext(AuthContext);
    const [name, setName] = useState(user?.displayName || '');
    const [photoURL, setPhotoURL] = useState(user?.photoURL || '');
    const [isEditing, setIsEditing] = useState(false);

    const location = useLocation()
    console.log(location);


    const handleUpdateProfile = (e) => {
        e.preventDefault();

        updateProfile(user, {
            displayName: name,
            photoURL: photoURL,
        })
            .then(() => {
                setUser({ ...user, displayName: name, photoURL: photoURL });
                toast.success('Profile updated successfully!');
                setIsEditing(false);
            })
            .catch((error) => {
                console.error('Profile update error:', error);
                toast.error('Failed to update profile. Try again.');
            });
    };
    return (
        <MyContainer>
            <div className="flex flex-col items-center justify-center py-12 px-4">
                <div className="card w-full max-w-md bg-base-200 shadow-lg p-6 rounded-2xl">
                    <div className="flex flex-col items-center space-y-4">
                        {/* Profile Image */}
                        <img
                            src={user?.photoURL || NavImg}
                            alt="User Avatar"
                            className="w-24 h-24 rounded-full border-4 border-primary object-cover"
                        />

                        {/* Display Info */}
                        {!isEditing ? (
                            <>
                                <h2 className="text-2xl font-semibold text-center">{user?.displayName || 'No Name'}</h2>
                                <p className="text-gray-500 text-sm">{user?.email}</p>

                                <button
                                    onClick={() => setIsEditing(true)}
                                    className="btn btn-primary mt-4"
                                >
                                    Update Profile
                                </button>
                            </>
                        ) : (
                            <>
                                <form onSubmit={handleUpdateProfile} className="w-full space-y-3">
                                    <label className="label">Name</label>
                                    <input
                                        type="text"
                                        className="input input-bordered w-full"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        required
                                    />

                                    <label className="label">Photo URL</label>
                                    <input
                                        type="text"
                                        className="input input-bordered w-full"
                                        value={photoURL}
                                        onChange={(e) => setPhotoURL(e.target.value)}
                                    />

                                    <div className="flex gap-3 mt-4">
                                        <button type="submit" className="btn btn-success flex-1">
                                            Save Changes
                                        </button>
                                        <button
                                            type="button"
                                            onClick={() => setIsEditing(false)}
                                            className="btn btn-outline flex-1"
                                        >
                                            Cancel
                                        </button>
                                    </div>
                                </form>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </MyContainer>
    );
};

export default Profile;