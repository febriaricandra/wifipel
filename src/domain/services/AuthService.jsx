import Api from "@/utils/Api";

class AuthServices {
    static async login(data) {
        const response = await Api.post("/register", data);
        return response.data;
    }
}

export default AuthServices;