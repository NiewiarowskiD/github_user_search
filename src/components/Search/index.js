const Search = ({ updateUserData }) => {
    const handleSubmit = async (event) => {
        event.preventDefault();

        const formData = new FormData(event.target);
        const userName = formData.get('username');

        if (userName) {
            const profile = await fetch(`https://api.github.com/users/${userName}`);
            const profileData = await profile.json();

            updateUserData(profileData);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="username" />
            <button type="submit">SEARCH</button>
        </form>
    )
}

export  default Search;