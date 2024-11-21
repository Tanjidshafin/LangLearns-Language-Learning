import React, { useContext, useState, useEffect } from 'react';
import { AppContext } from '../context/AppContext';
import { updateProfile } from 'firebase/auth';
import { toast } from 'react-toastify';

const MyProfile = () => {
  const { user, setUser } = useContext(AppContext);
  const [name, setName] = useState(user?.displayName || '');
  const [email, setEmail] = useState(user?.email || '');
  const [photoURL, setPhotoURL] = useState(user?.photoURL || '');
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (user) {
      setName(user.displayName || '');
      setEmail(user.email || '');
      setPhotoURL(user.photoURL || '');
    }
  }, [user]);

  const handleUpdateProfile = async () => {
    if (!user) return;
    setLoading(true);

    try {
      await updateProfile(user, {
        displayName: name,
        photoURL,
      });

      const updatedUser = {
        ...user,
        displayName: name,
        photoURL,
      };
      setUser(updatedUser);

      toast.success("Profile Updated")
    } catch (error) {
      console.error('Error updating profile:', error);
     toast.warning("Failed To Update")
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8'>
      <h2 className='text-2xl font-bold mb-6'>Welcome, {user?.displayName}</h2>
      <div className='flex flex-col md:flex-row'>
        <div className='basis-1/2'>
          <img
            className='h-full object-cover rounded-t-xl md:rounded-l-xl'
            src='https://blog.duolingo.com/content/images/2024/06/cover_Understanding-culture-is-key-to-language-learning.png'
            alt=''
          />
        </div>
        <div className='flex rounded-b-xl md:rounded-r-xl basis-1/2 border-2 py-20 w-full md:w-[30rem] flex-col items-center space-y-6'>
          <div>
            <img
              src={
                photoURL ||
                'https://www.shutterstock.com/image-vector/default-avatar-profile-icon-vector-600nw-1725655669.jpg'
              }
              alt=''
              className='w-24 h-24 rounded-full object-cover border'
            />
            {isEditing && (
              <input
                type='text'
                placeholder='Image URL'
                className='mt-2 border rounded pl-2 py-1 w-full'
                value={photoURL}
                onChange={(e) => setPhotoURL(e.target.value)}
              />
            )}
          </div>

          <div>
            <label className='block font-medium mb-1'>Name</label>
            {isEditing ? (
              <input
                type='text'
                className='border rounded pl-2 py-1 w-full'
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            ) : (
              <p className='text-gray-700 w-[14.5rem]'>{name || 'N/A'}</p>
            )}
          </div>

          <div>
            <label className='block font-medium mb-1'>Email</label>
            <p className='text-gray-700 w-[14.5rem]'>{email || 'N/A'}</p>
          </div>

          <div className='flex space-x-4'>
            {isEditing ? (
              <>
                <button
                  onClick={handleUpdateProfile}
                  disabled={loading}
                  className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600'>
                  {loading ? 'Saving...' : 'Save'}
                </button>
                <button
                  onClick={() => setIsEditing(false)}
                  className='bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600'>
                  Cancel
                </button>
              </>
            ) : (
              <button
                onClick={() => setIsEditing(true)}
                className='bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600'>
                Edit Profile
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
