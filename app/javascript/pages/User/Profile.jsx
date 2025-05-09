import { useState } from 'react';
import Header from "../components/Header";
import ProfileHero from './components/ProfileHero';
import Wishlist from "./Wishlist";
import Friends from "./Friends";
import Settings from "./Settings";

function Profile() {
  const [activeTab, setActiveTab] = useState('wishlist');

  const handleTabClick = (tabName, e) => {
    e.preventDefault(); 
    setActiveTab(tabName);
  };

  return (
    <>
      <Header />
      <ProfileHero />
      <div className="container mx-auto px-4">
        <div className="flex justify-center my-4">
          <div className="w-full max-w-md">
            <div role="tablist" className="tabs tabs-bordered flex justify-center">
              <button 
                className={`tab ${activeTab === 'wishlist' ? 'tab-active' : ''}`}
                role="tab"
                type="button"
                onClick={(e) => handleTabClick('wishlist', e)}
              >
                Wishlists
              </button>
              <button 
                className={`tab ${activeTab === 'friends' ? 'tab-active' : ''}`}
                role="tab"
                type="button"
                onClick={(e) => handleTabClick('friends', e)}
              >
                Friends
              </button>
              <button 
                className={`tab ${activeTab === 'settings' ? 'tab-active' : ''}`}
                role="tab"
                type="button"
                onClick={(e) => handleTabClick('settings', e)}
              >
                Settings
              </button>
            </div>
          </div>
        </div>
        <div className="divider" />
        <div className="border rounded-lg p-5 mt-4 min-h-56 bg-base-100">
          {activeTab === 'wishlist' && (
            <Wishlist />
          )}

          {activeTab === 'friends' && (
            <Friends />
          )}

          {activeTab === 'settings' && (
            <Settings />
          )}
        </div>
      </div>
    </>
  );
}

export default Profile;