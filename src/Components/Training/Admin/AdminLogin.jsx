import React from "react";

function AdminLogin() {
    return (
        <div>
            <h1>Admin Login</h1>
            <form>
                <label>Username:</label>
                <input type="text" name="username" required />
                <br />
                <label>Password:</label>
                <input type="password" name="password" required />
                <br />
                <input type="submit" value="Login" />
            </form>
        </div>
    );
}

export default AdminLogin