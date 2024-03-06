import Api from "@/utils/Api";

class PackageService {
    static async getPackageList() {
        const response = await Api.get("/master/packages");
        return response.data;
    }
}

export default PackageService;