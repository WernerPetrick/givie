import { useState } from "react";
import { useForm, usePage } from "@inertiajs/react";

function Settings() {
  const { props } = usePage();
  const { user = {} } = props;
  const [activeTab, setActiveTab] = useState("profile");
  
  const { data: profileData, setData: setProfileData, post: postProfile, processing: profileProcessing, errors: profileErrors } = useForm({
    first_name: user.first_name || "",
    last_name: user.last_name || "",
    email: user.email || ""
  });
  
  const { data: passwordData, setData: setPasswordData, post: postPassword, processing: passwordProcessing, errors: passwordErrors, reset: resetPassword } = useForm({
    current_password: "",
    password: "",
    password_confirmation: ""
  });
  
  const handleProfileSubmit = (e) => {
    e.preventDefault();
    postProfile('/user/profile', {
      onSuccess: () => {
        document.getElementById('profile_success_toast').showToast();
      }
    });
  };
  
  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    postPassword('/user/password', {
      onSuccess: () => {
        document.getElementById('password_success_toast').showToast();
        resetPassword();
      }
    });
  };
  
  return (
    <div className="settings-content max-w-4xl mx-auto px-4 py-6" role="tabpanel">
      <h2 className="text-2xl font-bold mb-6">Account Settings</h2>
    
      <div role="tablist" className="tabs tabs-boxed mb-6">
        <button 
          role="tab" 
          className={`tab ${activeTab === 'profile' ? 'tab-active' : ''}`}
          onClick={() => setActiveTab('profile')}
          type="button"
        >
          Profile Information
        </button>
        <button 
          role="tab" 
          className={`tab ${activeTab === 'password' ? 'tab-active' : ''}`}
          onClick={() => setActiveTab('password')}
          type="button"
        >
          Password
        </button>
      </div>
      
      {activeTab === 'profile' && (
        <div className="card bg-base-100 shadow-lg">
          <div className="card-body">
            <h3 className="card-title text-xl mb-4">Update Profile</h3>
            
            <form onSubmit={handleProfileSubmit}>
              <div className="form-control mb-4">
                <div className="label">
                  <span className="label-text mr-5">First Name</span>
                </div>
                <input 
                  type="text" 
                  className={`input input-bordered ${profileErrors.first_name ? 'input-error' : ''}`}
                  value={profileData.first_name}
                  onChange={e => setProfileData('first_name', e.target.value)}
                />
                {profileErrors.first_name && (
                  <div className="label">
                    <span className="label-text-alt text-error">{profileErrors.first_name}</span>
                  </div>
                )}
              </div>
              
              <div className="form-control mb-4">
                <div className="label">
                  <span className="label-text mr-5">Last Name</span>
                </div>
                <input 
                  type="text" 
                  className={`input input-bordered ${profileErrors.last_name ? 'input-error' : ''}`}
                  value={profileData.last_name}
                  onChange={e => setProfileData('last_name', e.target.value)}
                />
                {profileErrors.last_name && (
                  <div className="label">
                    <span className="label-text-alt text-error">{profileErrors.last_name}</span>
                  </div>
                )}
              </div>
              
              <div className="form-control mb-6">
                <div className="label">
                  <span className="label-text mr-5">Email Address</span>
                </div>
                <input 
                  type="email" 
                  className={`input input-bordered ${profileErrors.email ? 'input-error' : ''}`}
                  value={profileData.email}
                  onChange={e => setProfileData('email', e.target.value)}
                />
                {profileErrors.email && (
                  <div className="label">
                    <span className="label-text-alt text-error">{profileErrors.email}</span>
                  </div>
                )}
              </div>
              
              <div className="card-actions justify-end">
                <button 
                  type="submit" 
                  className="btn btn-primary"
                  disabled={profileProcessing}
                >
                  {profileProcessing ? (
                    <>
                      <span className="loading loading-spinner loading-xs"/>
                      Saving...
                    </>
                  ) : (
                    'Save Changes'
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      {activeTab === 'password' && (
        <div className="card bg-base-100 shadow-lg">
          <div className="card-body">
            <h3 className="card-title text-xl mb-4">Change Password</h3>
            
            <form onSubmit={handlePasswordSubmit}>
              <div className="form-control mb-4">
                <div className="label">
                  <span className="label-text mr-5">Current Password</span>
                </div>
                <input 
                  type="password" 
                  className={`input input-bordered ${passwordErrors.current_password ? 'input-error' : ''}`}
                  value={passwordData.current_password}
                  onChange={e => setPasswordData('current_password', e.target.value)}
                />
                {passwordErrors.current_password && (
                  <div className="label">
                    <span className="label-text-alt text-error">{passwordErrors.current_password}</span>
                  </div>
                )}
              </div>
              
              <div className="form-control mb-4">
                <div className="label">
                  <span className="label-text mr-5">New Password</span>
                </div>
                <input 
                  type="password" 
                  className={`input input-bordered ${passwordErrors.password ? 'input-error' : ''}`}
                  value={passwordData.password}
                  onChange={e => setPasswordData('password', e.target.value)}
                />
                {passwordErrors.password && (
                  <div className="label">
                    <span className="label-text-alt text-error">{passwordErrors.password}</span>
                  </div>
                )}
              </div>
              
              <div className="form-control mb-6">
                <div className="label">
                  <span className="label-text mr-5">Confirm New Password</span>
                </div>
                <input 
                  type="password" 
                  className={`input input-bordered ${passwordErrors.password_confirmation ? 'input-error' : ''}`}
                  value={passwordData.password_confirmation}
                  onChange={e => setPasswordData('password_confirmation', e.target.value)}
                />
                {passwordErrors.password_confirmation && (
                  <div className="label">
                    <span className="label-text-alt text-error">{passwordErrors.password_confirmation}</span>
                  </div>
                )}
              </div>
              
              <div className="card-actions justify-end">
                <button 
                  type="submit" 
                  className="btn btn-primary"
                  disabled={passwordProcessing}
                >
                  {passwordProcessing ? (
                    <>
                      <span className="loading loading-spinner loading-xs"/>
                      Updating...
                    </>
                  ) : (
                    'Update Password'
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      
      <div className="toast toast-end" id="profile_success_toast">
        <div className="alert alert-success">
          <span>Profile updated successfully!</span>
        </div>
      </div>
      
      <div className="toast toast-end" id="password_success_toast">
        <div className="alert alert-success">
          <span>Password changed successfully!</span>
        </div>
      </div>
    </div>
  );
}

export default Settings;