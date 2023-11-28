import { createSlice } from "@reduxjs/toolkit";
// import { getUserDataActions } from "../actions/getUserDataActions";

export const initialState = {
    email: "",
    password: "",
    followList: [
        {
            id: 1,
            name: "레이튼",
            group: "UMC web A",
            follow: true,
        },
        {
            id: 2,
            name: "매튜",
            group: "UMC web A",
            follow: true,
        },
        {
            id: 3,
            name: "제이",
            group: "UMC web A",
            follow: true,
        }
    ],
    followerList: [
        {
            id: 1,
            name: "레이튼",
            group: "UMC web A",
            follow: false,
        },
        {
            id: 2,
            name: "매튜",
            group: "UMC web A",
            follow: false,
        },
        {
            id: 3,
            name: "제이",
            group: "UMC web A",
            follow: false,
        }
    ],
    loading: false,
}

const userSlice = createSlice({
    name: "user",
    initialState: initialState,
    reducers: {
        following(state, action) {
            const userIdToAdd = action.payload;

            state.followList = state.followList.map(user =>
                user.id === userIdToAdd ? { ...user, follow: true } : user
            );
        },
        unFollowing(state, action) {
            const userIdToRemove = action.payload;

            state.followList = state.followList.map(user =>
                user.id === userIdToRemove ? { ...user, follow: false } : user
            );
        },
        newFollowing(state, action) {
            const { id, name, group, follow } = action.payload;
            const newFollow = {
                id: id,
                name: name,
                group: group,
                follow: follow,
            }
            state.followList.push(newFollow);
        }
    },
});

export const { following, unFollowing, newFollowing } = userSlice.actions;
export default userSlice.reducer;