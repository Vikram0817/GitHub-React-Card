import { atom, selector } from "recoil";

const url = "https://api.github.com/users/Vikram0817"
const headers = {"Authorization": "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"}

export const userData = atom({
    key: "userData",
    default: selector({
        key: "userData/default",
        get: async () => {
            const res = await fetch(url, {
                method: "GET",
                headers: headers
            })
            const data = await res.json()
            console.log(data)
            return {
                avatar: data.avatar_url,
                name: data.name,
                bio: data.bio,
                twitter: data.twitter_username,
                github: data.html_url}
        }
    })
})