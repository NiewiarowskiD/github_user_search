import React from "@types/react";

const UserProfile = ({ userData }) => (
    <div>
        <img src={userData.avatar_url} alt={userData.login} />

        <h2>{userData.login}</h2>
        <h3>{userData.name}</h3>
        <h4>{userData.location}</h4>
    </div>
);

export  default UserProfile;