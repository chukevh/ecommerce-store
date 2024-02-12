import React from "react";
import { Outlet } from "react-router-dom";

export default function UserProfile() {
    return (
        <div>
            <h1>User profile goes here</h1>
            <Outlet />
        </div>
    )
}