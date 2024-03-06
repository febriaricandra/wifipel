import Api from "@/utils/Api";

class OTPService {
    static async sendOTP(data) {
        const response = await Api.post("/login", data);
        localStorage.setItem("token", response.data.token);
        return response.data;
    }
}

export default OTPService;