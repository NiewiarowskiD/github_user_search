import React, {useEffect, useState} from "react";

const USER_DATA_STORAGE_KEY = 'data:userData';

const collectedUserData = localStorage.getItem(USER_DATA_STORAGE_KEY);

const collectUserData = (userData) => {
    if (collectedUserData?.id !== userData.id) {
        localStorage.setItem(USER_DATA_STORAGE_KEY, JSON.stringify(userData));
    }
};

const getCollectedUserData = () => {
    if (!collectedUserData) return null;

    return JSON.parse(collectedUserData);
}

const UserProfile = () => {
    const [userData, setUserData] = useState(null);

    const handleSubmit = async (event) => {
        event.preventDefault();

        const formData = new FormData(event.target);
        const userName = formData.get('username');

        if (userName) {
            const profile = await fetch(`https://api.github.com/users/${userName}`);
            const profileData = await profile.json();

            collectUserData(profileData);
            setUserData(profileData);
        }
    };

    useEffect(() => {
        const userDataFromLocalStorage = getCollectedUserData();

        if (userDataFromLocalStorage) {
            setUserData(userDataFromLocalStorage);
        }
    }, []);

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="username" />
                <button type="submit">SEARCH</button>
            </form>

            {userData && (
                <div>
                    <img src={userData.avatar_url} alt={userData.login} />

                    <h2>{userData.login}</h2>
                    <h3>{userData.name}</h3>
                    <h4>{userData.location}</h4>
                </div>
            )}
        </div>
    )
}

export  default UserProfile;