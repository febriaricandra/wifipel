import Api from "@/utils/Api";

class UserService
{
    static async getUserList() {
        const response = await Api.get("/users");
        return response.data;
    }
}

export default UserService;